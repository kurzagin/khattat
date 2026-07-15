import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { readFileSync, statSync } from 'fs';
import { join } from 'path';

// Using Bun's built-in process.env which automatically loads from .env and .env.local
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
const bucketName = process.env.R2_BUCKET_NAME;

if (!accountId || !accessKeyId || !secretAccessKey || !bucketName) {
  console.error("Missing required R2 credentials in .env.local");
  console.error("Please ensure CLOUDFLARE_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, and R2_BUCKET_NAME are set.");
  process.exit(1);
}

const s3 = new S3Client({
  region: 'auto',
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

async function uploadRelease() {
  try {
    // Read version from package.json
    const packageJsonPath = join(import.meta.dir, '..', 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    const version = packageJson.version;

    const exePath = join(import.meta.dir, '..', 'Khattat-Installer.exe');
    
    console.log(`Preparing to upload Khattat-Installer.exe (v${version})`);
    
    const fileStats = statSync(exePath);
    console.log(`File size: ${(fileStats.size / 1024 / 1024).toFixed(2)} MB`);

    const fileContent = readFileSync(exePath);
    
    // Upload path requested: kurzagin/khattat/release/desktop/windows/[version].exe
    const key = `kurzagin/khattat/release/desktop/windows/${version}.exe`;

    console.log(`Uploading to R2: ${bucketName}/${key}...`);

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: fileContent,
      ContentType: 'application/x-msdownload',
    });

    await s3.send(command);

    console.log(`\n✅ Successfully uploaded to R2!`);
    console.log(`Path: ${key}`);

  } catch (error) {
    console.error("❌ Upload failed:", error);
    process.exit(1);
  }
}

uploadRelease();

import { Database } from 'bun:sqlite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webDbPath = path.resolve(__dirname, '../../web/sqlite.db');
const outPath = path.resolve(__dirname, '../src/app/starter-presets.json');

type PresetRow = {
  id: string;
  rasm_id: string;
  position: string;
  cells: string;
  width: number;
  height: number;
  letter_name: string | null;
};

if (!fs.existsSync(webDbPath)) {
  if (fs.existsSync(outPath)) {
    console.warn('Web preset database not found; using the committed starter presets.');
    process.exit(0);
  }

  console.error('Neither the web preset database nor committed starter presets were found.');
  process.exit(1);
}

try {
  const db = new Database(webDbPath, { readonly: true });
  const presets = db.query('SELECT * FROM presets').all();
  
  const formatted = (presets as PresetRow[]).map((p) => ({
    id: p.id,
    rasmId: p.rasm_id,
    position: p.position,
    cells: p.cells,
    width: p.width,
    height: p.height,
    letterName: p.letter_name || null
  }));

  fs.writeFileSync(outPath, JSON.stringify(formatted, null, 2));
  console.log(`Successfully synced ${presets.length} starter presets from web database to desktop!`);
} catch (error) {
  console.error("Failed to sync presets:", error);
  process.exit(1);
}

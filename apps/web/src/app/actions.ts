"use server";

import { db } from '../db';
import { presets, settings } from '../db/schema';
import { eq } from 'drizzle-orm';

export async function getPresetsAction() {
  const data = await db.select().from(presets);
  return data.map(p => ({
    id: p.id,
    rasmId: p.rasmId,
    position: p.position as any,
    cells: JSON.parse(p.cells),
    width: p.width,
    height: p.height,
    letterName: p.letterName || undefined
  }));
}

export async function savePresetAction(presetData: any) {
  await db.insert(presets).values({
    id: presetData.id,
    rasmId: presetData.rasmId,
    position: presetData.position,
    cells: JSON.stringify(presetData.cells),
    width: presetData.width,
    height: presetData.height,
    letterName: presetData.letterName
  }).onConflictDoUpdate({
    target: presets.id,
    set: {
      rasmId: presetData.rasmId,
      position: presetData.position,
      cells: JSON.stringify(presetData.cells),
      width: presetData.width,
      height: presetData.height,
      letterName: presetData.letterName
    }
  });
}

export async function deletePresetAction(id: string) {
  await db.delete(presets).where(eq(presets.id, id));
}

export async function getSettingAction(key: string) {
  const data = await db.select().from(settings).where(eq(settings.key, key)).limit(1);
  return data.length > 0 ? data[0].value : null;
}

export async function saveSettingAction(key: string, value: string) {
  const existing = await db.select().from(settings).where(eq(settings.key, key)).limit(1);
  if (existing.length > 0) {
    await db.update(settings).set({ value }).where(eq(settings.key, key));
  } else {
    await db.insert(settings).values({ key, value });
  }
}

export async function deleteSettingAction(key: string) {
  await db.delete(settings).where(eq(settings.key, key));
}

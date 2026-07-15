"use client";

import { useEffect, useState } from 'react';
import { Khattat } from '@khattat/ui';
import Database from '@tauri-apps/plugin-sql';
import { Loader2, Minus, Square, X } from 'lucide-react';

import starterPresets from './starter-presets.json';

function TitleBar() {
  const handleMinimize = async () => {
    if (typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window) {
      const { getCurrentWindow } = await import('@tauri-apps/api/window');
      getCurrentWindow().minimize();
    }
  };

  const handleMaximize = async () => {
    if (typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window) {
      const { getCurrentWindow } = await import('@tauri-apps/api/window');
      getCurrentWindow().toggleMaximize();
    }
  };

  const handleClose = async () => {
    if (typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window) {
      const { getCurrentWindow } = await import('@tauri-apps/api/window');
      getCurrentWindow().close();
    }
  };

  return (
    <div data-tauri-drag-region className="fixed top-0 left-0 right-0 h-10 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50 flex items-center justify-between z-[100] select-none shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-3 px-4 pointer-events-none">
        <span className="text-xs font-bold tracking-widest text-zinc-300 uppercase">Khattat</span>
      </div>
      <div className="flex items-center h-full">
        <button onClick={handleMinimize} className="w-12 h-full flex items-center justify-center text-zinc-400 hover:bg-white/10 transition-colors">
          <Minus size={16} />
        </button>
        <button onClick={handleMaximize} className="w-12 h-full flex items-center justify-center text-zinc-400 hover:bg-white/10 transition-colors">
          <Square size={14} />
        </button>
        <button onClick={handleClose} className="w-12 h-full flex items-center justify-center text-zinc-400 hover:bg-red-500 hover:text-white transition-colors">
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

let dbPromise: Promise<Database> | null = null;

async function getDb() {
  if (!dbPromise) {
    dbPromise = Database.load('sqlite:khattat.db').then(async (db) => {
      await db.execute(`
        CREATE TABLE IF NOT EXISTS presets (
          id TEXT PRIMARY KEY,
          rasmId TEXT,
          position TEXT,
          cells TEXT,
          width INTEGER,
          height INTEGER,
          letterName TEXT
        )
      `);
      await db.execute(`
        CREATE TABLE IF NOT EXISTS settings (
          key TEXT PRIMARY KEY,
          value TEXT
        )
      `);
      
      // Always sync starter presets so new ones are added without overwriting user's custom presets
      for (const preset of starterPresets) {
        await db.execute(
          'INSERT OR IGNORE INTO presets (id, rasmId, position, cells, width, height, letterName) VALUES ($1, $2, $3, $4, $5, $6, $7)',
          [preset.id, preset.rasmId, preset.position, preset.cells, preset.width, preset.height, preset.letterName]
        );
      }
      
      return db;
    });
  }
  return dbPromise;
}

export default function DesktopKuficMaker() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    getDb().then(() => setIsReady(true)).catch(console.error);
  }, []);

  if (!isReady) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 bg-zinc-950 text-white">
        <img src="/logo.svg" alt="Logo" className="h-16 w-16 opacity-90 animate-pulse" />
        <Loader2 className="h-6 w-6 animate-spin text-zinc-500" />
      </div>
    );
  }

  const getPresetsAction = async () => {
    const db = await getDb();
    const result = await db.select<any[]>('SELECT * FROM presets');
    return result.map(p => ({
      ...p,
      cells: JSON.parse(p.cells)
    }));
  };

  const savePresetAction = async (presetData: any) => {
    const db = await getDb();
    await db.execute(
      'INSERT OR REPLACE INTO presets (id, rasmId, position, cells, width, height, letterName) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [
        presetData.id,
        presetData.rasmId,
        presetData.position,
        JSON.stringify(presetData.cells),
        presetData.width,
        presetData.height,
        presetData.letterName || null
      ]
    );
  };

  const deletePresetAction = async (id: string) => {
    const db = await getDb();
    await db.execute('DELETE FROM presets WHERE id = $1', [id]);
  };

  const getSettingAction = async (key: string) => {
    const db = await getDb();
    const result = await db.select<any[]>('SELECT value FROM settings WHERE key = $1 LIMIT 1', [key]);
    return result.length > 0 ? result[0].value : null;
  };

  const saveSettingAction = async (key: string, value: string) => {
    const db = await getDb();
    await db.execute('INSERT OR REPLACE INTO settings (key, value) VALUES ($1, $2)', [key, value]);
  };

  const deleteSettingAction = async (key: string) => {
    const db = await getDb();
    await db.execute('DELETE FROM settings WHERE key = $1', [key]);
  };

  const desktopSaveFileAction = async (filename: string, blob: Blob) => {
    if (typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window) {
      const { save } = await import('@tauri-apps/plugin-dialog');
      const { writeFile } = await import('@tauri-apps/plugin-fs');
      
      const ext = filename.split('.').pop() || '';
      let filterName = 'File';
      if (ext === 'png') filterName = 'PNG Image';
      else if (ext === 'svg') filterName = 'SVG Vector Image';
      else if (ext === 'khatt') filterName = 'Khattat Project';

      const filePath = await save({ 
        defaultPath: filename,
        filters: ext ? [{ name: filterName, extensions: [ext] }] : undefined
      });
      
      if (filePath) {
        const buffer = await blob.arrayBuffer();
        await writeFile(filePath, new Uint8Array(buffer));
      }
    }
  };

  return (
    <>
      <TitleBar />
      <Khattat
        getPresetsAction={getPresetsAction}
        savePresetAction={savePresetAction}
        deletePresetAction={deletePresetAction}
        getSettingAction={getSettingAction}
        saveSettingAction={saveSettingAction}
        deleteSettingAction={deleteSettingAction}
        desktopSaveFileAction={desktopSaveFileAction}
      />
    </>
  );
}

import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const presets = sqliteTable('presets', {
  id: text('id').primaryKey(),
  rasmId: text('rasm_id').notNull(),
  position: text('position').notNull(),
  cells: text('cells').notNull(),
  width: integer('width').notNull(),
  height: integer('height').notNull(),
  letterName: text('letter_name'), // Legacy
});

export const settings = sqliteTable('settings', {
  key: text('key').primaryKey(),
  value: text('value').notNull(),
});

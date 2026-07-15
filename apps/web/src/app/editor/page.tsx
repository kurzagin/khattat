"use client";

import { Khattat } from '@khattat/ui';
import {
  getPresetsAction,
  savePresetAction,
  deletePresetAction,
  getSettingAction,
  saveSettingAction,
  deleteSettingAction
} from '../actions';

export default function WebKuficMaker() {
  return (
    <Khattat
      getPresetsAction={getPresetsAction}
      savePresetAction={savePresetAction}
      deletePresetAction={deletePresetAction}
      getSettingAction={getSettingAction}
      saveSettingAction={saveSettingAction}
      deleteSettingAction={deleteSettingAction}
    />
  );
}

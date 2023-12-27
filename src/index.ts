import { storage } from "@vendetta/plugin";

import settings from "./components/Settings";
import patcher from "./stuff/patcher";

export const vstorage: {
  pinned?: Record<string, { id: string; pinned: number }[]>;
  preferFilters?: ("server" | "local")[];
} = storage;

let unpatch: () => void;
export default {
  onLoad: () => (unpatch = patcher()),
  onUnload: () => unpatch(),
  settings,
};

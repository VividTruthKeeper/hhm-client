// Types
import { ActiveLinkActionType } from "../types/store.types";

export const setActiveLink = (active: number) => ({
  type: "SET_ACTIVE_LINK",
  payload: active,
});

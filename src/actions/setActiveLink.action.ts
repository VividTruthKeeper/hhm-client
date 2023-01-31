// Types
import { ActiveLinkActionType } from "../types/store.types";

export const setActiveLink = (active: number): ActiveLinkActionType => ({
  type: "SET_ACTIVE_LINK",
  payload: active,
});

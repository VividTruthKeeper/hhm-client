// Types
import { ActiveLinkActionType, ActiveLinkType } from "../types/store.types";

const initialState = {
  active: 0,
};

export const activeLinkReducer = (
  state: ActiveLinkType = initialState,
  action: ActiveLinkActionType
) => {
  switch (action.type) {
    case "SET_ACTIVE_LINK": {
      return { ...state, active: action.payload };
    }
    default: {
      return state;
    }
  }
};

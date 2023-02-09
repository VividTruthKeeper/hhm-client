// Types
import { INewsScroll, INewsScrollAction } from "../types/store.types";

export const postsInitialState = {
  data: [
    {
      id: -1,
      title: "",
      slug: "",
      excerpt: "",
      published_at: "",
      featured_images: [
        {
          id: -1,
          disk_name: "",
          file_name: "",
          path: "",
          extension: "",
        },
        {
          id: -1,
          disk_name: "",
          file_name: "",
          path: "",
          extension: "",
        },
        {
          id: -1,
          disk_name: "",
          file_name: "",
          path: "",
          extension: "",
        },
      ],
      content_html: "",
      categories: [
        {
          id: -1,
          name: "",
        },
      ],
      powerseo_title: "",
      powerseo_description: "",
      powerseo_keywords: "",
    },
  ],
};

export const dataReducer = (
  state: INewsScroll = postsInitialState,
  action: INewsScrollAction
) => {
  switch (action.type) {
    case "SET_NEWS_SCROLL": {
      return { ...state, data: action.payload };
    }
    default: {
      return state;
    }
  }
};

// Types
import {
  INewsScroll,
  INewsScrollAction,
  IPostData,
  IPostDataAction,
} from "../types/store.types";

// NewsScroll

export const newsScrollInitialState = {
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

export const newsScrollReducer = (
  state: INewsScroll = newsScrollInitialState,
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

// Post

export const postInitialState = {
  data: {
    data: {
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
  },
};

export const postReducer = (
  state: IPostData = postInitialState,
  action: IPostDataAction
) => {
  switch (action.type) {
    case "SET_POST": {
      return { ...state, data: action.payload };
    }
    default: {
      return state;
    }
  }
};

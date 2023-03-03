// Types
import {
  ICategoryData,
  ICategoryDataAction,
  IFeaturedData,
  IFeaturedDataAction,
  INewsScroll,
  INewsScrollAction,
  IPostData,
  IPostDataAction,
  ISearchResult,
  ISearchResultAction,
  IVideoData,
  IVideoDataAction,
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
      video: null,
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
      video: null,
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

export const featuredInitialState = {
  data: [
    {
      id: -1,
      title: "",
      slug: "",
      excerpt: "",
      published_at: "",
      video: null,
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

export const featuredReducer = (
  state: IFeaturedData = featuredInitialState,
  action: IFeaturedDataAction
) => {
  switch (action.type) {
    case "SET_FEATURED": {
      return { ...state, data: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const searchDataReducer = (
  state: ISearchResult = newsScrollInitialState,
  action: ISearchResultAction
) => {
  switch (action.type) {
    case "SET_SEARCH_DATA": {
      return { data: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const videoReducer = (
  state: IVideoData = newsScrollInitialState,
  action: IVideoDataAction
) => {
  switch (action.type) {
    case "SET_VIDEO": {
      return { ...state, data: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const categoriesInitialState: ICategoryData = {
  data: {
    data: [
      {
        id: -1,
        name: "",
      },
    ],
    links: {
      first: "",
      last: "",
      prev: null,
      next: null,
    },
    meta: {
      current_page: -1,
      from: -1,
      last_page: -1,
      path: "",
      per_page: -1,
      to: -1,
      total: -1,
    },
  },
};

export const categoriesReducer = (
  state: ICategoryData = categoriesInitialState,
  action: ICategoryDataAction
) => {
  switch (action.type) {
    case "SET_CATEGORIES": {
      return { data: action.payload };
    }
    default: {
      return state;
    }
  }
};

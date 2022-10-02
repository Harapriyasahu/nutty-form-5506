import * as types from "./actionTypes";

const initialState = {
  tagData: [],
  getTag: {
    isLoading: false,
    isError: false,
  },
  addTag: {
    isLoading: false,
    isError: false,
  },
  updateTag: {
    isLoading: false,
    isError: false,
  },
  deleteTag: {
    isLoading: false,
    isError: false,
  },
};

export const TagReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_TAG_REQUEST: {
      return {
        ...state,
        getTag: {
          isLoading: true,
          isError: false,
        },
      };
    }

    case types.GET_TAG_SUCCESS: {
      return {
        ...state,
        tagData: payload,
        getTag: {
          isLoading: false,
          isError: false,
        },
      };
    }

    case types.GET_TAG_FAILURE: {
      return {
        ...state,
        getTag: {
          isLoading: false,
          isError: true,
        },
      };
    }

    case types.ADD_TAG_REQUEST: {
      return {
        ...state,
        addTag: {
          isLoading: true,
          isError: false,
        },
      };
    }

    case types.ADD_TAG_FAILURE: {
      return {
        ...state,
        addTag: {
          isLoading: false,
          isError: false,
        },
      };
    }

    case types.ADD_TAG_SUCCESS: {
      return {
        ...state,
        addTag: {
          isLoading: false,
          isError: false,
        },
      };
    }

    case types.UPDATE_TAG_REQUEST: {
      return {
        ...state,
        updateTag: {
          isLoading: true,
          isError: false,
        },
      };
    }

    case types.UPDATE_TAG_SUCCESS: {
      return {
        ...state,
        updateTag: {
          isLoading: false,
          isError: false,
        },
      };
    }

    case types.UPDATE_TAG_FAILURE: {
      return {
        ...state,
        updateTag: {
          isLoading: false,
          isError: true,
        },
      };
    }

    case types.DELETE_TAG_REQUEST: {
      return {
        ...state,
        deleteTag: {
          isLoading: true,
          isError: false,
        },
      };
    }

    case types.DELETE_TAG_SUCCESS: {
      return {
        ...state,
        deleteTag: {
          isLoading: false,
          isError: false,
        },
      };
    }

    case types.DELETE_TAG_FAILURE: {
      return {
        ...state,
        deleteTag: {
          isLoading: false,
          isError: true,
        },
      };
    }
    default: {
      return state;
    }
  }
};

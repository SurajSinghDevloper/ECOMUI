import { UserConstant } from "../Contants/UserConstant";

const initialState = {
  error: null,
  message: "",
  loading: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UserConstant.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UserConstant.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case UserConstant.USER_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
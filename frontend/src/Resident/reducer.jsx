import {RESIDENT_DATA} from "./action";

const initState = {
    data: [],
}

export const residentReducer = (store = initState, { type, payload }) => {
//   console.log(store);
  switch (type) {
    case RESIDENT_DATA:
      return { ...store, data: payload };
    default:
      return store;
  }
};

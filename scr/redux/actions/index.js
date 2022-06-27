export default {
  SET_PROFILE: 'SET_PROFILE',
  RESET_PROFILE: 'RESET_PROFILE',
  ADD_NEW_USER: 'ADD_NEW_USER',
  SET_NAME: 'SET_NAME',
  SET_GENDER: 'SET_GENDER',
  SET_EMAIL: 'SET_EMAIL',
  SET_PHONENUMBER: 'SET_PHONENUMBER',
  SET_BIRTHDAY: 'SET_BIRTHDAY',
  SET_PASSWORD: 'SET_PASSWORD',

  SET_ODER: 'SET_ODER',
  SET_DELIVERY_ADDRESS: 'SET_DELIVERY_ADDRESS',
  RESET_ODER: 'RESET_ODER',

  GET_ALL_PRODUCT: 'GET_ALL_PRODUCT',
  ADD_TO_CART: 'ADD_TO_CART',
  ADD_PRICE: 'ADD_PRICE',
  UPDATE_CART: 'UPDATE_CART',
  DELETE_CART: 'DELETE_CART',
  INCREASE_QUANTITY: 'INCREASE_QUANTITY',
  DECREASE_QUANTITY: 'DECREASE_QUANTITY',
  RESET_CART: 'RESET_CART',
};

export function getActionSet(action) {
  return action + '_SET';
}

export function getActionSuccess(action) {
  return action + '_SUCCESS';
}

export function getActionFail(action) {
  return action + '_FAIL';
}

export function getActionUnmount(action) {
  return action + '_UNMOUNT';
}
export function setName(action) {
  return {type: 'SET_NAME', data};
}
export function setGender(action) {
  return {type: 'SET_GENDER', data};
}
export function setBirthday(action) {
  return {type: 'SET_BIRTHDAY', data};
}
export function setEmail(action) {
  return {type: 'SET_EMAIL', data};
}
export function setPhoneNumber(action) {
  return {type: 'SET_PHONENUMBER', data};
}
export function setPassword(action) {
  return {type: 'SET_PASSWORD', data};
}
export function addNewUser(action) {
  return {
    type: 'ADD_NEW_USER',
    data,
  };
}
export function getAllProduct(payload) {
  return {
    type: 'GET_ALL_PRODUCT',
    payload,
  };
}
export function addToCart(payload) {
  return {
    type: 'ADD_TO_CART',
    payload,
  };
}
export function addPriceToCart(payload) {
  return {
    type: 'ADD_PRICE',
    payload,
  };
}
export function updateCart(payload) {
  return {
    type: 'UPDATE_CART',
    payload,
  };
}
export function deleteCart(payload) {
  return {
    type: 'DELETE_CART',
    payload,
  };
}
export function resetCart(payload) {
  return {
    type: 'RESET_CART',
  };
}

export function increaseQuantity(payload) {
  return {
    type: 'INCREASE_QUANTITY',
    payload,
  };
}
export function decreaseQuantity(payload) {
  return {
    type: 'DECREASE_QUANTITY',
    payload,
  };
}

export function setOder(payload) {
  return {
    type: 'SET_ODER',
    payload,
  };
}
export function resetOder(payload) {
  return {
    type: 'RESET_ODER',
  };
}
export function setDeliveryAddress(payload) {
  return {
    type: 'SET_DELIVERY_ADDRESS',
    payload,
  };
}

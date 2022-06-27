import actions, {setOder, resetOder, setDeliveryAddress} from '../actions';
const initialOder = {
  oderId: '',
  oderDate: '',
  oderStatus: 'Ordered',
  // 1: Ordered
  // 2: Packed
  // 3: In Transit
  // 4: Delivering
  // 5: Delivered
  oderDetails: [],
  // Detail of product
  oderTotalPrice: 0,
  shipFrom: 'Ecom Co,,.Ltd',
  deliveryAddress: '',
  oderItem: 0,
  trackingNumber: '',
};
export const getOderInformation = (state = initialOder, action) => {
  switch (action.type) {
    case actions.SET_ODER:
      return {
        ...state,
        oderId: action.payload.oderId,
        oderDate: action.payload.oderDate,
        oderDetails: action.payload.oderDetails,
        oderTotalPrice: action.payload.oderTotalPrice,
        oderItem: action.payload.oderItem,
      };
    case actions.SET_DELIVERY_ADDRESS:
      return {
        ...state,
        deliveryAddress: action.payload.deliveryAddress,
      };
    case actions.RESET_ODER:
      return {
        oderId: '',
        oderDate: '',
        oderStatus: 'Ordered',
        oderDetails: [],
        oderTotalPrice: 0,
        shipFrom: 'Ecom Co,,.Ltd',
        deliveryAddress: '',
        oderItem: 0,
        trackingNumber: '',
      };
    default:
      return state;
  }
};

const oderReducer = {getOderInformation};
export default oderReducer;

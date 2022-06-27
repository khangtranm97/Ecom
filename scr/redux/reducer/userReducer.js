import actions, {
  getActionSuccess,
  getActionFail,
  getActionUnmount,
  addNewUser,
  setName,
  setGender,
  setBirthday,
  setEmail,
  setPhoneNumber,
  setPassword,
} from '../actions';

const initialState = {
  userId: 'user0001',
  url: require('../../assets/image/profilePicture.png'),
  firstName: 'Tran',
  lastName: 'Nguyen Hung',
  userName: 'tran_nguyenhung',
  password: '123456',
  gender: 'Male',
  birthDay: '12-10-1995',
  email: 'hungnguyentran@gmail.com',
  phoneNumber: '123-456-789',
  address: [
    {
      addressId: '001',
      addressName: 'Tran Nguyen Hung',
      addressPhoneNumber: '123-456-789',
      type: 'Apartment',
      addressDetail: '111 Tran Hung Dao, District 1, Ho Chi Minh City',
      default: true,
    },
    {
      addressId: '002',
      addressName: 'Tran Nguyen Hung',
      addressPhoneNumber: '123-456-789',
      type: 'Office',
      addressDetail: '50 Nguyen Hue, District 1, Ho Chi Minh City',
      default: false,
    },
  ],
  paypalAccount: '',
  creditCard: [
    {
      cardId: 'cd001',
      cardNumber1: 5600,
      cardNumber2: 4587,
      cardNumber3: 8954,
      cardNumber4: 4455,
      cardHolder: 'Tran Nguyen Hung',
      cardSave: '02/2026',
    },
    
  ],
};

export const getInformationUser = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_PROFILE:
      return {
        ...state,
        url: action.data.url,
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        userName: action.data.userName,
        password: action.data.password,
        gender: action.data.gender,
        birthDay: action.data.birthDay,
        email: action.data.email,
        phoneNumber: action.data.phoneNumber,
        address: action.data.address,
      };
    case actions.SET_NAME: {
      return {
        ...state,
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        userName: action.data.userName,
      };
    }
    case actions.SET_GENDER: {
      return {
        ...state,
        gender: action.data.gender,
      };
    }
    case actions.SET_BIRTHDAY: {
      return {
        ...state,
        birthDay: action.data.birthDay,
      };
    }
    case actions.SET_EMAIL: {
      return {
        ...state,
        email: action.data.email,
      };
    }
    case actions.SET_PHONENUMBER: {
      return {
        ...state,
        phoneNumber: action.data.phoneNumber,
      };
    }
    case actions.SET_PASSWORD: {
      return {
        ...state,
        password: action.data.password,
      };
    }
    case actions.ADD_NEW_USER:
      let user = {
        userId: action.data.userId,
        url: action.data.url,
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        userName: action.data.userName,
        passWord: action.data.passWord,
        gender: action.data.gender,
        birthDay: action.data.birthDay,
        email: action.data.email,
        phoneNumber: action.data.phoneNumber,
        address: action.data.address,
      };
      state.Users.push(user);
      return {
        ...state,
        numberOfUsers: (state.numberOfUsers += 1),
      };
    case actions.RESET_PROFILE:
      return {...initialState};
    default:
      return state;
  }
};

const userReducer = {getInformationUser};
export default userReducer;

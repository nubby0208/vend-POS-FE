import { SIGNED_IN } from '../constants';
let currentUser = JSON.parse(localStorage.getItem('user'));
let  user = currentUser ? currentUser : {
  email: null,
  displayName: null,
  profilePic: null,
  phoneNumber: null,
  uid: null,
  isTeacher: null,
  address: null
};


export default (state = user, action) => {
  switch(action.type) {
    case SIGNED_IN:
      const { email } = action;
      const { displayName } = action;
      const { profilePic } = action;
      const { phoneNumber } = action;
      const { uid } = action;
      const { isTeacher } = action;
      const {address} = action;
      user = {
        email,
        displayName,
        profilePic,
        phoneNumber,
        uid,
        isTeacher,
        address
      }
      localStorage.setItem('user', JSON.stringify(user));
      return user;
      default:
        return state;
  }
}

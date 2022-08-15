import { USER_TYPE } from '../constants';
let savedType = localStorage.getItem('userType')
const initialState = savedType ? savedType : null
export default (state = initialState, action) => {
     switch (action.type) {
          case USER_TYPE:
               const { userType } = action;
               localStorage.setItem('userType', userType)
               return userType;
          default:
               return state;
     }
}

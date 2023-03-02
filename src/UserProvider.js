import React from 'react';

const UserContext = React.createContext(null);
const UserDispatchContext = React.createContext(null);

const UserProvider = ({children}) => {
  const [user, dispatch] = React.useReducer(userReducer, {logged: false});
  return (
    <>
      <UserContext.Provider value={user}>
        <UserDispatchContext.Provider value={dispatch}>
          {children}
        </UserDispatchContext.Provider>
      </UserContext.Provider>
    </>
  );
}

const userReducer = (user, action) => {
  switch (action.type){
    case 'login':
      return {...action.user};
    case 'logout':
      return {logged: false}
  }
}

export const useUser = () => React.useContext(UserContext)
export const useUserDispatch = () => React.useContext(UserDispatchContext)
export default UserProvider;

import UserActionTypes from "./user.types"


export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.SIGN_IN_START,
    payload: emailAndPassword
}) 

export const emailSignInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const emailSignInFailure = (err) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: err
})

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START,
}) 

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
})

export const signOutFailure = (err) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: err
})

export const signUpStart = (userCredentials) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
}) 

export const signUpSuccess = (user) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: user
})

export const signUpFailure = (err) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: err
})

export const getCurrentUserStart = () => ({
    type: UserActionTypes.GET_CURRENT_USER_START
})

export const getCurrentUserSuccess = (user) => ({
    type: UserActionTypes.GET_CURRENT_USER_SUCCESS,
    payload: user
})

export const getCurrentUserFailure = (err) => ({
    type: UserActionTypes.GET_CURRENT_USER_FAILURE,
    payload: err
})

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
})

export const googleSignInSuccess = (user) => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
})

export const googleSignInFailure = (err) => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: err
})


export const getUserDataStart = () => ({
    type: UserActionTypes.GET_USER_DATA_START
})

export const getUserDataSuccess = (userCollections) => ({
    type: UserActionTypes.GET_USER_DATA_SUCCESS,
    payload: userCollections
})

export const UserFailure = (err) => ({
    type: UserActionTypes.USER_FAILURE,
    payload: err
})

export const updateUserCollections = (collections) => ({
    type: UserActionTypes.UPDATE_USER_COLLECTIONS,
    payload: collections
})
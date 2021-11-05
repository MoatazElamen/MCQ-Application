export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const SET_USER_SCORE = 'SET_USER_SCORE';


export const setUser = (payload)=>({
    type:SET_AUTHED_USER,
    payload
})
export const setUserScore = (payload)=>({
    type:SET_USER_SCORE,
    payload
})
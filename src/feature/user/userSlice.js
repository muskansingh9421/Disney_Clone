import { createSlice } from "@reduxjs/toolkit";
/* start of blank */
const initialState = {
    name: "",
    email: "",
    photo: "", 
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        /* when login remember the details*/
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        /* when logout forget the details*/
        setSignOutState: state => {
            state.name = null;
            state.email = null;
            state.photo = null; 
        },
    },
});

export const {setUserLoginDetails, setSignOutState} = userSlice.actions;

/*get access to name, email, photo of the user in any other file */
export const selectUserName = state => state.user.name;
export const selectUserEmail = state => state.user.email;
export const selectUserPhoto = state => state.user.photo;

export default userSlice.reducer;
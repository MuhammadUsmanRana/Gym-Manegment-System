import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentState: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.currentState.push(action.payload);
            return state;
        },

        getItem: (state, action) => {
            state.currentState = action.payload;
        },

        deleteItem: (state, action) => {
            const items = action.payload.data;
            const itemDelete = state.currentState.filter((item) => {
                return item._id !== items._id;
            });
            console.log(itemDelete, "itemDelete")
            state.currentState = itemDelete;
        },

        editItem: (state, action) => {
            const editItem = action.payload;
            const itemIndex = state.currentState.find((item) => {
                return item._id === editItem._id;
            });
            if (itemIndex) {
                Object.assign(itemIndex, editItem);
            }
        },
    }
})
export const { addItem, getItem, deleteItem, editItem } = userSlice.actions;

export default userSlice.reducer;
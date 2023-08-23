import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    items: Array<IProductWithCount> | [],
};

const initialState: IinitialState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (state.items.some(item => item.id == action.payload.id)) {
                //just increment count
                let itemData;
                state.items.map(item => {
                    if (item.id == action.payload.id) {
                        itemData = item;
                        //increment count
                        if (itemData.count) itemData.count++;
                    }
                })
                state.items = [...state.items];
            } else {
                const itemData = { ...action.payload, count: 1 }
                state.items = [...state.items, itemData];
            }
        },

        removeFromCart: (state, action) => {
            const itemsAfterRemove = state.items.filter(item => item.id != action.payload)
            state.items = itemsAfterRemove;
        },

        emptyCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart } = cartSlice.actions;
export const { emptyCart } = cartSlice.actions;
export const { removeFromCart } = cartSlice.actions;
export const getCart = (state: { carts: IinitialState }) => state.carts.items;
export default cartSlice.reducer;
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
                let itemData;
                state.items.map(item => {
                    if (item.id == action.payload.id) {
                        itemData = item;
                        if (itemData.count) itemData.count++;
                    }
                })
                state.items = [...state.items];
            } else {
                const itemData = { ...action.payload, count: 1 }
                state.items = [...state.items, itemData];
            }
        },

        decreaseFromCart: (state, action) => {
            let removeRequired = false;
            state.items.map(item => {
                if (item.id == action.payload && item.count !== undefined) {
                    if (item.count == 1) {
                        removeRequired = true;
                    } else {
                        item.count--;
                    }
                    return item
                }
            })
            if (removeRequired) {
                const singleItemCheckedList = state.items.filter(item => {
                    if (item.id == action.payload && item.count == 1) {
                        return false
                    } else {
                        return true
                    }
                })
                state.items = [...singleItemCheckedList];
            } else {
                state.items = [...state.items];
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
export const { decreaseFromCart } = cartSlice.actions;
export const getCart = (state: { carts: IinitialState }) => state.carts.items;
export const getTotal = (state: { carts: { items: Array<IProductWithCount> } }) => {
    return state.carts.items.reduce(function (acc, obj) { return acc + obj.price * obj.count!; }, 0);
};

export default cartSlice.reducer;
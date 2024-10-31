const initialState = {
    items: [],
    subTotal: 0,
    discount: 0,
    discountCode: "",
    GST: 0.18, //18%
    shipping: 50,
    total: 0
}

//reducer - (state,action)
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id ? {
                            ...item, quantity: item.quantity + 1
                        } : item
                    )
                };
            }
            return {                
                ...state, items: [...state.items, { ...action.payload, quantity : 1}]
            };

        case "REMOVE_CART" :
            return {
                ...state,
                items : []
            };

        case "REMOVE_FROM_CART" :
            return {
                ...state,
                items : state.items.filter(item => item.id !== action.payload )
            };

        case "INCREMENT_QUANTITY" :
            return {
                ...state,
                items: state.items.map(item => 
                    item.id === action.payload ?
                    {...item, quantity: item.quantity + 1 } 
                    : item
                )
            };

            case "DECREMENT_QUANTITY" :
                return {
                    ...state,
                    items: state.items.map(item => 
                        item.id === action.payload ?
                        {...item, quantity: item.quantity - 1 } 
                        : item
                    )
                }

            case "APPLY_DISCOUNT" :
                const isDiscountValidate = action.payload === '50Off';
                const discount = isDiscountValidate ? 0.5 : 0; //50% discount 
                return {
                    ...state,
                    discount,
                    discountCode : isDiscountValidate ? action.payload : ""
                }

            case "CALCULATE_TOTAL" :
                const subTotal = state.items.reduce((sum,item) => sum + item.price * item.quantity , 0);
                const discountAmount = subTotal * state.discount;
                const gstAmount = (subTotal - discountAmount) * state.GST;
                const total = subTotal - discountAmount + gstAmount + state.shipping;
                return {
                    ...state, subTotal, total
                }

        default :
            return state;
    }
}

export default cartReducer;
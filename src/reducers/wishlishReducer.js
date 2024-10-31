const initialValue = {
    items : []
}

const wishlishReducer = (state = initialValue, action) => {

    switch(action.type){
        case "ADD_TO_WISHLIST" :
            if(state.items.find(item => item.id === action.payload.id )){
                return state; //item already in wishlist
            }
            return {
                ...state,
                items: [...state.items, action.payload]
            };

        case "REMOVE_FROM_WISHLIST" :
            return {
                ...state,
                items : state.items.filter(item => item.id !== action.payload )
            }

        default:
            return state;
    }

}

export default wishlishReducer;
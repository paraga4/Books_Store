const initialState = {

    carts:{}

}

export default function RootReducer(state=initialState,action)
{
    switch(action.type)
    {
       case 'ADD_CART':
           
          
                 //...state,
                 //carts:[...state.carts, action.payload]
                 state.carts[action.payload[0]]= action.payload[1]
           //console.log(state.carts)
           return ({carts:state.carts})

          
           
           default:
            return ({carts:state.carts})
            

    }


}
    

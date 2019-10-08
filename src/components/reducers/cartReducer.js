import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {
            id:1,
            title:"SG Phoenix",
            price:1796,
            rating:3.5,
            desc:"Cricket Leather Bat with Short Handle (Standard, Red)",
            img:"https://images-na.ssl-images-amazon.com/images/I/319v4e9O53L.jpg"
        },
        {
            id:2,
            title:"Gray-Nicolls",
            price:2599,
            rating:3.8,
            desc:"Velocity GN1 Exclusive 2019 English Willow bat",
            img:"https://images-na.ssl-images-amazon.com/images/I/319v4e9O53L.jpg"
        },
        {
            id:3,
            title:"SG Phoenix",
            price:1796,
            rating:3.5,
            desc:"Cricket Leather Bat with Short Handle (Standard, Red)",
            img:"https://images-na.ssl-images-amazon.com/images/I/319v4e9O53L.jpg"
        },
        {
            id:4,
            title:"SG Phoenix",
            price:1796,
            rating:3.5,
            desc:"Cricket Leather Bat with Short Handle (Standard, Red)",
            img:"https://images-na.ssl-images-amazon.com/images/I/319v4e9O53L.jpg"
        },
        {
            id:5,
            title:"SG Phoenix",
            price:1796,
            rating:3.5,
            desc:"Cricket Leather Bat with Short Handle (Standard, Red)",
            img:"https://images-na.ssl-images-amazon.com/images/I/319v4e9O53L.jpg"
        },
        {
            id:6,
            title:"SG Phoenix",
            price:1796,
            rating:3.5,
            desc:"Cricket Leather Bat with Short Handle (Standard, Red)",
            img:"https://images-na.ssl-images-amazon.com/images/I/319v4e9O53L.jpg"
        },
        {
            id:7,
            title:"SG Phoenix",
            price:1796,
            rating:3.5,
            desc:"Cricket Leather Bat with Short Handle (Standard, Red)",
            img:"https://images-na.ssl-images-amazon.com/images/I/319v4e9O53L.jpg"
        },
        {
            id:8,
            title:"SG Phoenix",
            price:1796,
            rating:3.5,
            desc:"Cricket Leather Bat with Short Handle (Standard, Red)",
            img:"https://images-na.ssl-images-amazon.com/images/I/319v4e9O53L.jpg"
        }
        
    ],

    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)

        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

  else{
    return state
    }
    
}

export default cartReducer

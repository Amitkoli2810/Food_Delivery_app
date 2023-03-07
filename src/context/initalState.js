import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser()
const cartInfo = fetchCart()



export const initialState = {
    user : userInfo,
    foodItems : null,
    carShow : false,
    cartItems : cartInfo
}
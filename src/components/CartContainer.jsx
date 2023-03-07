import React, { useEffect } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";


import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import EmptyCart from '../img/emptyCart.svg'
import CartItem from "./CartItem";
import { useState } from "react";
const CartContainer = () => {
    const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
    const [flag, setFlag] = useState(1);
    const [tot, setTot] = useState(0);
  
    const showCart = () => {
      dispatch({
        type: actionType.SET_CART_SHOW,
        cartShow: !cartShow,
      });
    };
  
    useEffect(() => {
      let totalPrice = cartItems?.reduce(function (accumulator, item) {
        return accumulator + item.qty * item.price;
      }, 0);
      setTot(totalPrice);
      
    }, [tot, flag]);
  
    const clearCart = () => {
      dispatch({
        type: actionType.SET_CARTITEMS,
        cartItems: [],
      });
  
      localStorage.setItem("cartItems", JSON.stringify([]));
    };

  return (
    <div className="w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col fixed z-[101] top-0 right-0">
      <div className="w-full flex items-center justify-between p-4">
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl cursor-pointer" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  
             cursor-pointer text-textColor text-base " onClick={clearCart}
        >
          Clear
          <RiRefreshFill />
        </motion.p>
      </div>
     {
        cartItems && cartItems.length > 0 ? (
            <div className="w-full h-full bg-black rounded-t-[2rem] flex flex-col">
            <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
              {cartItems &&
                cartItems?.map((item) => (
                  <CartItem key={item.id} item={item} setFlag={setFlag} flag={flag}/>
                ))}
            </div>
            <div className="w-full flex-1 bg-cartTotal rounded-t-t[2rem] flex flex-col items-center justify-evenly px-8 py-2">
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-400 text-lg">Sub Total</p>
                <p className="text-gray-400 text-lg">$ {tot}</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-400 text-lg">Delivery </p>
                <p className="text-gray-400 text-lg">$ 2.5</p>
              </div>
              <div className="w-full border-b border-gray-600 my-2"></div>
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-200 text-xl font-semibold">Total</p>
                <p className="text-gray-200 text-xl font-semibold">$ {tot + 2.5}</p>
              </div>
              {
                user ? (
                    <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-yellow-600 text-gray-50 text-lg my-2 
                    hover:shadow-lg transition-all duration-150 ease-out"
              >
                Check Out
              </motion.button>
                ) : (
                    <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-yellow-600 text-gray-50 text-lg my-2 
                    hover:shadow-lg transition-all duration-150 ease-out"
              >
                Login to Check out
              </motion.button>
                )
              }
            </div>
          </div>
        ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                <img src={EmptyCart} className='w-300' alt="" />
                <p className="text-xl text-textColor font-semibold">Add some items to your cart</p>
            </div>
        )
     }
    </div>
  );
};

export default CartContainer;

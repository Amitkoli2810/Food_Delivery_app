import React, { useEffect, useState } from "react";
import { categories } from "../utils/data";
import {motion} from 'framer-motion'
import { useStateValue } from "../context/StateProvider";
import RowContainer from "./RowContainer";
const MenuContainer = () => {
  const [filter ,setFilter] = useState("chicken");
    const [{foodItems,dispatch}] = useStateValue()

  return (
    
      <section className="w-full my-6" id="menu">
        <div className="w-full flex flex-col items-center justify-center">
          <p
            className="text-2xl font-semibold capitalize text-headingColor relative before:absolute
           before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0
           before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto"
          >
            Our Hot Dishes
          </p>
          <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
            {categories &&
              categories.map((category) => (
                <motion.div whileTap={{scale : 0.75}} key={category.id}
                  className={`group ${filter === category.urlParamName ? 'bg-red-600' : 'bg-cardOverlay'}
                   w-20 h-20 min-w-[94px] flex cursor-pointer rounded-lg drop-shadow-lg flex-col gap-3
                  items-center justify-center duration-150  hover:bg-red-500`}
                   onClick ={()=>setFilter(category.urlParamName)}
                >
                  
                  <p className={`text-lg  group-hover:text-white ${filter === category.urlParamName ? 'text-white' : 'text-textColor'} `}>
                    {category.name}
                  </p>
                </motion.div>
              ))}
          </div>
          <div className="w-full">
                <RowContainer flag={false} data={foodItems?.filter((n)=> n.category == filter)}/>
          </div>
        </div>

      </section>
    
  );
};

export default MenuContainer;

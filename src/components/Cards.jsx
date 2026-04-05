import React from "react";
import { FiArrowDownLeft,FiArrowUpRight } from "react-icons/fi";
import { GiPiggyBank } from "react-icons/gi";

const Cards=()=>{
    return(
     <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">

        {/* Income */}
        <div className="p-5 bg-[#1E293E] rounded-2xl shadow-md shadow-[#1A1F2E]  hover:bg-violet-800 transition transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl duration-500 ease-in-out">

            <div className="bg-green-500/20 w-10 h-10 flex items-center justify-center rounded-lg mb-2">
                <FiArrowDownLeft className="text-green-400 text-xl"/>
            </div>

            <p className="text-gray-400">Income</p>
            <h2 className="text-xl font-bold mt-1">$70,000</h2>
        </div>

        {/* Expenses */}
        <div className="p-5 bg-[#1E293E] rounded-2xl shadow-md shadow-[#1A1F2E] hover:bg-violet-800 transition transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl duration-500 ease-in-out">

            <div className="bg-red-500/20 w-10 h-10 flex items-center justify-center rounded-lg mb-2">
               <FiArrowUpRight className="text-red-400 text-xl"/>
            </div>

            <p className="text-gray-400">Expenses</p>
            <h2  className="text-xl font-bold mt-1">$30,000</h2>
        </div>
        
        {/* Savings Rate  */}
        <div className="p-5 bg-[#1E293E] rounded-2xl shadow-md shadow-[#1A1F2E] hover:bg-violet-800 transition transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl duration-500 ease-in-out">

            <div className="bg-purple-500/20 w-10 h-10 flex items-center justify-center rounded-lg mb-2">
                <GiPiggyBank className="text-purple-400 text-xl"/>
            </div>
            <p className="text-gray-400">Savings Rate</p>
            <h2  className="text-xl font-bold mt-1">57%</h2>
        </div>
     </div>
    );
};

export default Cards;
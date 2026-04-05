import React from "react";
const BalanceCard = ()=>{
    return(
        <div className="p-6 md:p-6 rounded-2xl bg-[#1E293B] mt-8 shadow-[#7e73c9] hover:bg-violet-800  hover:shadow-md duration-500 ease-in-out flex flex-col justify-between items-start">
            <p className="text-gray-400 text-lg  md:text-base">Total Balance</p>
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold mt-2">$40,00</h2>
            <p className="text-green-400 text-xs md:text-sm mt-2  rounded-4">+0% <span className="text-gray-400"> vs last month</span>
            </p>
        </div>

    );
};

export default BalanceCard;
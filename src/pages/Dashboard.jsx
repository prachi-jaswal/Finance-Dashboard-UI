import React, { useState } from "react";
import BalanceCard from "../components/BalanceCard";
import Cards from "../components/Cards";
import Tabs from "../components/Tabs";

const Dashboard = () =>{
    const [role, setRole] = useState("viewer");

    return(
        <div className="min-h-screen w-full bg-[#0B0F1A] text-white p-3 md:p-5 space-y-6 overflow-x-hidden">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                <div>
                    <p className="text-gray-400 text-sm">Welcome back, Buddy</p>
                    <h1 className="text-xl md:text-2xl font-bold ">Finance Dashboard</h1>
                </div>

                <div className="flex items-center gap-6 md:gap-3">

                    {/* Role */}
                    <select 
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="bg-[#1A1F2E] px-2 py-1 md:px-3 md:py-2 rounded-lg text-sm md:text-xl">
                        <option value="viewer">Viewer</option>
                        <option value="admin">Admin</option>
                    </select>

                    {/* Bell */}
                    <div className="bg-[#1A1F2E] p-2 rounded-lg text-sm md:text-base">🔔</div>

                    {/* Avatar */}
                    <div className="bg-green-400 text-black px-2 py-1 md:px-3 md:py-2 text-sm rounded-lg font-bold md:text-base">B</div>
                </div>

            </div>
           
           <div className="space-y-6">
            <BalanceCard/>
            <Cards/>
            <Tabs role={role}/>
           </div>

        </div>
    
    ); 
};

export default Dashboard;
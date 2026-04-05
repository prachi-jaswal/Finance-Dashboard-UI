import { useState } from "react";

  const Tabs = ({ role }) => {
    const [activeTab, setActiveTab] = useState("spending");
    const [showForm, setShowForm] = useState(false);
    const transactions=[
      {id:1, date:"01 Apr", amount:200, category: "Food", type:"expense"},
      {id:2, date:"02 Apr", amount:5000, category:"Salary", type:"income"},
      {id:3, date:"03 Apr", amount:1000, category:"Transport", type:"expense"},
    ];

    const[search, setSearch]=useState("");
    const[category, setCategory]=useState("All Categories");
    const[type, setType]=useState("All Types");

    const filteredTransactions = transactions.filter((t)=>{
    
      const matchSearch = t.category.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
      category === "All Categories" || t.category === category;

      const matchType =
      type === "All Types" || t.type === type.toLowerCase();

      return matchSearch && matchCategory && matchType;
    });

    return(
    <div>

     {/* Tabs Buttons */}
     <div className="flex gap-7 border-b border-gray-700 overflow-x-auto scrollbar-hide">
        <button onClick={() => setActiveTab("transactions")} 
            className={`pb-2 ${
            activeTab === "transactions"
              ? "text-green-400 border-b-2 border-green-400"
              : "text-gray-400 hover:text-white"
          }`}
            >
           Transactions
        </button>

        <button onClick={()=> setActiveTab("insights")} 
            className={`pb-2 ${
            activeTab === "insights"
              ? "text-green-400 border-b-2 border-green-400"
              : "text-gray-400 hover:text-white"
          }`}
        >
            Insights
        </button>

        <button onClick={() => setActiveTab("spending")}
          className={`pb-2 ${
            activeTab === "spending"
              ? "text-green-400 border-b-2 border-green-400"
              : "text-gray-400 hover:text-white"
          }`}
        >
            Spending
        </button>
     </div>



       {/* Tabs Content */}

      <div>
        {activeTab === "transactions" && (
      <div className="p-4 bg-[#1A1F2E] rounded-2xl shadow-md text-white space-y-4 mt-2 shadow-gray-700 hover:shadow-lg duration-300 ease-in-out">

       {/* Top Section */}
      <div className="flex flex-wrap justify-between items-center gap-2">

       <h2 className="text-lg font-semibold text-gray-100">Recent Transactions</h2>

       <button className="px-3 py-2 bg-gray-600 rounded-lg text-sm hover:bg-gray-700">
         This Month
       </button>
      
      {role === "admin" && (
        <button
        onClick={() => setShowForm(true)}
        className="px-2 py-2 bg-green-700 text-white rounded-lg text-md hover:bg-green-500 shadow-sm shadow-green-500 font-semibold" 
        >
         + Add
       </button>
        )}
      
      </div>

       {/* Filters Section */}
       <div className="flex flex-col md:flex-row gap-3">

      {/* Search */}
      <input
        type="text"
        placeholder="Search transactions..."
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
      />

      {/* Category Dropdown */}
      <select 
        value={category}
        onChange={(e)=> setCategory(e.target.value)}
        className="px-3 py-2 border rounded-lg text-white font-semibold">
        <option className="text-gray-800 font-semibold">All Categories</option>
        <option className="text-gray-800 font-semibold">Housing</option>
        <option className="text-gray-800 font-semibold">Food</option>
        <option className="text-gray-800 font-semibold">Salary</option>
        <option className="text-gray-800 font-semibold">Transport</option>
      </select>

      {/* Type Dropdown */}
      <select 
        value={type}
        onChange={(e)=> setType(e.target.value)}
        className="px-3 py-2 border rounded-lg text-white">
        <option className="text-gray-800 font-semibold">All Types</option>
        <option className="text-gray-800 font-semibold">Income</option>
        <option className="text-gray-800 font-semibold ">Expense</option>
      </select>

      </div>

    {/* Table */}
    <table className="w-full text-sm mt-3">
      <thead>
        <tr className="text-left border-b text-gray-400">
          <th className="py-2">Date</th>
          <th className="py-2">Amount</th>
          <th className="py-2">Category</th>
          <th className="py-2">Type</th>
        </tr>
      </thead>

      <tbody>
      {filteredTransactions.map((t) => (
        <tr key={t.id} className="border-b hover:bg-gray-600 font-semibold">
          <td className="py-2">{t.date}</td>
          <td className="py-2 font-semibold">${t.amount}</td>
          <td className="py-2">{t.category}</td>
          <td className={`py-2 ${t.type === "expense" ? "text-red-500 font-semibold text-md" : "text-green-500 font-semibold text-md"}`}>
            {t.type}
          </td>
        </tr>
      ))}

       
      </tbody>
    </table>

      {filteredTransactions.length === 0 &&(
      <p className="text-center text-gray-400 mt-4">No transactions found</p>
      )}

    </div>
     )}

         {/* Insights */}
         {activeTab === "insights" && 
         <div className="grid grid-cols-1 mt-3 md:grid-cols-2 gap-4 ">
            
            {/* Top Spending  */}
            <div className="p-4 bg-[#1A1F2E] rounded-2xl shadow-md shadow-[#1E293E] text-gray-600  hover:shadow-lg duration-300 ease-in-out">
                <p className="text-lg text-gray-100">Top Spending Category</p>
                <h2 className="text-sm font-semibold mt-1">No data</h2>
            </div>

            {/* Monthly Spending */}
            <div className="p-4 bg-[#1A1F2E] rounded-2xl shadow-md shadow-[#1E293E] text-gray-600  hover:shadow-lg duration-300 ease-in-out">
                <p className="text-lg text-gray-100">Monthly Comparison</p>
                <h2 className="text-sm font-semibold mt-1">No data</h2>
            </div>

            {/* Average Transaction */}
            <div className="p-4 bg-[#1A1F2E] rounded-2xl shadow-md shadow-[#1E293E] text-gray-600  hover:shadow-lg duration-300 ease-in-out">
                <p className="text-lg text-gray-100">Average Transaction</p>
                <h2 className="text-sm font-semibold mt-1">No data</h2>
            </div>

            {/* Total Transactions */}
             <div className="p-4 bg-[#1A1F2E] rounded-2xl shadow-md shadow-[#1E293E] text-gray-600  hover:shadow-lg duration-300 ease-in-out">
                <p className="text-lg text-gray-100"> Total Transactions</p>
                <h2 className="text-sm font-semibold mt-1">0 transactions</h2>
            </div>

         </div>}

         {/* Spending */}
         {activeTab === "spending" && (
            <div className="p-3 mt-2 bg-[#1A1F2E] rounded-2xl shadow-md shadow-[#1E293E] hover:shadow-lg duration-300 ease-in-out">
                <h2 className="text-lg font-semibold mb-2 text-white">Spending Breakdown</h2>
             <div className="h-40 flex items-center justify-senter text-gray-400">Charts coming soon..
             </div>
            </div>
        )}
       </div>
    
       
     </div>

    );
};

export default Tabs;
Finance Dashboard UI

📌 Overview
This project is a finance Dashboard UI built to track and visualize financial data in a simple and interactive way. 
It focuses on clean UI design, component structure, and frontend state handling without backend integration. 

🚀Features

📊 Dashboard Overview
1. Total Balance card
2. Income,Expense, and Saving Rate cards
3. Clean and responsive layout

📑 Transactions Section
1. List of transaction with:
. Date
. Amount
. Category
. Type(Income/Expense)

2. Search Functionality
3. filter by category and type
4. Handles empty state ("No transactions found")

🔐 Role-Based UI

1. Viewer
. Can only view data
2. Admin 
. Can see "+ Add" button (UI simulation)

📈 Insights Section
1. Top Spending Category
2. Monthly Comparison
3. Average Transaction
4. Total Transactions

📉 Spending Section
. Placeholder for chats (future enhancement)

🧠 Tech Stack
. React.js
.Tailwind CSS

📱 Responsiveness
. fully responsive design 
.Works on:-
  .Mobile (even small screens ~240px)
  .Tablet
  .Desktop
.Horizontal scrolling handled for tables and tabs

🎨 UI/UX Highlights
.Dark theme design
.Hover effect
.clean spacing and layout
.Scrollable tabs on small screens

⚙️ State Management
.React useState used for:
  .Role switching 
  .Active tabs
  .filters(search,category,type)

📂 Project Structure

/src
/components
.BalanceCard.jsx
.Cards.jsx
.Tabs.jsx

/pages
.Dashboard.jsx

🛠️ Setup Instructions:-

1. Clone the repository
git clone <Finance Dashboard UI>
2. Install dependencies
npm install 
3. Run the project
npm run dev

💡 Future Improvements:-

1. Add real charts (Recharts / Chart.js)
2. Add transaction form functionality
3. Data persistence (Local Storage / API)
4. Dark/Light theme toggle

👩‍💻 Author
.Prachi Jaswal

📌 Note

This project is built for frontend evaluation purposes and uses mock data.
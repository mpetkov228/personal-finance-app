const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

const transactions = [
    { id: 1, desc: "Monthly Rent", amount: -1200, category: "Housing", date: "2024-06-01", type: "expense" },
    { id: 2, desc: "Salary Deposit", amount: 3800, category: "Other", date: "2024-06-01", type: "income" },
    { id: 3, desc: "Weekly Groceries", amount: -95, category: "Food", date: "2024-06-03", type: "expense" },
    { id: 4, desc: "Netflix", amount: -15, category: "Entertainment", date: "2024-06-04", type: "expense" },
    { id: 5, desc: "Gym Membership", amount: -45, category: "Health", date: "2024-06-05", type: "expense" },
    { id: 6, desc: "Freelance Project", amount: 650, category: "Other", date: "2024-06-07", type: "income" },
    { id: 7, desc: "Metro Card", amount: -33, category: "Transport", date: "2024-06-08", type: "expense" },
    { id: 8, desc: "New Shoes", amount: -120, category: "Shopping", date: "2024-06-10", type: "expense" },
    { id: 9, desc: "Restaurant Dinner", amount: -68, category: "Food", date: "2024-06-12", type: "expense" },
    { id: 10, desc: "Emergency Fund", amount: -300, category: "Savings", date: "2024-06-14", type: "expense" },
    { id: 11, desc: "Phone Bill", amount: -55, category: "Other", date: "2024-06-15", type: "expense" },
    { id: 12, desc: "Coffee Shops", amount: -42, category: "Food", date: "2024-06-17", type: "expense" },
    { id: 13, desc: "Spotify", amount: -10, category: "Entertainment", date: "2024-06-18", type: "expense" },
    { id: 14, desc: "Uber Rides", amount: -28, category: "Transport", date: "2024-06-20", type: "expense" },
    { id: 15, desc: "Side Project Payment", amount: 200, category: "Other", date: "2024-06-22", type: "income" },
];

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api/transactions', (req, res) => {
    res.json(transactions);
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});
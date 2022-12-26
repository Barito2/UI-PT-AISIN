import TransactionOut from "../components/transaction/TransactionOut";
import Login from "../views/login/Login";
import Transaction from "../views/transaction/Transaction";

const routes = [
    {
        path: '/',
        component: <Login />,
        exact: true
    },
    {
        path: '/transaction',
        component: <Transaction />,
        exact: true
    },
    {
        path: '/transaction-out',
        component: <TransactionOut />,
        exact: true
    },
];

export default routes
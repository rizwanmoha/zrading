import './App.css';
import Home from "./Components/Home"
import UserSubscription from './Components/UserSubscription/UserSubscription';
import Feed from './Components/Discover/Feed';
import TraderLounge from './Components/TraderLounge/TraderLounge';
import Login from './Components/Login/LoginPage';
import HomeBody from './Components/Home/HomeBody';
import Portfolio from './Components/Portfolio/Portfolio';
import AddFund from './Components/AddFund/AddFund';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoneyInvest from './Components/MoneyInvest';
import ViewAll from "./Components/ViewAll/ViewAll"
import Settings from "./Components/Settings"
import Privacy from "./Components/Privacy"
import Notifications from "./Components/Notifications"
import RecurringDeposit from "./Components/RecurringDeposit"
import General from "./Components/General"
import Account from './Components/Account';
import Trading from './Components/Trading';
import CashWithdrawal from './Components/ringu/CashWithdrawal';
import Updatemodel from './Components/ringu/Updatemodel';
import InviteFriend from './Components/ringu/InviteFriend';
import IndexTF from './Components/AddFund/traderorofile/IndexTF';
import ConfirmForm from './Components/AddFund/traderorofile/ConfirmForm';
// import { Settings } from '';
// import IndexTF from './Components/traderProfile/IndexTF'

function App() {

  
  return (
    <>
      {/* <Home/> */}
      {/* <UserSubscription/> */}
      {/* <Feed/> */}
      {/* <Discover/> */}
      {/* <TraderLounge/> */}

      <BrowserRouter>
      <Routes> 
        <Route exact
        path="/"
        element={
        <Home/>
         } 
         /> 
        <Route exact path="/Feed" element={<Feed />} />
        <Route exact path="/Login" element={<Login />} />
        {/* <Navbar/> */}
        <Route exact path="/DashBoard" element={<HomeBody />} />
        <Route exact path="/Discover" element={<Feed />} />
        <Route exact path="/Subscriptions" element={<UserSubscription />} />
        <Route exact path="/Portfolio" element={<Portfolio />} />
        <Route exact path="/traderProfile" element={<IndexTF/>} />
        <Route exact path="/DepositFunds" element={<AddFund />} />
        {/* Route exact path="/DepositFunds" element={<AddFund />} /> */}
        <Route exact path="/TraderLounge" element={<TraderLounge />} />
        <Route exact path="/CopyTrade" element={<MoneyInvest/>} />
        <Route exact path="/ViewAll" element={<ViewAll/>} />
        <Route exact path="/Settings" element={<Settings/>} />
        <Route exact path="/Privacy" element={<Privacy/>} />
        <Route exact path="/Notifications" element={<Notifications/>} />
        <Route exact path="/Trading" element={<Trading/>} />
        <Route exact path="/RecurringDeposit" element={<RecurringDeposit/>} />
        <Route exact path="/General" element={<General/>} />
        <Route exact path="/Account" element={<Account/>} />
        <Route exact path="/withdraw" element={<CashWithdrawal />} />
        <Route exact path="/update" element={<Updatemodel/>} />
        <Route exact path="/invite" element={<InviteFriend/>} />
        <Route exact path="/test" element={<ConfirmForm/>} />

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App;
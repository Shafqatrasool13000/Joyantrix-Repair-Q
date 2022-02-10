import './App.css';
import CreateCustomer from './components/CreateCustomer/CreateCustomer';
import CustomerDeviceInfo from './components/CustomerDeviceInfo/CustomerDeviceInfo';
import Navbar from './components/Navbar/Navbar';
import RepairInfo from './components/RepairInfo/RepairInfo';
import Footer from './components/Footer/Footer';
import {

  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Table from './components/tables/Table';
function App() {
  console.log(JSON.parse(window.localStorage.getItem('user')))
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <CreateCustomer />
        </Route>
        <Route  path="/customer-device">
          <CustomerDeviceInfo />
        </Route>
        <Route  path="/repair-info">
          <RepairInfo />
        </Route>
        <Route  path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer/>
      <Table/>
    </>
  );
}

export default App;

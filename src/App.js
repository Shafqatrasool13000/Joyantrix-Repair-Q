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
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <CreateCustomer />
        </Route>
        <Route exact path="/customer-device">
          <CustomerDeviceInfo />
        </Route>
        <Route exact path="/repair-info">
          <RepairInfo />
        </Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;

import './App.css';
import CreateCustomer from './components/CreateCustomer/CreateCustomer';
import CustomerDeviceInfo from './components/DeviceInfo/DeviceInfo';
import RepairInfo from './components/RepairInfo/RepairInfo';
import Footer from './components/Footer/Footer';
import {
  Switch,
  Route
} from "react-router-dom";
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import DummyHomepage from './Dummy Web/DummyHomepage'
import { useLocation } from 'react-router-dom';
import Loginpage from './components/Login/LogingInPage';
import CustomerList from './components/ListTables/CustomerList';
import DevicesList from './components/ListTables/DevicesList';
import RepairInfoList from './components/ListTables/RepairInfoList';
import Signature from './components/Signature';

function App() {
  const history = useHistory();
  const location = useLocation()
  useEffect(() => {
    JSON.parse(window.localStorage.getItem('user')) !== null ? history.push('/customers-table') : history.push('/homepage');
  }, [])

  return (
    <>
      {location.pathname === '/homepage' || location.pathname === '/login' ? null
        : <Navbar />
      }
      <Switch>
        <Route exact path="/login">
          <Loginpage />
        </Route>
        <Route path="/create-customer">
          <CreateCustomer />
        </Route>
        <Route path="/customers-table">
          <CustomerList />
        </Route>
        <Route path="/device-info">
          <CustomerDeviceInfo />
        </Route>
        <Route path="/device-table">
          <DevicesList />
        </Route>
        <Route path="/repair-info">
          <RepairInfo />
        </Route>
        <Route path="/repair-info-table">
          <RepairInfoList />
        </Route>
        <Route path="/homepage">
          <DummyHomepage />
        </Route>
      </Switch>
      {location.pathname === '/homepage' || location.pathname === '/login' ? null
        : <Footer />
      }

    </>
  );
}

export default App;












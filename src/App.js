import './App.css';
import CreateCustomer from './components/CreateCustomer';
import CustomerDeviceInfo from './components/CustomerDeviceInfo';
import RepairInfo from './components/RepairInfo';

function App() {
  return (
    <div className="App">
      <CreateCustomer/>
      <CustomerDeviceInfo/>
      <RepairInfo/>
    </div>
  );
}

export default App;

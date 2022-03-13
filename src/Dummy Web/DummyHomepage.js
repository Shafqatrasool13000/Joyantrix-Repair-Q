import Header from "./components/header/Header";
import QualityTime from "./components/qualityTime/QualityTime";
import WorkProcess from "./components/workProcess/WorkProcess";
import AdvanceGuidance from "./components/advanceguidance/AdvanceGuidance";
import student from './assets/student.jpg'
import quality from './assets/mobile.jpg'
import TestWithUs from "./components/testwithus/TestWithUs";
import QualityTime2 from './components/qualityTime/QualityTime2';
import Footer from "../components/Footer/Footer";
import './Homepage.css'
import DummyFooter from "./components/footer/DummyFooter";

function DummyHomepage() {
  return (
    <div id='dummy-home-main'>
      <Header />
       <div className='container'>
        <QualityTime image={student} />
        <WorkProcess />
        <AdvanceGuidance />
       <QualityTime2 image={quality} />
        <TestWithUs />
      </div>
        <DummyFooter/> 
       
    </div>
  );
}

export default DummyHomepage;

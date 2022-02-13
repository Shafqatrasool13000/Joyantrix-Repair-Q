import Header from "./components/header/Header";
import QualityTime from "./components/qualityTime/QualityTime";
import WorkProcess from "./components/workProcess/WorkProcess";
import AdvanceGuidance from "./components/advanceguidance/AdvanceGuidance";
import student from './assets/student.svg'
import quality from './assets/quality.svg'
import TestWithUs from "./components/testwithus/TestWithUs";
import QualityTime2 from './components/qualityTime/QualityTime2';
import Footer from "../components/Footer/Footer";


function DummyHomepage() {
  return (
    <>
      <Header />
      <div className='container'>
        <QualityTime image={student} />
        <WorkProcess />
        <AdvanceGuidance />
        <QualityTime2 image={quality} />
        <TestWithUs />
      </div>
        <Footer/>
       
    </>
  );
}

export default DummyHomepage;

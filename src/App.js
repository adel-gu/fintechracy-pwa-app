import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';
import Main from './components/main';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Congrats from './assets/white-theme/congrats.png';
import CloseIcon from './assets/close-gray.svg';
import CloseIconWhite from './assets/close-white.svg';
import BarCodeIcon from './assets/bar-code-img.png';
import Phone from './assets/phone.svg';
import ReportImg from './assets/rerport.png';

function App() {
  const [show, setShow] = useState(false);
  const [showBarCode, setShowBarCode] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const handleClose = () => {
    setShow(false);
    handleClick(0);
  };

  const handleClick = (id) => {
    const recieptItems = document.querySelectorAll('.reciept-item');

    recieptItems.forEach((item, index) => {
      if (index === id) item.classList.add('border-primary');
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  return (
    <div className="h-screen flex flex-col relative">
      <div className="pt-4 px-4 grow">
        <NavBar setShowBarCode={setShowBarCode} />
        <Main setShowReport={setShowReport} />
      </div>
      <Footer />
      <Modal
        show={show}
        onHide={handleClose}
        className="bg-modal-bg absolute w-[100vw] h-[100vh] overflow-scroll"
      >
        <div className="h-screen flex flex-col justify-center items-center ">
          <div className="bg-[#fff] p-3 text-center rounded-md">
            <Modal.Header closeButton>
              <div className="flex justify-end">
                <button className="" onClick={handleClose}>
                  <img className="" src={CloseIcon} alt="close" />
                </button>
              </div>
              <Modal.Title className="flex justify-center">
                <img
                  className="w-[120.83px] h-[115.83px]"
                  src={Congrats}
                  alt="congrats"
                />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="w-2/3 mx-auto">
              There's a fresh receipt in your inbox!
            </Modal.Body>
            <Modal.Footer className="flex flex-col">
              <Button className="bg-primary text-[#fff] py-3 rounded-md my-3">
                Check it
              </Button>
              <Button className="text-white-gray-3">Remind me later</Button>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
      <Modal
        show={showBarCode}
        onHide={handleClose}
        className="bg-[#000] absolute w-[100vw] h-[100vh] overflow-scroll text-[#fff]"
      >
        <div className="h-screen flex flex-col items-center justify-between">
          <Modal.Header closeButton className="w-full">
            <div className="flex justify-end p-4">
              <button className="" onClick={() => setShowBarCode(false)}>
                <img className="" src={CloseIconWhite} alt="close" />
              </button>
            </div>
            <div className="flex justify-center mt-6 relative">
              <div className="w-[60px] h-[60px] border rounded-full p-8  border-l-[#000] border-r-[#000] absolute animate-spin-slow"></div>
              <img
                className="rounded-full animate-wiggle"
                src={Phone}
                alt="phone"
              />
            </div>
          </Modal.Header>
          <Modal.Body className="w-2/3 mx-auto grow mt-20 mb-5">
            <img src={BarCodeIcon} alt="Barcode" />
          </Modal.Body>
          <Modal.Footer className="flex flex-col text-center w-1/2">
            <p className="text-[10.37px] font-medium my-10">
              Let Store Owners Scan Your Barcode to get your receipts
            </p>
          </Modal.Footer>
        </div>
      </Modal>
      <Modal
        show={showReport}
        onHide={handleClose}
        className="bg-[#000] absolute w-[100vw] h-[100vh] overflow-scroll text-[#fff]"
      >
        <div className="flex justify-end p-4">
          <button className="" onClick={() => setShowReport(false)}>
            <img className="" src={CloseIconWhite} alt="close" />
          </button>
        </div>
        <div className="h-screen flex flex-col items-center justify-between">
          <Modal.Body className="w-5/6 mt-24">
            <img src={ReportImg} alt="Barcode" className="mb-16" />
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}

export default App;

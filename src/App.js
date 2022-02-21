import { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Modal } from "./Components/Modal";
import "./styles.css";

const domElement = document.getElementById("modals");

export default function App() {
  const [stateModal, setStateModal] = useState(false);

  let openButtonRef = useRef();

  const openModal = () => setStateModal(true);
  const closeModal = () => setStateModal(false);

  return (
    <div id="App" className="flex flex-col justify-center items-center">
      <h1>Portals Example</h1>
      <div className="flex flex-col items-center justify-center">
        <p>This is a div with a defined height and overflow hidden</p>
        <button ref={openButtonRef} onClick={openModal}>
          Open modal
        </button>
      </div>
      {stateModal &&
        ReactDOM.createPortal(
          <Modal close={closeModal} openButtonRef={openButtonRef}>
            <p>Modal from App.js</p>
          </Modal>,
          domElement
        )}
    </div>
  );
}

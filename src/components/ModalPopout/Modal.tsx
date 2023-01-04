import React from "react";
import ReactDOM from "react-dom";
import "./Modalpopup.css"

interface ModalProps {
  onBackDropClick: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onBackDropClick, children }) => {
  return ReactDOM.createPortal(
    <div className="overlay" onClick={onBackDropClick}>
      {children}
    </div>,
    document.getElementById("modal")!
  );
};

export default Modal;

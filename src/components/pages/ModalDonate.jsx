import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import '../../scss/infoBank.scss'
import closeImg from "../../assets/svg/close.svg"
import qr from "../../assets/img/qr.jpg"

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;
const ModalContainer = styled(motion.div)`
  width: 50%;
  height: 65vh;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
`;
const CloseButton = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`;

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 }
};
const containerVariant = {
  initial: { top: "-50%", transition: { type: "spring" } },
  isOpen: { top: "50%" },
  exit: { top: "-50%" }
};

export const ModalDonate = ({ isOpen, close }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
        >
          <ModalContainer variants={containerVariant}>
            <div
              onClick={close}
              className="closeButton"
            >
              <img src={closeImg} alt="close" />
            </div>
            <div className="infoBank">
              <h1 className="titleInfoBank">You can donate me here! Thank you very much!</h1>
              <p>Account Owner: TRAN QUOC BAO</p>
              <p>Bank Account Number: 102872595231/0852102000 - VietinBank</p>
            </div>
            <div className="imgCont">
              <img src={qr} alt="" />
            </div>
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  )
}

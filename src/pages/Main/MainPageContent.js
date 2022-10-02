import "./MainPageContent.scss";
import Modal from "./Modal";
import { useState } from "react";
import ClassModal from "./ClassModal";
import Frame1 from "./Frame1";
import Frame2 from "./Frame2";

const MainPageContent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [classModalOpen, setClassModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const openClassModal = () => {
    setClassModalOpen(true);
  };
  const closeClassModal = () => {
    setClassModalOpen(false);
  };
  return (
    <div className="body">
      {classModalOpen && <ClassModal close={closeClassModal}></ClassModal>}
      {modalOpen && <Modal close={closeModal}></Modal>}
      <Frame1></Frame1>
      <Frame2 openModal={openModal} openClassModal={openClassModal}></Frame2>
    </div>
  );
};
export default MainPageContent;

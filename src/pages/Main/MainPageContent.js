import "./MainPageContent.scss";
import Modal from "./Modal";
import { useState } from "react";
import ClassModal from "./ClassModal";
import Frame1 from "./Frame1";
import Frame2 from "./Frame2";
import { useDispatch, useSelector } from "react-redux";
import { isOpenModalActions } from "../../redux/slice/isOpenModalSlice";
import { useEffect } from "react";

const MainPageContent = () => {
  const [classModalOpen, setClassModalOpen] = useState(false);
  const isOpen = useSelector((state) => state.isOpenModal.isOpen);
  const [start, setStart] = useState(0);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(isOpenModalActions.changeIsOpen());
  };
  const closeModal = () => {
    dispatch(isOpenModalActions.changeIsOpen());
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
      {isOpen && <Modal close={closeModal}></Modal>}
      <Frame1></Frame1>
      <Frame2 openModal={openModal} openClassModal={openClassModal}></Frame2>
    </div>
  );
};
export default MainPageContent;

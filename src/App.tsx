import { useState } from "react";
import "./App.css";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";
// import MainLayout from "./components/layout/MainLayout";

function App() {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <Container>
        <div className="h-screen w-full flex justify-center items-center">
          <Button
            variant="ghost"
            className="w-[500px]"
            // outline
            onClick={() => {
              toggleModal();
            }}
          >
            Open Modal
          </Button>
          <Modal onClose={handleModalClose} isOpen={modal}>
            <Modal.Header>
              <Modal.CloseButton>Close</Modal.CloseButton>
            </Modal.Header>
            <h1>This is modal</h1>
          </Modal>
        </div>
      </Container>
    </>
  );
}

export default App;

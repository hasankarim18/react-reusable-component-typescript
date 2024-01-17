import {
  useRef,
  MouseEvent,
  createContext,
  useContext,
  ReactNode,
} from "react";
import cn from "../../utils/cn";
import { createPortal } from "react-dom";

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

type TModalContext = {
  onClose: () => void;
};

type TCloseButton = {
  children?: ReactNode;
};

type THeader = TCloseButton;

const ModalContext = createContext<TModalContext | null>(null);

const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 w-full bg-gray-500/70 invisible flex justify-center items-center",
          {
            visible: isOpen,
          }
        )}
        onClick={(e) => {
          handleOutsideClose(e);
        }}
      >
        <div
          ref={containerRef}
          className="bg-white w-full p-4 max-w-md rounded-lg"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    <button
      className="bg-red-400 hover:bg-red-600  rounded-lg px-1 py-2"
      onClick={onClose}
    >
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="4"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: THeader) => {
  return <div className="flex w-full">{children}</div>;
};

Modal.CloseButton = CloseButton;
Modal.Header = Header;

export default Modal;

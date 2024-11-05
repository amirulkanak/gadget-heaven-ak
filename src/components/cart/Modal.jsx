import SuccessIcon from '../../assets/icons/success.png';
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <dialog className="da-modal da-modal-open da-modal-middle">
      <div className="da-modal-box flex flex-col items-center gap-6">
        <img className="size-16" src={SuccessIcon} alt="" />
        <h2 className="text-clr-woodsmoke text-[1.5rem] font-bold">
          Payment Successfully
        </h2>
        <div className="text-center space-y-2">
          <p className="text-clr-woodsmoke/60 text-base font-medium">
            Thanks for purchasing
          </p>
          {children}
        </div>
        <button onClick={onClose} className="da-btn w-full">
          Close
        </button>
      </div>
    </dialog>
  );
};

export default Modal;



const defaultProps = {
  title: "ModalTitle",
  onClose: () => {}
};

export default function Modal(props) {
  const { title, onClose } = { ...defaultProps, ...props };
  return (
    <div className="modal__backdrop d-flex justify-content-center align-items-center">
      <div className="modal__wrapper">
        <div className="d-flex justify-content-between align-items-center">
          <h2>{title}</h2>
          <div className="modal__close" onClick={onClose}>
            x
          </div>
        </div>
        <div className="modal__content">{props.children}</div>
      </div>
    </div>
  );
}
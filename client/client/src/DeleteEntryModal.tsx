type Props = {
  deleteEntryModalClass: string;
  onCancel: () => void;
  onConfirm: () => void;
};
export default function DeleteEntryModal({
  deleteEntryModalClass,
  onCancel,
  onConfirm,
}: Props) {
  return (
    <article className={deleteEntryModalClass}>
      <div
        id="modalContainer"
        className="modal-container d-flex justify-center align-center">
        <div className="modal row">
          <div className="column-full d-flex justify-center">
            <p>Are you sure you want to delete this entry?</p>
          </div>
          <div className="column-full d-flex justify-between">
            <button
              className="modal-button"
              id="cancelButton"
              onClick={onCancel}>
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="modal-button red-background white-text"
              id="confirmButton">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

import { FormEvent } from 'react';
import './data';
import { addEntry, updateEntry } from './data';
type Props = {
  formViewClass: string;
  title: string;
  formTitle: string;
  url: string;
  notes: string;
  deleteButtonClass: string;
  viewSwapFunction: () => void;
  pageTitle: string;
  targetEntry: {
    formTitle: string;
    formURL: string;
    formNotes: string;
    entryId: number;
  };
  onDeleteButtonClick: () => void;
};
export default function EntryFormView({
  targetEntry,
  pageTitle,
  formViewClass,
  title,
  formTitle,
  url,
  notes,
  deleteButtonClass,
  viewSwapFunction,
  onDeleteButtonClick,
}: Props) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputtedEntries = Object.fromEntries(formData.entries());
    if (pageTitle === 'Edit Entry') {
      inputtedEntries.entryId = targetEntry.entryId;
      updateEntry(inputtedEntries);
    } else {
      addEntry(inputtedEntries);
    }

    event.currentTarget.reset();
    {
      viewSwapFunction();
    }
  }
  return (
    <div className={formViewClass}>
      <div className="container" data-view="entry-form">
        <div className="row">
          <div className="column-full d-flex justify-between">
            <h1 id="formH1">{title}</h1>
          </div>
        </div>
        <form id="entryForm" onSubmit={handleSubmit}>
          <div className="row margin-bottom-1">
            <div className="column-half">
              <img
                className="input-b-radius form-image"
                id="formImage"
                src="images/placeholder-image-square.jpg"
                alt="image of entry image"
              />
            </div>
            <div className="column-half">
              <label className="margin-bottom-1 d-block" htmlFor="title">
                Title
              </label>
              <input
                required
                className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
                type="text"
                id="formTitle"
                name="formTitle"
                defaultValue={formTitle}
              />
              <label className="margin-bottom-1 d-block" htmlFor="photoUrk">
                Photo URL
              </label>
              <input
                required
                className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
                type="text"
                id="formURL"
                name="formURL"
                defaultValue={url}
              />
            </div>
          </div>
          <div className="row margin-bottom-1">
            <div className="column-full">
              <label className="margin-bottom-1 d-block" htmlFor="formNotes">
                Notes
              </label>
              <textarea
                required
                className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
                name="formNotes"
                id="formNotes"
                cols={30}
                rows={10}
                defaultValue={notes}></textarea>
            </div>
          </div>
          <div className="row">
            <div className="column-full d-flex justify-between">
              <button
                onClick={onDeleteButtonClick}
                className={deleteButtonClass}
                type="button"
                id="deleteEntry">
                Delete Entry
              </button>
              <button
                type="submit"
                className="input-b-radius text-padding purple-background white-text">
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
      ;
    </div>
  );
}

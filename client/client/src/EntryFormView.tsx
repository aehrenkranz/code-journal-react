import { FormEvent } from 'react';
import { useState } from 'react';
import './data';
import { Entry, addEntry, removeEntry, updateEntry } from './data';
import DeleteEntryModal from './DeleteEntryModal';
type Props = {
  targetEntry: Entry | null;
  handleViewSwap: () => void;
};
export default function EntryFormView({ targetEntry, handleViewSwap }: Props) {
  const [formTitle, setFormTitle] = useState(targetEntry?.formTitle ?? '');
  const [formURL, setFormURL] = useState(targetEntry?.formURL ?? '');
  const [formNotes, setFormNotes] = useState(targetEntry?.formNotes ?? '');
  const [modalView, setModalView] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputtedEntries = Object.fromEntries(formData.entries());
    if (targetEntry) {
      inputtedEntries.entryId = targetEntry.entryId;
      updateEntry(inputtedEntries);
    } else {
      addEntry(inputtedEntries);
    }
    event.currentTarget.reset();
    {
      handleViewSwap();
    }
  }
  return (
    <div className="container" data-view="entry-form">
      <div className="row">
        <div className="column-full d-flex justify-between">
          <h1 id="formH1">{targetEntry ? 'Edit Entry' : 'New Entry'}</h1>
        </div>
      </div>
      <form id="entryForm" onSubmit={handleSubmit}>
        <div className="row margin-bottom-1">
          <div className="column-half">
            <img
              className="input-b-radius form-image"
              id="formImage"
              src={formURL || 'images/placeholder-image-square.jpg'}
              alt="image of entry image"
            />
          </div>
          <div className="column-half">
            <label className="margin-bottom-1 d-block" htmlFor="title">
              Title
            </label>
            <input
              onChange={(event) => setFormTitle(event.currentTarget.value)}
              required
              className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
              type="text"
              id="formTitle"
              name="formTitle"
              value={formTitle}
            />
            <label className="margin-bottom-1 d-block" htmlFor="photoUrk">
              Photo URL
            </label>
            <input
              value={formURL}
              onChange={(event) => setFormURL(event.currentTarget.value)}
              required
              className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
              type="text"
              id="formURL"
              name="formURL"
            />
          </div>
        </div>
        <div className="row margin-bottom-1">
          <div className="column-full">
            <label className="margin-bottom-1 d-block" htmlFor="formNotes">
              Notes
            </label>
            <textarea
              value={formNotes}
              onChange={(event) => setFormNotes(event.currentTarget.value)}
              required
              className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
              name="formNotes"
              id="formNotes"
              cols={30}
              rows={10}></textarea>
          </div>
        </div>
        <div className="row">
          <div className="column-full d-flex justify-between">
            <button
              onClick={() => setModalView(true)}
              type="button"
              id="deleteEntry"
              className={targetEntry ? '' : 'invisible'}>
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
      {modalView ? (
        <DeleteEntryModal
          onConfirm={() => {
            handleViewSwap();
            setModalView(false);
            removeEntry(targetEntry.entryId);
          }}
          onCancel={() => setModalView(false)}
        />
      ) : (
        false
      )}
    </div>
  );
}

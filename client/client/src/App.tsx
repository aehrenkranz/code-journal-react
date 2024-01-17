import './layout.css';
import './styles.css';
import './reset.css';
import './assets/pencil-solid.svg';
import EntriesView from './EntriesView';
import EntryFormView from './EntryFormView';
import { useState } from 'react';
import { readEntries, removeEntry } from './data';
import DeleteEntryModal from './DeleteEntryModal';

function App() {
  const [formViewClass, setFormViewClass] = useState('hidden');
  const [entriesViewClass, setEntriesViewClass] = useState('');
  const [view, setView] = useState('entriesView');
  const [targetEntryForm, setTargetEntryForm] = useState({
    formTitle: '',
    formURL: '',
    formNotes: '',
    entryId: 0,
  });
  const [title, setTitle] = useState('New Entry');
  const [deleteButtonClass, setDeleteButtonClass] = useState('hidden');
  const [modalClass, setModalClass] = useState('hidden');

  function handleNewButtonClick() {
    setTitle('New Entry');
    setTargetEntryForm({
      formTitle: '',
      formURL: '',
      formNotes: '',
      entryId: 0,
    });
    handleViewSwap();
  }
  function handleEntriesViewSwap() {
    setView('entriesView');
    setEntriesViewClass('');
    setFormViewClass('hidden');
    setDeleteButtonClass('invisible');
  }
  function handleViewSwap() {
    if (view === 'entriesView') {
      setView('formView');
      setEntriesViewClass('hidden');
      setFormViewClass('');
      setDeleteButtonClass('invisible');
    } else {
      setView('entriesView');
      setEntriesViewClass('');
      setFormViewClass('hidden');
      setDeleteButtonClass('invisible');
    }
  }

  function handleEditButtonClick(event) {
    const targetEntry = event.currentTarget.closest('li').dataset['entryId'];
    readEntries().forEach((element) => {
      if (Number(targetEntry) === element.entryId) {
        handleViewSwap();
        setDeleteButtonClass('');
        setTitle('Edit Entry');
        setTargetEntryForm(element);
      }
    });
  }

  function handleDeleteButtonClick() {
    setModalClass('');
  }

  return (
    <>
      <header className="header purple-background">
        <div className="container">
          <div className="row">
            <div className="column-full d-flex align-center">
              <h1 className="white-text">Code Journal</h1>
              <h3>
                <a
                  onClick={handleEntriesViewSwap}
                  id="entriesLink"
                  className="entries-link white-text"
                  href="#">
                  Entries
                </a>
              </h3>
            </div>
          </div>
        </div>
      </header>
      <EntryFormView
        targetEntry={targetEntryForm}
        pageTitle={title}
        title={title}
        formTitle={targetEntryForm.formTitle}
        url={targetEntryForm.formURL}
        notes={targetEntryForm.formNotes}
        formViewClass={formViewClass}
        deleteButtonClass={deleteButtonClass}
        viewSwapFunction={() => handleEntriesViewSwap()}
        onDeleteButtonClick={handleDeleteButtonClick}
      />
      <EntriesView
        entriesView={entriesViewClass}
        onNewButtonClick={handleNewButtonClick}
        onEditButtonClick={handleEditButtonClick}
      />
      <DeleteEntryModal
        deleteEntryModalClass={modalClass}
        onCancel={() => setModalClass('hidden')}
        onConfirm={function d() {
          removeEntry(targetEntryForm.entryId);
          setModalClass('hidden');
          handleViewSwap();
        }}
      />
    </>
  );
}

export default App;

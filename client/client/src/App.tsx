import './layout.css';
import './styles.css';
import './reset.css';
import './assets/pencil-solid.svg';
import EntriesView from './EntriesView';
import EntryFormView from './EntryFormView';
import { useState } from 'react';
let formView = 'hidden';
const editView='hidden'
let entriesView = '';
function App() {
  const [view, setView] = useState('entriesView');
   function handleEntriesViewSwap() {
    setView('entriesView');
    entriesView = '';
    formView = 'hidden';
  }
  function handleViewSwap() {
    if (view === 'entriesView') {
      setView('formView');
      entriesView = 'hidden';
      formView = '';
    } else {
      setView('entriesView');
      entriesView = '';
      formView = 'hidden';
    }
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
      <EntryFormView title='New Entry' formTitle='' url='' notes='' formView={formView} deleteButtonClass='invisible'viewSwapFunction={()=>handleEntriesViewSwap()} />
      <EntriesView entriesView={entriesView} onNewButtonClick={handleViewSwap} />
    </>
  );
}

export default App;

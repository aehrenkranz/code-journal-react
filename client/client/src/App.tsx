import './layout.css';
import './styles.css';
import './reset.css';
import './assets/pencil-solid.svg';
import EntriesView from './EntriesView';
import EntryFormView from './EntryFormView';
import { useState } from 'react';
import { Entry } from './data';
import NavBar from './NavBar';
function App() {
  const [isEditing, setEditing] = useState<Entry | null | undefined>();

  return (
    <>
      <NavBar onEntriesButtonClick={() => setEditing(undefined)} />
      {isEditing !== undefined ? (
        <EntryFormView
          targetEntry={isEditing}
          handleViewSwap={() => {
            setEditing(undefined);
          }}
        />
      ) : (
        <EntriesView
          onNewButtonClick={() => setEditing(null)}
          onEditButtonClick={(entry) => {
            setEditing(entry);
          }}
        />
      )}
    </>
  );
}
export default App;

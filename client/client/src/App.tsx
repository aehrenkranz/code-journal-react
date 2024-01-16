import './layout.css';
import './styles.css';
import './reset.css';
import './assets/pencil-solid.svg';
import EntriesView from './EntriesView';
import EntryFormView from './EntryFormView';
function App() {
  return (
    <>
      <header className="header purple-background">
        <div className="container">
          <div className="row">
            <div className="column-full d-flex align-center">
              <h1 className="white-text">Code Journal</h1>
              <h3>
                <a
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
      <EntryFormView />
      <EntriesView />
    </>
  );
}

export default App;

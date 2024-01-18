import { readEntries, Entry } from './data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
type Props = {
  onNewButtonClick: () => void;
  onEditButtonClick: (entry: Entry) => void;
};
export default function EntriesView({
  onNewButtonClick,
  onEditButtonClick,
}: Props) {
  const localStorageEntries = readEntries();

  return (
    <div className="container" data-view="entries">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <h3>
            <a
              id="formLink"
              className="white-text form-link"
              href="#"
              onClick={onNewButtonClick}>
              NEW
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <ul className="entry-ul" id="entryUl">
            {localStorageEntries.length > 0 ? (
              localStorageEntries.map((element) => {
                return (
                  <li data-entry-id={element.entryId} key={element.entryId}>
                    <div className="row">
                      <div className="column-half">
                        <img
                          className="input-b-radius form-image"
                          src={element.formURL}></img>
                      </div>
                      <div className="column-half">
                        <div className="row">
                          <div className="column-full d-flex justify-between align-center">
                            <h3>{element.formTitle}</h3>
                            <button onClick={() => onEditButtonClick(element)}>
                              <FontAwesomeIcon
                                cursor="pointer"
                                icon={faPencil}
                              />
                            </button>
                          </div>
                          <p>{element.formNotes}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })
            ) : (
              <h2>No entries have been recorded.</h2>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

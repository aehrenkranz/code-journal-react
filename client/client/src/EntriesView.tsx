import { readEntries } from './data';
import { ReactNode, useEffect } from 'react';
type Props = {
  entriesView: string;
  onNewButtonClick: () => void;
};
export default function EntriesView({ entriesView, onNewButtonClick }: Props) {
  const localStorageEntries = readEntries();
  const liveEntries:ReactNode[] = [];
  localStorageEntries.forEach((element) => {
    if (element) {
      liveEntries.push(
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
                </div>
                <p>{element.formNotes}</p>
              </div>
            </div>
          </div>
        </li>
      );
    }
  });

  return (
    <div className={entriesView}>
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
              {liveEntries}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

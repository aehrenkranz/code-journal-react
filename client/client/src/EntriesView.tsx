export default function EntriesView() {
  return (
    <div className="container hidden" data-view="entries">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <h3>
            <a id="formLink" className="white-text form-link" href="#">
              NEW
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <ul className="entry-ul" id="entryUl">
            <li>
              <div className="row">
                <div className="column-half">
                  <img
                    className="imput-b-radius form-image"
                    src="./assets/react.svg"></img>
                </div>
                <div className="column-half">
                  <div className="row">
                    <div className="column-full d-flex justify-between align-center">
                      <h3>test</h3>
                      <img src="./assets/pencil-solid.svg"></img>
                    </div>
                    <p>test</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="column-half">
                  <img
                    className="imput-b-radius form-image"
                    src="./assets/react.svg"></img>
                </div>
                <div className="column-half">
                  <div className="row">
                    <div className="column-full d-flex justify-between align-center">
                      <h3>test</h3>
                      <img src="./assets/pencil-solid.svg"></img>
                    </div>
                    <p>test</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

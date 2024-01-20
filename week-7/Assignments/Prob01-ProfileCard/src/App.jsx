import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="cardContainer">
            <div className="cardContent">
              <div className="card-avatar">
                <img src="" alt="user avatar" />
              </div>
              <div className="card-avatarInfo">
                <span>Saquib Asghar</span>
                <span>26</span>
                <span>Delhi</span>
              </div>
              <div className="card-avatarMetaInfo">
                <div>
                  <p>80k</p>
                  <p>folowers</p>
                </div>
                <div>
                  <p>803k</p>
                  <p>likes</p>
                </div>
                <div>
                  <p>1.4k</p>
                  <p>photos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState({
    title: "",
    name: "",
  });
  const fetchRandomUser = async () => {
    const { results } = (await axios.get("https://randomuser.me/api/")).data;

    console.log(results[0]);
  };

  useEffect(() => {
    // fetchRandomUser();
  }, []);
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[400px] shadow-2xl p-2">
          <div className="flex flex-col justify-center flex-wrap gap-2 max-sm:flex-row">
            <div className="relative max-sm:bg-none h-[200px] mb-14 flex justify-center items-end bg-[url('./assets/background.jpg')] max-sm:justify-center max-sm:items-center max-sm:mb-0 max-sm:grow max-sm:h-28">
              <img
                className="absolute bottom-[-50px] rounded-full mx-auto max-sm:relative max-sm:bottom-0"
                src="https://randomuser.me/api/portraits/men/66.jpg"
                alt="user avatar"
                width={100}
              />
            </div>
            <div className="flex flex-col mb-2 max-sm:justify-center max-sm:grow-[2] max-sm:mb-0">
              <div className="mb-3">
                <span className="text-xl font-bold">Johnathan White</span>
                <i className="text-xl ms-1">26</i>
              </div>
              <span>Australia</span>
            </div>
            <div className="max-sm:flex max-sm:flex-col max-sm:grow">
              <div className="flex justify-evenly mt-4 py-5 border-t border-[#4d4d4d] max-sm:border-none">
                <div>
                  <p className="text-xl font-bold">80K</p>
                  <p>Followers</p>
                </div>
                <div>
                  <p className="text-xl font-bold">803K</p>
                  <p>Likes</p>
                </div>
                <div>
                  <p className="text-xl font-bold">1.4K</p>
                  <p>Photos</p>
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

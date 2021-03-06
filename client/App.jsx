import React, { useState, useEffect } from "react";
import ChirpCard from "./components/ChirpCard.jsx";

const App = () => {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [chirps, setChirps] = useState([]);

  useEffect(() => {
    // get request
    fetch("http://localhost:3000/api/chirps")
    .then(res=> res.json())
    .then(chirps => setChirps(chirps))
    .catch(err => console.log(err));
  }, []);


  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleChirpSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name: 
    }

    fetch("http:localhost:3000/api/chirps", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body:
    })






    const newChirp = {
      userid: 1,
      content: content,
      location: "Birmingham, AL"
    };

    // post request
    fetch("http:localhost:3000/api/chirps", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body:
    })
  };

  const getChirps = () => {
    fetch('http://localhost:3000/api/chirps')
      .then(res => res.json())
      .then(res => setChirps(res))
  }

  const postChirp = async () => {
    console.log('test');
    const userData = {
      userid: 1,
      content: content,
      location: 'unknown'
    };
    try {
      const add = await fetch('http://localhost:3000/api/chirps/', {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(userData)
      })
    } catch {
      console.log(e);
    }

  };


  return (
    <>
      <div className="container text-body text-center">
        <div className="row">
          <div className="col-12 p-0">
            <nav>
              <img
                className="banner"
                src="./assets/banner.jpg"
                alt="logo for awesome site yay"
              />
              <h1>Ghibli Chirpr</h1>
            </nav>
          </div>
        </div>
        <div className="row">
          <form>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Username"
                aria-label="Username"
                value={username}
                onChange={handleUsernameChange}
              />
              <textarea
                className="form-control mb-2"
                aria-label="With textarea"
                placeholder="(500 characters max)"
                value={content}
                onChange={handleContentChange}
                cols="30"
                rows="10"
              ></textarea>
              <button className="btn btn-dark" onClick={handleChirpSubmit}>
                Chirp It!
              </button>
            </div>
          </form>
          <div className=" chirps mb-4">
            {chirps.map((chirp) => (
              <ChirpCard
                key={chirp.id}
                username={chirp.name}
                content={chirp.content}
                location={chirp.location}
                created={chirp._created}
                id={chirp.id}
                handleDeleteChirp={handleDeleteChirp}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
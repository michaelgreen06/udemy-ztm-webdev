import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./Components/CardList";
import Title from "./Title";
import Button from "./Components/Button";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    function createApiArray() {
      const array = [];
      for (let i = 0; i < 12; i++) {
        array.push("https://icanhazdadjoke.com/");
      }
      return array;
    }
    const urls = createApiArray();
    Promise.all(
      urls.map((url) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            fetch(url, { headers: { Accept: "application/json" } })
              .then((resp) => resp.json())
              .then((data) => resolve(data))
              .catch((error) => console.error(error));
          }, 50);
        });
      })
    ).then((array) => setJokes(array));
  }, []);
  return jokes.length ? (
    <div>
      <Title />
      <Button />
      <CardList jokes={jokes} />
    </div>
  ) : (
    <h1 className="vh-100 flex items-center justify-center f1">Loading...</h1>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./Components/CardList";
import Title from "./Title";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    function createApiArray() {
      const array = [];
      for (let i = 0; i < 10; i++) {
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
  return (
    <div>
      <Title />
      <CardList jokes={jokes} />
    </div>
  );
}

export default App;

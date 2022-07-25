import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3200/");
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <body>
      <header>
        <h2>{data.restaurant.name}</h2>
        <div>
          <p>{data.restaurant.description}</p>
          <img src={data.restaurant.picture} alt="header image" />
        </div>
      </header>
      <section>
        {data.categories.map((categories, index) => {
          // console.log(categories.meals[index]);
          return isLoading ? (
            <span>En cours de chargement... </span>
          ) : (
            <div>
              <h3 key={index}>{categories.name}</h3>
              {data.categories.map((meals, index) => {
                // console.log(meals[index]);
                return isLoading ? (
                  <span>En cours de chargement... </span>
                ) : (
                  <h4 key={index}>{meals[index].title}</h4>
                );
              })}
              {/* <p>{categories.meals[index].decription}</p> */}
            </div>
          );
        })}
      </section>
    </body>
  );
}

export default App;

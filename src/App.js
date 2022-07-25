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
    <div>
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

          return (
            <div key={index}>
              <h3>{categories.name}</h3>
              {categories.meals.map((meals, index) => {
                // console.log(meal[index]);
                return <h4 key={index}>{meals[index]}</h4>; //
              })}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;

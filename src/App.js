import { useState, useEffect } from "react";
import "./App.css";
import "./assets/css/fonts.css";
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
      <header className="header">
        <img src="../src/assets/img/logo-teal.svg" alt="logo" />
      </header>
      <div className="restback">
        <section className="restaurant">
          <div>
            <h2>{data.restaurant.name}</h2>
            <p>{data.restaurant.description}</p>
          </div>
          <div>
            <img
              className="picturehead"
              src={data.restaurant.picture}
              alt="header image"
            />
          </div>
        </section>
      </div>

      <section>
        {data.categories.map((category, index) => {
          return (
            <div className="category" key={index}>
              {category.name !== "Sandwichs baguette" ? (
                category.name !== "Desserts" ? (
                  category.name !== "Boissons fraîches" ? (
                    category.name !== "Epicerie bio" ? (
                      category.name !== "Repas corporate" ? (
                        category.name !== "Couverts" ? (
                          <h3>{category.name}</h3>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )
              ) : (
                ""
              )}
              <div className="meals">
                {category.meals.map((meal, index) => {
                  // console.log(meal[index]);
                  return (
                    <nav className="thumbnail" key={index}>
                      <div className="left">
                        <h4>{meal.title}</h4>
                        <p className="description">{meal.description}</p>
                        <p className="price">
                          {meal.price} €
                          {meal.popular === true && (
                            <span className="popular"> ★ Populaire</span>
                          )}
                        </p>
                      </div>
                      <div className="rigth">
                        {meal.picture && (
                          <img src={meal.picture} alt="picture of title" />
                        )}
                      </div>
                    </nav>
                  ); //
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import Search from "./Search";

function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/AnkushVermaDev/FoodSiteApi/refs/heads/main/Menu.json"
    )
      .then((res) => res.json())
      .then((resjson) => {
        if (resjson && resjson.MenuFood) {
          setData(resjson.MenuFood);
          setFilterData(resjson.MenuFood);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function handler(userSearch) {
    if (!data.length) return;

    const filteredItems = userSearch
      ? data.filter((item) =>
          item.category.toLowerCase().includes(userSearch.toLowerCase())
        )
      : data;

    setFilterData(filteredItems);
  }

  return (
    <>
      <Search onSearch={(e) => handler(e.target.value)} />

      {loading ? (
        <div>Loading...</div>
      ) : filterData.length ? (
        filterData.map((item) => (
          <div key={item.id}>
            <h3>{item.Title}</h3>
            <img src={item.url} alt={item.Title} width="200px" />
          </div>
        ))
      ) : (
        <div>No results found</div>
      )}
    </>
  );
}

export default App;

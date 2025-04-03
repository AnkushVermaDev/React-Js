import React, { useEffect, useState, useContext } from 'react';
import '../Css/HomePage.css';
import { SearchContext } from './SearchContext';

const FetchingHome = () => {
  const [rawData, setRawData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const { userSearch } = useContext(SearchContext); // ✅ Access context properly
  const searchValue = userSearch || '';             // ✅ Safe fallback

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/AnkushVermaDev/FoodSiteApi/refs/heads/main/Menu.json')
      .then((res) => res.json())
      .then((jsonData) => setRawData(jsonData.MenuFood))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  useEffect(() => {
    if (searchValue.trim() !== '') {
      const filtered = rawData.filter((item) =>
        item.category.toLowerCase().includes(searchValue.toLowerCase()) || 
        item.Title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  }, [searchValue, rawData]);
  

  const dataToRender = filteredData.length > 0 ? filteredData : rawData;


  function AddCart(item) {
  const CartItem = {
    ID: item.id,
    name: item.Title,
    picture: item.url,
    Price: item.Price,
    Rating: item.rating,
    Category: item.category
  };

  // Retrieve the existing cart array or initialize an empty array
  let cart = JSON.parse(localStorage.getItem("cartItemList")) || [];

  // Push the new item
  cart.push(CartItem);

  // Store back as a JSON array
  localStorage.setItem("cartItemList", JSON.stringify(cart));

  console.log("Cart Updated: ", cart);
}


  

  return (
    <div className="Maincontainer">
      {dataToRender.map((item, index) => (
        <div className="foodpage" key={index}>
          <img src={item.url} alt={item.Title} />
          <h2>{item.Title}</h2>
          <button onClick={()=>AddCart(item)}>Cart</button>
        </div>
      ))}
    </div>
  );
};

export default FetchingHome;

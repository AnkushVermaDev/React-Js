import React from "react";

const Search = ({ onSearch }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <input
        type="search"
        placeholder="Search by category..."
        onChange={onSearch}
        style={{
          padding: "8px",
          width: "200px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default Search;

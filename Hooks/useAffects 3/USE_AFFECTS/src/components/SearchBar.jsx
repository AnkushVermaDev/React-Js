const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search for a food..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default SearchBar;

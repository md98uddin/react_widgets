import React, { useEffect, useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [searchResponse, setSearchResponse] = useState([]);

  useEffect(() => {
    console.log("I only run once");
  }, []);
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            className="input"
            typ="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;

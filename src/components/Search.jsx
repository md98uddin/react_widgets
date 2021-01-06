import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [searchResponse, setSearchResponse] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setSearchResponse(data.query.search);
    };

    if (term && !searchResponse.length) search();

    const toId = setTimeout(() => {
      if (term) search();
    }, 500);

    return () => {
      clearTimeout(toId);
    };
  }, [term, searchResponse.length]);

  const renderedResults = searchResponse.map((search) => {
    return (
      <div className="item" key={search.title}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${search.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{search.title}</div>
          <span
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(search.snippet),
            }}
          ></span>
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;

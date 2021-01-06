import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onTitleClick = (index) => {
    setActiveItem(index);
  };
  const renderItems = items.map((item, index) => {
    const active = index === activeItem ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
        )
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderItems}</div>;
};

export default Accordion;

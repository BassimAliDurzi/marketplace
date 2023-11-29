import React from "react";

const AdCards = ({ image, title, description, contact, onDetailsClick }) => {

  return (
    <div className="adCard">
      {image && (
        <img
          src={image}
          style={{ width: "150px", height: "150px" }}
        />
      )}

      <h4>{title}</h4>
      <p>{description}</p>
      <p>Contact: {contact}</p>
      <hr
        className="text-dark"
        style={{ border: "1px solid", margin: "10px 0" }}
      />
      <button className="btn btn-info" onClick={onDetailsClick}>
        Details
      </button>
      <hr
        className="text-dark"
        style={{ border: "1px solid", margin: "10px 0" }}
      />
    </div>
  );
};

export default AdCards;

import React from "react";

const Advertisement = (props) => {
  const { image, title, description, contact, onDetailsClick } = props;
  return (
    <div className="card mb-4 col-md-4">
      <img src={image} width="150" height="150" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p
          className="card-text"
         
        >
          {contact}
        </p>
      </div>
      <div className="card-footer text-center">
        <button className="btn btn-info btn-block" onClick={onDetailsClick}>
          Details
        </button>
      </div>
    </div>
  );
};

export default Advertisement;

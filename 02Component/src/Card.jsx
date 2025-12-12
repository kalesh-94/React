import React from "react";


const Card = (props) => {
  return (
    <div  className="card-contaier" style={{margin:'30px', display:'flex',gap:'20px', flexwrap:'wrap'}}>

    <div className="my-card">
      <div className="my-card-image">
        <img style={{height:'100%', width:'100%'}} src={props.image} alt="" />
      </div>

      <div className="my-card-content">

        
        <h2 className="my-card-title">{props.title}</h2>

        
        <p className="my-card-description">
          {props.description}
        </p>

        <div className="my-card-footer">
          <span className="my-card-tag">{props.tag}</span>
          <button className="my-card-btn">Action</button>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Card;

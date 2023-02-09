import React from "react";

const Carrusel = function()  {
    return(

        <div className="card">
            <img src="https://http2.mlstatic.com/D_NQ_NP_813639-MLU53386298916_012023-O.webp" width="500" height="350" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Cortadora de pasto</h5>
                <p className="card-text">Roja, a nafta.</p>
                <p className="card-text">120$.</p>
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
    
   
};

export default Carrusel;
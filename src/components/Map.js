import React from 'react';
import './Map.css';


function Map() {
  return (
    <>
      <h3>Localização</h3>
      <nav className="map">
      <iframe title="Fluir Soluções em TI" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.3433935516478!2d-51.21394555998712!3d-29.179043612263378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b14ad9ca4578714!2sFluir%20Solu%C3%A7%C3%B5es%20em%20TI!5e0!3m2!1spt-BR!2sbr!4v1605484490473!5m2!1spt-BR!2sbr" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </nav>
    </>
  );
}

export default Map;

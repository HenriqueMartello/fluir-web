import React from 'react';
import './ErrorSection.css';

function Error() {
  return (
    <>
      <nav>
        <div classname='error-container'>
            <h1>Página Não Encontrada :)</h1>
            <p>Lamentamos pelo inconveniente, tente retornar ao site utilizando o botão abaixo!</p>
            <button>Voltar para a Página Inicial</button>
        </div>
      </nav>
    </>
  );
}

export default Error;


import React from 'react';
import PageDefault from '../../components/PageDefault';

export default function Pagina404(){
    return(
       <PageDefault>
            <div style={{ 
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}>
        <h1>Página não encontrada :(</h1>
        <iframe title="flappy-bird" style={{marginTop: "50px", overflow: "hidden"}} scrolling="no" src="https://mariosouto.com/flappy-bird-devsoutinho/" width="340" height="600"></iframe>
      <br></br>
      </div>

       </PageDefault>
    );
}
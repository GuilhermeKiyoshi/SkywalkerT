import React from 'react';
import PageDefault from '../../components/PageDefault';
import  gif  from '../error/style.css';
import vader from '../../assets/img/vader.gif';

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

          <iframe className="NotFound" style={{marginTop: "50px", overflow: "hidden"}} scrolling="no" src={vader}  alt="Not found 404" width="368"></iframe>
            
            <h1>Página não encontrada, patrulheiro!</h1>
      <br></br>
      </div>

       </PageDefault>
    );
}
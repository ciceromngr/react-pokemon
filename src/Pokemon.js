import React from 'react';
import './App.css';
export const Pokemon = ({props}) => {
    return (
        <section>
            {props.map((poke)=> (
                <div key={poke.id} className="container">
                    <div className="card">
                        <div className="imgBx">
                            <img src={`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`}/>
                            <h2>{poke.nome}</h2>
                        </div>
                        <div className="content">
                            <div className="idPoke">
                                <h3>id :</h3>
                                <span>{poke.id}</span>
                            </div>
                            <div className="informacao">
                                <h3>habilidades:</h3>
                                {poke.habilidade.map((h)=>(<span key={h.ability.name}>{h.ability.name}</span>))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
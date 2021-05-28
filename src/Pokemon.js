import React from 'react'
import './App.css'
export const Pokemon = ({props}) => {
    return (
        <div className="container">
            {props.map(k => (
                <div key={k.id} className="card">
                <div className="imgBx">
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${k.id}.png`} />
                </div>
                <div className="content">
                    <div className="header-content">
                        <h2>{k.nome}</h2>
                        <h3>ID: {k.id}</h3>
                    </div>
                    <div className="body-content">
                        <p>HABILIDADE:</p>
                        {k.habilidade.map((h)=>(<h3 key={h.ability.name}>{h.ability.name}</h3>))}
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
}
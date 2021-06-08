import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
    //console.log(props);
    return <button onClick={evt=>{
        console.log('Clickage sur un bouton');
        props.lorsqueJeCliqueraiSurLeButton(evt.target.innerHTML);
    }} 
    className="Button clicked" 
    style={{backgroundColor: props.bgcolor}}>
    {props.children}
    </button>;
    
}

// Ca va servir a creer un systeme pour documenter et bien travailler dans une équipe + vérifier + autocomplétion
// Système de verification pendant l'éxecution de React
// Ca va prendre quand même un peu de la ressource
// Inclus dans React, rien besoin d'installer

Button.propTypes = {
    // any c'est tout en gros ça controle pas le type, pas un grand intéret
    children:PropTypes.any.isRequired,
    bgcolor:PropTypes.string.isRequired,
    lorsqueJeCliqueraiSurLeButton: PropTypes.func.isRequired
}
Button.defaultProps={
    bgcolor:'Aquamarine'
}
export default Button;
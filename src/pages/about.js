import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => {
    return(
        <div> 
            <h1>About Me</h1>
            <p>Yo soy Ignacio Bejarano, estudie ingenieria mecanica en la universidad
                de buenos aires, pero ahora me encuentro transisionando al desarrollo web
                me parece un mundo apasionante y veritiginoso con multiples desafios y una disciplina de hierro
                para mantenerse actualizado y asi poder emerger en el mercado competitivo.
                </p>   
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>

        </div>
    )
}


export default AboutPage;
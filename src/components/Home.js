import React from 'react';
import picofme from './../images/picofme.jpg';
import pdf from './../KylePhanResume.pdf';
import './Home.css';

export default function Home( {currently} ) {

    return (<div className="home">
        <div className='left-side'>
            <h1 className='Animator0 anim-typewriter'>Hi! I'm Kyle👋</h1>
            <div className='Animator3'>
            <h2 className="Animator2"> I'm a computer science major at the University of Notre Dame.</h2>
            <h3 className="Currently">Currently, I'm {currently}</h3>
            <div class="emoticons">
                <a href="https://github.com/kylephan5" target="_blank" rel="noreferrer"><i class="fa-brands fa-github fa-2xl github" style={{color: "rgb(222, 240, 113)"}} title="Github"></i></a>
                <a href="https://www.linkedin.com/in/kyle-phan-17a452203/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin fa-2xl linkedin" style={{color: "rgb(222, 240, 113)"}} title="Linkedin"></i></a>
            </div>
            <div className="Button">
                <a className="Resume" href={pdf} style={{color: "rgb(222, 240, 113)"}} download>Download Resume <i class ="fa fa-light fa-download" style={{color: "rgb(222, 240, 113)"}}></i></a>
            </div>
            </div>
        </div>
        <div className='right-side'>
            <img className="homeimage" src={picofme} alt='pic of me' width='500px' height='650px'/>
        </div>
    </div>);
}
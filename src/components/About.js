import React from 'react';
import './About.css';
import me from './../images/_DSC0474.JPG';
import jacobeugene from './../images/DSC00615.JPG';
import vsa from './../images/vsa.jpeg';
import python from './../skillicons/python.png';
import react from './../skillicons/react.png';
import html from './../skillicons/html.png';
import css from './../skillicons/css.png';
import javascript from './../skillicons/javascript.png';
import swift from './../skillicons/swift.png';
import Csharp from './../skillicons/C.png';
import django from './../skillicons/django.png';

export default function About() {
    return (<div className="about">
        <h1 className="title"> A little bit about me... </h1>
        <div className="boxes">
            <div className="collage">
                <div className="images">
                    <img className="img1" src={me} alt="me" width="250px" height="350px"/>
                </div>
                <div className="images">
                    <img className="img2" src={jacobeugene} alt="me" width="200px" height="150px"/>
                </div>
                <div className="images">
                    <img className="img3" src={vsa} alt="me" width="350px" height="250px"/>
                </div>
            </div>
            <div className="blurb">
                <h3>1) Rising junior studying computer science at the University of Notre Dame</h3>
                <h3>2) Interested in mobile development, game development, databases, and networking</h3>
                <h3>3) Currently working at iCapital, a fintech company based in NYC, as a platform engineering intern</h3>
                <h3>4) Catan and LA Clippers enthusiast</h3>
                <h3>5) Enjoys playing ping pong, eating Vietnamese food, and exercising in free time</h3>

                <div className="Skills">
                    <h2>Skilled in:</h2>
                    <div className="items">
                        <div className="React"><img src={react} alt="wow" width="75px" height="75px"/><figcaption className='figs'>React</figcaption></div>
                        <div className="Python"><img src={python} alt="wow" width="75px" height="75px"/><figcaption className='figs'>Python</figcaption></div>
                        <div className="HTML"><img src={html} alt="wow" width="75px" height="75px"/><figcaption className='figs'>HTML5</figcaption></div>
                        <div className="CSS"><img src={css} alt="wow" width="75px" height="75px"/><figcaption className='figs'>CSS3</figcaption></div>
                    </div>
                    <div className="items">
                        <div className="JS"><img src={javascript} alt="wow" width="75px" height="75px"/><figcaption className='figs'>JavaScript</figcaption></div>
                        <div className="swift"><img src={swift} alt="wow" width="75px" height="75px"/><figcaption className='figs'>Swift</figcaption></div>
                        <div className="C#"><img src={Csharp} alt="wow" width="75px" height="75px"/><figcaption className='figs'>C#</figcaption></div>
                        <div className="django"><img src={django} alt="wow" width="75px" height="75px"/><figcaption className='figs'>Django</figcaption></div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
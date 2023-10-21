import React from 'react';
import './About.css';
import me from './../images/domepic.png';
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
    const blurb = [
        {index: 1, description: 'Junior studying computer science at the University of Notre Dame'},
        {index: 2, description: 'Interested in ML/AI, computer vision, databases, and backend development roles!'},
        {index: 3, description: 'Previous experience at iCapital, a fintech company based in NYC, as a software engineering intern'},
        {index: 4, description: 'Catan and LA Clippers enthusiast'},
        {index: 5, description: 'Enjoys playing ping pong, eating Vietnamese food, and exercising in free time'},
    ]
    const skills1 = [
        {name: 'React', img_src: react},
        {name: 'Python', img_src: python}, //fix python image
        {name: 'HTML5', img_src: html},
        {name: 'CSS3', img_src: css},
    ];
    const skills2 = [
        {name: 'JavaScript', img_src: javascript},
        {name: 'Swift', img_src: swift},
        {name: 'C#', img_src: Csharp},
        {name: 'Django', img_src: django},
    ]
    return (<div className="about">
        <h1 className="abouttitle"> A little bit about me... </h1>
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
                {blurb.map((item) => (<h3>{item.index}) {item.description}</h3>))}
                <div className="Skills">
                    <h2>Skilled in:</h2>
                    <div className="items">
                        {skills1.map((skill) => (<div className={skill.name}><img src={skill.img_src} alt="wow" width="75px" height="75px"/><figcaption className="figs">{skill.name}</figcaption></div>))}
                    </div>
                    <div className="items">
                        {skills2.map((skill) => (<div className={skill.name}><img src={skill.img_src} alt="wow" width="75px" height="75px"/><figcaption className="figs">{skill.name}</figcaption></div>))}
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
import React from 'react';
import workoutguru from './../images/workoutguru.png';
import egyptianwar from './../images/egyptianwar.png';
import battleforla from './../images/battleforla.png';
import bowling from './../images/bowling.png';
import hangman from './../images/hangman.png';
import solsolutions from './../images/solsolutions.png';
import './Projects.css';

export default function Projects() {
    const projectdescriptions = [
        {name: 'Workout Guru', link: "https://workoutguru.onrender.com", pic: workoutguru, blurb:"Built a website that allows users to create personalized workouts with a Tinder-inspired system to determine which exercises are added to the workout, users also have access to a catalog of exercises that they can do and learn more about, 500+ individual users", date:"June 2022-July 2022", techstack:"HTML, CSS, JavaScript, Python (Django)", sourcecode:"https://github.com/kylephan5/workoutguru"},
        {name: 'Egyptian Ratslap', link: "https://simmer.io/@kphan5/egyptian-war", pic: egyptianwar, blurb:"Built an online version of Egyptian War/Ratslap in C# and Unity, utilized Unity prefabs to instantiate and duplicate card objects, and used Unity coroutines to implement a bot that serves as the opposing player", date:"Mar 2023", techstack:"C#, Unity Game Engine", sourcecode:"https://github.com/kylephan5/egyptianwar"},
        {name: 'Battle for LA', link: "https://kylephan5.github.io/battleforla", pic: battleforla, blurb:"Built a 2D arcade basketball single player game where the user controls the LA Clippers and the enemy is the Lakers, used JavaScript for front-end/back-end development", date:"Aug 2022", techstack:"JavaScript, HTML", sourcecode:"https://github.com/kylephan5/kylephan5.github.io"},
        {name: 'Bowling', link: "https://github.com/kylephan5/bowling", pic: bowling, blurb:"Built a 3D arcade bowling game where the user utilizes a power bar and lateral movement techniques to control the ball, modeled bowling pin in Blender", date:"Apr 2023", techstack:"C#, Unity", sourcecode:"https://github.com/kylephan5/bowling"},
        {name: 'Hangman', link: "https://github.com/kylephan5/hangman", pic: hangman, blurb:"Built an IRC bot that plays hangman bot with you, utilized Python's asyncio framework", date:"Apr 2023", techstack:"Python", sourcecode:"https://github.com/kylephan5/hangman"},
        {name: 'Sol Solutions', link: "https://sol-solutions.vercel.app/", pic: solsolutions, blurb:"Created a website with three other individuals that allow residents of Indiana to see how much it would save them to switch to solar energy based on their monthly electric bill and the number of solar panels desired", date:"Mar 2022", techstack:"HTML, CSS, Python (Flask)", sourcecode:"https://github.com/kylephan5/project-horizon"}
    ]
    return <div className='projects'>
        <h1 className="projecttitle">Personal Projects</h1>
        <div className='individualprojects'>
            {projectdescriptions.map( (project) => (
                <div className='project'>
                    <div>
                        <h3>{project.name}</h3>
                        <a href={project.link} target='_blank' rel="noreferrer">
                            <img src={project.pic} alt="wow" height="200px" width="400px" />
                        </a>
                        <figcaption className='access'>Click on image to access</figcaption>
                        <br></br>
                        <p className="projectdescription">{project.blurb}</p>
                        <h4>Tech stack: {project.techstack}</h4>
                        <form action={project.sourcecode} target="_blank">
                            <button>Source Code</button>
                        </form>
                    </div>
                </div>))}
        </div>
    </div>;
}
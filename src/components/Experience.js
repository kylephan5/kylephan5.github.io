import React from 'react';
import './Experience.css';
import me from './../images/_DSC0474.JPG';
import jacobeugene from './../images/DSC00615.JPG';

export default function Experience() {
    const experience = [
        {company: 'iCapital Network', position: 'Platform Engineering Intern', blurb: 'Incoming intern working with the Platform Engineering team at iCapital, using Ruby on Rails for backend development and React.js for frontend development', picture: jacobeugene, date:'June 2023 - Aug 2023', img_tag: 'iCapital'},
        {company: 'Colonist.io', position: 'Frontend Developer Intern', blurb: 'Edited UI/UX of game button used by over thousands of players, worked on various frontend bugs for Cities and Knights game mode using TypeScript and CSS, built an internal DevOps tool that automatically deletes GitHub branches when pull requests are closed used by the entire team', picture: me, date: 'Aug 2022 - Sep 2022', img_tag: 'Colonist'},
        {company: 'EPOCH Lab', position: 'Undergraduate Research Assistant', blurb: 'Maintenance of admin dashboard for lab’s survey application, collect teen survey responses regarding online safety', picture: me, date: 'Mar 2023 - Present', img_tag: 'EPOCH'},
        {company: 'Lab for Big Data Methdology', position: 'Undergraduate Research Assistant', blurb: 'Utilize HTML/JavaScript to create a better UI experience for a web application that allows the user to find trends between two objects', picture: me, date: 'Mar 2022 - Aug 2022', img_tag: 'Bigdata'},
    ]
    return(<div className="experience">
        <h1 className='title'>Professional Experience</h1>
        <div className="yobs">
            {experience.map((exp) => (<div className="individual"><div className="timeline"></div><div className="entries"><img className={exp.img_tag} src={exp.picture} alt="img of company"/><figcaption className="co">{exp.company}</figcaption><figcaption className="pos">{exp.position}, {exp.date}</figcaption><br></br><p className="descrip">{exp.blurb}</p></div></div>))}

        </div>
    </div>);
}
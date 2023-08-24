import React from 'react';
import './Experience.css';
import me from './../images/domepic.png';
import colonist from './../images/colonist.png';
import bigdata from './../images/bigdata.png';
import icapital from './../images/icapital.webp';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
    const experience = [
        {company: 'iCapital Network', position: 'Software Engineering Intern', blurb: 'Incoming intern working with the Software Engineering team at iCapital, using Ruby on Rails for backend development and React.js for frontend development', picture: icapital, date:'June 2023 - Aug 2023', img_tag: 'icapital'},
        {company: 'Colonist.io', position: 'Frontend Developer Intern', blurb: 'Edited UI/UX of game button used by over thousands of players, worked on various frontend bugs for Cities and Knights game mode using TypeScript and CSS, built an internal DevOps tool that automatically deletes GitHub branches when pull requests are closed used by the entire team', picture: colonist, date: 'Aug 2022 - Sep 2022', img_tag: 'Colonist'},
        {company: 'EPOCH Lab', position: 'Undergraduate Research Assistant', blurb: 'Maintenance of admin dashboard for lab’s survey application, collect teen survey responses regarding online safety', picture: me, date: 'Mar 2023 - Present', img_tag: 'EPOCH'},
        {company: 'Lab for Big Data Methdology', position: 'Undergraduate Research Assistant', blurb: 'Utilize HTML/JavaScript to create a better UI experience for a web application that allows the user to find trends between two objects', picture: bigdata, date: 'Mar 2022 - Aug 2022', img_tag: 'bigdata'},
    ]
    return(<div className="experience">
        <h1 className='title'>Professional Experience</h1>
        <VerticalTimeline lineColor='rgb(222, 240, 113)' className="yobs">
        {experience.map((exp) => (<VerticalTimelineElement contentStyle={{ background: '#fff'}} className="tag" iconStyle={{background: "rgb(222, 240, 113)", color: '#fff'}} date={exp.date}><div className="individual"><div className="timeline"></div><div className="entries"><img className={exp.img_tag} src={exp.picture} alt="img of company"/><figcaption className="co">{exp.company}</figcaption><figcaption className="pos">{exp.position}</figcaption><br></br><p className="descrip">{exp.blurb}</p></div></div></VerticalTimelineElement>))}
        </VerticalTimeline>
        <br></br>
    </div>);

    /*
            <div className="yobs">
            {experience.map((exp) => (<div className="individual"><div className="timeline"></div><div className="entries"><img className={exp.img_tag} src={exp.picture} alt="img of company"/><figcaption className="co">{exp.company}</figcaption><figcaption className="pos">{exp.position}, {exp.date}</figcaption><br></br><p className="descrip">{exp.blurb}</p></div></div>))}

        </div>
    */
}
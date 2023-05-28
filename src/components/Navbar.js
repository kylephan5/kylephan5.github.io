import React from 'react';
import './Navbar.css';
import SideNav, { NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import { useNavigate } from 'react-router-dom';
import "@trendmicro/react-sidenav/dist/react-sidenav.css"

export default function Navbar() {
    const navigate = useNavigate();
    return <SideNav className="navbar" onSelect={selected => {console.log(selected);
    navigate('/'+selected)}}>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="/">
            <NavItem eventKey= "">
                <NavIcon><i className='fa fa-fw fa-home'></i></NavIcon>
                <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="about">
                <NavIcon><i className='fa fa-fw fa-user'></i></NavIcon>
                <NavText>About</NavText>
            </NavItem>
            <NavItem eventKey="experience">
                <NavIcon><i className='fa fa-fw fa-brain'></i></NavIcon>
                <NavText>Experience</NavText>
            </NavItem>
            <NavItem eventKey="projects">
                <NavIcon><i className='fa fa-fw fa-folder'></i></NavIcon>
                <NavText>Projects</NavText>
            </NavItem>
            <NavItem eventKey="contactme">
                <NavIcon><i className='fa fa-fw fa-message'></i></NavIcon>
                <NavText>Contact Me</NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>;
}
/*
export default function Navbar() {
    const [sticky, setSticky] = useState(false);

    function Sticky() {
        if (window.ScrollY >= 392) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }

    window.addEventListener("scroll", Sticky);

    return <nav className={sticky ? "sticky" : ""}>
        <div className="navbar-inner">
            <span className="logo">kylephan5.github.io</span>
            <div className="elements">
                <a href="https://www.google.com/"> Home</a>
                <a href="https://www.google.com/"> About</a>
                <a href="https://www.google.com/"> Projects</a>
                <a href="https://www.google.com/"> Contact Me</a>
            </div>
        </div>
    </nav>;
}
*/
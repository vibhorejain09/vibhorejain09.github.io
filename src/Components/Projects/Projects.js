import React from 'react'
import './Projects.css'
import myProjects from './projectData';
import { GitHub, Link } from '@material-ui/icons'
import ScrollAnimation from 'react-animate-on-scroll';

function Projects() {
    return (
        <ScrollAnimation animateIn='fadeIn' delay={200}>
            <div id="projects">
                <ScrollAnimation animateIn='bounceInRight' delay={200}>
                    <div className="heading">
                        <span style={{ borderBottom: '2px solid rgb(var(--secondary-text-color))' }}>
                            Projects
                        </span>
                    </div>
                </ScrollAnimation>
                <div className="projects-content">
                    <div className="project-content-card">
                        {myProjects.map((project) => {
                            const { id, image, name, description, sourcecode, link } = project;
                            return (
                                <div key={id} className="project-card">
                                    <img src={image} alt="projectimg" className="project-image" />
                                    <h2 className="project-name">{name}</h2>
                                    <p className="project-description">{description}</p>
                                    <div className="project-link">
                                        <a href={sourcecode} className="project-code-link">
                                            <GitHub />
                                        </a>
                                        <a href={link} className="project-demo-link">
                                            <Link />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default Projects
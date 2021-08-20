import React from 'react'
import './Skills.css'
import imgskill from '../../Assets/skillimage.svg'
import windowWidth from '../../Utils/windowWidth'
import mySkills from './data'
import ScrollAnimation from 'react-animate-on-scroll';

function MySkillsContainer(props) {
    return (
        <div className="skill-container">
            <div className="skill-container-logo">
                <img src={props.icon} alt={props.name} height="50px" />
            </div>
            <div className="skill-container-name">{props.name}</div>
        </div>
    );
}

function Skills() {
    const width = windowWidth()
    const halfWidth = width / 2;
    return (
        <ScrollAnimation animateIn='fadeIn' delay={200}>
            <div id="skills">
                <div className="heading">
                    <span style={{ borderBottom: '2px solid rgb(var(--secondary-text-color))' }}>
                        Skills
                    </span>
                </div>
                <div className="skills-container" style={{ flexDirection: halfWidth > 500 ? "row" : "column", justifyContent: halfWidth > 500 ? "space-around" : "center" }}>
                    <div>
                        <img src={imgskill} alt="myimg" style={{ width: halfWidth > 500 ? halfWidth * 0.5 : width * 0.4 }} className="skills-container-image" />
                    </div>
                    <div className="skills-container-content" style={{ display: "flex", justifyContent: "space-evenly", width: "100%", maxWidth: "800px", flexWrap: "wrap", overflow: "hidden" }}>
                        {mySkills.map((data, idx) =>
                            <MySkillsContainer key={idx} name={data.name} icon={data.icon} />
                        )}
                    </div>
                </div>
            </div>
        </ScrollAnimation >
    )
}

export default Skills
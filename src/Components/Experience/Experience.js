import React from 'react'
import './Experience.css'
import imgexp from '../../Assets/experienceimg.svg'
import windowWidth from '../../Utils/windowWidth'
import ScrollAnimation from 'react-animate-on-scroll';
import Timeline from '@material-ui/lab/Timeline';
import data from './experienceData';
import TimeLineComponent from '../TimeLineComponent/TimeLineComponent';

function Experience() {
    const width = windowWidth()
    const halfWidth = width / 2;
    return (
        <ScrollAnimation animateIn='fadeIn' delay={200}>
            <div id="experience">
                <div className="heading">
                    <span style={{ borderBottom: '2px solid rgb(var(--secondary-text-color))' }}>
                        Experience
                    </span>
                </div>
                <div className="experience-content" style={{ flexDirection: halfWidth > 500 ? "row" : "column", justifyContent: halfWidth > 500 ? "space-around" : "center" }}>
                    <div>
                        <img src={imgexp} alt="expimg" style={{ width: halfWidth > 500 ? halfWidth * 0.5 : width * 0.4 }} className="experience-content-image" />
                    </div>
                    <div className="experinece-content-details">
                        <div className="experience-content-details-timeline">
                            <Timeline align="left">
                                {data.map((data, idx) => <TimeLineComponent key={idx} elementOne={data.position} elementThree={data.institution} elementFour={data.description} elementTwo={data.year} />)}
                            </Timeline>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default Experience
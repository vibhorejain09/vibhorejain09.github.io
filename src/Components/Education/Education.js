import React from 'react'
import './Education.css'
import imgedu from '../../Assets/educationimg.svg'
import windowWidth from '../../Utils/windowWidth'
import ScrollAnimation from 'react-animate-on-scroll';
import Timeline from '@material-ui/lab/Timeline';
import TimeLineComponent from '../TimeLineComponent/TimeLineComponent';
import edudata from './educationData';

function Education() {
    const width = windowWidth()
    const halfWidth = width / 2;
    return (
        <ScrollAnimation animateIn='fadeIn' delay={200}>
            <div id="education">
                <div className="heading">
                    <span style={{ borderBottom: '2px solid rgb(var(--secondary-text-color))' }}>
                        Education
                    </span>
                </div>
                <div className="education-content" style={{ flexDirection: halfWidth > 500 ? "row" : "column", justifyContent: halfWidth > 500 ? "space-around" : "center" }}>
                    <div>
                        <img src={imgedu} alt="eduimg" style={{ width: halfWidth > 500 ? halfWidth * 0.5 : width * 0.5 }} className="education-content-image" />
                    </div>
                    <div className="education-content-details">
                        <div className="education-content-details">
                            <div className="education-content-details-timeline">
                                <Timeline align="left">
                                    {edudata.map((data, idx) => <TimeLineComponent key={idx} elementOne={data.class} elementThree={data.institution} elementFour={data.score} elementTwo={data.year} />)}
                                </Timeline>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default Education
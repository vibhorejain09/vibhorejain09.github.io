import React from 'react'
import './TimeLineComponent.css'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

function TimeLineComponent(props) {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="mui-timeline-content">
                <h4 className="mui-timeline-content-elementOne">{props.elementOne}</h4>
                <div className="mui-timeline-content-elementTwo-div">
                    <h4 className="mui-timeline-content-elementTwo">{props.elementTwo}</h4>
                </div>
                <h4 className="mui-timeline-content-elementThree">{props.elementThree}</h4>
                <p className="mui-timeline-content-elementFour">{props.elementFour}</p>
            </TimelineContent>
        </TimelineItem>
    )
}
export default TimeLineComponent
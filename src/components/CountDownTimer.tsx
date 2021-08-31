import React from 'react'
import styled from 'styled-components';

const Li = styled.li`
    display: inline-block;
    font-size: 1.2em;
    list-style-type: none;
    padding: 1em;
    text-transform: uppercase;
`

const Span = styled.span`
    display: block;
    font-size: 3rem;
    color: #280D5F;
`

const CountDownTimer = ({hoursMinSecs}) => {
   
    const { days = 0, hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[ds, hrs, mins, secs], setTime] = React.useState([days, hours, minutes, seconds]);
    

    const tick = () => {
   
        if (ds === 0 && hrs === 0 && mins === 0 && secs === 0) 
            reset()
        else if (hrs === 0 && mins === 0 && secs === 0) {
            setTime([ds - 1, 23, 59, 59])
        }
        else if (mins === 0 && secs === 0) {
            setTime([ds, hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([ds, hrs, mins - 1, 59]);
        } else {
            setTime([ds, hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(days), parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <ul>
                <Li><Span>{ds.toString().padStart(2, '0')}</Span>days</Li>
                <Li><Span>{hrs.toString().padStart(2, '0')}</Span>hours</Li>
                <Li><Span>{mins.toString().padStart(2, '0')}</Span>minutes</Li>
                <Li><Span>{secs.toString().padStart(2, '0')}</Span>seconds</Li>
            </ul>
        </div>
    );
}

export default CountDownTimer;
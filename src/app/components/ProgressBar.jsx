"use client"
// import Nprogress from 'nprogress';
// import { ProgressBar } from 'react-bootstrap';
import React, { useState } from 'react'
// import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { Progress } from '@heroui/react';

const Progressbar = () => {
    const [skills] = useState([
        { name: 'HTML', level: 98 },
        { name: 'CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 90 },
        { name: 'NextJs', level: 85 },
        { name: 'Git', level: 80 },
        { name: 'BootStrap', level: 97 },
        { name: 'TailWind', level: 95 },
    ]);
    console.log(skills, name)
  return (
    <div>
        <h1>Skills</h1>
        <ul>
            {skills.map((skill, index) =>(
                <li key={index}>
                    <div className='flex justify-between'>
                        <h3>{skill.name}</h3>
                        <h3>{skill.level}%</h3>
                    </div>
                    
                    <Progress
                        isStriped
                        className='max-w-md'
                        value={skill.level}
                        max={100}
                        color="success"
                    />
                    {/* <CircularProgressbar
                        value={skill.level}
                        text={`${skill.level}%`} 
                        circleRatio={0.5}
                        styles={buildStyles({
                            pathColor: '#5D0E41',
                            textColor: '#5D0E41',
                            textSize: '16px',
                            trailColor: '#A0153E',
                        })}
                    /> */}
                    {/* <ProgressBar
                        animated
                        completed={skill.level}
                        height={120}
                        width={100}
                        variant="success"

                    /> */}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Progressbar
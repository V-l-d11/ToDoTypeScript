import React from 'react';

import {useNavigate} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const histrory= useNavigate()

    return (
        <>
        <h1>Page Informathion</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque veniam possimus, reprehenderit delectus quam dolorum molestias repellendus quas optio consequatur animi reiciendis numquam accusamus ea provident illo! Repudiandae, tempore maxime.</p>
    <button className='btn' onClick={()=> histrory('/')}> Exit for tasks</button>
        </>
    )
}
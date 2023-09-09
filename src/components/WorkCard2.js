import './WorkCard2Styles.css'

import React from 'react'
import { NavLink } from 'react-router-dom'
import pro2 from '../assets/bfs.png'

const WorkCard2 = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>-</h1>
        <div className='project-container'>
            <div className='project-card'>
                <img src={pro2} alt='' />
                <h2 className='project-title'>Breadth First Search Path Visualizer</h2>
                <div className='pro-details'>
                    <p>Not Currently Available</p>
                    <div className='pro-btns'>
                        <NavLink to='bfs-path-visualizer' className='btn'>
                            Use
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard2

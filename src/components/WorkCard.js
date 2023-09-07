import "./WorkCardStyles.css"

import React from 'react'
import pro1 from "../assets/dijkstra algo.jpg"
import { NavLink } from "react-router-dom"

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt="" />
                <h2 className="project-title">Dijkstra's Path Visualizer</h2>
                <div className="pro-details">
                    <p>A path visualizer that allows you to see Dijkstra's algorithm in real time. Dijkstra's algorithm finds the shortest path between the two chosen points.</p>
                    <div className="pro-btns">
                        <NavLink to="dijkstra-path-visualizer" className="btn">
                            Use
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard
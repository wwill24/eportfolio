import React from 'react'
import PropTypes from "prop-types"
import "./DijkstraNavBar.css"
import {clearBoard} from "./DijkstraPath.jsx"

const DijkstraNavBar = props => {
    const {onClear} = props;
    return (
        <div className='path-navbar'>
            <h1>Dijkstra</h1>
            <div className='btns'>
                <button 
                    className='clearBoard'
                    onClick={() => onClear()}
                >
                    Clear Board
                </button>
                <button className='clearWalls'>Clear Walls</button>
                <button className='clearPath'>Clear Path</button>
            </div>
        </div>
    )
}

DijkstraNavBar.propTypes = {
    onClear: PropTypes.func.isRequired
}

export default DijkstraNavBar

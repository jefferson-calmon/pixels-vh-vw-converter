import React from 'react';

import './styles.css'

import Vetor from '../../assets/computer-and-phone.png';

const Converted = ({ value, metric }) => {

    function PxToVw(){
        return ((100 * value) / window.innerWidth).toFixed(5)
    }

    function PxToVh(){
        return ((100 * value) / window.innerHeight).toFixed(5)
    }

    return(
        <div className="converted">
            <div id="image">
                <img src={Vetor} alt="Vetor computador e smartphone"/>
            </div>

            <div id="data">
                <div className="boxes">
                    <div className="box" style={{'border-color': 'blue'}}>
                        <h2>Pixels</h2>
                        <h3 >{value}<span>px</span></h3>
                    </div>

                    <div className="box" style={{'border-color': 'red'}}>
                        <h2>Viewport Height</h2>
                        <h3>{PxToVh()}<span>vh</span></h3>
                    </div>

                    <div className="box" style={{'border-color': 'green'}}>
                        <h2>Viewport Width</h2>
                        <h3>{PxToVw()}<span>vw</span></h3>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Converted;
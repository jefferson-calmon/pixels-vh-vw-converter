import React from 'react';

import './styles.css'

import Vetor from '../../assets/computer-and-phone.png';

const Converted = ({ value, metric }) => {


    function PxToVw(val){
        return ((100 * val) / window.innerWidth).toFixed(3)
    }

    function PxToVh(val){
        return ((100 * val) / window.innerHeight).toFixed(3)
    }

    function VhToPx(val){
        return ((window.innerHeight * val) / 100)
    }

    function VwToPx(val){
        return ((window.innerWidth * value) / 100)
    }

    var ValuePx = 0, ValueVh = 0, ValueVw = 0

    if (metric === 'px') {
        ValuePx = value
        ValueVh = PxToVh(value)
        ValueVw = PxToVw(value)
    } 
    else if (metric === 'vh'){
        ValuePx = VhToPx(value)
        ValueVh = value
        ValueVw = PxToVw(ValuePx)
    }
    else if (metric === 'vw'){
        ValuePx = VwToPx(value)
        ValueVh = PxToVh(ValuePx)
        ValueVw = value
    }

    return(
        <Component ValuePx={ValuePx} ValueVh={ValueVh} ValueVw={ValueVw} />
    )
}

const Component = (props) => {

    
    function EffectClickedOnValue(event) {
        console.log(event)
    }

    return(
        <div className="converted">
            <div id="image">
                <img src={Vetor} alt="Vetor computador e smartphone"/>
            </div>

            <div id="data">
                <div className="boxes">
                    <div className="box blue" >
                        <h2>Pixels</h2>
                        <h3 onClick={e => EffectClickedOnValue(e)} >{props.ValuePx}<span>px</span></h3>
                    </div>

                    <div className="box red">
                        <h2>Viewport Height</h2>
                        <h3>{props.ValueVh}<span>vh</span></h3>
                    </div>

                    <div className="box green" >
                        <h2>Viewport Width</h2>
                        <h3>{props.ValueVw}<span>vw</span></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Converted;
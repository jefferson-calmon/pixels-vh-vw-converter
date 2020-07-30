import React from 'react';
import copy from 'copy-to-clipboard';

import './styles.css'

import Vetor from '../../assets/computer-and-phone.png';

const Converted = ({ value, metric }) => {


    function PxToVw(val){
        return ((100 * val) / window.innerWidth).toFixed(5)
    }

    function PxToVh(val){
        return ((100 * val) / window.innerHeight).toFixed(5)
    }

    function VhToPx(val){
        return ((window.innerHeight * val) / 100).toFixed(5)
    }

    function VwToPx(val){
        return ((window.innerWidth * value) / 100).toFixed(5)
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

    
    function EffectClickedOnValue(id, text, msgId) {
        let element = document.getElementById(id);
        let msg = document.getElementById(msgId)

        element.style.animation = 'animate .2s linear';
        msg.style.animation = 'copy .5s linear';

        setTimeout(() => {
            element.style.animation = ''
            msg.style.animation = ''
            msg.style.opacity = 0
        }, 600)

        copy(text)
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
                        
                        <h3 
                        id="tex-one" 
                        onClick={() => EffectClickedOnValue('tex-one', props.ValuePx + 'px', "msg-one")} >{props.ValuePx}
                            <span>px</span>
                        </h3>

                        <div className="copied" id="msg-one">Copied!</div>
                    </div>

                    <div className="box red">
                        <h2>Viewport Height</h2>
                        
                        <h3 
                        id="tex-two" 
                        onClick={() => EffectClickedOnValue('tex-two', props.ValueVh + 'vh', "msg-two")}>{props.ValueVh}
                            <span>vh</span>
                        </h3>

                        <div className="copied" id="msg-two">Copied!</div>
                    </div>

                    <div className="box green" >
                        <h2>Viewport Width</h2>
                        
                        <h3  
                        id="tex-three" 
                        onClick={() => EffectClickedOnValue('tex-three', props.ValueVw + 'vw', "msg-three")}>{props.ValueVw}
                            <span>vw</span>
                        </h3>

                        <div className="copied" id="msg-three">Copied!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Converted;
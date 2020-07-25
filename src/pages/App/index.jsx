import React, { useState } from 'react';

import './styles.css'
import Converted from '../../components/Converted';


function App() {

  const [ value, setValue ] = useState(0)
  const [ metric, setMetric ] = useState('px')

  function ChangeValue(e) {
    let value = e.target.value

    if(value){
      setValue(e.target.value)
    }else{
      setValue(0)
    }
  }

  function ChangeMetric(e) {
    setMetric(e.target.value)
  }

  function Convert(){
    document.getElementById('image').style.display = 'none';
    document.getElementById('data').style.display = 'flex';
  }

  return (
    <div className="Container">
        <section id="app">
          <div id="enter" className="box-data">
            <div className="title">
              <h1>PWH Converter</h1>
              <p>Com a PWH Converter você pode converter valores em pixels para Vh/Vw e criar sites incrivelmentes responsivos.</p>
            </div>

            <div className="inputs">

              <div>
                <input type="number" className="inputNumber input" id="value" autoFocus onKeyUp={event => ChangeValue(event)}/>
                <select name="medida" id="sel" value={metric} className="input" onChange={event => ChangeMetric(event)}>
                  <option value="px">px</option>
                  {/* <option value="vh">vh</option>
                  <option value="vw">vw</option> */}
                </select>
              </div>

              <input type="submit" id="submit" value="Converter" onClick={Convert}/>

            </div>


          </div>

          <div id="out" className="box-data">
            <Converted value={value} metric={metric}/>
          </div>
        </section>
    </div>
  );
}

export default App;

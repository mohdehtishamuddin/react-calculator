import React from "react";
import './style.css';
function Calculator(){
    return(
        <div className="container">

        <div className="calculator">

            <input type="text" className="calc-numbers" value=""/>

            <div className="calculator-buttons">
                <button className="btn is-clear span-2 green operator">AC</button>
                <button className="btn green operator">DEL</button>
                <button className="btn green operator">&divide;</button>
                <button className="btn green operator">1</button>
                <button className="btn green operator">2</button>
                <button className="btn green operator">3</button>
                <button className="btn green operator">*</button>
                <button className="btn green operator">4</button>
                <button className="btn green operator">5</button>
                <button className="btn green operator">6</button>
                <button className="btn green">+</button>
                <button className="btn green operator">7</button>
                <button className="btn green operator">8</button>
                <button className="btn green operator">9</button>
                <button className="btn green operator">-</button>  
                <button className="btn green operator">.</button>
                <button className="btn green operator">0</button>
                <button className="btn span-2 green operator">=</button>
                
            </div>

        </div>

    </div>
    )
}
export default Calculator;
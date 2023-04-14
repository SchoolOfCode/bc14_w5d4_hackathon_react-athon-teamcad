import {React} from 'react';

export default function Input(props) {


    return(

        <div>

            <input onChange={props.inputFunction} value={props.userInput}></input>
            <button onClick={props.buttonClick}>Add</button>

        </div>

    );
}
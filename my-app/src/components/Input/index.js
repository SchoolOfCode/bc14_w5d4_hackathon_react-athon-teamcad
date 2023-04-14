import {React, useState} from 'react';

export default function Input(props) {


    return(

        <div>

            <input onChange={props.inputFunction}></input>
            <button onClick={props.buttonClick}>Add</button>

        </div>

    );
}
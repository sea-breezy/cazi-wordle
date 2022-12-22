//const keys = [["Q","W","E","R", "T", "Y", "U", "I", "O", "P"],["A","S","D","F","G","H","J","K","L"], ["DELETE","Z","X","C","V","B","N","M","ENTER"] ]
//  <div className = "keyboard-first-row"></div>
// {keys[0].map((key) => <KeyButton text={key} className={className}) onClick={handleClick}}
// <div className = "keyboard-second-row"></div>
// <div className = "keyboard-third-row"></div>

import {useState} from "react";
import Keyboard from "../Keyboard/Keyboard";
import KeyButton from "../KeyButton/KeyButton";

export default function GameDisplay(){

    type BtnState = {
        letter: string;
        status: string;
    }

    const [btnState, setBtnState] = useState<BtnState[]>([])
    const keys = [["Q","W","E","R", "T", "Y", "U", "I", "O", "P"],["A","S","D","F","G","H","J","K","L"], ["Z","X","C","V","B","N","M"]]
    //const classToggle = 

    return (<>
    <Keyboard>
    <div className = "keyboard-first-row">
`        {keys[0].map((key) => <KeyButton text={key} className={className}) onClick={handleClick}}
    </div>
    <div className = "keyboard-second-row">
         {keys[1].map((key) => <KeyButton text={key} className={className}) onClick={handleClick}}
    </div>
    <div className = "keyboard-third-row">
         {keys[2].map((key) => <KeyButton text={key} className={className}) onClick={handleClick}}
    </div>
    </Keyboard>
    </>

    )
}   
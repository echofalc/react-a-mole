import { useState } from "react";
import EmptySlot from "./EmptySlot";
import Mole from "./Mole";

function MoleContainer(props) {
    // create variable 'displayMole' with with a default state of false
    let [displayMole, setDisplay] = useState(false)

    // create a function for bopping the mole which takes has an event parameter
    // that adds 1 to current score variable set in App.js
    // and changes display to remove the mole once bopped
    let moleBop = (e) => {
        props.setScore(props.score + 1)
        setDisplay(false)
    }


    // created conditional for useState variable
    // if true, render mole element with 3 properties
    // else, render EmptySlot 
    let displayMoles = displayMole 
        ? <Mole setScore={props.setScore} toggle={setDisplay} handleClick={moleBop}/>
        : <EmptySlot toggle={setDisplay}/>

    return(
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMoles}
        </div>
    )
}

export default MoleContainer
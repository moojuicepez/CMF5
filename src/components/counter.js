import React, { useEffect, useState } from 'react';
import CommanderCounter from './c-counter';

export default function Counter({ onNameChange, commanderNames }){
    const [count, setCount] = useState(40);
    const [playerName, setPlayerName] = useState('');
    const [save, setSave] = useState(false);
    const [dead, setDead] = useState(false);
    const [commander, setCommander] = useState(false);

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };

    const handleInputChange = (event) => {
        setPlayerName(event.target.value);
    };
    const SaveNameChange = () => {
        onNameChange(playerName);
        setSave(false);
    };
    const handleDamage = (damage) => {
        if(damage == 'plus') {
            decrement();
        } else {
            increment();
        }
    }
    const handleCommander = () => {
        if(commander == false) {
            setCommander(true);
        } else {
            setCommander(false);
        }
    }
    const handleDead  = (dead) => {
        if(dead == true) {
            console.log(dead)
            setDead(true);
        } else {
            setDead(false);
        }
    }

    useEffect(() => {
        if(playerName !== '' && save === false) {
            setSave(true);
        }
    }, [playerName])  

    return (
        <div className={(count !== 0 && dead !== true) ? 'counter relative' : 'counter relative dead'}>
            <button className="commander-switch" onClick={() => handleCommander()}>CD</button>
                <div className={(commander == false) ? 'life visible' : 'life invisible'}>
                    <div className='name-input-container'>
                        <input type="text" placeholder="Enter Initials" value={playerName} onChange={handleInputChange} className='name-input' />
                        {save && <button className="save" onClick={SaveNameChange}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg></button>}
                    </div>
                    <h2 className="life-total">{(count !== 0) ? count : <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M368 400c-.4-16 7.3-31.2 20.4-40.4C436.1 326.2 464 276.9 464 224c0-91.4-86.9-176-208-176S48 132.6 48 224c0 52.9 27.9 102.2 75.6 135.6c13.1 9.2 20.8 24.4 20.4 40.4l0 0v64h48V440c0-13.3 10.7-24 24-24s24 10.7 24 24v24h32V440c0-13.3 10.7-24 24-24s24 10.7 24 24v24h48V400l0 0zm48-1.1c0 .4 0 .7 0 1.1v64c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48V400c0-.4 0-.7 0-1.1C37.5 357.8 0 294.7 0 224C0 100.3 114.6 0 256 0S512 100.3 512 224c0 70.7-37.5 133.8-96 174.9zM112 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm232-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>}</h2>
                    <button className="decrement" onClick={decrement}>-</button>
                    <button className="increment" onClick={increment}>+</button>
                </div>
                <div className={(commander == true) ? 'commander visible' : 'commander invisible'}>
                    {commanderNames.length != 0 && commanderNames.map((name, i) => {
                        if(name !== playerName) {
                            return(
                                <CommanderCounter key={i} commanderName={name} onCommanderDamage={handleDamage} onCommanderDead={handleDead}/>
                            )
                        }
                    })} 
                    {commanderNames.length == 0 && <p>No Names Set</p>}
                </div>
        </div>
    );
}

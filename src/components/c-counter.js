import React, { useEffect, useState } from 'react';
export default function CommanderCounter({ onCommanderDamage, onCommanderDead, commanderName }){
    const [commanderCount, setCommanderCount] = useState(0);

    const increment = () => {
        setCommanderCount(commanderCount + 1);
      onCommanderDamage('plus');
    };
  
    const decrement = () => {
        setCommanderCount(commanderCount - 1);
      onCommanderDamage('minus');
    };


    useEffect(() => {
        if(commanderCount == 21) {
            onCommanderDead(true);
        } else {
            onCommanderDead(false);
        }
    }, [commanderCount])  

    return (
        <div className={(commanderCount == 21) ? 'commander-counter relative dead' : 'commander-counter relative'}>
            <span className='name'>{commanderName}</span>
            <button className="increment" onClick={increment} disabled={commanderCount >= 21}>+</button>
            <h2 className="life-total">{(commanderCount !== 21) ? commanderCount : <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M368 400c-.4-16 7.3-31.2 20.4-40.4C436.1 326.2 464 276.9 464 224c0-91.4-86.9-176-208-176S48 132.6 48 224c0 52.9 27.9 102.2 75.6 135.6c13.1 9.2 20.8 24.4 20.4 40.4l0 0v64h48V440c0-13.3 10.7-24 24-24s24 10.7 24 24v24h32V440c0-13.3 10.7-24 24-24s24 10.7 24 24v24h48V400l0 0zm48-1.1c0 .4 0 .7 0 1.1v64c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48V400c0-.4 0-.7 0-1.1C37.5 357.8 0 294.7 0 224C0 100.3 114.6 0 256 0S512 100.3 512 224c0 70.7-37.5 133.8-96 174.9zM112 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm232-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>}</h2>
            <button className="decrement" onClick={decrement} disabled={commanderCount <= 0}>-</button>
        </div>
    );
}

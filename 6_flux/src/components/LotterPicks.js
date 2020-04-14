import React from 'react'

const lotteryPicks = (props) =>{
    return(
        <div>
            <h1>Picks</h1>
            <ol>
                {props.picks.map((pick)=>{
                    return (
                    <li key={pick}>{pick}</li>
                    );
                })}
            </ol>
        </div>
    );
};

export default lotteryPicks;

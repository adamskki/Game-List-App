import React,{ useState } from "react";
import "./Game.css";

const GameComponent = (props) => {

  const [newRating, setNewRating] = useState('')

  return (
    <div className="list-row">
        <div className="list-row_content">
            <img src={props.gameImage} alt="GameImage" height="150px" width="200px"></img>
            <div className="title-description">
                <p>{props.gameTitle}</p>
                <p>{props.gameDesc}</p>
            </div>
            <p className="rating">{props.gameRating}/10</p>
        </div>
        <div className="list-row_buttons">
            <button onClick={
              e=> {
                props.showEditField(props.gameIndex)
              }
            }>Change Rating</button>
            <button onClick={e => {props.deleteGame(props.gameIndex)}}>Remove</button>      
        </div>
        {props.gameEdit?
        <div className="edit-field">
            <input
            placeholder="Wpisz nowy ranking" 
            type="text" 
            value={newRating}
            onChange={event => {
                const newRate = event.target.value;
                setNewRating(() => (
                    newRate
                ));}
            }>
            </input>
            <button onClick={e => {props.changeGameRating(props.gameIndex,newRating,setNewRating)}}>Change Rating</button>
        </div>
        : null 
        }
    </div>
  );
};

export default GameComponent;

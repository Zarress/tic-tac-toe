import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const clickHandler = () => {
    setIsEditing(wasEditing => !wasEditing);
  };

  const changeNameHandler = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && <input type="text" value={playerName} onChange={changeNameHandler} required placeholder={name}></input>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>

    </li>
  );
}

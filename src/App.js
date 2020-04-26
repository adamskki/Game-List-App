import React, { useState } from 'react';
import './App.css';
import HeaderComponent from './components/Header/Header';
import InputComponent from './components/Input/Input';
import FilterComponent from './components/Filter/Filter';
import GameComponent from './components/Game/Game';
import gamesJSON from './data/games.json';


function App() {

  const [games, setGames] = useState(
    gamesJSON.map((game) => game)
  )

  const [searchGames, setSearchGames] = useState("");

  const [sort, setSort] = useState("");

  
  const addNewGame = game => {
    setGames(prevGames => [...prevGames, {id: Math.random(), ...game}])
  }
  
  const deleteGame = gameIndex => {
      const gamesCopy = [...games];
      gamesCopy.splice(gameIndex, 1);
      setGames(gamesCopy)
    }

  const showEditField = gameIndex => {
    const gamesCopy = [...games];
    gamesCopy[gameIndex].edit = true
    setGames(gamesCopy)
  }

  const changeRating = (gameIndex,newRating,setNewRating) => {
    const gamesCopy = [...games];
    gamesCopy[gameIndex].rating = newRating;
    gamesCopy[gameIndex].edit = false;
    setGames(gamesCopy);
    setNewRating("")
  }

  


  
  return (
    <div className="App">
      <HeaderComponent/>
      <InputComponent
      games={games}
      addNewGame={addNewGame}
      />
      <FilterComponent 
      onTitleSearch={setSearchGames}
      chooseSort={setSort}
      />
      {
        searchGames.length!==0 
        ? games.filter(game => game.title.match(searchGames))
        .sort((game1, game2) => {
          if(sort==="title"){
            return game1.title.localeCompare(game2.title);
          }
          else if(sort==="rating"){
            return parseInt(game1.rating) - parseInt(game2.rating);
          }
          else{
            return game1;
          }
        })
        .map((game,index) => {
          return <GameComponent
            key={game.id}
            gameTitle={game.title}
            gameDesc={game.description}
            gameImage={game.image}
            gameRating={game.rating}
            deleteGame={deleteGame}
            gameIndex={index}
            gameEdit={game.edit}
            showEditField={showEditField}
            changeGameRating={changeRating}
          />
        })
        : games.sort((game1, game2) => {
          if(sort==="title"){
            return game1.title.localeCompare(game2.title);
          }
          else if(sort==="rating"){
            return parseInt(game1.rating) - parseInt(game2.rating);
          }
          else{
            return game1;
          }
        })
        .map((game,index) => {
          return <GameComponent
            key={game.id}
            gameTitle={game.title}
            gameDesc={game.description}
            gameImage={game.image}
            gameRating={game.rating}
            deleteGame={deleteGame}
            gameIndex={index}
            gameEdit={game.edit}
            showEditField={showEditField}
            changeGameRating={changeRating}
          />
        })
      }  
    </div>
  );
}

export default App;

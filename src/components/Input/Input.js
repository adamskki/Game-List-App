import React, { useState } from 'react';
import './Input.css'

const InputComponent = (props) => {

    const [titleInput, setTitleInput] = useState('')
    const [descriptionInput, setDescriptionInput] = useState('')
    const [imageInput, setImageInput] = useState('')
    const [ratingInput, setRatingInput] = useState('')

    const submitHandler = event => {
        event.preventDefault();
        props.addNewGame({title: titleInput, description: descriptionInput, image: imageInput, rating: ratingInput});
        setTitleInput("");
        setDescriptionInput("");
        setImageInput("");
        setRatingInput("")
    }

    return (
        <div className="main-input-button">
            <div className="input">
                <div className="input-container">
                    <input 
                        placeholder="Podaj nowy tytul..."
                        type="text" 
                        value={titleInput} 
                        onChange={event => {
                            const newTitle = event.target.value;
                            setTitleInput(() => (
                                newTitle
                            ));}
                            }>    
                    </input>
                    <input
                        placeholder="Podaj nowy opis..." 
                        type="text" 
                        value={descriptionInput}
                        onChange={event => {
                            const newDesc = event.target.value;
                            setDescriptionInput(() => (
                                newDesc
                            ));}
                            }>
                    </input>
                </div>
                <div className="input-container">
                    <input
                        placeholder="Podaj nowy url obrazka..."  
                        type="text" 
                        value={imageInput}
                        onChange={event => {
                            const newImage = event.target.value;
                            setImageInput(() => (
                                newImage
                            ));}
                        }>
                    </input>
                    <input
                        placeholder="Podaj nowy ranking..."   
                        type="text" 
                        value={ratingInput}
                        onChange={event => {
                            const newRating = event.target.value;
                            setRatingInput(() => (
                                newRating
                            ));}
                            }>
                    </input>
                </div>
            </div>
            <div className="button-add_game">
                <button onClick={submitHandler}>Add new game</button>
            </div>
        </div>
    )
}

export default InputComponent;
import React,{ useState } from 'react';
import './Filter.css';

const FilterComponent = (props) => {


    const [titleInput, setTitleInput] = useState('')

    const titleHandleChange = (title) => {
        setTitleInput(title);
        props.onTitleSearch(title);
    };

    return (
        <div className="filter-sorting-container">
            <div className="filter">
            <input 
                placeholder="Szukaj po tytule..."
                type="text" 
                value={titleInput}
                onChange={e => titleHandleChange(e.target.value)} 
                >
                </input>
            </div>
            <div className="sorting">
                <div className="title-sorting">
                    <button onClick={
                        e => {
                            props.chooseSort('title')
                        }
                        }
                        >Sortuj A-Z po nazwie</button>
                </div>
                <div className="ranking-sorting">
                <button onClick={e => {
                            props.chooseSort('rating')
                        }}
                        >Sortuj 1-10 po rankingu</button>
                </div>
            </div>
        </div>
    )
}

export default FilterComponent;
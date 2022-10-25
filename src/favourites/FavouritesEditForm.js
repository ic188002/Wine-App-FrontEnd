import React from 'react'
import { useState } from 'react'

export default function FavouritesEditForm(props) {
    const [newFavourites, setNewFavourites] = useState(props.favouriteWine)
    // console.log(props.favouriteWine)

    const handleChange = (e) => {
        const attributeToChange = e.target.name
        const newValue = e.target.value

        const favourites = {...newFavourites}
        favourites[attributeToChange] = newValue
        console.log(favourites)
        setNewFavourites(favourites)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.editFavourites(newFavourites);
        e.target.reset();
    }

    

  return (
<div>
            <div className='form1'>
           <div className='form'>
            <form onSubmit={handleSubmit} className="form">
                <h1>Update A Wine Categorie</h1>
                <div>
                    <label>Name:</label>
                    <input name='name' type='text' onChange={handleChange}></input>
                </div>
                <div>
                    <label>Description:</label>
                    <input name='description' type='text' onChange={handleChange}></input>
                </div>
                <div>
                    <label>Wine Night</label>
                    <select name="wineNights" id="wineNights" onChange={handleChange}>
                        <option value="romanticNight">Romantic Night</option>
                        <option value="dinnerParty">Dinner Party</option>
                        <option value="cheapAndCheerful">Cheap And Cheerful</option>
                        <option value="christmas">Christmas Holiday</option>
                        <option value="celebrations">Celebrations</option>
                    </select>
                </div>

                {/* <div>
                    <input name='user' type='hidden' value={`${props.user}`}></input>
                </div> */}
                <br/>
                <div>
                    <input type="submit" value="Add Wine Night"></input>
                </div>

            </form>
            </div>
            </div>
        </div >
  )
}

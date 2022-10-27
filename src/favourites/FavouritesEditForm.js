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
            <div  id="editform" className='form1'>
           <div className='form'>
            <form onSubmit={handleSubmit} className="form">
                <h1>Update Your Wine Night</h1>
                <div>
                    <label>Name:</label>
                    <input name='name' type='text' onChange={handleChange} value={newFavourites.name}></input>
                </div>
                <div>
                    <label>Description:</label>
                    <input name='description' type='text' onChange={handleChange} value={newFavourites.description}></input>
                </div>
                <div>
                    <label>Wine Night</label>
                    <select name="wineNights" id="wineNights" onChange={handleChange} value={newFavourites.wineNights}>
                        <option value="">Select an Option </option>
                        <option value="Romantic Night">Romantic Night</option>
                        <option value="Dinner Party">Dinner Party</option>
                        <option value="Cheap & Cheerful">Cheap And Cheerful</option>
                        <option value="Christmas">Christmas Holiday</option>
                        <option value="Celebrations">Celebrations</option>
                        <option value="Birthdays">Birthday</option>
                    </select>
                </div>

                {/* <div>
                    <input name='user' type='hidden' value={`${props.user}`}></input>
                </div> */}
                <br/>
                <div>
                    <input type="submit" value="Update your Wine Night"></input>
                </div>

            </form>
            </div>
            </div>
        </div >
  )
}

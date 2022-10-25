import React, { useState } from 'react'




export default function FavouritesCreateForm(props) {
    
    const [newWineNight, setNewWineNight] = useState({user: props.user})

    

    const handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const wineNight = { ...newWineNight }
        wineNight[attributeToChange] = newValue
        console.log(wineNight)
        setNewWineNight(wineNight)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addNewWineNight(newWineNight);
        event.target.reset();
    }


    return (
        <div>
            <h2 className='favForm'>Favourites Form</h2>
            <form onSubmit={handleSubmit}>
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
                
                <div>
                    <input name='user' type='hidden' value={`${props.user}`}></input>
                </div>

                <div>
                    <input type="submit" value="Add Wine Night"></input>
                </div>
                
            </form>
        </div>
    )
}

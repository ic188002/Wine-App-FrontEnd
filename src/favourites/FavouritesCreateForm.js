import React, { useState } from 'react'
import { Link } from "react-router-dom"




export default function FavouritesCreateForm(props) {

    const [newWineNight, setNewWineNight] = useState({ user: props.user })

    

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

            <div className='form1'>
           <div className='form'>
            <form onSubmit={handleSubmit} className="form">
                <h1>Create Wine Night</h1>
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
                        <option value="">Select an Option </option>
                        <option value="Romantic Night">Romantic Night</option>
                        <option value="Dinner Party">Dinner Party</option>
                        <option value="Cheap & Cheerful">Cheap And Cheerful</option>
                        <option value="Christmas">Christmas Holiday</option>
                        <option value="Celebrations">Celebrations</option>
                        <option value="Birthdays">Birthday</option>
                    </select>
                </div>

                <div>
                    <input name='user' type='hidden' value={`${props.user}`}></input>
                </div>
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

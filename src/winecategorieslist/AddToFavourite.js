import React from 'react'
import { useState } from 'react'


export default function AddToFavourite(props) {

    const [addToWineNight, setaddToWineNight] = useState({})

    console.log(props.currentWine.title)


    const handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const addWineNight = {
            title: props.currentWine.title,
            description: props.currentWine.description,
            imageUrl: props.currentWine.imageUrl,
            link: props.currentWine.link,
            price: props.currentWine.price,
            id: props.currentWine.id
        }
        addWineNight[attributeToChange] = newValue
        console.log(addToWineNight)
        setaddToWineNight(addWineNight)
    }

    const handleSubmit = (event) => {
        console.log(addToWineNight)
        event.preventDefault();
        props.addToWineNight(addToWineNight);
        event.target.reset();
    }


    const addToFavourites = props.wineNights.map((wineNight, index) => (
        <option key={index} value={`${wineNight._id}`}>{`${wineNight.name}`} </option>
    ))

    return (
        <div>




            <form onSubmit={handleSubmit}>
                <div className='add-to-list'>
                    <div>
                        <label className='favouriteWines'>Add To Favourites</label>
                        <select name="favouriteWine" id="wineNights" onChange={handleChange}>
                            <option value="dummy">Select Your Wine Night </option>
                            {addToFavourites}
                        </select>
                    </div>

                    <div>
                        <input name='title' type='hidden' value={`${props.currentWine.title}`}></input>
                    </div>
                    <div>
                        <input name='description' type='hidden' value={`${props.currentWine.description}`} ></input>
                    </div>
                    <div>
                        <input name='imageUrl' type='hidden' value={`${props.currentWine.imageUrl}`}></input>
                    </div>
                    <div>
                        <input name='price' type='hidden' value={`${props.currentWine.price}`}></input>
                    </div>
                    <div>
                        <input name='link' type='hidden' value={`${props.currentWine.link}`} ></input>
                    </div>
                    <br />
                    <div className="add-to-list-button-div">
                        <input className="add-to-list-button" type="submit" value="Add Wine Night"   ></input>
                    </div>
                </div>
            </form>
        </div>

    )
}
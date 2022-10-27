
// import React, {useState} from 'react'

// export default function WineListFilter(props) {
//     const [wineFilter, setWineFilter] = useState({})

//     const handleChange = (event) => {
//         const attributeToChange = event.target.name
//         const newValue = event.target.value

//         const wineFilter = {
//             category: props.category,
//             number: '6'
//         }
//         wineFilter[attributeToChange] = newValue
//         console.log(wineFilter)
//         setWineFilter(wineFilter)
//     }

//     const handleSubmit = (event) => {
//         console.log(wineFilter)
//         event.preventDefault();
//         props.filterrecommendations(wineFilter);
//         event.target.reset();
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
             
// {/*         
//                     <label>Price</label>
//                     <select name="maxPrice"  onChange={handleChange}>
//                         <option type='number' value="">Select an Option </option>
//                         <option type='number'value='15'>up to $15</option>
//                         <option type='number'value="25">up to $25</option>
//                         <option type='number' value="30">up to $30</option>
//                         <option type='number'value="40">up to $40</option>
//                         <option  type='number'value="100">Over $40</option>
//                     </select>
//          */}

//                      <label>Rating</label>
//                     <select name="minRating"  onChange={handleChange}>
//                         <option type='number' value="">Select an Option </option>
//                         <option  type='number' value="0.2">1 Star</option>
//                         <option  type='number' value="0.4">2 Star</option>
//                         <option type='number' value="0.6">3 Star</option>
//                         <option type='number' value="0.8">4 Star</option>
//                         <option  type='number' value="1"> 5 Star</option>
//                     </select> 
              
//                <div>
//                  <input type="submit" value="filter"></input>
//                 </div>
//             </form>
//         </div>

//     )
// }
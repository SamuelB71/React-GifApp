import { useEffect } from "react"
import {getGifs} from "../helpers/getGifs.js"
import { useState } from "react"
import useFetchGifs from "../hooks/useFetchGifs.js"
import { GifItem } from "./GifItem.jsx"



export const GifGrid = ({category}) => {

  
  const {images, isLoading} = useFetchGifs(category)


  return (
    <>


      {/* <h2 className={isLoading}>Cargando...</h2> */}


      <h3>{category}</h3>
      {
        isLoading ? (<h2>Cargando...</h2>) : null
      }
      
      <div className="card-grid">
        
        {/* no funciona */}
        <ol>
          {images.map( (image) => (
            <GifItem
              key={image.id} 
              { ...image }
            />
            ))} 
            
        </ol>
          
      </div>

      
    </>
  )
}



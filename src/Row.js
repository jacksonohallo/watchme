import React, { useState } from 'react'
import axios from './axios'


const Row = ({ title }) => {
    
    const [movies,setMovies] = useState([])

    const useEffect(() => {
      
      const request = await axios.get(fetchUrl);
    
      async function fetchData () {
        second
      }

fetchData();

    }, [third])
    

  return (
      <div>
          <h2>{title}</h2>  
     </div>
  )
}

export default Row

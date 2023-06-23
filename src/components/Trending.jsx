import React, { useEffect } from 'react'

function Trending() {

    useEffect(() => {
        getTrending();
    },[])

    const getTrending = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=9`
        );

        const data = await api.json();
        console.log(data);
    };

  return (
    <div>
      <h1>Trending</h1>
    </div>
  )
}

export default Trending

import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper } from './styled-components/Wrapper'
import { Card } from './styled-components/Card'
import { Gradient } from './styled-components/Gradient'

function Trending() {

    const [trending, setTrending] = useState([]);


      useEffect(() => {
        const getTrending = async () => {

          const check = localStorage.getItem("trending");

          if(check) {
            setTrending(JSON.parse(check));
          }

          else {
            try {
              const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20`
              );
              const data = await api.json();
              setTrending(data.recipes);
              console.log(data.recipes);
  
            } catch (error) {
              console.log("error fetching data", error);
            }
          }
        };
      
        getTrending();
      }, []);
          

  return (
    
          <Wrapper>

            <h3>Popular Picks</h3>
            <Splide options={{
              perPage: 4,
              // arrows:false,
              pagination:false,
              drag:'free',
              gap: "5rem",
              }}>

                {trending.map((recipe) => {
                  return (
                    <SplideSlide key ={ recipe.id}>
                        <Card>
                          <p>{recipe.title}</p>
                          <img src={recipe.image} alt={recipe.title} />
                          <Gradient />
                        </Card>
                    </SplideSlide>
                  )
                })}

            </Splide>
          </Wrapper>
        )
};    

export default Trending;




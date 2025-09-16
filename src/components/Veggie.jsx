import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper } from './styled-components/Wrapper'
import { Card } from './styled-components/Card'
import { Gradient } from './styled-components/Gradient'
import { Link } from 'react-router-dom';


function Veggie() {

  const [veggie, setVeggie] = useState([]);


      useEffect(() => {
        const getVeggie = async () => {

          const check = localStorage.getItem("veggie");

          if(check) {
            setVeggie(JSON.parse(check));
          }

          else {
            try {
              const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20&tags=vegetarian`
              );
              const data = await api.json();

              localStorage.setItem("veggie", JSON.stringify(data.recipes));
              setVeggie(data.recipes);
              console.log(data.recipes);
  
            } catch (error) {
              console.log("error fetching data", error);
            }
          }
        };
      
        getVeggie();
      }, []);
          
  return (
          <Wrapper>

            <h3>Our Vegetarian Picks</h3>
            <Splide 
  options={{
    perPage: 3,
    pagination: false,
    drag: 'free',
    gap: "2rem",
    breakpoints: {
      1024: { perPage: 2, gap: "1.5rem" },  // tablets
      768: { perPage: 1, gap: "1rem" }      // mobile
    }
  }}
>



                {veggie.map((recipe) => {
                  return (
                    <SplideSlide key ={recipe.id}>
                        <Link to={'/recipe/' + recipe.id}>
                          <Card>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title} />
                            <Gradient />
                          </Card>
                        </Link>
                    </SplideSlide>
                  )
                })}

            </Splide>

          </Wrapper>

  )
}

export default Veggie

import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {

    const [recipe, setRecipe] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");
    let params = useParams();

    const getRecipe = async() => {
        const response = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        
        const data = await response.json();

        setRecipe(data);
        console.log(recipe)
    
    }

    useEffect(() => {
        getRecipe();
    }, [params.name]);




  return (
    <DetailWrapper>
        <div>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt="" />
        </div>

        <Info>
            <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>Instructions</Button>
            
            <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>

            {activeTab === 'instructions' && (
                <div>
                    <h3 dangerouslySetInnerHTML={{__html: recipe.summary}}></h3>

                    <h3 dangerouslySetInnerHTML={{__html: recipe.instructions }}></h3>
                </div>
            )}

            {activeTab === 'ingredients' && (
                <ul>
                    {recipe.extendedIngredients.map((ingredient) =>
                    <li key={ingredient.id}>{ingredient.original}</li>
                    )}
                </ul>
            )}
            

        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    border: white;
  }

  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;

const Info = styled.div`
  margin-left: 5rem;
  flex: 1;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;


export default Recipe;

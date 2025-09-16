import React from 'react'
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log("hey");
        navigate('/searched/'+input)

    }

  return (
    <FormStyle action="" onSubmit={submitHandler}>
        <FaSearch/>
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" name="" id="" />
    </FormStyle>
  )
}
const FormStyle = styled.form`
  margin: 2rem auto;   /* centers form, adds top/bottom space */
  position: relative;
  width: 100%;
  max-width: 600px;   /* prevents it from stretching too wide */

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.2rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: white;
  }

  /* smaller screens */
  @media (max-width: 768px) {
    max-width: 90%;
    input {
      font-size: 1rem;
      padding: 0.8rem 2.5rem;
    }
  }

  @media (max-width: 480px) {
    max-width: 95%;
    input {
      font-size: 0.9rem;
      padding: 0.7rem 2rem;
    }
  }
`;



export default Search

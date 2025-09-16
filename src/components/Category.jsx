import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from "styled-components";
import {NavLink} from 'react-router-dom'

import React from 'react'

function Category() {
  return (
    <List>
        <SLink to={"/cuisine/Italian"}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/American"}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Thai"}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/Japanese"}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: clamp(0.7rem, 1.5vw, 1rem); /* responsive font size */
        text-align: center;
    }

    svg {
        color: white;
        font-size: clamp(1rem, 4vw, 2rem); /* responsive icon size */
    }

    &.active {
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            color: white;
        }

        h4 {
            color: white;
        }
    }

    @media (max-width: 768px) {
        width: 5rem;
        height: 5rem;
        margin-right: 1.5rem;
    }

    @media (max-width: 480px) {
        width: 4rem;
        height: 4rem;
        margin-right: 1rem;
    }
`;


export default Category

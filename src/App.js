import { BrowserRouter, Link } from "react-router-dom";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { GiKnifeFork } from "react-icons/gi";
import styled from "styled-components";

function App() {
  return (

      <div className="App">
        <BrowserRouter>
            <Nav>
              <GiKnifeFork/>
              <Logo to={'/'}>deliciousss</Logo>
            </Nav>
            <Search/>
            <Category/>
            <Pages/>

        </BrowserRouter>
      </div>


  );
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 300;
    font-family: 'Lobster', cursive;
    // font-family: 'Montserrat', sans-serif;
`

const Nav = styled.div`
    padding: 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg {
      font-size: 2rem;
    }
`
export default App;

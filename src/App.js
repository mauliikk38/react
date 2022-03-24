import Pages from "./pages/Pages";
import Catagory from "./components/Catagory";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}>Deliciousss</Logo>
      </Nav>
        <Search />
        <Catagory />      
        <Pages />
        </BrowserRouter>       
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  font-style: italic;
  border-radius: 100%;
  
 
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -5rem;
  svg{
    font-size: 2rem;
  }
`;

export default App;

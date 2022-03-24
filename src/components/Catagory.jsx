import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Catagory() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>  
        </SLink><br />
        <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>  
        </SLink><br />
        <SLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>  
        </SLink><br />
        <SLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>  
        </SLink><br />
    </List>
  )
}
const List =  styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
 
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin-right: 2rem;
  font-size: 3rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 8rem;
  height: 8rem;
  cursor: pointer;
  transform: scale(0.9);

  h4{
    color: white;
    font-size: 1.4rem;
  }
  svg{
    color: white;
    font-size: 2rem;
  }
  &.active{
    background-image: linear-gradient(to right, black, red);
  }
  
  svg{
    color: white;
  }
  h4{
    color: white;
  }
  &.hover{
    background-image:linear-gradient(to right, white, yellow);
  }
  svg{
    color: white;
  }
  h4{
    color: white;
  }
`;



export default Catagory
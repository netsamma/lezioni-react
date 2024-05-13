import { Link } from "react-router-dom"
import styled from "styled-components";
import Avatar from "./Avatar";

const Navbar = (props) => {
  return (
    <Nav>
        <NavLink to="/">Home</NavLink> 
        <NavSearch
          onChange={(e) => props.handleFilter(e.target.value)}
          placeholder="Ricerca prodotto"
          type="search">
        </NavSearch>
        <Avatar isLogged={props.isLogged}></Avatar>
        <NavLink to="/dashboard">Dashboard</NavLink>         
    </Nav>
  )
}

export default Navbar

const Nav = styled.div`
  background: black;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  color: azure;
  margin: 0 20px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: #fac136;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavSearch = styled.input`
  height: 50%;
  flex: 1;
  margin: 0 20px;
  padding: 10px;
  font-size: 1.2em;
`;
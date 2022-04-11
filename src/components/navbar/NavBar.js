import { Paper } from "@mui/material";
import { NavLink } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Paper style={{ width: '20%', height: '100vh', background: 'rgb(202 209 229)' }}>
      <Link to='/' style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={logo} alt="logo" width="55%" />
      </Link>

      <MenuList>
        <NavLink style={{ textDecoration: 'none' }} to="/"><MenuItem style={{ color: '#484747', fontWeight: 600, margin: '1rem 0' }}>Home</MenuItem></NavLink>
        <NavLink style={{ textDecoration: 'none' }} to="/questions" ><MenuItem style={{ color: '#484747', fontWeight: 600, margin: '1rem 0' }}>Pesquisa</MenuItem></NavLink>
        <NavLink style={{ textDecoration: 'none' }} to="/about" ><MenuItem style={{ color: '#484747', fontWeight: 600, margin: '1rem 0' }}>Sobre</MenuItem></NavLink>
      </MenuList>
    </Paper>
  )
}
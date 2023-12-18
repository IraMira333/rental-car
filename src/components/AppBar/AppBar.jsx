import { NavLink } from 'react-router-dom';
import { StyledHeader, StyledNavLink } from './AppBar.styled';
import carLogo from '../../assets/carRentCut.png';

export default function AppBar() {
  return (
    <>
      <StyledHeader>
        <NavLink to="/">
          <img src={carLogo} alt="logo" height="60" />
        </NavLink>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
      </StyledHeader>
    </>
  );
}

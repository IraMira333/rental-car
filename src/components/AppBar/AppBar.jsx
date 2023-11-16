import { StyledHeader, StyledNavLink } from './AppBar.styled';

export default function AppBar() {
  return (
    <>
      <StyledHeader>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
      </StyledHeader>
    </>
  );
}

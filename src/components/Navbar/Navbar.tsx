import { NavbarWrapper, NavbarText, DogEmoji } from 'components/Navbar/Navbar.styles';

const Navbar = () => (
  <NavbarWrapper>
    <NavbarText>
      Dogs API
      <DogEmoji role="img" aria-label="dog">
        🐕
      </DogEmoji>
    </NavbarText>
  </NavbarWrapper>
);

export default Navbar;

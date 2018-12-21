import Nav from "./Nav";
import styled from "styled-components";
import Link from "next/link";

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5 rem;
    background: ${props => props.theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <div>
      <div className="bar">
        <Logo>
          <Link href="/">
            <a>Fake Store</a>
          </Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>Cart</div>
    </div>
  );
};

export default Header;

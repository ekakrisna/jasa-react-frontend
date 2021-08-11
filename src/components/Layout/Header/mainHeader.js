import { useState } from "react";
import styled from "styled-components";
import media from "../../../styles/_mediaQueries";
import { colors } from "../../../styles/_variables";
import { SearchIcon } from "../../icon";
import NavToggleButton from "./navToggle";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  height: 60px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
  /* display: flex; */
  /* align-items: center; */
  padding-top: 16px;
  padding-bottom: 8px;

  @media ${media.md} {
    padding-top: 8px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  margin-left: 32;
`;

const Kategory = styled.div`
  /* margin-left: 32px; */

  &:hover,
  &:focus {
    color: ${colors.secondary};
    cursor: pointer;
  }
`;

const SearchBar = styled.div`
  flex-wrap: nowrap;
`;

const SearchBtn = styled.button`
  background: ${colors.base};
  border: 1px solid ${colors.secondary};
  color: ${colors.white};
  border-radius: 0 10px 10px 0;
  padding: 8px;
  border-left: none;
  max-height: 31px;

  svg {
    height: 11px;
    width: 11px;
  }

  @media ${media.md} {
    svg {
      height: 15px;
      width: 15px;
    }
  }
`;

const CustomInput = styled.input`
  border: 1px solid ${colors.secondary};
  border-radius: 10px 0 0 10px;
  padding: 10px 12px;
  font-size: 12px;
  border-right: none;
  margin-left: 0;
  width: 100%;
  height: 31px;

  &:focus {
    outline: none;
    box-shadow: none;
    border-color: ${colors.base};
  }

  &:focus ~ ${SearchBtn} {
    border-color: ${colors.base};
  }
`;

export default function MainHeader() {
  //
  // Toggle menu open/close on mobile and set bollean type for useState
  //
  const [menuOpen, setMenuOpen] = useState(false);

  const navToggleClick = () => {
    setMenuOpen(menuOpen ? false : true);
  };

  return (
    <Wrapper>
      <Container className="container">
        <div>
          <Logo
            src={process.env.REACT_APP_URL + "images/logo-full.png"}
            alt="Jasa Kita"
            width="35"
            height="40"
            className="d-none d-md-none d-lg-block"
          />
          <Logo
            src={process.env.REACT_APP_URL + "images/logo-icon.png"}
            alt="Jasa Kita"
            width="35"
            height="40"
            className="d-none d-md-block d-lg-none"
          />
        </div>
        <Kategory className="mx-3 d-none d-md-flex">Kategori</Kategory>
        <SearchBar className="input-group mx-md-3">
          <CustomInput
            type="text"
            className="form-control"
            id="input-search"
            placeholder="Search services..."
          />
          <SearchBtn className="input-group-append">
            <SearchIcon />
          </SearchBtn>
        </SearchBar>

        <NavLink
          to="/login"
          className="btn btn-sm btn-outline-secondary mr-3 d-none d-md-flex"
        >
          Masuk
        </NavLink>
        <NavLink
          to="/signup"
          className="btn btn-sm btn-secondary d-none d-md-flex"
        >
          Daftar
        </NavLink>
        <NavToggleButton menuOpen={menuOpen} navToggleClick={navToggleClick} />
      </Container>
    </Wrapper>
  );
}

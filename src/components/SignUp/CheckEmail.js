import styled from "styled-components";
import media from "../../styles/_mediaQueries";

import { NavLink } from "react-router-dom";
import Button from "../Elements/Button";

const Container = styled.div`
  height: 65vh;

  @media ${media.md} {
    height: 75vh;
  }
`;

const CheckEmail = ({ nextStep }) => {
  return (
    <Container className="container py-4">
      <div className="row justify-content-center text-center">
        <div className="col-md-6 p-3">
          <p>Tolong periksa email Anda untuk verifikasi.</p>
          <p>
            Tidak mendapat email?
            <NavLink to="/login">
              <strong> Kirim Ulang</strong>
            </NavLink>
          </p>
        </div>
      </div>
      <div className="text-center">
        <Button onClick={nextStep}>Next</Button>
      </div>
    </Container>
  );
};

export default CheckEmail;

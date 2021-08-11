import styled from "styled-components";
import { colors } from "../../styles/_variables";

import { NavLink } from "react-router-dom";
import Button from "../Elements/Button";

const Header = styled.div`
  height: 60px;
  background: ${colors.secondary};
  svg {
    color: #fff;
  }
`;

const CheckEmail = ({ nextStep }) => {
  return (
    <div className="container py-4">
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
    </div>
  );
};

export default CheckEmail;

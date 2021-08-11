import styled from "styled-components";

import { FacebookIcon, GoogleIcon } from "../icon";
import { Button, Input } from "../elements";
import { colors } from "../../styles/_variables";

import { NavLink } from "react-router-dom";

const SignupWrapper = styled.div`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.07);
  padding: 32px 40px;
  border-radius: 10px;
`;

const ActionBtns = styled.div`
  button {
    width: 100%;
  }
`;

const Registration = styled.div`
  padding-bottom: 24px;
`;

const AutoSignup = styled.div`
  border-bottom: 1px solid ${colors.gray};
  svg {
    width: 24px;
  }
  button {
    width: 100%;
    max-width: 200px;
  }
`;

const SignupSuggestion = styled.p`
  color: ${colors.darkGrey};
`;

export default function EmailVerification({ nextStep, handleChange }) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 d-none d-md-block">
          <img
            src={process.env.REACT_APP_URL + "images/register_new.png"}
            alt="Jasa Kita"
          />
        </div>
        <div className="col-lg-6 p-md-5">
          <SignupWrapper>
            <Registration>
              <h5 className="text-center mb-0">Daftar Sekarang</h5>
              <p className="text-center">
                Sudah punya akun Jaki? <NavLink to="/login">Masuk</NavLink>
              </p>
              <AutoSignup className="row text-center pb-4 mt-4 mb-2">
                <div className="col-lg-6">
                  <Button className="btn btn-outline-secondary">
                    <FacebookIcon /> Facebook
                  </Button>
                </div>
                <div className="pt-3 pt-lg-0 col-lg-6">
                  <Button className="btn btn-outline-secondary">
                    <GoogleIcon /> Google
                  </Button>
                </div>
              </AutoSignup>
              <SignupSuggestion className="text-center">
                atau daftar dengan
              </SignupSuggestion>
              <form action="">
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  required
                  placeholder="Masukan email"
                />
                <ActionBtns>
                  <Button onClick={nextStep}>Lanjutkan</Button>
                </ActionBtns>
              </form>
            </Registration>
          </SignupWrapper>
        </div>
      </div>
    </div>
  );
}

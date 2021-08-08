import styled from "styled-components";

import { Button, Input } from "../elements";
import { FacebookIcon, GoogleIcon } from "../icon";

import { NavLink } from "react-router-dom";
import { colors } from "../../styles/_variables";

const Logo = styled.img`
  width: auto;
  height: 100px;
`;

const LoginWrapper = styled.div`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.07);
  padding: 32px 40px;
  border-radius: 10px;
`;

const ForgotPassword = styled(NavLink)`
  font-size: 14px;
`;

const ContactUs = styled.div`
  font-size: 14px;
  text-align: center;
  padding-top: 16px;
`;

const ActionBtns = styled.div`
  display: flex;
  align-items: center;
`;

const ManualLogin = styled.div`
  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 24px;
`;

const AutoLogin = styled.div`
  svg {
    width: 24px;
  }
  button {
    width: 200px;
  }
`;

const Footer = styled.div`
  font-size: 12px;
  color: ${colors.secondary};
  font-weight: 600;
`;

export default function Login() {
  return (
    <div className="container py-2">
      <div className="text-center">
        <Logo
          src={process.env.REACT_APP_URL + "images/stack_logo.png"}
          alt="Jasa Kita"
          width="auto"
          height={70}
        />
      </div>
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <img
            src={process.env.REACT_APP_URL + "images/register_new.png"}
            alt="Jasa Kita"
          />
        </div>
        <div className="col-lg-6 p-md-5">
          <LoginWrapper>
            <ManualLogin>
              <h5 className="text-center">Masuk</h5>
              <form action="">
                <Input
                  label="Email or Username"
                  type="text"
                  placeholder="Masukan email atau username"
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Masukan password"
                />
                <ActionBtns>
                  <Button>Masuk</Button>
                  <ForgotPassword to="/login" className="ml-auto">
                    Lupa kata sandi?
                  </ForgotPassword>
                </ActionBtns>
              </form>
            </ManualLogin>
            <AutoLogin className="text-center pt-4">
              <div>
                <Button className="btn btn-outline-secondary">
                  <FacebookIcon /> Facebook
                </Button>
              </div>
              <div className="pt-3">
                <Button className="btn btn-outline-secondary">
                  <GoogleIcon /> Google
                </Button>
              </div>
            </AutoLogin>
            <ContactUs>
              Butuh bantuan? <NavLink to="/login">Hubungi JaKi Care</NavLink>
            </ContactUs>
          </LoginWrapper>
        </div>
      </div>
      <Footer className="text-center">
        © {new Date().getFullYear()}, Jasa Kita
      </Footer>
    </div>
  );
}

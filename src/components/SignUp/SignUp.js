import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/_variables";

import SignupHeader from "./SignupHeader";
import EmailVerification from "./EmailVerification";
import FormIdentity from "./FormIdentity";
import CheckEmail from "./CheckEmail";

const Footer = styled.div`
  font-size: 12px;
  color: ${colors.secondary};
  font-weight: 600;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px 0;
  /* position: absolute; */
`;

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [input, setInput] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    phone: "",
    password: "",
    confirmPasswrod: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (param) => (e) => {
    setInput({
      ...input,
      param: e.target.value,
    });
    console.log(input);
  };

  const isStepOne = step === 1 ? true : false;

  return (
    <div>
      <SignupHeader isStepOne={isStepOne} prevStep={prevStep} />
      {step === 1 && (
        <EmailVerification nextStep={nextStep} handleChange={handleChange} />
      )}
      {step === 2 && <CheckEmail nextStep={nextStep} />}
      {step === 3 && <FormIdentity nextStep={nextStep} />}

      <Footer className="text-center">
        © {new Date().getFullYear()}, Jasa Kita
      </Footer>
    </div>
  );
}

import styled from "styled-components";

import ArrowLeftIcon from "../Icons/arrowLeftIcon";
import Button from "../Elements/Button";

const Logo = styled.img`
  width: auto;
  height: 100px;
`;

export default function SignupHeader({ isStepOne, prevStep }) {
  return (
    <div className="container">
      <div
        className={`${
          !isStepOne ? "row align-items-center" : ""
        }text-center py-2`}
      >
        {!isStepOne && (
          <div className="col-md-4 p-4">
            <Button
              onClick={prevStep}
              className="btn btn-outline-secondary btn-sm"
            >
              <span className="icon">
                <ArrowLeftIcon />
              </span>{" "}
              Kembali
            </Button>
          </div>
        )}
        <div className={`${!isStepOne ? "col-md-4 text-center" : ""}`}>
          <Logo
            src={process.env.REACT_APP_URL + "images/stack_logo.png"}
            alt="Jasa Kita"
            width="auto"
            height={70}
          />
        </div>
      </div>
    </div>
  );
}

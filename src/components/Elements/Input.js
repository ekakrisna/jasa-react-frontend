import styled from "styled-components";
import { colors } from "../../styles/_variables";

const InputField = styled.input`
  border-color: ${colors.gray};
  &:focus {
    outline: none;
    box-shadow: none;
    border-color: ${colors.base};
  }
`;

export default function Input({ ...props }) {
  return (
    <div className="form-group">
      <label htmlFor={props.inputId}>{props.label}</label>
      <InputField
        type={props.type}
        className={props.className}
        id={props.inputId}
        placeholder={props.placeholder}
        required={props.required}
        autoComplete={props.autoComplete}
      />
    </div>
  );
}

Input.defaultProps = {
  label: "",
  type: "text",
  className: "form-control",
  inputId: null,
  placeholder: "",
  required: false,
  autoComplete: "off",
};

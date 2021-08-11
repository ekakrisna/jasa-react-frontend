import styled from "styled-components";
import { colors } from "../../styles/_variables";

const SelectField = styled.select`
  border-color: ${colors.gray};
  border-radius: 10px;
  &:focus {
    outline: none;
    box-shadow: none;
    border-color: ${colors.base};
  }
`;

export default function Select({ children, ...props }) {
  return (
    <div className="form-group">
      <label htmlFor={props.inputId}>{props.label}</label>
      <SelectField
        type={props.type}
        className={props.className}
        name={props.name}
        id={props.inputId}
        placeholder={props.placeholder}
        required={props.required}
        autoComplete={props.autoComplete}
        ref={props.innerRef}
      >
        {children}
      </SelectField>
    </div>
  );
}

Select.defaultProps = {
  label: "",
  type: "text",
  className: "custom-select",
  inputId: "",
  placeholder: "",
  name: "",
  required: false,
  autoComplete: "off",
  ref: null,
};

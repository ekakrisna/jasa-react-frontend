export default function Button({ children, ...props }) {
  return <button className={props.className}>{children}</button>;
}

Button.defaultProps = {
  className: "btn btn-secondary",
};

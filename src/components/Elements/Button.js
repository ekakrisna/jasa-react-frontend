export default function Button({ children, ...props }) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: "btn btn-secondary",
  onClick: null,
};

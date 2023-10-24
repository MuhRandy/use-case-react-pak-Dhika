import "./Button.css";

const Button = ({ children, handler, disabled = false }) => {
  return (
    <button className="button" onClick={handler} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

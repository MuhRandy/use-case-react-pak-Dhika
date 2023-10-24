import "./Button.css";

const Button = ({ children, handler }) => {
  return (
    <button className="button" onClick={handler}>
      {children}
    </button>
  );
};

export default Button;

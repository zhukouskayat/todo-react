import "./button.css";

const Button = ({ name, className }) => (
  <button type="button" className={`button ${className}`}>
    {name}
  </button>
);

export default Button;

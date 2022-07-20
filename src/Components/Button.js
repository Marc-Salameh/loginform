import "./Button.css"

const Button = ({ symbol, handleClick }) => {
  return (
    <div onClick={handleClick} className="button-wrapper"  >
      {symbol}
    </div>
  );
};

export default Button;
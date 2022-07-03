import "./styles.css";

export const Input = ({ id, type, placeholder, value, onChange }) => {
  return (
    <input
      id={id}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      required
    ></input>
  );
};

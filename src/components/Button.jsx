import "../styles/Button.css";

export default function Button({ children, type = "button", ...rest }) {
  return (
    <button class="button" type={type} {...rest}>
      <div class="button-overlay"></div>
      <span>{children}</span>
    </button>
  );
}

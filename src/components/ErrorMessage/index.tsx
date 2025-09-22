import css from "./style.module.css";

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return <h1 className={css.error}>{message}</h1>;
}

export default ErrorMessage;

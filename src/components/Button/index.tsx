import './styles.css';

type Props = {
    content: string;
    type?: "button" | "submit" | "reset";
}

function Button({ content, type } : Props) {
  return (
    <div>
      <button type={type} className="btn btn-primary button">
        {content}
      </button>
    </div>
  );
}

export default Button;

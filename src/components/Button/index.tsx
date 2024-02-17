import './styles.css';

type Props = {
    content: string;
}

function Button({ content } : Props) {
  return (
    <div>
      <button type="button" className="btn btn-primary button">
        {content}
      </button>
    </div>
  );
}

export default Button;

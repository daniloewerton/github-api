import Button from 'components/Button';
import './styles.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="main-container">
      <h1>Desafio Github API</h1>
      <p>DevSuperior - Escola de programação</p>
      <Link to="/search">
        <Button content={'Começar'} />
      </Link>
    </div>
  );
}

export default Home;

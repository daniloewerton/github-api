import Button from 'components/Button';
import './styles.css';

function FindAccount() {
  return (
    <div className="main-container container">
      <div className="find-container">
        <div className="content-container">
            <h1>Encontre um perfil no Github</h1>
            <input type="text" placeholder='Usuário no Github'></input>
            <Button content="Encontrar" />
        </div>
      </div>
    </div>
  );
}

export default FindAccount;

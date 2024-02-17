import Button from 'components/Button';
import './styles.css';
import AccountInfoBox from 'components/AccountInfoBox';

function FindAccount() {
  return (
    <div>
      <div className="main-container-box container">
        <div className="find-container">
          <div className="content-container">
            <h1>Encontre um perfil no Github</h1>
            <input type="text" placeholder="Usuário no Github"></input>
            <Button content="Encontrar" />
          </div>
        </div>
      </div>

      <div>
        <AccountInfoBox />
      </div>
    </div>
  );
}

export default FindAccount;

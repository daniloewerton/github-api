import { GithubResponse } from 'types/GithubResponse';
import './styles.css';

interface AccountInfoBoxProps {
  data: GithubResponse;
}

function AccountInfoBox({ data }: AccountInfoBoxProps) {
  return (
    <div className="account-container container">
      <div className="image-box">
        <img src={data.avatar_url} alt="/"></img>
      </div>

      <div className="info-box">
        <h5>Informações</h5>
        <h6>
          Perfil: <span className="response-field">{data.html_url}</span>
        </h6>
        <h6>
          Seguidores: <span className="response-field">{data.followers}</span>
        </h6>
        <h6>
          Localidade: <span className="response-field">{data.location}</span>
        </h6>
        <h6>
          Nome: <span className="response-field">{data.name}</span>
        </h6>
      </div>
    </div>
  );
}

export default AccountInfoBox;

import Button from 'components/Button';
import './styles.css';
import AccountInfoBox from 'components/AccountInfoBox';
import { useState } from 'react';
import { GithubResponse } from 'types/GithubResponse';
import axios from 'axios';

type FormData = {
  user: string;
};

function FindAccount() {
  const [account, setAccount] = useState<GithubResponse>();
  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setAccount(response.data);
      });
  };

  return (
    <div>
      <div className="main-container-box container">
        <div className="find-container">
          <div className="content-container">
            <h1>Encontre um perfil no Github</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Usuário no Github"
                name="user"
                value={formData.user}
                onChange={handleChange}
              ></input>
              <Button type="submit" content="Encontrar" />
            </form>
          </div>
        </div>
      </div>

      {account && (
        <div>
          <AccountInfoBox data={account} />
        </div>
      )}
    </div>
  );
}

export default FindAccount;

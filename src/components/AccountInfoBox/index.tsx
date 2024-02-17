import './styles.css';
import Avatar from 'assets/image/avatar.png';

const response = {
  login: 'acenelio',
  id: 13897257,
  node_id: 'MDQ6VXNlcjEzODk3MjU3',
  avatar_url: 'https://avatars.githubusercontent.com/u/13897257?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/acenelio',
  html_url: 'https://github.com/acenelio',
  followers_url: 'https://api.github.com/users/acenelio/followers',
  following_url: 'https://api.github.com/users/acenelio/following{/other_user}',
  gists_url: 'https://api.github.com/users/acenelio/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/acenelio/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/acenelio/subscriptions',
  organizations_url: 'https://api.github.com/users/acenelio/orgs',
  repos_url: 'https://api.github.com/users/acenelio/repos',
  events_url: 'https://api.github.com/users/acenelio/events{/privacy}',
  received_events_url: 'https://api.github.com/users/acenelio/received_events',
  type: 'User',
  site_admin: false,
  name: 'Nelio Alves',
  company: '@devsuperior ',
  blog: 'https://devsuperior.com.br',
  location: 'Brazil',
  email: null,
  hireable: null,
  bio: 'Ajudo estudantes e profissionais de programação a ingressar ou se recolocar na carreira.\r\n20 anos de experiência profissional, mais de 160 mil alunos online. ',
  twitter_username: null,
  public_repos: 286,
  public_gists: 0,
  followers: 10988,
  following: 1,
  created_at: '2015-08-21T03:24:45Z',
  updated_at: '2023-12-29T23:22:26Z',
};

function AccountInfoBox() {
  return (
    <div className="account-container container">
      <div className="image-box">
        <img src={Avatar} alt="/"></img>
      </div>

      <div className="info-box">
        <h5>Informações</h5>
        <h6>Perfil: <span className="response-field">{response.login}</span></h6>
        <h6>Seguidores: <span className="response-field">{response.followers}</span></h6>
        <h6>Localidade: <span className="response-field">{response.location}</span></h6>
        <h6>Nome: <span className="response-field">{response.name}</span></h6>
      </div>
    </div>
  );
}

export default AccountInfoBox;

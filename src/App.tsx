import './assets/styles/custom.scss';
import './App.css';
import Navbar from 'components/Navbar';
import AccountInfoBox from 'components/AccountInfoBox';
import FindAccount from 'pages/FindAccount';

function App() {
  return (
    <>
      <Navbar />
      <FindAccount />
    </>
  );
}

export default App;

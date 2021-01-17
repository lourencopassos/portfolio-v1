import './App.css';
import Header from './components/Header'
import About from './components/About'
import Greetings from './components/Greetings'
import {GlobalStyle} from './styles/globalStyle'

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header />
      <Greetings/>
      <About />

    </div>
  );
}

export default App;

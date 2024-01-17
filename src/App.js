
import './App.css';
import Chat from './components/Chat';
import Navbar from './components/Navbar';
import { Auth } from './Firebase';
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {
  //check user login or not
  const [user]=useAuthState(Auth);
  console.log(user);
  return (
    <div className="App">
      <div className="section">
        <Navbar/>
         {user? <Chat />: null}
         {/* <Chat /> */}
      </div>
    </div>
  );
}

export default App;

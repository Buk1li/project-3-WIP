import Canvas from '../components/canvas/canvas';
import CountDown from '../components/countDown';
import Chat from '../components/Chat';
import {socket} from '../socket';
import Container from '@mui/material/Container';


const Home = () => {

  return (
    <main> 
      <CountDown/>
      <Canvas/>
      <Chat socket={socket}/>
    </main>
  );
};

export default Home;

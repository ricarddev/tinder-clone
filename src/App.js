import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ChatScreen from './components/Chats/Chat/ChatScreen';
import Chats from './components/Chats/Chats';
import Header from './components/Header/Header';
import SwipeButtons from './components/TinderCards/SwipeButtons';
import TinderCards from './components/TinderCards/TinderCards';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

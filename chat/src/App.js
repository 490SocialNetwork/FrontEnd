import {ChatEngine} from 'react-chat-engine';
import './App.css';

import ChatFeed from './components/ChatFeed'

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            //Chat Engine
            projectID="db80b9d7-09ad-4bf2-b3d7-2081d032355b"
            userName="courtneyh"
            //password
            userSecret="123123"
            
            renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    );
}

export default App;

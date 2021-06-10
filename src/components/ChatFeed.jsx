import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';


const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;
    //spec. active chats only
    const chat = chats && chats[activeChat];
    
const renderReadReceipts = (message, isMyMessage) => {
   return chat.people.map((person,index) => person.last.read ===message.id && (
        <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
                float: isMyMessage ? 'right' : 'left',
                backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
            }}
        />
    ))
}


    const renderMessages = () => {
        //fetch messages
        const keys = Object.keys(messages);
        

        return keys.map((key, index) => {
            const message = messages[key];
            //find the last message
            const lastMessageKey = index === 0 ? null : keys [index-1];
            const isMyMessage = userName === message.sender.username;
       
            return (
                <div key = {`msg_${index}`} style= {{width: '100%'}}>
                    <div className="message-block">
                        {isMyMessage
                            //then render if myMessge
                            ? <MyMessage message={message} />
                            // if not myMessage
                            : <TheirMessage  message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                            <div className= "read-receipts" style={{ marginRight: isMyMessage ? '15px' : '0px', marginLeft: isMyMessage ? '0px' : '67px'}}>
                                {renderReadReceipts(message, isMyMessage)}
                            </div>
                </div>
            );
        });
    };


//loading chat
if(!chat) return 'Loading...'; <div />;

    return (
        <div className = "chat-feed">
            <div className= "chat-title-c">
                <div clssName= "chat-title">{chat?.title}</div>
                <div className= "chat-sub">
                    {chat.people.map((person) =>  `${person.person.username}`)}
                
                </div>

            </div>

            {renderMessages()}
            <div style = {{height: '100px'}} />
            <div className= "message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    );
}

export default ChatFeed;

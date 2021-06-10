const MyMessage = (message) => {
    //if the message is an image or text
    if(message?.attachments?.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-img"
                style={{float: 'right'}}
            />
        )
    }
    return (
        //our messages will appear on right side
        <div className= "message" style={{ float: 'right', marginRight: '15px', color: 'white', backgroundColor: '#4DBAF9' }}>
            {message.text}
        </div>

    )
}

export default MyMessage;
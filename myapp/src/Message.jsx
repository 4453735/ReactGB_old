import './Message.css';

function Message({name}) {
    return (
        <div className="Message">
           <h3>Hello, {name}</h3>
        </div>
    );
}

export default Message;
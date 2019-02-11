import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <div className="username">
        {props.message.author} - {props.message.created_at}
      </div>
      <div className="message-content">
        {props.message.content}
      </div>
    </div>
  );
};

export default Message;

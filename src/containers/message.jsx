import React from 'react';

const Message = (props) => {
  return (
    <li className="message">{props.message.author}{props.message.content}</li>
  );
}

export default Message;

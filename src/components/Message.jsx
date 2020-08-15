import React from 'react';

const Message = ({msg}) => {
  return (
    <div className="col-12 p-4 message">
      <h1 className="text-center bigger-size bold">{msg}</h1>
    </div>
  );
};

export default Message;
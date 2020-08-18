import React from 'react';
import PropTypes from 'prop-types';

const Message = ({msg}) => {
  return (
    <div className="col-12 p-4 message">
      <h1 className="text-center bigger-size bold">{msg}</h1>
    </div>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Message;
import React from 'react';
import PropTypes from 'prop-types';
import { formatRelative } from 'date-fns';

const formatDate = date => {
  let formattedDate = '';
  if (date) {
    formattedDate = formatRelative(date, new Date());
    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  return formattedDate;
};

const Message = ({
  createdAt = null,
  text = '',
  displayName = '',
}) => {
  if (!text) return null;

  return (
    <div className="px-4 py-4 rounded-md hover:bg-gray-50 dark:hover:bg-coolDark-600 overflow-hidden flex items-start">
      <div>
        <div className="flex items-center mb-1">
          {displayName ? (
            <p className="mr-2 text-green-400">{displayName}</p>
          ) : null}
          {createdAt?.seconds ? (
            <span className="text-gray-500 text-xs">
              {formatDate(new Date(createdAt.seconds * 1000))}
            </span>
          ) : null}
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string,
  createdAt: PropTypes.shape({
    seconds: PropTypes.number,
  }),
  displayName: PropTypes.string,
};

export default Message;

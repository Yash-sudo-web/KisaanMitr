import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import moment from 'moment';

const Community = () => {
  const username = localStorage.getItem('username');
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [connected, setConnected] = useState(false); // New state to track the connection status
  const [socket, setSocket] = useState(null); // New state to store the socket instance

  const connectToSocket = () => {
    if (socket && socket.connected) {
      // Connection already established, no need to connect again
      return;
    }
  
    const socketInstance = io('https://kisaan-mitr-backend.vercel.app');
    setSocket(socketInstance);
    setConnected(true);
  };
  

  useEffect(() => {
    if (connected) {
      fetchComments();
      socket.on('comment', handleCommentReceived);

      return () => {
        socket.off('comment', handleCommentReceived);
      };
    }
  }, [connected]);


  const handleCommentReceived = (data) => {
    setComments((prevComments) => [data, ...prevComments]);
  };

  const postComment = (comment) => {
    if (!comment) return;

    const data = {
      username: username,
      comment: comment,
    };

    appendToDom(data);
    setCommentText('');
    broadcast(data);
    syncWithDb(data);
  };

  const appendToDom = (data) => {
    setComments((prevComments) => [data, ...prevComments]);
  };

  const broadcast = (data) => {
    socket.emit('comment', data);
  };

  const syncWithDb = (data) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    fetch('https://kisaan-mitr-backend.vercel.app/api/chat', { method: 'POST', body: JSON.stringify(data), headers })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  const fetchComments = () => {
    fetch('https://kisaan-mitr-backend.vercel.app/api/chat')
      .then((res) => res.json())
      .then((result) => {
        result.forEach((comment) => {
          comment.time = comment.createdAt;
          appendToDom(comment);
        });
      });
  };

  return (
    <>
      {!connected && (
        <button onClick={connectToSocket}>Connect to Server</button>
      )}
      {connected && (
        <>
          <div className="comment__form">
            <textarea
              id="textarea"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
            <button id="submitBtn" onClick={() => postComment(commentText)}>
              Submit
            </button>
          </div>
          <ul className="comment__box">
            {comments.map((comment, index) => (
              <li key={index} className="comment mb-3">
                <div className="card border-light mb-3">
                  <div className="card-body">
                    <h6>{comment.username}</h6>
                    <p>{comment.comment}</p>
                    <div>
                      <small>{moment(comment.time).format('LT')}</small>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Community;

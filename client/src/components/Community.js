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
        <div className="flex flex-col justify-center items-center h-screen">
        <img
          src='https://cdn.dribbble.com/users/1040798/screenshots/15685874/media/aa9588469e19517c2b94b1addd15d11d.gif'
          alt="GIF"
          className=' h-[500px]'
        />
        <br></br>
        <button
          onClick={connectToSocket}
          className="inline-block bg-black w-150 border-2 text-3xl border-primary px-6 pb-[6px] pt-2 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        >
          Enter The Commune
        </button>
      </div>
      )}
      {connected && (
        <>
        <br></br>
        <h1 className='text-3xl text-center animate-pulse font-nova-flat text-amber-800 font-extrabold'>Crop Talk For The Harvesters' Community</h1>
        <br></br>
          <div className="comment__form">
          <form class="mb-6 ">
  <textarea
    id="textarea"
    class="px-0 w-full h-[200px] text-sm font-bold border-amber-400 border-solid bg-gray-100 focus:ring-0 focus:outline-none placeholder:text-lg text-gray-900 placeholder:text-gray-600 "
    placeholder="  Write a comment..." required
    value={commentText}
    onChange={(e) => setCommentText(e.target.value)}
  ></textarea>
  <br></br>
  <button
    id="submitBtn"
    className="inline-flex items-center py-2.5 px-4 text-lg font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
    onClick={() => postComment(commentText)}
  >
    Post
  </button>
  </form>
</div>

<ul className="comment__box">
  {comments.map((comment, index) => (
    <li key={index} className="comment mb-3">
      <div className="card border-light mb-3 p-2">
        <div className="card-body box-border">
          <h6 className="text-lg font-extrabold font-nova-flat border-separate ">{comment.username}</h6>
          <p className=' text-red-500'>{comment.comment}</p>
          <br></br>
          <button className='inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-blue-200 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'> Replies</button>
          <div>
            <small className="text-gray-500">
              {moment(comment.time).format('LT')}
            </small>
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
import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';

const loadingImages = [
  "https://media1.giphy.com/media/eXpd9abiGUSI11E44i/giphy.gif?cid=ecf05e47mkkp0r56zdce1zglh1c1gxvbuglc5uayiu5mxrpz&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/KczI0aXHt26v67IiJt/giphy.gif?cid=ecf05e47peid7k1mukxzkkcjugav7je2b4n2e4wi43cj1z46&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media0.giphy.com/media/3o8dp87fBlYq7Y1QVa/giphy.gif?cid=ecf05e47peid7k1mukxzkkcjugav7je2b4n2e4wi43cj1z46&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/qSqt8YzVWLCAQFMPT3/giphy.gif?cid=ecf05e47peid7k1mukxzkkcjugav7je2b4n2e4wi43cj1z46&ep=v1_gifs_search&rid=giphy.gif&ct=g",
];
function getRandomImage(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
export const User = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(!localStorage.getItem('token'));
  const [user, setUser] = useState(null); // State to store the user data

  const reload = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.reload();
  };
  const logout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      setLoggedIn(false);
      navigate('/login');
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://kisaan-mitr-backend.vercel.app/api/user/getuser', {
          method: 'POST',
          headers: {
            "auth-token": localStorage.getItem('token'),
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data); // Update the user state with the received data
          localStorage.setItem('username', data.userName);
        } else {
          // Handle error case
          // You can redirect to the login page or display an error message
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error case
        // Display an error message or handle it as per your requirement
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return (
      <>
      <br></br>
      <div className="fixed left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-100 flex flex-col items-center">
      <br />
          <img src="https://media.tenor.com/hlKEXPvlX48AAAAi/loading-loader.gif" className=' h-20 w-20' alt="Loading" />
          <br />
        <h2 className="text-center text-blue-400 text-3xl font-extrabold">Loading...</h2>
        <br />
        <p className="w-1/3 text-center text-white">
          This may take a few seconds, please don't close this page.
          <br></br>
          <br />
          <img src={getRandomImage(loadingImages)} alt="Loading" />
          <br />
        <button className="text-center text-amber-400" onClick={reload}>Reload</button>
        </p>
      </div>
      </>
    );  
  }
  
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <title>User Board</title>
    <meta name="description" content />
    <meta name="keywords" content />
    <meta name="author" content />
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" /> 
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
        <div className="p-4 md:p-12 text-center lg:text-left">
          <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{backgroundImage: 'url("https://instagram.fdel3-4.fna.fbcdn.net/v/t51.2885-19/318352236_1145447892771584_5116707003788004649_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel3-4.fna.fbcdn.net&_nc_cat=108&_nc_ohc=F4MZOpcmGYUAX_zSl84&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCn1q_-4Yo9mAnU1GHiHtFa_r90x_iTkfGx7_j3j2vY8A&oe=647C0C19&_nc_sid=f70a57")'}} />
          <h1 className="text-3xl font-bold pt-8 lg:pt-0">{user.userName}</h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-purple-800 opacity-25" />
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">{user.occupation}</p>
          <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" /></svg> Location - Delhi, India</p>
          <h1 className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">About Me</h1>
          <p className="pt-8 text-sm text-left">{user.description}</p>
          <div className="pt-12 pb-8">
            <button className="bg-purple-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full" onClick={logout}>
              Logout
            </button> 
          </div>
          <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
            <a className="link" href="#" data-tippy-content="@facebook_handle"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" /></svg></a>
            <a className="link" href="#" data-tippy-content="@twitter_handle"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" /></svg></a>
            <a className="link" href="#" data-tippy-content="@instagram_handle"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg></a>
            <a className="link" href="#" data-tippy-content="@youtube_handle"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>YouTube</title><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" /></svg></a>
          </div>
          <Link to='/community'><button className='mt-[40px] h-[30px] rounded-2xl w-full bg-purple-700 hover:bg-green-900 text-white font-bold'>Enter the Community section.</button></Link>
        </div>
      </div>
        <div className="w-full lg:w-2/5">
        <img className="" src="https://i.pinimg.com/originals/33/77/ee/3377ee1e742f2e7adcffe61932413827.gif" />
      </div>
    </div>
  </div>
  )
}


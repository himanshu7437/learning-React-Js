import React, { useEffect, useState } from 'react';

function Github() {
  const [user, setUser] = useState(null); // State to store user details

  useEffect(() => {
    fetch('https://api.github.com/users/himanshu7437')
      .then((response) => response.json())
      .then((data) => {
        setUser(data); // Store entire user data
      })
      .catch((error) => console.error(error));
  }, []); // Runs only once when the component mounts

  // Show "Loading..." until data is fetched
  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>{user.name || 'No Name Available'}</h2> {/* Show Name if available */}
      <img
        src={user.avatar_url}
        alt="GitHub Avatar"
        style={{
            width: '150px',
            borderRadius: '50%',
            marginTop: '10px',
            display: 'block',  // Makes it a block element
            marginLeft: 'auto', // Centers it horizontally
            marginRight: 'auto'
        }}
       />

      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>
        Profile: <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a>
      </p>
    </div>
  );
}

export default Github;

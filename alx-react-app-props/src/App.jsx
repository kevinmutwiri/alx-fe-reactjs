import React from 'react';
import UserContext from './components/UserContext';
import UserDetails from './components/UserDetails';

function App() {
  const userData = {
    name: "Kevin Mutwiri",
    age: 30,
    bio: "Passionate software engineer with a focus on front-end development and user experience.",
    email: "kevin.mutwiri@example.com"
  };

  return (
    <div>
      <UserContext.Provider value={userData}>
        <div>
          <div>
            <h1>User Profile Application</h1>
            <UserDetails />
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;

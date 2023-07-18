import React from 'react'

function Home({isLoggedIn}) {
  return (
    // insted of flex-1 we can use h-full 
    <div className="flex items-center justify-center flex-1 text-3xl text-white">
      Home
    </div>
  );
}

export default Home;

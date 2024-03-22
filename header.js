import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Event Management App</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

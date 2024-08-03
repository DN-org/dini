import React from 'react';
import StarRating from '../../StarRating/StarRating';

const HomePage: React.FC = () => {
  const handleRatingChange = (rating: number) => {
    console.log("Current Rating:", rating);
  };
  return (
    <div>
      <header>
        <h1>Welcome to the Home Page</h1>
        <h2>Welcome to the Home Page</h2>
        <h3>Welcome to the Home Page</h3>
        <h4>Welcome to the Home Page</h4>
      </header>
      <main>
        <p>This is the HomePage of our application.</p>
        <p>Feel free to explore and learn more about what we offer.</p>
      </main>
      <footer>
        <p>&copy; 2024 My Website</p>
      </footer>

      <StarRating initialRating={3} onRatingChange={handleRatingChange} />
      
    </div>
  );
};

export default HomePage;

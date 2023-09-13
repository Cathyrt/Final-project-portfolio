import React from 'react';
import Footer from '../Footer';

export default function Destination() {
  return (
    <>
      <div className='destination'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Explore the Majesty of Table Mountain in Cape Town</h2>
          <p>Experience the awe-inspiring beauty of Cape Town's most iconic natural wonder, Table Mountain. Join us for a thrilling adventure that includes hiking, exploring the unique flora and fauna, and savoring panoramic views of the city and the surrounding coastline from the summit.</p>

          <h3>Experience</h3>
          <h4>Highlights</h4>
          <ul>
            <li> Morning Ascent: Your day begins with an early morning pickup in Cape Town. You'll embark on an exhilarating journey to conquer Table Mountain, a flat-topped mountain that is a symbol of the city.</li>
            <li>Hiking Exploration: Lace up your hiking boots and set off on a guided hike to the summit of Table Mountain. Along the way, your knowledgeable guide will share insights into the mountain's geological history, indigenous plants, and local wildlife.</li>
            <li>Summit Panorama: Reach the summit and be rewarded with breathtaking panoramic views of Cape Town, the Atlantic Ocean, and the surrounding coastline. The 360-degree vistas provide the perfect backdrop for unforgettable photos and moments of wonder.</li>
            <li>Cable Car Descent: To conclude your adventure, take the Table Mountain Aerial Cableway for a scenic descent back to the city. The cable car offers additional opportunities to capture stunning views from different angles.</li>
          </ul>
          <h4>Full description</h4>
          <p>This Table Mountain adventure in Cape Town provides an incredible opportunity to immerse yourself in nature, explore a world-famous landmark, and witness the natural beauty and cultural significance of this iconic mountain.</p>
          <p>Whether you're a nature enthusiast, a hiking aficionado, or a traveler seeking a unique Cape Town experience, this journey promises to be an unforgettable exploration of Table Mountain's majesty. </p>
        </div>
        
      
        <div className='booking-container'>
          <div className='booking-wrapper'>
            <section className='booking-info'>
              <h5>From</h5>
              <p className='price'>250 ZAR</p>
              <p className='per-person'>per person</p>
            </section>
            <button type='button' className='btn-book'>Book now</button>
          </div>
        </div>
      
      </div>
      <Footer />
    </>
  );
}
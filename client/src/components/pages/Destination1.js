import React from 'react';
import Footer from '../Footer';

export default function Destination() {
  return (
    <>
      <div className='destination'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Explore the beauty of Sossusvlei Namibia</h2>
          <p>Experience the awe-inspiring beauty of Sossuvlei's most iconic natural wonders, the red dunes and the skeleton coast. Join us for a thrilling adventure that includes quad-biking in the dunes, exploring the unique flora and fauna, and savoring panoramic views of the skeleton coasts from the summits of the Big Dad and Mama red dunes.</p>

          <h3>Experience</h3>
          <h4>Highlights</h4>
          <ul>
            <li> Hot Air Ballooning: With Namib Sky Ballooning Safaris you have the unique possibility to fly over the oldest desert of the world in a hot air balloon during the cool hours  of the early morning. It is a fantastic experience and exhilarating feeling to watch the sunrise in the Namib Desert from a hot air balloon.</li>
            <li>Sossusvlei: Experience Namibia from the skies!Desert Air offers several popular scenic flights from Sossuvlei Adventure Center, located at Sossuvlei and Deadvlei, the Sesriem Canyon, the diamond camps and shipwrecks of the Skeleton Coast and beautiful scenery of the Namib sand sea.</li>
            <li>Waterkloof Trail: For visitors who love being active during their holidays the Waterkloof Trail in Sossuvlei Namibia is recommendable. The 17 kilometre long trail winds along small creeks of the Naukluft Mountains in the Namib Naukluft Park, and leads through beautiful,varying landscapes.</li>
            <li>Sossusvlei and Deadvlei: Come and experience the largest sand dunes of the world: In the middle of the Namib Desert, in the Namib Naukluft Park two of Namibia's scenic highlights can be found: the Sossusvlei and Dead Vlei .</li>
          </ul>
          <h4>Full description</h4>
          <p>This Sossusvlei adventure in the Namib Naukluft Desert provides an incredible opportunity to immerse yourself in nature, explore a world-famous landmark, and witness the natural beauty and cultural significance of this iconic desert salt pan.</p>
         <p>Whether you're a nature enthusiast, a quad-biking lover, or a traveler seeking a unique Namib Naukluft Desert  experience, this journey promises to be an unforgettable exploration of Sossusvle's majesty.</p>
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


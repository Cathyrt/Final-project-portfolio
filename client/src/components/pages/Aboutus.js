
import React from 'react';
import '../../App.css';
import Footer from '../Footer';

const teamMembers = [
  {
    name: 'Cathrine Brando',
    role: 'Founder',
    description: "Breaking Barriers and Leading the Way: Meet the Woman in Tech Who's Shaping the Future of Innovation",
    imageUrl: 'cathrine-brando.jpg',
    github: 'https://github.com/Cathyrt',
  },
  {
    name: 'Elton Mziti',
    role: 'Founder',
    description: "Geoscientist Graduate, Certified Data Analyst, Green-Hydrogen Enthusiast",
    imageUrl: 'elton-mziti.jpg',
    github: 'https://github.com/EltonMziti',
  },
  {
    name: 'Yolanda Mugabe',
    role: 'Founder',
    description: 'Software Engineering Enthusiast, Leveraging Technology to Drive Success.',
    imageUrl: 'yolanda-mugabe.jpg',
    github: 'https://github.com/Yoliyolanda',
  },
];

export default function Aboutus() {
  return (
    <>
      <h1 className='Aboutus'>About Us</h1>
      <section className='heading'>
        <h1>About Us</h1>
        <p>
          Welcome to ExploreAfrica! We are passionate about showcasing the
          beauty, culture, and diversity of the African continent.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to inspire people to explore and appreciate the wonders
          of Africa. We believe in promoting sustainable tourism and supporting
          local communities.
        </p>

        <h2>Our Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="team-member-image">
                <img src={member.imageUrl} alt={member.name} />
              </div>
              <div className="team-member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p>{member.description}</p>
                <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              )}
            </div>
          ))}
        </div>

        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? Feel free to reach out to us. We are always
          here to assist you.
        </p>
        <p>Email: contact@explore-africa.com</p>
        <p>Phone: +123-456-7890</p>
      </section>
      <Footer />
    </>
  );
}

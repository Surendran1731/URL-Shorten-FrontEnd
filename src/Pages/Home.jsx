import React from 'react';

const Home = () => {
  return (
    
    <div className="home-container">
        <h1 className='title'>URL Shrinker</h1>
      <div className="card card-sep">
        <h2 className='head'>What is a URL Shortener?</h2>
        <p>
          A URL shortener is a tool that takes a long URL and converts it into a shorter, more manageable link. This shorter link can be easily shared and tracked. 
          URL shorteners are widely used in social media, marketing campaigns, and other platforms where space is limited.
        </p>
        <p>
        A URL shortener is a service that converts long URLs into shorter, more manageable ones. The shortened URL redirects users to the original, longer URL. URL shorteners are particularly useful for:
        </p>
        <dl>
       <dt>Social Media</dt>
       <dd>Many platforms have character limits for posts. Short URLs save space and allow more room for content.
       </dd>
       <dt>Aesthetics</dt>
       <dd>Shortened URLs look cleaner and are easier to share, especially in print materials or presentations.</dd>
       <dt>Tracking</dt>
       <dd>Many URL shorteners offer analytics, allowing users to track the number of clicks, geographic location of the clicks, and other data.</dd>
       <dt>Convenience</dt>
       <dd>They make it easier to remember and share links, reducing the likelihood of errors when manually typing or sharing URLs.</dd> 
        </dl>


      </div>

      <div className="card card-sep">
        <h2 className='head'>Performance</h2>
        <p>
          Our URL shortener service ensures quick and reliable redirection to the original URL. 
          We use advanced algorithms to ensure that the shortened URLs are unique and cannot be guessed, providing a secure and efficient way to manage your links.
        </p>
      </div>

      <div className="card card-sep">
        <h2 className='head'>Credentials</h2>
        <p>
          We prioritize the security and privacy of our users. Our service is built with robust security measures to protect your data. 
          Only authorized users can create, view, and manage their shortened URLs. We also provide detailed analytics for each shortened URL to help you track its performance.
        </p>
      </div>
    </div>
  );
};

export default Home;

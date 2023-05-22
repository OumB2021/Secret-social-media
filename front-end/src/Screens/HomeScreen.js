import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Post from "../Components/Post";
//import Footer from "../Components/Footer";

const HomeScreen = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      <Banner
        banner="https://helpfulsheep.com/2017-07-25-google-adsense-ad-sizes/970x250.png"
        profile="https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg"
        name="Username"
      />

      <Post avatar="https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg" />
      {/* Footer */}
    </div>
  );
};

export default HomeScreen;

import React, { useEffect } from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Post from "../Components/Post";
import { allPosts } from "../actions/postActions";
import Publication from "../Components/Publication";
import { useDispatch, useSelector } from "react-redux";
//import Footer from "../Components/Footer";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);
  const { loading, error, posts } = postList;

  useEffect(() => {
    dispatch(allPosts());
    console.log(posts);
  }, []);

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

      {posts.map((item) => (
        <Publication post={item} />
      ))}
    </div>
  );
};

export default HomeScreen;

import React, { useEffect, useState } from "react";
import Background from "./components/background/Background.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your Passions" },
    { text1: "Give in to", text2: "your Passions" },
  ];
  const [herocount, setHeroCount] = useState(0);
  const [playstatus, setPlayStatus] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count+1;
      })
    }, 3000)
  }, [])
  return (
    <div>
      <Background playstatus={playstatus} herocount={herocount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[herocount]}
        herocount={herocount}
        setHeroCount={setHeroCount}
        playstatus={playstatus}
      />
    </div>
  );
};

export default App;

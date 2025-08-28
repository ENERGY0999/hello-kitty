import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [password, setPassword] = useState("");
  const [entered, setEntered] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");

  const fullMessage = `🎉 Happy Birthday My lovely Yaya 💖💐
May your day be filled with joy, love, and laughter 🌸✨
You are my sunshine ☀️, my Hello Kitty princess 🐱💕
I wish all your dreams come true today and always 🎀🎂`;

  // Typing effect
  useEffect(() => {
    if (entered && typedMessage.length < fullMessage.length) {
      const timeout = setTimeout(() => {
        setTypedMessage(fullMessage.slice(0, typedMessage.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [typedMessage, entered]);

  const handleEnter = () => {
    if (password === "YAYA") {
      setEntered(true);
      const audio = document.getElementById("bg-music");
      audio.play();
    } else {
      alert("Wrong password 😿 Try again!");
    }
  };

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-pink-300 via-pink-500 to-pink-300 overflow-hidden flex justify-center items-center">

      {/* Floating Hello Kitty icons */}
      <img src="https://i.ibb.co/2Mfdxvm/hellokitty1.png" alt="kitty1" className="absolute w-24 top-10 left-10 animate-float1 opacity-30" />
      <img src="https://i.ibb.co/d0LmYRh/hellokitty2.png" alt="kitty2" className="absolute w-28 bottom-20 right-20 animate-float2 opacity-30" />
      <img src="https://i.ibb.co/gFbV9xt/hellokitty3.png" alt="kitty3" className="absolute w-20 top-1/2 left-1/4 animate-float3 opacity-30" />

      {/* Background music */}
      <audio id="bg-music" loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg"/>
      </audio>

      <AnimatePresence>
        {!entered ? (
          <motion.div 
            key="passwordScreen"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="z-10 bg-white p-8 rounded-3xl shadow-2xl text-center"
          >
            <h1 className="text-4xl font-bold text-pink-500 mb-4 drop-shadow-lg">🎀 Welcome 🎀</h1>
            <input 
              type="password" 
              placeholder="Enter the secret password 💕" 
              className="border p-2 rounded-lg text-center mb-4 text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <motion.button 
              whileTap={{ scale: 1.1, rotate: [-5, 5, -5, 5, 0] }}
              onClick={handleEnter}
              className="px-6 py-3 bg-pink-500 text-white rounded-xl shadow-xl hover:bg-pink-600 font-bold"
            >
              Unlock 🎂
            </motion.button>
          </motion.div>
        ) : (
          <motion.div 
            key="birthdayContent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="z-10 text-center text-white px-6 max-w-2xl"
          >
            <motion.h1 
              initial={{ y: -50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl font-extrabold mb-6 text-pink-100 drop-shadow-2xl"
            >
              🌸 Welcome To the Prettiest Girl on the Planet 🌸
            </motion.h1>
            <motion.p 
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl leading-relaxed drop-shadow-lg whitespace-pre-wrap"
            >
              {typedMessage}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes float1 { 0% {transform: translateY(100vh);} 100% {transform: translateY(-100px);} }
        @keyframes float2 { 0% {transform: translateY(100vh);} 100% {transform: translateY(-140px);} }
        @keyframes float3 { 0% {transform: translateY(100vh);} 100% {transform: translateY(-160px);} }
        .animate-float1 { animation: float1 12s linear infinite; }
        .animate-float2 { animation: float2 14s linear infinite; }
        .animate-float3 { animation: float3 16s linear infinite; }
      `}</style>
    </div>
  );
};

export default App;

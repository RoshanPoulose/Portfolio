import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

const LoadingScreen = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('https://assets1.lottiefiles.com/packages/lf20_usmfx6bp.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error('Failed to load Lottie animation', err));
  }, []);

  if (!animationData) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 flex-col">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ height: 250, width: 250 }}
      />
      <h1 className="text-white text-4xl font-bold mt-6 animate-pulse">
      &lt;Hello World&gt;
      </h1>
    </div>
  );
};

export default LoadingScreen;

import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';

const withSplashScreen = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Display splash screen for minimum time
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2500);

      return () => clearTimeout(timer);
    }, []);

    return loading ? <SplashScreen /> : <WrappedComponent {...props} />;
  };
};

export default withSplashScreen; 
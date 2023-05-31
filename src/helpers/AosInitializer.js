import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = ({ children }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return children;
};

export default AOSInitializer;

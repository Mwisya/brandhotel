import {useEffect} from 'react';
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const {pathname} = useLocation()
    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        // behavior: "instant",  Optional if you want to skip the scrolling animation
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
        });
      }, [pathname]);

    return (null)
}

export default ScrollToTop

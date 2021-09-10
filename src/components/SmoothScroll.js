import React,{ useRef,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Scrollbar from 'react-smooth-scrollbar';

export default function SmoothScroll({children}) {
  const ref = useRef(null);
  const pathName = useLocation();
  useEffect(() => {
    const {scrollbar} =ref.current;
    scrollbar.setPosition(0,0);
     
  }, [pathName])
    return (
        <Scrollbar ref={ref} dampling=".09"  renderByPixels="true">
            {children}
        </Scrollbar>
    );
}

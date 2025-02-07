import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation(); // Monitors route changes

    useEffect(() => {
        window.scrollTo(0, 0); // Rolls to the top when changing course
    }, [pathname]); // Runs every time the URL changes

    return null; // Doesn't render anything on the screen
}

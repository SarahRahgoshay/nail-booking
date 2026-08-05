import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
    const [match , setMatch] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        const handleMedia = (e) => {
            setMatch(e.matches)
        }

        mediaQuery.addEventListener('change' , handleMedia);

        return () => removeEventListener('change' , handleMedia);

    },[query])

    return match;

};

export default useMediaQuery;
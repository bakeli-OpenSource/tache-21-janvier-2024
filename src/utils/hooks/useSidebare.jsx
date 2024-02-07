import { useCallback, useContext, useEffect } from "react";
import { SidebareContext } from "../contexte/SidebareContext";

const useSidebare = () => {
    const useContextSidebare = useContext(SidebareContext)
    const { open, setSmallScreen, screenSize, smallScreen } = useContextSidebare

    const smallScreenSize = useCallback(() => {
        setSmallScreen(window.innerWidth);
        screenSize()
    }, [setSmallScreen, screenSize]);

    useEffect(() => {
        const handleResize = () => {
            smallScreenSize()
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, [smallScreenSize]);

    useEffect(() => {
        smallScreenSize();
        screenSize()
    }, [open, setSmallScreen, screenSize, smallScreenSize, smallScreen]);

    return useContextSidebare
}

export default useSidebare

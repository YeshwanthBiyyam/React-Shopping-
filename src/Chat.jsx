import React, { useState, useEffect } from 'react';

const ScreenSizeExample = () => {
    // State to hold the screen size
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    // Effect to update screen size on window resize
    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // Attach event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <h1>Screen Size Example</h1>
            <p>Resize the window to see the screen size</p>
            <p style={{ color: 'Red' }}>Width: {screenSize.width}px</p>
            <p style={{ color: 'Red' }}>Height: {screenSize.height}px</p>
        </div>
    );
};

export default ScreenSizeExample;

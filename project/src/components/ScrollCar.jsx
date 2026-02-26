import React, { forwardRef } from 'react';
import carImg from '../assets/pngwing.com.png';

const ScrollCar = forwardRef(({ className }, ref) => {
    return (
        <div className={`absolute left-0 w-full flex items-center pointer-events-none overflow-visible ${className}`}>
            <div
                ref={ref}
                className="scroll-car will-change-transform w-[240px] sm:w-[320px] md:w-[600px] lg:w-[800px] opacity-0"
            >
                <img
                    src={carImg}
                    alt="Premium Sports Car"
                    className="w-full h-auto drop-shadow-[0_20px_30px_rgba(255,255,255,0.1)] object-contain"
                    style={{ willChange: 'transform' }}
                />
                <div className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-[8px] md:h-[15px] bg-zinc-950/80 blur-md md:blur-xl rounded-[100%]"></div>
            </div>
        </div>
    );
});

export default ScrollCar;

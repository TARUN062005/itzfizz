import React from 'react';

const Hero = () => {
    const welcome = "WELCOME".split("");
    const itzfizz = "ITZFIZZ".split("");

    return (
        <div className="flex flex-col items-center justify-center pt-10 sm:pt-16 md:pt-24 px-4 sm:px-6 z-10 select-none w-full box-border">
            <h1 className="flex flex-row flex-wrap items-center justify-center text-center gap-y-2 md:gap-y-0 gap-x-3 sm:gap-x-4 md:gap-x-6 w-full max-w-full">
                <div className="flex flex-nowrap shrink-0">
                    {welcome.map((char, index) => (
                        <span
                            key={`w-${index}`}
                            className="hero-text text-[clamp(1.8rem,5vw,5.5rem)] font-black tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500 leading-tight drop-shadow-2xl"
                            style={{ display: 'inline-block', paddingRight: index === welcome.length - 1 ? '0' : '0.05em' }}
                        >
                            {char}
                        </span>
                    ))}
                </div>

                <div className="flex flex-nowrap shrink-0">
                    {itzfizz.map((char, index) => (
                        <span
                            key={`i-${index}`}
                            className="hero-text text-[clamp(1.8rem,5vw,5.5rem)] font-black tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 leading-tight drop-shadow-2xl"
                            style={{ display: 'inline-block', paddingRight: index === itzfizz.length - 1 ? '0' : '0.05em' }}
                        >
                            {char}
                        </span>
                    ))}
                </div>
            </h1>
            <p className="hero-subtitle mt-4 md:mt-8 text-zinc-400 text-[clamp(0.7rem,2vw,1.125rem)] font-light max-w-[90%] md:max-w-xl text-center tracking-[0.15em] sm:tracking-[0.2em] uppercase opacity-0">
                Experience automotive perfection
            </p>
        </div>
    );
};

export default Hero;

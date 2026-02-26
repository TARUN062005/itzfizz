import React, { forwardRef } from 'react';

const Stats = forwardRef((props, ref) => {
    const stats = [
        { value: "95%", label: "CLIENT SATISFACTION" },
        { value: "10K+", label: "PROJECTS DELIVERED" },
        { value: "40%", label: "FASTER PERFORMANCE" },
        { value: "24/7", label: "GLOBAL SUPPORT" }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pb-8 sm:pb-12 border-box">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        ref={(el) => {
                            if (ref && ref.current) {
                                ref.current[i] = el;
                            }
                        }}
                        className="stat-item flex flex-col items-center md:items-start space-y-1 sm:space-y-2 p-3 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl relative overflow-hidden group hover:bg-white/10 transition-colors will-change-transform"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="text-2xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-500 z-10 drop-shadow-lg">{stat.value}</span>
                        <span className="text-[0.6rem] sm:text-xs md:text-sm font-semibold tracking-widest text-zinc-400 font-medium uppercase text-center md:text-left z-10 leading-tight">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
});

Stats.displayName = 'Stats';

export default Stats;

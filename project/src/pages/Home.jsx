import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ScrollCar from '../components/ScrollCar';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const containerRef = useRef(null);
    const carRef = useRef(null);
    const statsRefs = useRef([]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            gsap.set('.hero-text', { y: 20, opacity: 0 });
            gsap.set('.hero-subtitle', { y: 15, opacity: 0 });
            gsap.set(statsRefs.current, { y: 40, opacity: 0 });
            gsap.set(carRef.current, { opacity: 0, xPercent: -50, x: 0 });

            tl.to('.hero-text', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.03,
                ease: 'power3.out'
            })
                .to('.hero-subtitle', {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out'
                }, "-=0.5")
                .to(carRef.current, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out'
                }, "-=0.3");

            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=250%',
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    invalidateOnRefresh: true,
                }
            });

            scrollTl.to(carRef.current, {
                x: () => window.innerWidth + 200,
                ease: 'none',
                duration: 1
            }, 0);

            scrollTl.addLabel('stage1', 0.15);
            scrollTl.addLabel('stage2', 0.35);
            scrollTl.addLabel('stage3', 0.55);
            scrollTl.addLabel('stage4', 0.75);
            statsRefs.current.forEach((stat, index) => {
                if (stat) {
                    scrollTl.to(stat, {
                        y: 0,
                        opacity: 1,
                        duration: 0.15,
                        ease: 'power2.out'
                    }, `stage${index + 1}`);
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative min-h-screen bg-zinc-950 overflow-hidden box-border" ref={containerRef}>
            <div className="relative z-10 flex flex-col justify-between h-screen w-full">
                <Hero />

                <div className="flex-1"></div>

                <div className="w-full h-auto z-10 box-border">
                    <Stats ref={statsRefs} />
                </div>
            </div>

            <ScrollCar ref={carRef} className="z-20 top-[32%] sm:top-[38%] md:top-1/2 -translate-y-1/2" />

            <div className="absolute top-0 right-0 w-[40rem] lg:w-[60rem] h-[40rem] lg:h-[60rem] bg-indigo-500/10 blur-[100px] lg:blur-[140px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[30rem] lg:w-[40rem] h-[30rem] lg:h-[40rem] bg-zinc-600/10 blur-[100px] lg:blur-[140px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/2"></div>
        </div>
    );
};

export default Home;

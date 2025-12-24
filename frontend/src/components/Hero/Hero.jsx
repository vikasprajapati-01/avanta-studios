import React, { useState, useEffect, useRef } from "react";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";

import "./Hero.css";

function Hero() {
    const [active, setActive] = useState(0);
    const [calculation, setCalculation] = useState(1);
    const autoPlayRef = useRef(null);

    const items = [
        {
            id: 1,
            category: "Action",
            title: "Fortnite",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum facere ipsa blanditiis quidem dignissimos enim quam corrupti praesentium ipsam assumenda?",
            image: "/img3.jpg"
        },
        {
            id: 2,
            category: "Adventure",
            title: "Spiderman",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum facere ipsa blanditiis quidem dignissimos enim quam corrupti praesentium ipsam assumenda?",
            image: "/img2.jpg"
        },
        {
            id: 3,
            category: "Action",
            title: "COD",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum facere ipsa blanditiis quidem dignissimos enim quam corrupti praesentium ipsam assumenda?",
            image: "/img1.jpg"
        }
    ];

    const firstPosition = 0;
    const lastPosition = items.length - 1;

    const startAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
        autoPlayRef.current = setInterval(() => {
            handleNext();
        }, 5000);
    };

    const handleNext = () => {
        setActive(prev => prev + 1 > lastPosition ? 0 : prev + 1);
        setCalculation(1);
        startAutoPlay();
    };

    const handlePrev = () => {
        setActive(prev => prev - 1 < firstPosition ? lastPosition : prev - 1);
        setCalculation(-1);
        startAutoPlay();
    };

    const handleDotClick = (position) => {
        setActive(position);
        startAutoPlay();
    };

    useEffect(() => {
        startAutoPlay();
        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, []);

    return (
        <main className="hero">
            <section className="carousel" style={{'--calculation': calculation}}>
                <div className="list">
                    {items.map((item, index) => (
                        <div key={item.id} className={`item ${index === active ? 'active' : ''}`}>
                            <figure>
                                <img src={item.image} alt={item.title} />
                            </figure>
                            <div className="content">
                                <p className="category">
                                    {item.category}
                                </p>
                                <h2>
                                    {item.title}
                                </h2>
                                <p className="description">
                                    {item.description}
                                </p>
                                <div className="more">
                                    <button className="bg-btn">
                                        Check out
                                    </button>
                                    <button className="border-btn flex items-center justify-center gap-2">
                                        <FaRegCirclePlay className="play-icon" /> Watch
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="arrows">
                    <button id="prev" className="flex items-center justify-center" onClick={handlePrev}>
                        <FaAngleLeft className="text-[30px]" />
                    </button>
                    <button id="next" className="flex items-center justify-center" onClick={handleNext}>
                        <FaAngleRight className="text-[30px]" />
                    </button>
                </div>
                
                <div className="indicators">
                    <div className="number">
                        {String(active + 1).padStart(2, '0')}
                    </div>
                    <ul>
                        {items.map((_, index) => (
                            <li 
                                key={index}
                                className={index === active ? 'active' : ''}
                                onClick={() => handleDotClick(index)}
                            ></li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default Hero;
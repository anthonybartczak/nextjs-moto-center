import React from "react";
import CountUp from 'react-countup';

export default function MainCounter() {
    return (
        <section>
            <h2 className="mt-32 text-4xl text-center tracking-tight font-bold text-gray-900 sm:text-5xl md:text-4xl">
                <span className="block xl:inline">O Nas</span>
            </h2>
            <div className="mt-16 flex">
                <CountUp start={0} end={8} delay={0}>
                    {({ countUpRef }) => (
                        <>
                            <span className="text-indigo-600 text-4xl mx-1" ref={countUpRef} />
                            <span className="text-indigo-600 text-4xl mx-1">+</span>
                            <p className="text-4xl mx-1">lat doświadczenia</p>
                        </>
                    )}
                </CountUp>
            </div>
            <div className="mt-16 flex shadow-md">
                <CountUp start={0} end={10000} delay={0}>
                    {({ countUpRef }) => (
                        <>
                            <span className="text-indigo-600 text-4xl mx-1" ref={countUpRef} />
                            <span className="text-indigo-600 text-4xl mx-1">+</span>
                            <p className="text-4xl mx-1">klientów</p>
                        </>
                    )}
                </CountUp>
            </div>
        </section>
    );
}
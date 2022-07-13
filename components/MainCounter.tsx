import React from "react";
import CountUp from 'react-countup';

export default function MainCounter() {
    return (
        <section>
            <span className="block xl:inline">O Nas</span>
            <div className="flex">
                <CountUp start={0} end={8} delay={0}>
                    {({ countUpRef }) => (
                        <>
                            <span className="text-indigo-600 text-8xl" ref={countUpRef} />
                            <span className="text-indigo-600 text-8xl">+</span>
                            <p className="text-4xl">lat doświadczenia</p>
                        </>
                    )}
                </CountUp>
            </div>
            <div className="">
                <CountUp start={0} end={10000} delay={0}>
                    {({ countUpRef }) => (
                        <>
                            <span className="text-indigo-600 text-8xl" ref={countUpRef} />
                            <span className="text-indigo-600 text-8xl">+</span>
                        </>
                    )}
                </CountUp>
                <p className="text-4xl">klientow</p>
            </div>
        </section>
    );
}
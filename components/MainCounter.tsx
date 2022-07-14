import React from "react";
import CountUp from 'react-countup';

export default function MainCounter() {
    return (
        <section className="">
            <h2 className="mt-32 text-4xl text-center tracking-tight font-bold text-gray-900 sm:text-5xl md:text-4xl">
                <span className="block xl:inline">O Nas</span>
            </h2>
            <div className="grid justify-items-center">
                <h3 className="text-center mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
                </h3>
                <div className="flex gap-12 justify-center">
                    <div className="mt-16 flex">
                        <CountUp start={0} end={8} delay={0}>
                            {({ countUpRef }) => (
                                <>
                                    <span className="text-indigo-600 text-4xl ml-1" ref={countUpRef} />
                                    <span className="text-indigo-600 text-4xl mr-1">+</span>
                                    <p className="text-4xl mx-1">lat doświadczenia</p>
                                </>
                            )}
                        </CountUp>
                    </div>
                    <div className="mt-16 flex">
                        <CountUp start={0} end={10000} delay={0}>
                            {({ countUpRef }) => (
                                <>
                                    <span className="text-indigo-600 text-4xl ml-1" ref={countUpRef} />
                                    <span className="text-indigo-600 text-4xl mr-1">+</span>
                                    <p className="text-4xl mx-1">klientów</p>
                                </>
                            )}
                        </CountUp>
                    </div>
                </div>
            </div>
        </section>
    );
}
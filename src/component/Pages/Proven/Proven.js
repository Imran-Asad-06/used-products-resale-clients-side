import React from 'react';

const Proven = () => {
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
             <div className="container p-4 mx-auto text-center bg-primary">
            <h2 className="text-4xl font-bold">OUR PROVEN RECORD</h2>
        </div>
        <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
            <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
                <p className="text-sm sm:text-base">Clients</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
                <p className="text-sm sm:text-base">Followers on social media</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">30</p>
                <p className="text-sm sm:text-base">Device Proceed Monthly</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">170</p>
                <p className="text-sm sm:text-base">​MILLIONS IN ANNUAL REVENUE</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
                <p className="text-sm sm:text-base">Years of experience</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">100+</p>
                <p className="text-sm sm:text-base">ORDERS PROCESSED MONTHLY</p>
            </div>
        </div>
    </section>
    );
};

export default Proven;
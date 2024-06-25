import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h3 className="text-lg text-gray-900 font-bold md:text-4xl">
              About AuroraESite
            </h3>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <h4 className="text-sm mt-4 text-gray-800 font-bold md:text-2xl">
              Our Story
            </h4>
            <p className="mt-2 text-gray-800  ">
              Established in 1957, AuroraESite began as a small goods and
              services shop in New York City. Today, there are over 800
              AuroraESite department stores worldwide in 15 countries.
              AuroraESite employs over 125,000 people.<br />
              <br /> 
              What began with a commitment to high quality products at fair
              prices continues through to this day on AuroraESite.com, featuring
              the same brands and styles you've come to rely on in our brick and
              mortar stores, available at your fingertips 24 hours a day. <br />
              <br />
              Take a look around, we hope you like what you see!
            </p>
            <br />

            <h4 className="text-lg text-gray-900 font-bold md:text-2xl">
              Our Mission
            </h4>
            <p className="mt-2 text-gray-800">
              Our mission is to provide our customers with the best and most
              convenient online shopping experience possible. We are committed
              to offering products that are shipped in easy to open and
              sustainable packaging and accept all major credit cards.
            </p>
            <br />

            <h4 className="text-lg text-gray-900 font-bold md:text-2xl">
              Corporate Responsibility
            </h4>
            <p className="mt-2 text-gray-800">
              AuroraESite supports healthy living in every aspect of our
              business. From our "safer communities" initiative to our
              environmental sustainability project, we take pride in our
              responsibility to our shoppers, their diversity, their communities
              and their health and safety.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

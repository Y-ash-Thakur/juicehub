"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-10 border-#047857">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Top - Fruit Image */}
        <div className="flex justify-center">
          <Image
            src="/fruitjuice.jpg"
            alt="Fruits and Juice"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Right Top - About Us Text */}
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-600 font-cursive">
            Welcome to Zussioberry
          </h2>
          <h3 className="text-xl font-semibold">About Us</h3>
          <p className="text-gray-700">
            Zussioberry is your go-to destination for the most delicious and vibrant
            fresh fruit juices, milkshakes, smoothies, falooda, ice-creams and more.
            We’re more than just a cafe; we’re a celebration of flavor and fun! Our
            menu is a delightful fusion of classic favorites and innovative creations,
            all crafted with the freshest ingredients and a passion for taste.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full mt-2">
            View More
          </button>
        </div>

        {/* Left Bottom - Menu Cards */}
        <div className="space-y-6 w-full">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-green-600 font-cursive">
              Explore Our Full Menu
            </h2>
            <p className="text-gray-700 mt-1">
              A Delicious Variety to Refresh and Delight
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
              <Image
                src="/assets/images/juice.png"
                alt="Juice"
                width={50}
                height={50}
              />
              <p className="text-lg font-semibold mt-2">15+ Juices</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
              <Image
                src="/assets/images/icecream.png"
                alt="Ice Cream"
                width={50}
                height={50}
              />
              <p className="text-lg font-semibold mt-2">12+ Icecream</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
              <Image
                src="/assets/images/falooda.png"
                alt="Falooda"
                width={50}
                height={50}
              />
              <p className="text-lg font-semibold mt-2">6+ Falooda</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
              <Image
                src="/assets/images/milkshake.png"
                alt="Milkshake"
                width={50}
                height={50}
              />
              <p className="text-lg font-semibold mt-2">18+ Milkshake</p>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full">
              View Menu
            </button>
          </div>
        </div>

        {/* Right Bottom - Juice Image */}
        <div className="flex justify-center">
          <Image
            src="/juiceglass.png"
            alt="Juice Glass"
            width={500}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

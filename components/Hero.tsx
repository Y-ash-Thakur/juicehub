"use client";

const Hero = () => {
  return (
    <section
      className="relative text-gray-700 py-28 px-6 bg-cover bg-center"
      style={{ 
        background: 'url("/hero1.png") no-repeat center center', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        padding: '112px 24px',
        position: 'relative'
      }}
    >
      <div className="max-w-2xl mx-auto text-center" style={{ maxWidth: '672px', margin: '0 auto', textAlign: 'center' }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>
          Cool Your Mind With <br /> Fruit Juice!
        </h1>
        <p className="mb-6 text-lg" style={{ marginBottom: '24px', fontSize: '22px', }}>
          Zussioberry serves fresh juices, shakes, and smoothies made with the finest ingredients
          for every craving. Zussioberry serves fresh juices, shakes, and smoothies made with the
          finest ingredients for every craving.
        </p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-md hover:bg-gray-100 font-semibold" style={{ backgroundColor: 'white', color: '#059669', padding: '12px 24px', borderRadius: '6px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
          Order Now
        </button>
      </div>

      {/* Optional Left/Right Arrows (placeholders for now) */}
      <div className="absolute left-4 top-1/2 text-3xl cursor-pointer hover:text-gray-200" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '30px', cursor: 'pointer' }}>{'<'}</div>
      <div className="absolute right-4 top-1/2 text-3xl cursor-pointer hover:text-gray-200" style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '30px', cursor: 'pointer' }}>{'>'}</div>
    </section>
  );
};

export default Hero;
 
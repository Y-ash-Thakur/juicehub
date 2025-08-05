"use client";

const Features = () => {
  return (
    <section className="bg-white text-center py-16 px-6" style={{ backgroundColor: 'white', textAlign: 'center', padding: '64px 24px' }}>
      <h2 className="text-green-700 text-2xl font-semibold mb-2" style={{ color: '#047857', fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>
        Nature&#39;s Goodness in Every Sip!
      </h2>
      <p className="max-w-xl mx-auto mb-10 text-gray-600" style={{ maxWidth: '576px', margin: '0 auto 40px', color: '#6b7280' }}>
        At Zussioberry, we believe in keeping it real — no artificial flavors, no chemicals, just
        pure ingredients from nature.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
        <div>
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4" style={{ width: '80px', height: '80px', backgroundColor: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <span className="text-3xl" style={{ fontSize: '30px' }}>🌿</span>
          </div>
          <h3 className="font-bold mt-4 text-lg" style={{ fontWeight: 'bold', marginTop: '16px', fontSize: '18px' }}>100% Natural</h3>
          <p className="text-gray-600" style={{ color: '#6b7280' }}>
            Crafted with only real fruits and herbs — no artificial additives, ever.
          </p>
        </div>
        <div>
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4" style={{ width: '80px', height: '80px', backgroundColor: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <span className="text-3xl" style={{ fontSize: '30px' }}>🍎</span>
          </div>
          <h3 className="font-bold mt-4 text-lg" style={{ fontWeight: 'bold', marginTop: '16px', fontSize: '18px' }}>Super Fresh</h3>
          <p className="text-gray-600" style={{ color: '#6b7280' }}>
            Prepared fresh daily to retain nutrients and deliver unmatched taste.
          </p>
        </div>
        <div>
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4" style={{ width: '80px', height: '80px', backgroundColor: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <span className="text-3xl" style={{ fontSize: '30px' }}>🏡</span>
          </div>
          <h3 className="font-bold mt-4 text-lg" style={{ fontWeight: 'bold', marginTop: '16px', fontSize: '18px' }}>Locally Supported</h3>
          <p className="text-gray-600" style={{ color: '#6b7280' }}>
            We source locally to ensure quality, support farmers, and reduce our carbon footprint.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

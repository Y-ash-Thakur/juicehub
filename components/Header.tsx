"use client";

import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-2 bg-white text-sm border-b" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
      <div className="text-gray-700" style={{ color: '#374151' }}>
        <p>Call at: +91 XXXXX XXXXX</p>
        <p>Mail at: info@pizzakitchen.com</p>
      </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <div className="text-2xl font-bold text-green-600" style={{ fontSize: '24px', fontWeight: 'bold', color: '#059669' }}>Zussioberry</div>
        </Link>
      </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" style={{ backgroundColor: '#10b981', color: 'white', padding: '8px 16px', borderRadius: '6px' }}>
        View Menu
      </button>
    </div>
  );
};

export default Header; 
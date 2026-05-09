import React from 'react';
import { Search, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#2C2420]">
      <nav className="flex justify-between items-center px-8 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <h1 className="text-2xl font-black tracking-tighter text-[#5D4037]">HURUGI HUB.</h1>
        <div className="space-x-8 font-medium text-sm">
          <a href="#" className="hover:text-[#A67C52] transition">ショップ検索</a>
          <a href="#" className="bg-[#5D4037] text-white px-5 py-2 rounded-full hover:bg-[#3E2723] transition">
            掲載希望の店舗様へ
          </a>
        </div>
      </nav>

      <header className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000')] bg-cover bg-center" />
        <div className="relative z-20 text-center px-4">
          <h2 className="text-5xl font-serif font-bold mb-6 text-white">一着の、その先へ。</h2>
          <p className="text-lg max-w-2xl mx-auto font-light leading-relaxed mb-8">
            店主の「こだわり」という魂が込められた一着を探す旅。
          </p>
        </div>
      </header>

      <section className="py-20 bg-white px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-serif font-bold mb-12">Pick Up Shops</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group cursor-pointer">
              <div className="relative h-80 mb-4 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800')] bg-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <MapPin size={12} /> 下北沢
                </div>
              </div>
              <h4 className="text-xl font-bold mb-1">Old Soul Antiques</h4>
              <p className="text-gray-500 text-sm">50年代アメリカのワークウェア。歴史を纏う一着を。</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative h-80 mb-4 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470309638588-2ff92e16d004?q=80&w=800')] bg-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <MapPin size={12} /> 高円寺
                </div>
              </div>
              <h4 className="text-xl font-bold mb-1">Retro Modern Tokyo</h4>
              <p className="text-gray-500 text-sm">ユーロ古着のリメイク。新しい価値を古着に。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
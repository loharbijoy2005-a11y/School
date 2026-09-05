import React, { useState } from 'react';
import { Camera, Eye, X, Image as ImageIcon } from 'lucide-react';
import { GalleryItem } from '../types';

interface EventGalleryProps {
  galleryItems?: GalleryItem[];
}

export const EventGallery: React.FC<EventGalleryProps> = ({ galleryItems: propGallery }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const defaultItems: GalleryItem[] = [
    { id: '1', title: 'Saraswati Puja Floral & Alpona Decoration', category: 'Cultural', imageUrl: '/assets/saraswati_puja.jpg' },
    { id: '2', title: 'Annual Athletic Sports Championship Meet', category: 'Sports', imageUrl: '/assets/sports_day.jpg' },
    { id: '3', title: 'Kanyashree Karate Self-Defense Drill', category: 'Empowerment', imageUrl: '/assets/sports_day.jpg' },
    { id: '4', title: 'STEM Science & Robotics Exhibition', category: 'Academics', imageUrl: '/assets/science_exhibition.jpg' },
    { id: '5', title: 'Annual Academic Prize Distribution', category: 'Ceremony', imageUrl: '/assets/prize_distribution.jpg' },
    { id: '6', title: 'NCC & Defense Drill Demonstration', category: 'NCC', imageUrl: '/assets/ncc_defense.jpg' },
    { id: '7', title: 'ICT Computer Lab Practical Session', category: 'Academics', imageUrl: '/assets/science_lab.jpg' },
    { id: '8', title: 'Independence Day Parade & Cultural Dance', category: 'Cultural', imageUrl: '/assets/hero_campus.jpg' },
  ];

  const items = propGallery && propGallery.length > 0 ? propGallery : defaultItems;

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="gallery" className="py-20 bg-[#FAF7F2] text-slate-800 relative border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        <div className="flex flex-wrap justify-between items-end gap-4 border-b border-[#E8DFD0] pb-6">
          <div>
            <span className="text-xs font-bold text-[#9D174D] uppercase tracking-widest bg-rose-100/60 px-3 py-1 rounded-full border border-rose-300/60 mb-2 inline-block">
              Campus Photo Reel
            </span>
            <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-[#1E293B]">
              Campus Life Gallery & Event Archives
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Click on any photograph to launch high-resolution full-screen lightbox preview.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {['all', 'Cultural', 'Sports', 'Empowerment', 'Academics', 'Ceremony'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#9D174D] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-rose-50 border border-[#E8DFD0]'
                }`}
              >
                {cat === 'all' ? 'All Photos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="bg-white rounded-2xl border border-[#E8DFD0] overflow-hidden relative group cursor-pointer shadow-xs hover:shadow-md hover:border-[#9D174D]/50 transition-all"
            >
              <div className="h-48 overflow-hidden relative bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#1E293B]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#B45309] text-white flex items-center justify-center font-bold shadow-md">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-3.5 space-y-1">
                <span className="text-[10px] font-extrabold text-[#B45309] uppercase bg-amber-100/80 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <h4 className="text-xs font-bold text-[#1E293B] group-hover:text-[#9D174D] transition-colors line-clamp-1">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="modal-backdrop-luxury">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 border border-[#E8DFD0] shadow-2xl relative space-y-4 animate-in fade-in zoom-in duration-200 text-slate-900">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-4 top-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-700 hover:text-[#9D174D] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-[400px] rounded-2xl overflow-hidden bg-slate-950">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex justify-between items-center text-xs">
              <div>
                <h3 className="font-serif font-extrabold text-lg text-[#1E293B]">{selectedPhoto.title}</h3>
                <span className="text-[#B45309] font-bold uppercase">{selectedPhoto.category} Archive</span>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="bg-[#1E293B] hover:bg-[#0F172A] text-white px-4 py-2 rounded-xl font-bold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

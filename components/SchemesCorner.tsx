import React from 'react';
import { HeartHandshake, ArrowRight, UserCheck, Bike, Tablet, Utensils } from 'lucide-react';
import { SchemeDetail } from '../types';
import ScrollRevealCard from './ScrollRevealCard';

interface SchemesCornerProps {
  onOpenWelfareModal: (schemeId: string) => void;
}

export const SchemesCorner: React.FC<SchemesCornerProps> = ({ onOpenWelfareModal }) => {
  const schemes: SchemeDetail[] = [
    {
      id: 'kanyashree',
      title: 'Kanyashree Prakalpa (K1 & K2)',
      subTitle: 'Female Student Financial Grant',
      description: 'Annual stipend of ₹1,000 (K1) for girls aged 13-18 and one-time grant of ₹25,000 (K2) upon reaching 18 years to prevent child marriage and encourage higher education.',
      eligibility: 'Unmarried female students in Classes VIII to XII',
      benefit: '₹1,000/yr (K1) & ₹25,000 (K2)',
      icon: 'UserCheck',
      officialUrl: 'https://wbkanyashree.gov.in',
    },
    {
      id: 'sabooj_sathi',
      title: 'Sabooj Sathi Bicycle Scheme',
      subTitle: 'Free Bicycle Distribution',
      description: 'Free bicycles distributed to female students studying in Classes IX, X, XI, and XII to facilitate safe and hassle-free daily commute to school.',
      eligibility: 'Classes IX to XII female students',
      benefit: '1 Free Eco Bicycle',
      icon: 'Bike',
      officialUrl: 'https://wbsaboojsathi.gov.in',
    },
    {
      id: 'taruner_swapna',
      title: 'Taruner Swapna (Class XII Tab)',
      subTitle: '₹10,000 Device Grant',
      description: 'Direct financial assistance of ₹10,000 transferred to Class XII Higher Secondary students bank accounts for purchasing mobile tablets / smartphones for e-learning.',
      eligibility: 'Class XII HS Students',
      benefit: '₹10,000 Direct Grant',
      icon: 'Tablet',
      officialUrl: 'https://banglarshiksha.gov.in',
    },
    {
      id: 'textbooks_midday',
      title: 'Free Textbooks & Mid-Day Meal',
      subTitle: 'PM-POSHAN Nutrition',
      description: '100% free textbooks provided by West Bengal Board and nutritious daily cooked Mid-Day Meal (PM-POSHAN) served in a clean dining hall.',
      eligibility: 'Classes V to VIII All Students',
      benefit: 'Free Textbooks & Daily Meal',
      icon: 'Utensils',
      officialUrl: 'https://wbsed.gov.in',
    },
  ];

  return (
    <section id="welfare" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold text-xs uppercase mb-3">
            <HeartHandshake className="w-4 h-4 text-emerald-600" />
            <span>Student Welfare</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            West Bengal Govt. Student Welfare Corner
          </h2>
          <p className="text-slate-600">
            Direct guidance and application desk for state education welfare grants & scholarships.
          </p>
        </div>

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schemes.map((s, idx) => (
            <ScrollRevealCard key={s.id} delay={idx * 90}>
              <div
                className="bg-white rounded-2xl p-6 border border-emerald-100 hover:border-emerald-500 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                    {s.icon === 'UserCheck' && <UserCheck className="w-6 h-6" />}
                    {s.icon === 'Bike' && <Bike className="w-6 h-6" />}
                    {s.icon === 'Tablet' && <Tablet className="w-6 h-6" />}
                    {s.icon === 'Utensils' && <Utensils className="w-6 h-6" />}
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-lg mb-1">{s.title}</h3>
                  <span className="text-xs font-bold text-emerald-600 uppercase block mb-3">{s.subTitle}</span>

                  <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-4">
                    {s.description}
                  </p>
                </div>

                <button
                  onClick={() => onOpenWelfareModal(s.id)}
                  className="text-emerald-700 hover:text-emerald-800 font-bold text-xs flex items-center gap-1.5 pt-4 border-t border-slate-100 group"
                >
                  <span>Eligibility & Rules</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </ScrollRevealCard>
          ))}
        </div>

      </div>
    </section>
  );
};

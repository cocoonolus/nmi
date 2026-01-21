import React, { useState } from 'react';
import { Stethoscope, HandHeart, Flame, Users, Check, ArrowRight, ChevronRight, X, Target, Trophy } from 'lucide-react';

// Data for the modal content
const armDetails = {
  nmm: {
    title: "Noah Medical Mission (NMM)",
    subtitle: "Healing Bodies, Opening Hearts",
    description: "Noah Medical Mission goes where others won't. We bring specialized medical care to the doorsteps of the most isolated communities. By addressing physical suffering, we demonstrate the tangible love of Christ, often opening doors for the Gospel in areas resistant to traditional evangelism. Our team consists of volunteer surgeons, doctors, nurses, and pharmacists.",
    features: [
      "Mobile Surgical Units for Hernia & Fibroids",
      "Cataract Surgeries restoring sight to the blind",
      "Free National Health Insurance Registration",
      "Deworming & Vitamin A supplementation for children",
      "Medical Evangelism: Praying for patients before treatment"
    ],
    stat: "2,400+ Surgeries Performed",
    colorClass: "text-blue-600",
    bgClass: "bg-blue-100",
    buttonClass: "text-blue-600 hover:text-blue-700",
    borderClass: "border-blue-200"
  },
  mercy: {
    title: "Samaritan's Mercy",
    subtitle: "Compassion in Action",
    description: "When crisis strikes, we are the hands and feet of Jesus. From flood relief to feeding the hungry, Samaritan's Mercy focuses on the most vulnerable: widows, orphans, and the disabled. We don't just give handouts; we provide sustainable pathways out of poverty through vocational training and seed capital.",
    features: [
      "Rapid Response Disaster Relief (Food, Tents, Medicine)",
      "Widow's Mite Program: Monthly stipends for elderly widows",
      "Educational Scholarships for orphans",
      "Clean Water Projects: Drilling boreholes in drought areas",
      "Vocational Skills Training for unemployed youth"
    ],
    stat: "15,000+ Lives Impacted",
    colorClass: "text-orange-600",
    bgClass: "bg-orange-100",
    buttonClass: "text-orange-600 hover:text-orange-700",
    borderClass: "border-orange-200"
  },
  prayer: {
    title: "Intercessory Prayers",
    subtitle: "The Engine of Missions",
    description: "We believe that prayer is the work, and ministry is the fruit. Our prayer department ensures that every outreach is soaked in prayer before, during, and after. We raise a shield of protection over our missionaries and break spiritual strongholds in territories to prepare the soil for the Gospel.",
    features: [
      "24/7 Prayer Tower & Intercession",
      "Global Prayer Network alerts via WhatsApp",
      "Monthly 'Gap Standers' All-Night Vigil",
      "Spiritual Warfare & Intercession Training",
      "Praying for Nations and Unreached People Groups"
    ],
    stat: "1,000+ Intercessors",
    colorClass: "text-purple-600",
    bgClass: "bg-purple-100",
    buttonClass: "text-purple-600 hover:text-purple-700",
    borderClass: "border-purple-200"
  },
  dmm: {
    title: "Crusades & Discipleship",
    subtitle: "Obedience-Based Disciple Making",
    description: "The Great Commission is not just about converts; it's about disciples. We use mass crusades to break fallow ground, but our primary strategy is the Disciple Making Movement (DMM). We plant simple, reproducible house churches that multiply rapidly to the 4th generation and beyond.",
    features: [
      "Open-Air Gospel Campaigns in unreached villages",
      "Jesus Film Projections in local dialects",
      "Discovery Bible Study (DBS) Groups",
      "Leadership Development for indigenous pastors",
      "Distribution of Audio Bibles"
    ],
    stat: "42 Villages Reached",
    colorClass: "text-green-600",
    bgClass: "bg-green-100",
    buttonClass: "text-green-600 hover:text-green-700",
    borderClass: "border-green-200"
  }
};

type ArmKey = keyof typeof armDetails;

export const MinistryArms: React.FC = () => {
  const [selectedArm, setSelectedArm] = useState<ArmKey | null>(null);

  const renderModal = () => {
    if (!selectedArm) return null;
    const data = armDetails[selectedArm];

    return (
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={() => setSelectedArm(null)}
      >
        <div 
          className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`p-8 border-b ${data.borderClass} flex justify-between items-start bg-slate-50/50`}>
             <div>
                <span className={`text-xs font-bold tracking-widest uppercase ${data.colorClass} mb-2 block`}>{data.subtitle}</span>
                <h3 className="text-3xl font-serif font-bold text-slate-900">{data.title}</h3>
             </div>
             <button 
               onClick={() => setSelectedArm(null)}
               className="p-2 bg-white border border-slate-200 rounded-full hover:bg-slate-100 transition-colors text-slate-500"
             >
               <X className="w-6 h-6" />
             </button>
          </div>

          {/* Body */}
          <div className="p-8">
             <div className="mb-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center mb-2 text-slate-900 font-bold">
                   <Trophy className={`w-5 h-5 mr-2 ${data.colorClass}`} />
                   Current Impact
                </div>
                <div className="text-2xl font-serif text-slate-900">{data.stat}</div>
             </div>

             <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-slate-400" />
                What We Do
             </h4>
             <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                {data.description}
             </p>

             <h4 className="font-bold text-slate-900 mb-4">Key Initiatives</h4>
             <ul className="grid sm:grid-cols-2 gap-4">
               {data.features.map((feature, idx) => (
                 <li key={idx} className="flex items-start">
                   <Check className={`w-5 h-5 mr-3 shrink-0 mt-0.5 ${data.colorClass}`} />
                   <span className="text-slate-600 text-sm font-medium">{feature}</span>
                 </li>
               ))}
             </ul>

             <div className="mt-10 pt-8 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={() => setSelectedArm(null)}
                  className="px-6 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors"
                >
                  Close Details
                </button>
             </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-50 py-20 relative">
      {renderModal()}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-bold tracking-widest uppercase text-xs">Holistic Approach</span>
          <h2 className="text-4xl font-serif font-bold text-slate-900 mt-2 mb-6">Arms of Noah Ministries</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We are structured to meet the spiritual, physical, and emotional needs of the communities we serve through four distinct but unified arms.
          </p>
        </div>

        <div className="space-y-24">
          
          {/* NMM */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Stethoscope className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-slate-900">Noah Medical Mission (NMM)</h3>
              </div>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Dedicated to providing compassionate, quality medical care to underserved and rural communities. We tackle poverty, geographical isolation, and shortage of professionals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {['General Consultations', 'Surgical Care (Hernia, Cataract)', 'Dental & Eye Care', 'Health Education'].map(item => (
                  <div key={item} className="flex items-center text-slate-700 font-medium">
                    <Check className="w-5 h-5 text-gold-500 mr-2" /> {item}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => setSelectedArm('nmm')} 
                  className="inline-flex items-center font-bold text-blue-600 hover:text-blue-700 transition-colors group"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="bg-blue-50 border-l-4 border-blue-500 py-2 px-4 italic text-blue-800 text-xs max-w-xs">
                  “Jesus went everywhere... healing every disease.” – Matt 9:35
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
               <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
               <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Medical Mission" className="relative rounded-2xl shadow-xl w-full" />
            </div>
          </div>

          {/* Samaritan's Mercy */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
               <div className="absolute inset-0 bg-orange-600 rounded-2xl transform -rotate-3 opacity-10"></div>
               <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Humanitarian Aid" className="relative rounded-2xl shadow-xl w-full" />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-lg mr-4">
                  <HandHeart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-slate-900">Samaritan's Mercy</h3>
              </div>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Inspired by the Good Samaritan, we focus on meeting non-medical and emergency needs of the less privileged and those in humanitarian crises.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-orange-500 mr-2 mt-1" />
                  <span className="text-slate-700"><strong>Emergency Shelter:</strong> Tents and bedding for displaced families.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-orange-500 mr-2 mt-1" />
                  <span className="text-slate-700"><strong>Food & Water:</strong> Emergency distribution to combat malnutrition.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-orange-500 mr-2 mt-1" />
                  <span className="text-slate-700"><strong>Essential Supplies:</strong> Hygiene kits and household items.</span>
                </li>
              </ul>
              
              <button 
                onClick={() => setSelectedArm('mercy')} 
                className="inline-flex items-center font-bold text-orange-600 hover:text-orange-700 transition-colors group"
              >
                Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Prayer & DMM (Split Grid) */}
          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-start h-full">
                <div className="p-3 bg-purple-100 rounded-lg w-fit mb-6">
                  <Flame className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Intercessory Prayers</h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  A core spiritual pillar. We stand in the gap for the Body of Christ, nations, and missionaries facing persecution.
                </p>
                <div className="text-sm font-semibold text-purple-700 uppercase tracking-wide mb-6">
                  Prayer Chains • Fasting Initiatives
                </div>
                <button 
                  onClick={() => setSelectedArm('prayer')} 
                  className="mt-auto inline-flex items-center font-bold text-purple-600 hover:text-purple-700 transition-colors group"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-start h-full">
                <div className="p-3 bg-green-100 rounded-lg w-fit mb-6">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Crusades & Discipleship</h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  Village-to-village gospel crusades and the <strong>Discovery Bible Study (DBS)</strong> model for obedience-based discipleship.
                </p>
                <div className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-6">
                  DMM • Open-Air Outreaches • Church Planting
                </div>
                <button 
                  onClick={() => setSelectedArm('dmm')} 
                  className="mt-auto inline-flex items-center font-bold text-green-600 hover:text-green-700 transition-colors group"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
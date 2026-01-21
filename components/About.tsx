import React from 'react';
import { Target, Eye, Book, Shield, Heart, Zap, Users, Globe, ArrowDownLeft } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    { icon: Book, title: "Christ-Centered Living", desc: "We exalt Jesus Christ as the foundation, message, and purpose of all we do." },
    { icon: Globe, title: "Evangelism & Discipleship", desc: "Reaching the lost with the Gospel and nurturing them into mature followers." },
    { icon: Heart, title: "Compassion & Service", desc: "Demonstrating the love of Christ through acts of mercy and healing." },
    { icon: Shield, title: "Holiness & Integrity", desc: "Pursuing purity of heart and excellence in conduct." },
    { icon: Zap, title: "Faith & Prayer", desc: "Depending fully on God’s power for miracles and direction." },
    { icon: Users, title: "Unity & Teamwork", desc: "Serving as one body to advance the Kingdom." },
    { icon: Target, title: "Kingdom Impact", desc: "Stewarding every opportunity to expand God’s Kingdom." },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section - Matched to Screenshot */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-5xl font-serif font-bold text-coffee-900 mb-10">Who We Are</h2>
          <p className="text-xl text-coffee-600 leading-relaxed font-normal">
            Noah Ministries International (NMI) is a Christ-centered mission movement dedicated to proclaiming the Gospel and demonstrating the compassion of Jesus. Following the pattern of Christ, we go village-to-village bringing spiritual renewal and physical restoration.
          </p>
        </div>

        {/* Vision & Mission Cards - Matched to Screenshot */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          
          {/* Our Mission Card */}
          <div className="bg-white border border-coffee-100 rounded-3xl p-12 shadow-sm relative overflow-hidden flex flex-col min-h-[440px]">
            {/* Background Graphic: Concentric Circles */}
            <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 opacity-[0.04] pointer-events-none text-primary-500">
              <svg width="400" height="400" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-10">
                <div className="w-12 h-1.5 bg-primary-500 rounded-full mr-4"></div>
                <h3 className="text-3xl font-serif font-bold text-coffee-900">Our Mission</h3>
              </div>
              
              <ul className="space-y-6">
                {[
                  "Glorifying Christ in all we do.",
                  "Making disciples through preaching and repentance.",
                  "Bringing holistic restoration (spiritual, emotional, physical)."
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-lg text-coffee-700 font-medium">
                    <span className="text-primary-500 mr-3 text-2xl leading-none">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Vision Card - Dark Coffee Theme */}
          <div className="bg-coffee-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden flex flex-col min-h-[440px]">
            {/* Background Graphic: Eye Icon from Screenshot */}
            <div className="absolute bottom-[10%] right-[10%] opacity-10 pointer-events-none">
              <div className="relative">
                {/* Stylized Eye */}
                <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="12" r="6" strokeDasharray="2 2" />
                </svg>
                {/* Blue Decorative Arrow from Screenshot */}
                <div className="absolute -top-12 -left-12 text-blue-400">
                  <ArrowDownLeft className="w-24 h-24 stroke-[1px] rotate-[10deg]" />
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-10">
                <div className="w-12 h-1.5 bg-primary-500 rounded-full mr-4"></div>
                <h3 className="text-3xl font-serif font-bold text-white">Our Vision</h3>
              </div>
              
              <p className="text-xl text-coffee-100 leading-relaxed font-medium mb-10">
                To see communities, villages, and nations transformed by the saving power and compassion of Jesus Christ.
              </p>
              
              <p className="text-coffee-300 italic text-lg leading-relaxed border-l border-white/20 pl-6">
                "We envision a world where the Gospel of Christ brings total restoration—spirit, soul, and body—until every heart reflects the glory of God."
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="pt-24 border-t border-coffee-100">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold text-coffee-900">Our Core Values</h3>
            <div className="h-1.5 w-24 bg-primary-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="p-10 bg-coffee-50 border border-coffee-100 rounded-2xl hover:border-primary-500/50 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary-500 transition-colors">
                  <val.icon className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-coffee-900 mb-4">{val.title}</h4>
                <p className="text-coffee-600 leading-relaxed text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
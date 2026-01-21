import React from 'react';
import { Target, Eye, Book, Shield, Heart, Zap, Users, Globe } from 'lucide-react';

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
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Who We Are</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Noah Ministries International (NMI) is a Christ-centered mission movement dedicated to proclaiming the Gospel and demonstrating the compassion of Jesus. Following the pattern of Christ, we go village-to-village bringing spiritual renewal and physical restoration.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target size={120} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-10 h-1 rounded bg-gold-500 mr-4"></span>
              Our Mission
            </h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start">
                <span className="text-gold-500 mr-2 font-bold">•</span>
                Glorifying Christ in all we do.
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2 font-bold">•</span>
                Making disciples through preaching and repentance.
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2 font-bold">•</span>
                Bringing holistic restoration (spiritual, emotional, physical).
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2 font-bold">•</span>
                Pointing all people to the unfailing love of Jesus.
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 p-10 rounded-2xl text-white relative overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye size={120} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center">
              <span className="w-10 h-1 rounded bg-gold-500 mr-4"></span>
              Our Vision
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              To see communities, villages, and nations transformed by the saving power and compassion of Jesus Christ.
            </p>
            <p className="text-slate-400 italic">
              "We envision a world where the Gospel of Christ brings total restoration—spirit, soul, and body—until every heart reflects the glory of God."
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif font-bold text-slate-900">Our Core Values</h3>
          <div className="h-1 w-24 bg-gold-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="p-6 border border-slate-100 rounded-xl hover:border-gold-500/50 hover:bg-slate-50 transition-all duration-300">
              <val.icon className="w-10 h-10 text-gold-500 mb-4" />
              <h4 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
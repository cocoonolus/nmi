import React, { useState } from 'react';
import { Heart, CheckCircle2, ShieldCheck, CreditCard, Smartphone } from 'lucide-react';

export const Giving: React.FC = () => {
  const [frequency, setFrequency] = useState<'ONCE' | 'MONTHLY'>('MONTHLY');
  const [amount, setAmount] = useState<number>(50);

  const amounts = [25, 50, 100, 250, 500];

  const getImpactText = (amt: number) => {
    if (amt <= 25) return "Provides basic medical supplies for 5 children.";
    if (amt <= 50) return "Sponsors a minor hernia repair surgery.";
    if (amt <= 100) return "Feeds a displaced family for two weeks.";
    if (amt <= 250) return "Funds a cataract surgery restoring sight.";
    return "Supports a village crusade and medical outreach.";
  };

  return (
    <div className="bg-slate-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Emotional Appeal */}
          <div className="sticky top-28">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Invest in <span className="text-gold-600">Eternity</span>. <br/>
              Restore a Life.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Your generosity is the fuel for this engine of grace. When you give to Noah Ministries, you aren't just donating—you are partnering with God to heal bodies and save souls in the most remote areas.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">100% Impact</h4>
                  <p className="text-sm text-slate-500">We prioritize field work. Your funds go directly to surgeries, crusades, and relief.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Tax Deductible</h4>
                  <p className="text-sm text-slate-500">NMI is a registered non-profit organization.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Secure Giving</h4>
                  <p className="text-sm text-slate-500">256-bit SSL encryption ensures your data is safe.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
               <h4 className="font-bold text-slate-900 mb-2">Other Ways to Give</h4>
               <p className="text-sm text-slate-500 mb-4">Bank Transfer, Mobile Money, or Asset Donation.</p>
               <button className="text-gold-600 font-bold text-sm hover:underline">View Bank Details</button>
            </div>
          </div>

          {/* Right Side: Donation Form */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="bg-slate-900 p-8 text-white text-center">
              <Heart className="w-12 h-12 text-gold-500 mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-serif font-bold">Secure Donation</h3>
            </div>
            
            <div className="p-8">
              {/* Frequency Toggle */}
              <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
                <button 
                  onClick={() => setFrequency('ONCE')}
                  className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${frequency === 'ONCE' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Give Once
                </button>
                <button 
                  onClick={() => setFrequency('MONTHLY')}
                  className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${frequency === 'MONTHLY' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Give Monthly
                </button>
              </div>

              {/* Amount Grid */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-3">Select Amount (USD)</label>
                <div className="grid grid-cols-3 gap-3">
                  {amounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setAmount(amt)}
                      className={`py-3 px-2 rounded-lg font-bold border-2 transition-all ${
                        amount === amt 
                        ? 'border-gold-500 bg-gold-50 text-gold-700' 
                        : 'border-slate-100 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                  <div className="relative">
                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                     <input 
                      type="number" 
                      placeholder="Other"
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full h-full pl-6 pr-2 rounded-lg border-2 border-slate-100 focus:border-gold-500 outline-none font-bold text-slate-900" 
                     />
                  </div>
                </div>
              </div>

              {/* Impact Preview */}
              <div className="bg-gold-50 border border-gold-200 rounded-xl p-4 mb-8 flex items-start">
                <div className="bg-gold-100 p-2 rounded-full mr-3 shrink-0">
                  <Heart className="w-4 h-4 text-gold-600" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gold-800 uppercase tracking-wide mb-1">Your Impact</span>
                  <p className="text-sm text-slate-800 font-medium">
                    ${amount} {frequency === 'MONTHLY' ? 'per month' : ''}: {getImpactText(amount)}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-gold-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-gold-600 transition-colors shadow-lg flex items-center justify-center group">
                  <CreditCard className="w-5 h-5 mr-3" />
                  Donate ${amount} {frequency === 'MONTHLY' ? 'Monthly' : ''}
                </button>
                <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 mr-3" />
                  Mobile Money / PayPal
                </button>
              </div>

              <div className="mt-6 text-center flex items-center justify-center text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 mr-1" />
                Secure Payment • Cancel Anytime
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
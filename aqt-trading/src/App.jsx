import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { 
  PlayCircle, Activity, ArrowRight, TrendingUp, AlertCircle, DollarSign, Target, Shield, 
  Download, Upload, Brain, Zap, Trash2, CheckCircle2, Bell, Clock, 
  Building2, Calculator, PieChart as PieIcon, BarChart2, 
  ChevronDown, ChevronUp, WifiOff, Save, Sun, Moon, Cloud, Loader2, Lock, X, 
  Users, Trophy, Star
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

// --- FIREBASE IMPORTS ---
import { auth, db } from './firebase';
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { 
  doc, setDoc, updateDoc, onSnapshot, collection, 
  addDoc, deleteDoc, serverTimestamp, query, orderBy, writeBatch 
} from 'firebase/firestore';

// ==========================================
// 1. MARKETING / LANDING PAGE COMPONENT
// ==========================================
const LandingPage = ({ onEnterApp }) => {
  const [activeTab, setActiveTab] = useState('landing');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-8 font-sans text-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-12">
          <div className="text-2xl font-bold tracking-tighter">AQT <span className="text-blue-400">Pro</span></div>
          <button 
            onClick={onEnterApp}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold transition-all shadow-lg shadow-blue-500/20"
          >
            Log In
          </button>
        </nav>

        {/* Tab Navigation (Mobile Friendly) */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {['landing', 'pricing', 'testimonials', 'features', 'onboarding'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-6 py-2 rounded-full font-bold whitespace-nowrap transition-all text-sm md:text-base ${
                activeTab === tab 
                  ? 'bg-white text-blue-900' 
                  : 'bg-white/5 text-blue-200 hover:bg-white/10'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Landing Page Section */}
        {activeTab === 'landing' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-6 py-10">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
                Stop Losing Money.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Start Trading Smart.
                </span>
              </h1>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
                The only trading journal that automatically calculates position sizing, 
                tracks your psychology, and syncs across all your devices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button 
                  onClick={onEnterApp}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:scale-105 transition-all shadow-2xl shadow-blue-500/30 flex items-center gap-3"
                >
                  <Zap className="w-5 h-5" />
                  Start Free Trial (10 Trades)
                </button>
              </div>
              <div className="text-sm text-blue-300/60 mt-4">No credit card required • Instant access</div>

              {/* Feature Graphic (place feature-graphic.jpg in public/) */}
              <div className="mt-6 flex justify-center">
                <img src="/feature-graphic.jpg" alt="AQT Feature Graphic" className="w-full max-w-md rounded-2xl shadow-xl" />
              </div>


            {/* Social Proof */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-4xl font-bold text-white mb-1">10,000+</div>
                <div className="text-blue-300 text-sm">Active Traders</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-4xl font-bold text-green-400 mb-1">$2.1M+</div>
                <div className="text-blue-300 text-sm">Profits Tracked</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-1">4.9★</div>
                <div className="text-blue-300 text-sm">User Rating</div>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Section */}
        {activeTab === 'pricing' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-blue-200">Join thousands of profitable traders today.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Free Tier */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">Starter</h3>
                  <div className="text-4xl font-bold text-white mt-2">$0</div>
                  <div className="text-blue-300 text-sm">Forever free</div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {['10 Cloud-Synced Trades', 'Automated Position Sizing', 'Basic Tier System', 'Mobile App Access'].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-blue-400"/> {f}</li>
                  ))}
                </ul>
                <button onClick={onEnterApp} className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all">
                  Start Free
                </button>
              </div>

              {/* Pro Tier */}
              <div className="bg-gradient-to-b from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-8 border border-blue-500 relative flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">Pro Monthly</h3>
                  <div className="text-4xl font-bold text-white mt-2">$15</div>
                  <div className="text-blue-300 text-sm">per month • Cancel anytime</div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {['Unlimited Trades', 'Psychology Tracking', 'Advanced Analytics Charts', 'CSV & PDF Export', 'Priority Support'].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white"><CheckCircle2 size={16} className="text-green-400"/> {f}</li>
                  ))}
                </ul>
                <button onClick={onEnterApp} className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25">
                  Get Lifetime Access
                </button>
                <div className="text-center mt-3 text-xs text-blue-300">30-day money-back guarantee</div>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials */}
        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             {[
               { name: 'Marcus Chen', role: 'FTMO Funded', quote: 'AQT helped me pass my FTMO challenge. The psychology tracking showed I was revenge trading.', result: '+$47K Profit' },
               { name: 'Sarah W.', role: 'Forex Scalper', quote: 'I tried 4 other journals. AQT is the only one that automatically adjusts my lot sizes.', result: '89% Win Rate' },
               { name: 'David R.', role: 'Swing Trader', quote: 'The setup analytics revealed my breakout strategy was losing money. Stopped it and doubled my profits.', result: '+142% Return' }
             ].map((t, i) => (
               <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                 <div className="flex gap-1 mb-4">{[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-yellow-400 text-yellow-400"/>)}</div>
                 <p className="text-slate-300 mb-6 italic">"{t.quote}"</p>
                 <div className="flex items-center justify-between">
                   <div>
                     <div className="font-bold text-white">{t.name}</div>
                     <div className="text-xs text-blue-400">{t.role}</div>
                   </div>
                   <div className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded">{t.result}</div>
                 </div>
               </div>
             ))}
          </div>
        )}

        {/* Features Grid */}
        {activeTab === 'features' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {[
              { icon: Target, title: 'Auto Position Sizing', desc: 'No more manual math. AQT calculates lots based on your account tier.' },
              { icon: Brain, title: 'Psychology Tracker', desc: 'Tag emotions (FOMO, Calm) to see how they affect your P&L.' },
              { icon: Cloud, title: 'Cloud Sync', desc: 'Trade on your phone, review on your PC. Data syncs instantly.' },
              { icon: BarChart2, title: 'Deep Analytics', desc: 'Win rate by setup, time of day, and market condition.' },
              { icon: Download, title: 'Tax Export', desc: 'One-click CSV export for your accountant or tax software.' },
              { icon: Shield, title: 'Risk Guard', desc: 'Safe Mode automatically halves your risk during drawdowns.' }
            ].map((f, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <f.icon className="w-10 h-10 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">{f.title}</h3>
                  <p className="text-slate-400 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

// ==========================================
// 2. DASHBOARD / APP COMPONENT 
// ==========================================

// --- CONSTANTS ---
const TIERS = [
  { name: 'SURVIVAL', min: 10, max: 19, pairs: 2, desc: 'Capital preservation mode' },
  { name: 'BUILDING', min: 20, max: 49, pairs: 3, desc: 'Steady growth phase' },
  { name: 'SCALING', min: 50, max: 99, pairs: 4, desc: 'Accelerated scaling' },
  { name: 'GROWTH', min: 100, max: 249, pairs: 5, desc: 'Sustained growth' },
  { name: 'EXPANSION', min: 250, max: 499, pairs: 6, desc: 'Portfolio expansion' },
  { name: 'ADVANCED', min: 500, max: 999, pairs: 7, desc: 'Advanced strategies' },
  { name: 'MASTERY', min: 1000, max: 2499, pairs: 8, desc: 'Full system mastery' },
  { name: 'ELITE', min: 2500, max: 4999, pairs: 10, desc: 'Elite trader status' },
  { name: 'LEGEND', min: 5000, max: 999999, pairs: 12, desc: 'Legendary performance' }
];

const BROKERS = {
  'IC Markets': { minLot: 0.01, leverage: ['1:500'], default: '1:500' },
  'Pepperstone': { minLot: 0.01, leverage: ['1:500'], default: '1:500' },
  'HankoTrade': { minLot: 0.01, leverage: ['1:500'], default: '1:500' },
  'Coinexx': { minLot: 0.01, leverage: ['1:500'], default: '1:500' },
  'Prop Firm': { minLot: 0.01, leverage: ['1:100'], default: '1:100' },
};

const TRADE_SETUPS = ['Breakout', 'Reversal', 'Trend Follow', 'Range', 'News', 'Scalp', 'Swing', 'SMC', 'ICT'];
const TAX_BRACKETS_2025 = [{ rate: 0.10, label: '10%' }, { rate: 0.12, label: '12%' }, { rate: 0.22, label: '22%' }, { rate: 0.24, label: '24%' }, { rate: 0.32, label: '32%' }];

const getPairMetadata = (rawPair) => {
  const pair = rawPair ? rawPair.toUpperCase() : '';
  if (pair.includes('JPY') || pair.includes('XAU')) return { multiplier: 100, placeholder: '', step: 0.01 };
  if (pair.includes('BTC') || pair.includes('ETH') || pair.includes('US30')) return { multiplier: 1, placeholder: '', step: 1 }; 
  return { multiplier: 10000, placeholder: '', step: 0.0001 };
};

const roundToTwo = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

// -------------------------
// Custom Chart Tooltips & Helpers
// -------------------------
const BalanceTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl">
        <p className="text-sm text-blue-400">Trade #{label}</p>
        <p className="text-lg font-bold text-white">${payload[0].value.toFixed(2)}</p>
        <p className="text-xs text-slate-400">Balance</p>
      </div>
    );
  }
  return null;
};

const PieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl">
        <p className="text-sm font-bold text-white">{payload[0].name}</p>
        <p className="text-blue-400">
          Trades: <span className="text-white">{payload[0].value}</span>
        </p>
        <p className="text-blue-400">
          Amount: <span className="text-white">${payload[0].payload.amount.toFixed(2)}</span>
        </p>
      </div>
    );
  }
  return null;
};

const EmotionTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl">
        <p className="text-sm font-bold text-white">{payload[0].payload.name}</p>
        <p className={`text-lg font-bold ${payload[0].value >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          ${payload[0].value.toFixed(2)}
        </p>
        <p className="text-xs text-slate-400">Average P&L per trade</p>
      </div>
    );
  }
  return null;
};

// Enhanced metrics calculation
const calculateEnhancedMetrics = (balance, broker, safeMode, brokerList, settings, trades) => {
  const safeBal = !isNaN(balance) && balance !== null ? parseFloat(balance) : 0;
  
  const currentTier = TIERS.find(t => safeBal >= t.min && safeBal <= t.max) || TIERS[0];
  const brokerData = brokerList[broker];

  const calculateLotSize = (tier) => {
    const baseLot = Math.max(
      brokerData.minLot,
      parseFloat((Math.floor(tier.min / 10) * 0.01).toFixed(2))
    );
    const finalLot = safeMode ? Math.max(brokerData.minLot, baseLot * 0.5) : baseLot;
    return parseFloat(finalLot.toFixed(2));
  };

  const lotSize = calculateLotSize(currentTier);
  const dailyGrowthDecimal = settings.dailyGrowth / 100; 
  const dailyGoal = (safeBal * dailyGrowthDecimal).toFixed(2);
  const pipValueForLot = lotSize * settings.pipValue; 
  const maxLoss = (pipValueForLot * settings.stopLoss).toFixed(2);
  
  // Calculate risk per trade as percentage of balance
  const riskPerTrade = safeBal > 0 ? ((pipValueForLot * settings.stopLoss) / safeBal * 100).toFixed(1) : '0.0';
  
  // Calculate profit factor
  const winningTrades = trades.filter(t => t.pnl > 0);
  const losingTrades = trades.filter(t => t.pnl < 0);
  const grossProfit = winningTrades.reduce((sum, t) => sum + t.pnl, 0);
  const grossLoss = Math.abs(losingTrades.reduce((sum, t) => sum + t.pnl, 0));
  const profitFactor = grossLoss > 0 ? (grossProfit / grossLoss).toFixed(2) : '∞';
  
  const nextTierIndex = TIERS.indexOf(currentTier) + 1;
  const nextTier = TIERS[nextTierIndex];
  
  let progress = 100;
  if (nextTier) {
    const range = nextTier.min - currentTier.min;
    const current = safeBal - currentTier.min;
    progress = Math.min(100, Math.max(0, (current / range) * 100));
  }

  return {
    currentTier,
    lotSize,
    dailyGoal,
    maxLoss,
    riskPerTrade,
    profitFactor,
    nextTier,
    progress: progress.toFixed(1),
    pipValueForLot,
    grossProfit: grossProfit.toFixed(2),
    grossLoss: grossLoss.toFixed(2)
  };
};

// Performance Summary Component
const PerformanceSummary = ({ trades, metrics }) => {
  const winningDays = useMemo(() => {
    const days = {};
    trades.forEach(trade => {
      const day = trade.date;
      if (!days[day]) days[day] = { pnl: 0, trades: 0 };
      days[day].pnl += trade.pnl;
      days[day].trades += 1;
    });
    
    return Object.values(days).filter(day => day.pnl > 0).length;
  }, [trades]);

  const totalDays = useMemo(() => {
    const days = new Set(trades.map(t => t.date));
    return days.size;
  }, [trades]);

  const winDayRate = totalDays > 0 ? ((winningDays / totalDays) * 100).toFixed(1) : 0;

  return (
    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-4 border border-white/10">
      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
        <Activity size={18} />
        Performance Summary
      </h3>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-black/20 p-3 rounded-lg">
          <div className="text-xs text-purple-300">Win Day Rate</div>
          <div className="text-xl font-bold text-white">{winDayRate}%</div>
          <div className="text-xs text-slate-400">{winningDays}/{totalDays} days</div>
        </div>
        
        <div className="bg-black/20 p-3 rounded-lg">
          <div className="text-xs text-purple-300">Risk per Trade</div>
          <div className="text-xl font-bold text-white">{metrics.riskPerTrade}%</div>
          <div className="text-xs text-slate-400">of balance</div>
        </div>
        
        <div className="bg-black/20 p-3 rounded-lg">
          <div className="text-xs text-purple-300">Profit Factor</div>
          <div className="text-xl font-bold text-white">{metrics.profitFactor}</div>
          <div className="text-xs text-slate-400">Win/Loss ratio</div>
        </div>
        
        <div className="bg-black/20 p-3 rounded-lg">
          <div className="text-xs text-purple-300">Gross P&L</div>
          <div className="text-lg font-bold text-green-400">+${metrics.grossProfit}</div>
          <div className="text-xs text-red-400">-${metrics.grossLoss}</div>
        </div>
      </div>
    </div>
  );
};

// Import / Export Modal
const ImportExportModal = ({ isOpen, onClose, trades, onImport }) => {
  const [importData, setImportData] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleImport = () => {
    try {
      const parsed = JSON.parse(importData);
      if (!Array.isArray(parsed)) throw new Error('Invalid format');
      onImport(parsed);
      onClose();
    } catch (e) {
      setError('Invalid JSON format');
    }
  };

  const exportJSON = () => {
    const data = JSON.stringify(trades, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `aqt_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-blue-500/30 rounded-xl p-6 max-w-md w-full">
        <h3 className="text-xl font-bold mb-4">Import/Export Data</h3>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm text-blue-300 mb-2 block">Export JSON Backup</label>
            <button
              onClick={exportJSON}
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-lg"
            >
              Download Backup
            </button>
          </div>
          
          <div>
            <label className="text-sm text-blue-300 mb-2 block">Import JSON</label>
            <textarea
              value={importData}
              onChange={e => setImportData(e.target.value)}
              placeholder="Paste JSON data here..."
              className="w-full h-32 bg-black/30 border border-white/10 rounded p-3 text-sm font-mono"
            />
            {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={handleImport}
              className="flex-1 py-2 bg-green-600 hover:bg-green-500 rounded-lg"
              disabled={!importData.trim()}
            >
              Import
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hotkeys Help Component
const HotkeysHelp = () => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowHelp(true)}
        className="fixed bottom-4 right-4 w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center shadow-lg z-10"
        title="Keyboard Shortcuts"
      >
        <Zap size={20} />
      </button>

      {showHelp && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-blue-500/30 rounded-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Keyboard Shortcuts</h3>
              <button onClick={() => setShowHelp(false)} className="text-slate-400 hover:text-white">
                ✕
              </button>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b border-white/10 py-2">
                <span>Log Trade</span>
                <kbd className="bg-slate-800 px-2 py-1 rounded">Ctrl/Cmd + Enter</kbd>
              </div>
              <div className="flex justify-between border-b border-white/10 py-2">
                <span>Toggle Safe Mode</span>
                <kbd className="bg-slate-800 px-2 py-1 rounded">Ctrl/Cmd + S</kbd>
              </div>
              <div className="flex justify-between border-b border-white/10 py-2">
                <span>Export CSV</span>
                <kbd className="bg-slate-800 px-2 py-1 rounded">Ctrl/Cmd + E</kbd>
              </div>
              <div className="flex justify-between border-b border-white/10 py-2">
                <span>Toggle Advanced Mode</span>
                <kbd className="bg-slate-800 px-2 py-1 rounded">Ctrl/Cmd + A</kbd>
              </div>
              <div className="flex justify-between py-2">
                <span>Show This Help</span>
                <kbd className="bg-slate-800 px-2 py-1 rounded">?</kbd>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// --- COLLAPSIBLE COMPONENT ---
const CollapsibleSection = ({ title, icon: Icon, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(defaultOpen ? 'auto' : 0);

  useEffect(() => {
    if (isOpen) {
      const scrollHeight = contentRef.current?.scrollHeight;
      setHeight(`${scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [isOpen, children]);

  return (
    <div className="bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden mb-6 transition-all shadow-sm dark:shadow-none">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center p-4 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus:outline-none">
        <div className="flex items-center gap-2 font-bold text-lg text-slate-800 dark:text-white">
          {Icon && <Icon size={20} className="text-blue-600 dark:text-blue-400" />} {title}
        </div>
        {isOpen ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
      </button>
      <div ref={contentRef} style={{ height }} className="transition-[height] duration-300 ease-in-out overflow-hidden">
        <div className="p-6 border-t border-slate-200 dark:border-white/10">{children}</div>
      </div>
    </div>
  );
};

// --- DASHBOARD COMPONENT ---
const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(1000);
  const [broker, setBroker] = useState('IC Markets');
  const [safeMode, setSafeMode] = useState(true);
  const [trades, setTrades] = useState([]);
  const [isPremium, setIsPremium] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [newTrade, setNewTrade] = useState({ pair: 'EURUSD', direction: 'Long', entry: '', exit: '', setup: 'Breakout' });

  // New states
  const [showImportExport, setShowImportExport] = useState(false);
  const [dateRange, setDateRange] = useState('all');
  const [showAdvanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const unsubscribeDoc = onSnapshot(doc(db, 'users', currentUser.uid), (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            setBalance(data.balance ?? 1000);
            setBroker(data.broker ?? 'IC Markets');
            setSafeMode(data.safeMode ?? true);
            setIsPremium(data.isPremium ?? false);
            setDarkMode(data.darkMode ?? true);
          } else {
            setDoc(doc(db, 'users', currentUser.uid), { balance: 1000, isPremium: false, darkMode: true });
          }
          setLoading(false);
        });
        const unsubscribeTrades = onSnapshot(query(collection(db, 'users', currentUser.uid, 'trades'), orderBy('timestamp', 'desc')), (snapshot) => {
          setTrades(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
        });
        return () => { unsubscribeDoc(); unsubscribeTrades(); };
      } else {
        signInAnonymously(auth);
      }
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const updateSetting = async (key, value) => {
    if (key === 'darkMode') setDarkMode(value);
    if (user) await updateDoc(doc(db, 'users', user.uid), { [key]: value });
  };

  // Preserve original quick-calcs for UI
  const currentTier = TIERS.find(t => balance >= t.min && balance <= t.max) || TIERS[0];
  const baseLot = Math.max(BROKERS[broker]?.minLot || 0.01, parseFloat((Math.floor(currentTier.min / 10) * 0.01).toFixed(2)));
  const lotSize = safeMode ? Math.max(BROKERS[broker]?.minLot || 0.01, parseFloat((baseLot * 0.5).toFixed(2))) : baseLot;
  const pipValue = lotSize * 10;
  const maxLoss = (pipValue * 15).toFixed(2);
  const nextTier = TIERS[TIERS.indexOf(currentTier) + 1];
  let progress = 100;
  if (nextTier) progress = Math.min(100, Math.max(0, ((balance - currentTier.min) / (nextTier.min - currentTier.min)) * 100));

  const addTrade = async () => {
    if (!isPremium && trades.length >= 10) { setShowPaywall(true); return; }
    if (!user) return;
    const en = parseFloat(newTrade.entry); const ex = parseFloat(newTrade.exit);
    if(isNaN(en) || isNaN(ex)) return;
    const m = getPairMetadata(newTrade.pair).multiplier;
    const pnl = roundToTwo((ex - en) * (newTrade.direction === 'Long' ? 1 : -1) * m * pipValue);
    const tradeData = { ...newTrade, lots: lotSize, pnl, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), timestamp: serverTimestamp() };
    try {
      await addDoc(collection(db, 'users', user.uid, 'trades'), tradeData);
      await updateDoc(doc(db, 'users', user.uid), { balance: roundToTwo(balance + pnl) });
      setNewTrade({ ...newTrade, entry: '', exit: '' });
    } catch (e) { alert(e.message); }
  };

  const deleteTrade = async (t) => {
    if (!confirm('Delete trade?')) return;
    await deleteDoc(doc(db, 'users', user.uid, 'trades', t.id));
    await updateDoc(doc(db, 'users', user.uid), { balance: roundToTwo(balance - t.pnl) });
  };

  const handleUpgrade = () => {
    // Redirect to Stripe $9/month Subscription
    window.location.href = "https://buy.stripe.com/test_28E7sL6taeBs7sn7gX8Zq00"; 
  };

  // Fix setupPerformance mapping typo and keep behavior
  const setupPerformance = useMemo(() => {
    if (!isPremium) return [];
    return TRADE_SETUPS.map(s => {
      const related = trades.filter(t => t.setup === s);
      if(related.length === 0) return null;
      const w = related.filter(t => t.pnl > 0).length;
      return { name: s, winRate: ((w/related.length)*100).toFixed(0) };
    }).filter(Boolean);
  }, [trades, isPremium]);

  // Enhanced metrics (includes risk per trade, profit factor, gross P/L)
  const metrics = useMemo(() => {
    const defaultSettings = { pipValue: 10, stopLoss: 15, dailyGrowth: 20 };
    return calculateEnhancedMetrics(balance, broker, safeMode, BROKERS, defaultSettings, trades);
  }, [balance, broker, safeMode, trades]);

  // Date range filtered trades
  const filteredTrades = useMemo(() => {
    if (dateRange === 'all') return trades;
    
    const now = new Date();
    const cutoff = new Date();
    
    switch (dateRange) {
      case 'today':
        cutoff.setHours(0, 0, 0, 0);
        break;
      case 'week':
        cutoff.setDate(now.getDate() - 7);
        break;
      case 'month':
        cutoff.setMonth(now.getMonth() - 1);
        break;
      default:
        return trades;
    }
    
    return trades.filter(trade => {
      const tradeDate = new Date(trade.date);
      return tradeDate >= cutoff;
    });
  }, [trades, dateRange]);

  // Keyboard shortcuts for power users
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl/Cmd + Enter to log trade
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        addTrade();
      }
      
      // Ctrl/Cmd + S to toggle safe mode
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        updateSetting('safeMode', !safeMode);
        setSafeMode(prev => !prev);
      }
      
      // Ctrl/Cmd + E to export CSV
      if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        // Simple client export
        const headers = ['Date', 'Time', 'Pair', 'Dir', 'Entry', 'Exit', 'Lots', 'Setup', 'Emotion', 'P&L', 'Notes'];
        const rows = trades.map(t => [
          t.date, t.time || '', t.pair, t.direction, t.entry, t.exit, t.lots, t.setup || '-', t.emotion || '-', (t.pnl || 0).toFixed(2), (t.notes || '').replace(/,/g, ';')
        ])
          .filter(row => row[0]); // Filter out any rows where date is falsy
        const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `aqt_journal_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }
      
      // Ctrl/Cmd + A to toggle advanced mode
      if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
        e.preventDefault();
        setShowAdvanced(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [addTrade, trades, safeMode]);

  // Import handler - writes imported trades to Firestore (batch)
  const handleImport = async (importedTrades) => {
    if (!user) {
      alert('Please sign in to import trades.');
      return;
    }
    try {
      const batch = writeBatch(db);
      const userTradesCol = collection(db, 'users', user.uid, 'trades');
      importedTrades.forEach(t => {
        const ref = doc(userTradesCol); // auto id
        const prepared = {
          ...t,
          entry: parseFloat(t.entry) || 0,
          exit: parseFloat(t.exit) || 0,
          pnl: parseFloat(t.pnl) || 0,
          lots: parseFloat(t.lots) || 0,
          timestamp: serverTimestamp()
        };
        batch.set(ref, prepared);
      });
      await batch.commit();
      // Recalculate balance from imported trades + existing starting  balance
      const importedPnL = importedTrades.reduce((s, t) => s + (parseFloat(t.pnl) || 0), 0);
      await updateDoc(doc(db, 'users', user.uid), { balance: roundToTwo(balance + importedPnL) });
      setShowImportExport(false);
    } catch (e) {
      alert(e.message);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-slate-900 text-blue-400"><Loader2 className="animate-spin mr-2"/> Loading Cloud Data...</div>;

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden pb-12 transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* PAYWALL */}
      {showPaywall && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border-2 border-blue-500 rounded-2xl p-8 max-w-md w-full text-center relative shadow-2xl">
            <button onClick={() => setShowPaywall(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X /></button>
            <Shield size={48} className="mx-auto text-blue-500 mb-4"/>
            <h2 className="text-2xl font-bold text-white mb-2">Unlock AQT Pro</h2>
            <p className="text-blue-200 mb-6">Unlimited trades, analytics & cloud sync.</p>
            <button onClick={handleUpgrade} className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold text-white mb-3">Upgrade for $29 (Demo)</button>
            <button onClick={() => setShowPaywall(false)} className="text-sm text-slate-400">Maybe Later</button>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AQT <span className="text-blue-500">v3.2</span></h1>
          <div className="flex items-center gap-2 text-xs text-green-500 mt-1"><Cloud size={12} /> {isPremium ? "Pro Cloud" : "Free Cloud"}</div>
        </div>
        <div className="flex items-center gap-3">
           {!isPremium && <button onClick={() => setShowPaywall(true)} className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full animate-pulse">Upgrade</button>}
           <button onClick={() => updateSetting('darkMode', !darkMode)} className="p-2 rounded-full bg-white/10">{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-4 p-4">
        {/* CONFIG */}
        <CollapsibleSection title="Configuration" icon={Shield}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div><label className="text-xs font-bold uppercase mb-2 block opacity-70">Balance</label><div className="text-2xl font-mono">${balance.toFixed(2)}</div></div>
            <div>
              <label className="text-xs font-bold uppercase mb-2 block opacity-70">Broker</label>
              <select value={broker} onChange={(e) => updateSetting('broker', e.target.value)} className="w-full p-2 bg-transparent border border-slate-600 rounded">
                {Object.keys(BROKERS).map(b => <option key={b} value={b}>{b}</option>)}
              </select>      
            </div>
            <div>
              <label className="text-xs font-bold uppercase mb-2 block opacity-70">Risk</label>
              <div className="flex bg-slate-800 rounded p-1">
                <button onClick={() => updateSetting('safeMode', true)} className={`flex-1 py-1 text-xs font-bold rounded ${safeMode ? 'bg-green-500' : 'opacity-50'}`}>SAFE</button>
                <button onClick={() => updateSetting('safeMode', false)} className={`flex-1 py-1 text-xs font-bold rounded ${!safeMode ? 'bg-red-500' : 'opacity-50'}`}>AGGR</button>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><TrendingUp size={20} /> Tier: {currentTier.name}</h3>
            <div className="w-full bg-black/30 h-3 rounded-full overflow-hidden mb-2"><div className="bg-blue-500 h-full" style={{width: `${progress}%`}} /></div>
          </div>
          <div className="rounded-xl p-6 border border-white/10 bg-white/5">
             <div className="flex justify-between mb-2"><span className="opacity-70">Lots</span><span className="font-bold">{lotSize}</span></div>
             <div className="flex justify-between"><span className="opacity-70">Risk</span><span className="font-bold text-red-500">${maxLoss}</span></div>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 flex items-center justify-center">
             <button onClick={() => isPremium ? alert("Exporting...") : setShowPaywall(true)} className="flex flex-col items-center gap-2 text-sm font-bold opacity-70 hover:opacity-100">
               {isPremium ? <Download size={24} className="text-blue-400"/> : <Lock size={24} className="text-amber-400"/>}
               {isPremium ? "Export" : "Unlock"}
             </button>
          </div>
        </div>

        {/* Enhanced Statistics + Performance Summary */}
        {trades.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-3">
              <PerformanceSummary trades={trades} metrics={metrics} />
            </div>
          </div>
        )}

        {/* ANALYTICS */}
        <CollapsibleSection title="Analytics" icon={BarChart2} defaultOpen={isPremium}>
          <div className="relative h-64">
            {!isPremium && <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10 flex flex-col items-center justify-center"><Lock className="mb-2 text-amber-500"/><button onClick={() => setShowPaywall(true)} className="text-blue-400 hover:underline">Upgrade to View</button></div>}
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={setupPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333"/>
                <XAxis dataKey="name" stroke="#888" fontSize={10}/>
                <YAxis stroke="#888"/>
                <Tooltip content={<BalanceTooltip />} />
                <Bar dataKey="winRate" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CollapsibleSection>

        {/* ENTRY */}
        <div className="bg-white/10 p-6 rounded-xl border border-white/10 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold flex items-center gap-2"><DollarSign size={18}/> New Trade</h3>
            {!isPremium && <span className="text-xs text-orange-500 bg-orange-900/30 px-2 py-1 rounded">{trades.length}/10 Free Trades</span>}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            <input type="text" placeholder="Pair" value={newTrade.pair} onChange={e => setNewTrade({...newTrade, pair: e.target.value.toUpperCase()})} className="p-2 rounded bg-black/30 border border-white/10 text-sm" />
            <select value={newTrade.direction} onChange={e => setNewTrade({...newTrade, direction: e.target.value})} className="p-2 rounded bg-black/30 border border-white/10 text-sm"><option>Long</option><option>Short</option></select>
            <input type="number" placeholder="Entry" value={newTrade.entry} onChange={e => setNewTrade({...newTrade, entry: e.target.value})} className="p-2 rounded bg-black/30 border border-white/10 text-sm" />
            <input type="number" placeholder="Exit" value={newTrade.exit} onChange={e => setNewTrade({...newTrade, exit: e.target.value})} className="p-2 rounded bg-black/30 border border-white/10 text-sm" />
            <select value={newTrade.setup} onChange={e => setNewTrade({...newTrade, setup: e.target.value})} className="p-2 rounded bg-black/30 border border-white/10 text-sm">{TRADE_SETUPS.map(s => <option key={s}>{s}</option>)}</select>
            <button onClick={addTrade} className="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded text-sm transition-all">Log</button>
          </div>

          {/* Advanced toggle */}
          <div className="mt-3">
            <button onClick={() => setShowAdvanced(prev => !prev)} className="text-xs text-blue-300 hover:text-white">
              <Brain size={14} /> {showAdvanced ? 'Hide Advanced' : 'Show Advanced'}
            </button>
          </div>

          {/* ADVANCED FIELDS (if enabled) */}
          {showAdvanced && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-white/10 animate-in fade-in slide-in-from-top-2">
               <div>
                 <label className="text-xs text-purple-200 block mb-1">Setup Type</label>
                 <select 
                    value={newTrade.setup}
                    onChange={e => setNewTrade({...newTrade, setup: e.target.value})}
                    className="w-full bg-purple-900/20 border border-purple-500/30 rounded px-3 py-2 focus:ring-1 focus:ring-purple-500 outline-none text-sm"
                 >
                   {TRADE_SETUPS.map(s => <option key={s} value={s}>{s}</option>)}
                 </select>
               </div>
               <div>
                 <label className="text-xs text-purple-200 block mb-1">Emotion</label>
                 <select 
                    value={newTrade.emotion}
                    onChange={e => setNewTrade({...newTrade, emotion: e.target.value})}
                    className="w-full bg-purple-900/20 border border-purple-500/30 rounded px-3 py-2 focus:ring-1 focus:ring-purple-500 outline-none text-sm"
                 >
                   {['Calm','Anxious','Greedy','Fearful','Revenge','Euphoric','Bored'].map(e => <option key={e} value={e}>{e}</option>)}
                 </select>
               </div>
               <div className="md:col-span-2">
                 <label className="text-xs text-purple-200 block mb-1">Notes</label>
                 <input 
                   type="text" 
                   placeholder="Why did you take this trade?"
                   value={newTrade.notes || '')
                   onChange={e => setNewTrade({...newTrade, notes: e.target.value})}
                   className="w-full bg-purple-900/20 border border-purple-500/30 rounded px-3 py-2 focus:ring-1 focus:ring-purple-500 outline-none text-sm"
                 />
               </div>
            </div>
          )}
        </div>

        {/* JOURNAL */}
        <CollapsibleSection title={`Journal (${trades.length})`} icon={Brain}>
          <div className="mb-3 flex justify-between items-start md:items-center gap-3">
            <div className="flex gap-2">
              <select value={dateRange} onChange={(e) => setDateRange(e.target.value)} className="bg-black/30 border border-white/10 rounded px-3 py-1.5 text-sm">
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setShowImportExport(true)} className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded transition-colors">
                <Download size={14} /> Import/Export
              </button>
              <button onClick={async () => {
                // export CSV
                const headers = ['Date', 'Time', 'Pair', 'Dir', 'Entry', 'Exit', 'Lots', 'Setup', 'Emotion', 'P&L', 'Notes'];
                const rows = trades.map(t => [
                  t.date, t.time || '', t.pair, t.direction, t.entry, t.exit, t.lots, t.setup || '-', t.emotion || '-', (t.pnl || 0).toFixed(2), (t.notes || '').replace(/,/g, ';')
                ])
                  .filter(row => row[0]); // Filter out any rows where date is falsy
                const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
                const blob = new Blob([csvContent], { type: 'text/csv' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `aqt_journal_${new Date().toISOString().split('T')[0]}.csv`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
              }} className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded transition-colors">
                <Download size={14} /> Export CSV
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-blue-300 border-b border-white/10">
                  <th className="pb-3 pl-2">Date/Time</th>
                  <th className="pb-3">Pair</th>
                  <th className="pb-3">Dir</th>
                  <th className="pb-3">Entry/Exit</th>
                  <th className="pb-3">Lots</th>
                  {showAdvanced && <th className="pb-3 text-purple-300">Psych</th>}
                  <th className="pb-3 text-right pr-2">P&L</th>
                </tr>
              </thead>
              <tbody>
                {filteredTrades.length === 0 ? (
                  <tr><td colSpan={7} className="text-center py-8 text-slate-500">No trades yet.</td></tr>
                ) : (
                  filteredTrades.map(t => (
                    <tr key={t.id} className="border-b border-white/5 hover:bg-white/5 group">
                      <td className="py-3 pl-2">
                        <div>{t.date}</div>
                        <div className="text-xs text-slate-500">{t.time}</div>
                      </td>
                      <td className="py-3 font-bold">{t.pair}</td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded text-xs ${t.direction === 'Long' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                          {t.direction}
                        </span>
                      </td>
                      <td className="py-3 text-slate-300 text-xs">{t.entry} → {t.exit}</td>
                      <td className="py-3">{t.lots}</td>
                      {showAdvanced && (
                        <td className="py-3 text-xs text-purple-200">
                          {t.emotion} / {t.setup}
                        </td>
                      )}
                      <td className={`py-3 text-right pr-2 font-bold ${t.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        ${t.pnl.toFixed(2)}
                        <button onClick={() => deleteTrade(t)} className="ml-3 opacity-0 group-hover:opacity-100 text-slate-500 hover:text-red-400 transition-opacity">×</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CollapsibleSection>
      </div>

      {/* Import/Export Modal */}
      {showImportExport && (
        <ImportExportModal
          isOpen={showImportExport}
          onClose={() => setShowImportExport(false)}
          trades={trades}
          onImport={handleImport}
        />
      )}

      <HotkeysHelp />
    </div>
  );
};

// ==========================================
// 3. ROOT APP (View Switcher)
// ==========================================
const RootApp = () => {
  const [view, setView] = useState('landing');
  return view === 'landing' ? <LandingPage onEnterApp={() => setView('app')} /> : <Dashboard />;
};

export default RootApp;
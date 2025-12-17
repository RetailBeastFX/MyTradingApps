# RetailBeastFX v8.3 Release Notes
**December 17, 2025**

---

## 🚀 New Features

### 1st Presented FVG (ICT 2025)
The first Fair Value Gap formed after NY market open - a key daily reference level.

- **Detection Window:** 9:30 AM - 10:00 AM NY (Opening Range)
- **Validation:** FVG candle must break previous candle range to qualify
- **Display:** Gold box labeled "1st FVG" extended until 3:45 PM NY
- **Usage:** Acts as PD-Array for entries, can become iFVG if mitigated

### Suspension Blocks (ICT 2025)
Corrected implementation following true ICT definition.

- **Detection:** Volume Imbalance above AND below candle body
- **Requirement:** Left candle wick must overlap SB body (prevents FVG)
- **Display:** Amber box on body range (not full candle)
- **Usage:** Support/resistance zones for entries after MSS

### Order Block Quality Filter (ICT 2025)
Enhanced OB detection based on @FortuneMMXM's ICT insights.

- **Consecutive Candles:** Requires 2+ same-direction candles before displacement
- **Body Range:** Uses High→Open of OB candle (not full wick range)
- **Labels:** "PRIME" for 3+ consecutive candles, "FRESH" for 2 candles
- **Momentum Alignment:** Consecutive candles = building pressure = high-probability zone

---

## ⚙️ Settings Reorganization

Settings panel completely reorganized from 15+ scattered groups to **7 intuitive sections**:

| Group | Contents |
|-------|----------|
| 🚀 **Quick Start** | Mode, Strategy, Signal Arrows, Killzone Filter |
| 📊 **Signals & Core** | Bollinger Bands, EMA settings |
| ⏰ **Sessions & Timing** | London/NY killzones, Power Hour |
| 🔲 **SMC & ICT Tools** | Order Blocks, FVGs, Suspension Blocks, 1st FVG, VI |
| 📍 **Key Levels** | PDH/PDL, Weekly Open, Turtle Soup, Silver Bullet |
| 🛡️ **Risk Management** | ATR-based SL/TP settings |
| 🔬 **Advanced** | HTF confluence, RSI, Fractal Filter |
| 🎨 **Appearance** | All color settings consolidated |

> Average users can now configure the indicator with just the first 2-3 sections.

---

## 📚 Documentation Updates

### Website Docs Page
- Added **1st Presented FVG** section with time windows and trading rules
- Updated **Suspension Blocks** with correct Volume Imbalance definition
- Added "How to Trade" guidance for both features

### Interactive Checklist
- New `/checklist` page for trade setup validation
- 4-phase workflow: HTF Bias → Mid-TF Confluence → LTF Entry → Risk Management

---

## 🐛 Bug Fixes

- Fixed Pine Script syntax errors (multi-line `box.new()` calls)
- Corrected Suspension Block detection logic (was using FVG instead of VI)

---

## 📋 How to Update

1. Copy the updated `RetailBeastFX_v82_original.pine` script
2. Paste into TradingView Pine Editor
3. Save and apply to chart
4. Enable new features in Settings → SMC & ICT Tools

---

## 🎯 What's Next

- Pair-specific presets (XAUUSD, USDJPY, NAS100)
- Power Hour detection optimization
- MT5 indicator sync with Pine Script features

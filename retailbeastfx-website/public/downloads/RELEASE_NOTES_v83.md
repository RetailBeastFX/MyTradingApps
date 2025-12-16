# RetailBeastFX v8.3 Release Notes
**Release Date:** December 15, 2025

---

## 🎯 Trinity Beast Mode (New Default Experience)

v8.3 introduces **Trinity Beast Mode** — a disciplined, clean-chart default that preserves the core RetailBeast edge while eliminating visual noise for new traders.

### Philosophy
> *"Starts as the disciplined Retail Beast Trinity (the edge that works). Unlock advanced ICT footprints and A+ strategies as you level up."*

---

## ✅ What's New

### 1. Bollinger Bands: Locked to 2.0 SD Default
- **Changed:** Default deviation from `1.0` → `2.0`
- **Why:** 1.0 SD = 68% containment = frequent false touches = whipsaw bleed. John Bollinger's research confirms 2.0 SD for 20-period provides 88-89% price containment, identifying **true statistical extremes** only.

### 2. Killzone Signals Only: ON by Default
- **Changed:** `killzoneSignalsOnly` now defaults to `true`
- **Why:** Signals only fire during London/NY killzones, forcing discipline and highest-probability setups.

### 3. SMC Overlays: OFF by Default (Unlockable)
Clutter-free start. Toggle ON as you level up:

| Feature | Default | Toggle To Unlock |
|---------|---------|------------------|
| Fair Value Gaps (FVG) | OFF | ✓ |
| Inverse FVG (iFVG) | OFF | ✓ |
| Volume Imbalance | OFF | ✓ |
| Liquidity Sweeps | OFF | ✓ |
| Silver Bullet Zone | OFF | ✓ |
| HTF Levels | OFF | ✓ |
| **Turtle Soup (NEW)** | OFF | ✓ |

### 4. HTF Labels: Timeframe Identification
- **New:** HTF Order Blocks and FVGs now display their timeframe (e.g., "1H OB", "4H FVG")
- **Why:** Instantly identify which timeframe each level originates from for proper fractal alignment.

### 5. HTF Duplicate Fix
- **Fixed:** HTF FVG/OB boxes no longer draw multiple times per candle
- **How:** Added `newHTFBar` detection to ensure drawings only occur once per HTF bar close.

---

## 🔒 Core Trinity (Always ON)
These remain enabled by default — the foundation of the RetailBeast edge:

- ✅ **Bollinger Bands** (2.0 SD, 20-period)
- ✅ **EMA 8/21 Bias Ribbon**
- ✅ **Order Blocks** (fresh internal OB detection)
- ✅ **Killzones** (London/NY visual boxes)
- ✅ **PDH/PDL Levels** (Previous Day High/Low)
- ✅ **Session Opens** (London/NY open prices)

---

## 📈 User Retention Strategy
| User Type | Experience |
|-----------|------------|
| **Newbies** | Start with pure Trinity → clean chart → build discipline → actually profit → stay subscribed |
| **Experienced** | Toggle everything ON → feel premium → share screenshots → organic marketing |

---

## 🛠️ Technical Changes
```diff
- float bbMult = input.float(1.0, "Deviation", ...)
+ float bbMult = input.float(2.0, "Deviation", ...)

- bool killzoneSignalsOnly = input.bool(false, ...)
+ bool killzoneSignalsOnly = input.bool(true, ...)

- bool showFVG = input.bool(true, ...)
+ bool showFVG = input.bool(false, ...)

- bool showVI = input.bool(true, ...)
+ bool showVI = input.bool(false, ...)

- bool showLiqSweeps = input.bool(true, ...)
+ bool showLiqSweeps = input.bool(false, ...)

- bool showSilverBullet = input.bool(true, ...)
+ bool showSilverBullet = input.bool(false, ...)

- bool showHTFLevels = input.bool(true, ...)
+ bool showHTFLevels = input.bool(false, ...)

+ // HTF label helper function
+ htfLabel(string tf) => switch tf { "60" => "1H", "240" => "4H", ... }

+ // HTF duplicate prevention
+ htfTime = request.security(syminfo.tickerid, htfTimeframe, time)
+ bool newHTFBar = ta.change(htfTime) != 0
```

---

**Lock in or bleed. Go collect both.** 🔥

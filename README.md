# ⚡ ICPulse - The Intelligent Internet Computer Command Center ⚡

ICPulse is your all-in-one AI-powered dashboard for the Internet Computer ecosystem. Monitor real-time network vitals, automate governance insights, analyze on-chain activity, and manage neuron voting with advanced analytics. Whether you're a developer, node operator, or governance participant, ICPulse gives you the tools to operate at blockchain speed.

**Category**: Productivity & Utility  
**Platform**: OpenChat  

---

## 🚀 Features Overview

ICPulse integrates deeply with Internet Computer APIs to provide real-time insights and intelligent tools across five categories:

### ✨ Command Categories

#### 🌐 LIVE NETWORK MONITORING
_Real-time intelligence and infrastructure health._

- `/network_status` – Network pulse: TPS, memory, subnet status  
- `/node_map` – Global node distribution (interactive map)  
- `/subnet_versions` – Replica version tracking  
- `/node_providers` – Node providers by organization  
- `/energy_stats` – ICP vs traditional blockchains (energy usage)  

#### 🤖 AI-POWERED GOVERNANCE
_Smart summaries and deep insights to support informed voting._

- `/daily_report` – AI-curated daily digest of proposals 🧠  
- `/summarize_proposal [ID]` – Deep AI analysis of any proposal  
- `/proposals` – Browse all governance proposals  
- `/proposal_stats [ID]` – Voting power and participation breakdown  

#### 💰 TOKEN COMMAND CENTER
_Market intelligence and tokenomics._

- `/icp_price` – Live ICP/USD + ICP/XDR price  
- `/btc_price` – Live ckBTC/USD with peg info  
- `/icp_supply` – Circulating + total ICP supply  
- `/cycles_calc [ICP]` – Convert ICP → Cycles (USD adjusted)  
- `/icp_stats` – On-chain ICP stats (burn, volume, etc.)  

#### 🧠 NEURON MANAGEMENT
_Optimize and assess neuron participation._

- `/neuron_info [ID]` – Neuron voting power, age bonus, dissolve delay  
- `/neuron_health_check [ID]` – Full neuron diagnostics  
- `/maturity_modulation` – View current rewards multiplier  

#### ⚙️ DEVELOPER TOOLS
_Powerful utilities for canisters, subnets, and identity insights._

- `/canister_search [ID]` – Status, controllers, module hash  
- `/canister_growth` – Historical deployment metrics  
- `/subnet_lookup [ID]` – Details for any subnet  
- `/ii_users` – Internet Identity adoption stats  

#### 🌱 SNS ECOSYSTEM
_Explore decentralized SNS DAOs and token distributions._

- `/sns_list` – Directory of live SNS DAOs  
- `/sns_proposals [SNS ID]` – Active proposals in an SNS  
- `/icrc_supply [SNS ID]` – ICRC token supply (ckETH, etc.)  
- `/icrc_holders [SNS ID]` – Top token holders  

#### 📊 COMPARATIVE ANALYTICS
_Side-by-side benchmarking._

- `/icp_vs_eth` – Compare TPS, energy, and fees with Ethereum  

#### 📚 FAQ & RESOURCES
- `/faq [category]` – Common ICP questions & resources  

---

## 🔍 Quick Reference

| Category            | Sample Commands                                  |
|---------------------|-------------------------------------------------|
| Network Monitoring  | `/network_status`, `/node_map`, `/energy_stats` |
| Governance Tools    | `/daily_report`, `/proposals`, `/summarize_proposal 12345` |
| Token Data          | `/icp_price`, `/btc_price`, `/cycles_calc 10`   |
| Neuron Management   | `/neuron_info 123456789`, `/maturity_modulation` |
| Developer Tools     | `/canister_search xyzzy-12345`, `/subnet_lookup subnet_id` |
| SNS Tools           | `/sns_list`, `/icrc_holders abcde-67890`        |
| Analytics           | `/icp_vs_eth`, `/icp_stats`                     |

---

### ⚙️ Installation Guide
**Clone the repository**

```bash
git clone git@github.com:Tonyflam/ICPulse.git
cd ICPulse
```

**Install dependencies**

```bash
npm install
```

**Configure environment variables**

Fill in the following variables in .env:

```env
OPENCHAT_PUBLIC_KEY=your_public_key_here
OPENCHAT_PRIVATE_KEY=your_private_key_here
GROK_API_KEY=your_grok_ai_key_here
STORAGE_INDEX_CANISTER=canister_id_here
IC_HOST=https://icp0.io
```

**Start the bot**

```bash
npm run dev
```


## 🧪 Example Commands
```bash
/icp_price               # Get latest ICP/USD price
/cycles_calc 5          # Convert 5 ICP into Cycles
/daily_report           # AI governance digest
/summarize_proposal 123 # Deep analysis of Proposal #123
/neuron_info 456789     # Voting stats for neuron 456789
/node_map               # View global node locations



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

- `/network network_status` – Network pulse: TPS, node health, memory usage  
- `/network node_map` – Global node distribution (interactive map)  
- `/network subnet_versions` – Subnet replica version tracking  
- `/network node_providers` – Node providers by organization  
- `/network energy_stats` – Energy efficiency metrics (ICP vs legacy chains)  
- `/network subnet_lookup [subnet_id]` – Subnet detail lookup  

#### 🤖 AI-POWERED GOVERNANCE  
_Smart summaries and deep insights to support informed voting._

- `/governance daily_report` – AI-curated daily digest of proposals 🧠  
- `/governance summarize_proposal [proposal_id]` – Deep AI analysis of any proposal  
- `/governance proposals` – Browse active governance proposals  
- `/governance proposal_stats [proposal_id]` – Voting power and participation breakdown  

#### 💰 TOKEN COMMAND CENTER  
_Market intelligence and tokenomics._

- `/tokens icp_price` – Live ICP/USD + ICP/XDR price  
- `/tokens ckbtc_price` – Live ckBTC/USD peg info  
- `/tokens icp_supply` – Circulating supply of ICP  
- `/tokens cycles_calc [amount]` – Convert ICP → Cycles (USD adjusted)  
- `/tokens icrc_supply [ledger_id]` – ICRC token supply (e.g., ckETH)  
- `/tokens icrc_holders [ledger_id]` – Top holders of ICRC tokens  

#### 🧠 NEURON MANAGEMENT  
_Optimize and assess neuron participation._

- `/neurons neuron_info [neuron_id]` – Neuron voting power, dissolve delay, status  
- `/neurons neuron_health_check [neuron_id]` – Full neuron diagnostics  
- `/neurons maturity_modulation` – View current rewards modulation factor  

#### ⚙️ DEVELOPER TOOLS  
_Powerful utilities for canisters, subnets, and identity insights._

- `/dev canister_search [canister_id]` – Canister status, controllers, module hash  
- `/dev canister_growth` – Historical growth and deployment trends  
- `/network subnet_lookup [subnet_id]` – Subnet configuration and nodes  
- `/dev ii_users` – Internet Identity growth metrics  

#### 🌱 SNS ECOSYSTEM  
_Explore decentralized SNS DAOs and token distributions._

- `/sns sns_list` – Directory of live SNS DAOs  
- `/sns sns_proposals [sns_id]` – Active proposals within a given SNS  
- `/tokens icrc_supply [ledger_id]` – ICRC token supply  
- `/tokens icrc_holders [ledger_id]` – Top token holders for an SNS  

#### 📊 COMPARATIVE ANALYTICS  
_Side-by-side benchmarking._

- `/analytics icp_vs_eth` – Compare metrics: TPS, energy, fees vs Ethereum  
- `/analytics icp_stats` – Chain-level activity: burns, transactions, etc.  

#### 📚 FAQ & RESOURCES  
Helpful information for understanding ICP and the ecosystem.

- `/icp_faq [category]` – FAQs by category: general, governance, sns, neurons, resources  

---

## 🔍 Quick Reference

| Category            | Sample Commands                                            |
|---------------------|-----------------------------------------------------------|
| Network Monitoring  | `/network network_status`, `/network node_map`            |
| Governance Tools    | `/governance proposals`, `/governance summarize_proposal 12345` |
| Token Data          | `/tokens icp_price`, `/tokens cycles_calc 10`             |
| Neuron Management   | `/neurons neuron_info 123456789`, `/neurons maturity_modulation` |
| Developer Tools     | `/dev canister_search xyzzy-12345`, `/network subnet_lookup subnet_id` |
| SNS Tools           | `/sns sns_list`, `/tokens icrc_holders abcde-67890`       |
| Analytics           | `/analytics icp_vs_eth`, `/analytics icp_stats`           |

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
/tokens icp_price                # Get latest ICP/USD price
/tokens cycles_calc 5           # Convert 5 ICP into Cycles
/governance daily_report        # AI governance digest
/governance summarize_proposal 123  # Deep analysis of Proposal #123
/neurons neuron_info 456789     # Voting stats for neuron 456789
/network node_map               # View global node locations

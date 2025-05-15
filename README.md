# ⚡ ICPulse - The Intelligent Internet Computer Command Center ⚡

Your AI-powered dashboard for everything ICP. Monitor real-time network vitals, automate governance decisions, and analyze on-chain data with cutting-edge AI insights. Built for developers, node operators, and governance participants who demand precision at blockchain speed.

---

## ✨ Command Categories ✨

### 🌐 NETWORK COMMANDS
_Network monitoring commands: status, visualization, and analytics_

**💓 /network network_status**  
ICP Network Status  
TPS, node health, memory usage  
`/network network_status`

**🗺️ /network node_map**  
Global ICP nodes visualization  
Interactive map of node locations  
`/network node_map`

**🔄 /network subnet_versions**  
Subnet Replica version tracking  
Track versions across subnets  
`/network subnet_versions`

**🏢 /network node_providers**  
ICP Node Providers distribution  
Breakdown by provider organization  
`/network node_providers`

**🌱 /network energy_stats**  
ICP Energy efficiency report  
Energy consumption metrics  
`/network energy_stats`

**🔍 /network subnet_lookup**  
Subnet details lookup  
Get detailed subnet information  
`/network subnet_lookup [subnet_id]`

---

### 🏛️ GOVERNANCE COMMANDS
_Governance-related commands: proposals, AI analysis, and voting tools_

**🗳️ /governance proposals**  
List active proposals  
Browse governance proposals  
`/governance proposals`

**📰 /governance daily_report**  
Daily Governance Report  
AI-curated summary of proposals  
`/governance daily_report`  
🤖 AI-Powered

**🔍 /governance summarize_proposal**  
Summarize a proposal  
AI analysis of proposal content  
`/governance summarize_proposal [proposal_id]`  
🤖 AI-Powered

**📊 /governance proposal_stats**  
Proposal Statistics  
Voting analytics and metrics  
`/governance proposal_stats [proposal_id]`

---

### 💰 TOKEN COMMANDS
_Token management commands: prices, supply, and conversions_

**📈 /tokens icp_price**  
Real-time ICP price  
Current ICP/USD and ICP/XDR rates  
`/tokens icp_price`

**₿ /tokens ckbtc_price**  
ckBTC/USD price  
Current ckBTC exchange rate  
`/tokens ckbtc_price`

**🔄 /tokens icp_supply**  
ICP Circulating supply  
Current supply metrics  
`/tokens icp_supply`

**🧮 /tokens cycles_calc**  
ICP to Cycles converter  
Convert ICP amount to cycles  
`/tokens cycles_calc [amount]`

**📊 /tokens icrc_supply**  
ICRC token supply  
Check supply of ICRC tokens  
`/tokens icrc_supply [ledger_id]`

**👛 /tokens icrc_holders**  
ICRC Top wallets  
View top token holders  
`/tokens icrc_holders [ledger_id]`

---

### 🧠 NEURON COMMANDS
_Neuron management commands: info, rewards, and health checks_

**🧬 /neurons neuron_info**  
Neuron Voting power/status  
Detailed neuron information  
`/neurons neuron_info [neuron_id]`

**⚡ /neurons maturity_modulation**  
Current ICP maturity modulation  
Rewards multiplier status  
`/neurons maturity_modulation`

**🧠 /neurons neuron_health_check**  
Neuron health audit  
Health check and recommendations  
`/neurons neuron_health_check [neuron_id]`

---

### 🛠️ DEVELOPER COMMANDS
_Developer tools: canister forensics, deployment trends, and II stats_

**🔎 /dev canister_search**  
Find Canister Info  
Canister details and metadata  
`/dev canister_search [canister_id]`

**📈 /dev canister_growth**  
Canister Growth Statistics  
Historical growth metrics  
`/dev canister_growth`

**👤 /dev ii_users**  
Internet Identity stats  
User growth and metrics  
`/dev ii_users`

---

### 🌱 SNS COMMANDS
_SNS-related commands: list DAOs, proposals, and documentation_

**📋 /sns sns_list**  
List all live SNS DAOs  
Active DAOs with basic info  
`/sns sns_list`

**🗳️ /sns sns_proposals**  
Get DAO proposals  
View proposals for a specific DAO  
`/sns sns_proposals [sns_id]`

---

### 📊 ANALYTICS COMMANDS
_Comparative insights: Ethereum metrics and chain activity trends_

**⚖️ /analytics icp_vs_eth**  
ICP vs Ethereum metrics  
Comparative blockchain metrics  
`/analytics icp_vs_eth`

**📈 /analytics icp_stats**  
Chain activity trends  
ICP network statistics  
`/analytics icp_stats`

---

### ❓ FAQ COMMANDS
_Frequently asked questions about ICP_

**❓ /icp_faq**  
ICP Frequently Asked Questions  
Answers to common questions  
`/icp_faq [category]`  
Categories: general, governance, sns, neurons, resources

---

### 🛠️ UTILITY COMMANDS
_General utility commands_

**ℹ️ /help**  
Show this help message  
Display all available commands  
`/help`

---

## 💡 Usage Notes:
- Commands with `[parameter]` require input (e.g., `/neurons neuron_info 12345`)
- AI-powered commands provide enhanced analysis (marked with 🤖)
- All commands are prefixed with their category (e.g., `/network`, `/governance`)

## 🔗 Quick Links
[Dashboard] | [Governance] | [Documentation]

---

## 🚀 Getting Started

```bash
# Clone repository
git clone git@github.com:Tonyflam/ICPulse.git
cd ICPulse

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your credentials

# Run the bot
npm run dev

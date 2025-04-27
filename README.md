# ICPulse ⚡📊

**ICPulse delivers real-time data, governance tools, and network analytics to streamline your ICP workflow.** From tracking live prices (ICP, ckBTC) and converting cycles to monitoring neuron voting power, subnet health, and SNS DAOs, it's the Swiss Army knife for developers, node operators, and governance participants.

**Botathon Submission**: Productivity & Utility Category | OpenChat Platform

## Features by Category

### 📈 **Real-Time Metrics**
| Command | Description |
|---------|-------------|
| `/icp_price` | Live ICP/USD & ICP/XDR rates |
| `/btc_price` | CkBTC price from verified sources |
| `/network_status` | TPS, node count, memory usage |
| `/energy_stats` | ICP vs traditional blockchains |

### 🗳️ **Governance Toolkit**
| Command | Description |
|---------|-------------|
| `/neuron_info` | Voting power + age bonus |
| `/proposals` | Active governance proposals |
| `/maturity_modulation` | Current maturity boost status |
| `/sns_list` | All live SNS DAOs |

### ⚙️ **Developer Utilities**
| Command | Description |
|---------|-------------|
| `/cycles_calc` | ICP → cycles converter |
| `/canister_search` | Find canisters by ID |
| `/subnet_versions` | Replica version distribution |
| `/icrc_holders` | Top token holders |

### 🌐 **Network Intelligence**
| Command | Description |
|---------|-------------|
| `/node_map` | Global node visualization |
| `/node_providers` | Node distribution by provider |
| `/icp_vs_eth` | TPS/fees/energy comparison |
| `/canister_growth` | Deployment trends |

## Tech Stack
```typescript
{
  "language": "TypeScript",
  "apis": [
    "DAB (Canister Registry)",
    "NNS Governance",
    "IC Dashboard API",
    "ICRC-1 Indexer"
  ],
  "libraries": [
    "Axios (HTTP)",
    "Chart.js (Visualizations)",
    "Geolib (Node Mapping)"
  ]
}
```
### Installation

# 1. Clone with SSH
```bash
git clone github.com/Tonyflam/ICPulse.git
```

# 2. Install dependencies
```bash
npm install
```

# 3. Configure (edit .env)
```bash
cp .env.example .env
```

# 4. Start the bot
```bash
npm run dev
```

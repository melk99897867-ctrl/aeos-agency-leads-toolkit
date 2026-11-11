# ⚡ AEOS Agency Leads Toolkit

> **Lightweight, Zero-Dependency Lead Normalization & RFC 5322 Email Syntax Sanitizer for B2B Growth Teams.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## 🎯 What it does

B2B cold outreach fails when dirty data, fake addresses, and unformatted names pollute your CRM. 
`aeos-agency-leads-toolkit` runs entirely in local memory to:
- ✅ **Normalize First/Last names** (capitalization, whitespace trimming).
- ✅ **Enforce strict RFC 5322 syntax validation** to protect sender reputation.
- ✅ **Filter disposable and throwaway inboxes** (Mailinator, GuerrillaMail, etc.).
- ✅ **Deduplicate contact batches** on the fly.
- ✅ **Score lead quality** (B2B corporate domain vs generic webmail).

---

## 🚀 Quick Start

```bash
git clone https://github.com/melkster4/aeos-agency-leads-toolkit.git
cd aeos-agency-leads-toolkit
node example.js
```

### Usage in your Node.js scripts:

```javascript
const { processBatch } = require('aeos-agency-leads-toolkit');

const rawLeads = [
  { prenom: 'sarah', nom: 'connor', entreprise: 'Cyberdyne', email: 's.connor@cyberdyne.io' }
];

const cleaned = processBatch(rawLeads);
console.log(cleaned);
```

---

## 🏢 Looking for Full-Scale Agency Automation?

This open-source micro-toolkit handles client data cleansing. If your agency needs an end-to-end autonomous infrastructure for:
- ⚡ Turnkey client onboarding & deliverables automation
- 🤖 Autonomous CRM pipeline acceleration with AI email generation
- 📊 White-label client reporting & webhook integrations

Check out the enterprise-grade solution:  
👉 **[Agency Automation B2B — Official Sovereign Suite](https://agency-automation.com/checkout.html)**  
*(Use launch coupon `PIONEER50` for 50% off during early access).*

---

## 📄 License
MIT © AEOS Sovereign Technology Constellation.

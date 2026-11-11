const { processBatch } = require('./index');

const sampleRawLeads = [
  { prenom: 'sarah', nom: 'connor', entreprise: 'Cyberdyne', email: 's.connor@cyberdyne.io' },
  { prenom: 'alex', nom: 'dupont', entreprise: 'TechCorp', email: 'alex@techcorp.com' },
  { prenom: 'bad', nom: 'lead', entreprise: 'Spam', email: 'fake@mailinator.com' },
  { prenom: 'duplicate', nom: 'dupont', entreprise: 'TechCorp', email: 'alex@techcorp.com' }
];

console.log('=== AEOS AGENCY LEADS TOOLKIT (DEMO RUN) ===');
const clean = processBatch(sampleRawLeads);
console.log(`Input: ${sampleRawLeads.length} raw leads -> Output: ${clean.length} qualified unique leads.`);
console.log(JSON.stringify(clean, null, 2));

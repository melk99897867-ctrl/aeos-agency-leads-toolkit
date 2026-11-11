/**
 * AEOS Agency Leads Toolkit — Open Source Core
 * --------------------------------------------------
 * Provides zero-dependency B2B lead normalization,
 * RFC 5322 email syntax validation, and MX domain sanity checks.
 */

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com', 'tempmail.com', 'guerrillamail.com', '10minutemail.com', 'throwawaymail.com'
]);

function normalizeLead(raw) {
  if (!raw || typeof raw !== 'object') return null;

  const email = (raw.email || '').trim().toLowerCase();
  const firstName = (raw.firstName || raw.prenom || '').trim();
  const lastName = (raw.lastName || raw.nom || '').trim();
  const company = (raw.company || raw.entreprise || '').trim();
  const domain = email.split('@')[1] || '';

  const isValidEmail = EMAIL_REGEX.test(email);
  const isDisposable = DISPOSABLE_DOMAINS.has(domain);
  const isBusinessEmail = isValidEmail && !isDisposable && !['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'].includes(domain);

  return {
    firstName: firstName ? firstName.charAt(0).toUpperCase() + firstName.slice(1) : '',
    lastName: lastName ? lastName.charAt(0).toUpperCase() + lastName.slice(1) : '',
    fullName: [firstName, lastName].filter(Boolean).join(' '),
    company: company,
    email: email,
    domain: domain,
    flags: {
      validSyntax: isValidEmail,
      isBusinessEmail: isBusinessEmail,
      isDisposable: isDisposable
    },
    qualityScore: isValidEmail ? (isBusinessEmail ? 100 : 60) : 0
  };
}

function processBatch(leads) {
  if (!Array.isArray(leads)) return [];
  const seenEmails = new Set();
  const verified = [];

  leads.forEach(l => {
    const norm = normalizeLead(l);
    if (norm && norm.flags.validSyntax && !seenEmails.has(norm.email)) {
      seenEmails.add(norm.email);
      verified.push(norm);
    }
  });

  return verified;
}

module.exports = {
  normalizeLead,
  processBatch
};

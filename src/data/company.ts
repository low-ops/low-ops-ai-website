/** Contracting company and public contact details used across legal and commercial pages. */
export const COMPANY = {
  product: 'Low-Ops.AI',
  legalName: 'CINAQ B.V.',
  kvk: '82589461',
  jurisdiction: 'the Netherlands',
  addressLine1: 'Schiedamse Vest 154',
  addressLine2: '3011 BH Rotterdam, The Netherlands',
  email: 'hello@low-ops.ai',
  privacyEmail: 'privacy@low-ops.ai',
  legalEmail: 'hello@low-ops.ai',
  website: 'https://low-ops.ai',
} as const;

export const companyAddress = `${COMPANY.addressLine1}, ${COMPANY.addressLine2}`;

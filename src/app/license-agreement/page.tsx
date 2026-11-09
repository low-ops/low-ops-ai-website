import Footer from '@/components/footer';
import Header from '@/components/header';
import { COMPANY, companyAddress } from '@/data/company';
import { pageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = pageMetadata({
  title: 'License agreement',
  description: `Low-Ops.AI licence agreement issued by ${COMPANY.legalName}. Governs the proprietary portal and paid software. Community and open-source components are licensed separately.`,
  path: '/license-agreement',
});

const LicenseAgreementPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full pt-[120px] pb-[40px]">
        <div className="container">
          <h1 className="mb-4 text-center text-3xl font-medium">
            Low-Ops.AI License Agreement
          </h1>
          <p className="mb-10 text-center text-[15px] text-[var(--lo-fg-mut)]">
            Last updated: 9 November 2026 · Issued by {COMPANY.legalName}
          </p>

          <div className="prose mx-auto max-w-4xl md:prose-md">
            <p>
              This agreement governs the proprietary {COMPANY.product}{' '}
              Professional and Enterprise software, including the self-service
              portal (the &apos;Service&apos;), issued by {COMPANY.legalName}.
              The Community edition, published install charts, app templates and
              third-party open-source components are licensed under their own
              terms and are not rewritten by the source-code restrictions below.
              A{' '}
              <Link href="/licensing">
                commercial explanation of environments, partners and
                cancellation
              </Link>{' '}
              is published separately; if that summary and this agreement
              differ, this agreement prevails.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Service, you acknowledge that you have
              read, understood, and agree to be bound by these terms. If you do
              not agree, do not use the Service. We may modify these terms; the
              modified terms take effect when posted on this page. Continued
              use after posting indicates acceptance.
            </p>

            <h2>2. License Usage and Restrictions</h2>
            <p>
              2.1. The licence key is for a single customer installation of the
              Service. Development, staging and production environments that
              belong to that same organisation count as one licensed
              installation. You may not transfer, sell, lease, rent, share, or
              otherwise make the licence key available to third parties.
            </p>
            <p>
              2.2. Additional organisations, white-label client productions, or
              production use on a different domain than the licensed
              installation require a separate licence.
            </p>
            <p>
              2.3. You agree not to modify, reverse engineer, decompile, or
              attempt to extract the source code of the proprietary Service.
              This restriction does not apply to Community artefacts or
              third-party open-source software distributed under their own
              licences.
            </p>
            <p>
              2.4. You shall not use the Service for any illegal or unauthorised
              purpose, nor violate applicable law.
            </p>

            <h2>3. User Responsibilities and Account Security</h2>
            <p>
              3.1. You are responsible for maintaining the confidentiality of
              your licence key and account information.
            </p>
            <p>
              3.2. You are responsible for all activities that occur under your
              account or licence key.
            </p>
            <p>
              3.3. You must immediately notify us of any unauthorised use of
              your account or any other breach of security.
            </p>
            <p>
              3.4. You agree to provide accurate, current, and complete
              information during registration and to keep it updated.
            </p>

            <h2>4. Service Availability and Updates</h2>
            <p>
              4.1. We strive to provide reliable software. We do not guarantee
              that the Service will be available at all times. Hardware,
              software or network issues at your site, or ours, may cause
              interruptions, delays or errors.
            </p>
            <p>
              4.2. We may modify, suspend, or discontinue the Service. Material
              discontinuance of a paid tier will be communicated to current
              licensees.
            </p>
            <p>
              4.3. Maintenance or updates may cause temporary interruptions.
            </p>

            <h2>5. Privacy and Data Protection</h2>
            <p>
              5.1. Use of the Service is also governed by our{' '}
              <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>
            <p>
              5.2. We collect and process personal data in accordance with that
              policy and applicable data protection law, including Dutch and EU
              law.
            </p>
            <p>
              5.3. You retain rights to your data. Self-hosting means
              application data is stored in the environment you control, subject
              to integrations you configure. See the{' '}
              <Link href="/security">security pack</Link>.
            </p>

            <h2>6. Intellectual Property Rights</h2>
            <p>
              6.1. The Service and its original content, features and
              functionality are owned by {COMPANY.legalName} and protected by
              applicable intellectual property law.
            </p>
            <p>
              6.2. You may not copy, modify, create derivative works of,
              publicly display, republish, download, store or transmit
              proprietary materials from the Service without our consent, except
              as this agreement or an open-source licence expressly allows.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              7.1. To the maximum extent permitted by law, {COMPANY.legalName},
              its directors, employees, partners, agents, suppliers or
              affiliates shall not be liable for any indirect, incidental,
              special, consequential or punitive damages.
            </p>
            <p>
              7.2. Our aggregate liability shall not exceed the amount paid by
              you for the Service in the twelve months before the claim.
              Mandatory rights under Dutch law are unaffected.
            </p>

            <h2>8. Termination and continuity</h2>
            <p>
              8.1. We may terminate or suspend access for material breach,
              including licence-key sharing, after notice where reasonably
              practicable.
            </p>
            <p>
              8.2. On termination of a paid licence, the right to use
              proprietary portal features ceases. Workloads remain ordinary
              containers; Community and open-source components remain usable
              under their own licences. Export of your data is your
              responsibility.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These terms are governed by the laws of {COMPANY.jurisdiction},
              without regard to conflict-of-law provisions. Courts of Rotterdam
              have jurisdiction, without prejudice to mandatory consumer or
              employment venues.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              For questions about these terms, contact {COMPANY.legalName} at{' '}
              <a href={`mailto:${COMPANY.legalEmail}`}>
                {COMPANY.legalEmail}
              </a>
              .
            </p>
            <p>
              {COMPANY.legalName} · KvK {COMPANY.kvk}
              <br />
              {companyAddress}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LicenseAgreementPage;

import Footer from '@/components/footer';
import Header from '@/components/header';
import { getIndustry, industries } from '@/data/industries';
import { SITE_URL } from '@/data/seo';
import IndustryPage from '@/sections/industries/IndustryPage';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type TParams = Promise<{ industry: string }>;

export const dynamicParams = false;

export const generateStaticParams = () =>
  industries.map((industry) => ({ industry: industry.slug }));

export const generateMetadata = async ({
  params,
}: {
  params: TParams;
}): Promise<Metadata> => {
  const { industry: slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  const url = `${SITE_URL}/solutions/${industry.slug}`;
  return {
    title: { absolute: industry.seo.title },
    description: industry.seo.description,
    alternates: { canonical: url },
    openGraph: {
      title: industry.seo.title,
      description: industry.seo.description,
      url,
      type: 'website',
    },
    twitter: {
      title: industry.seo.title,
      description: industry.seo.description,
    },
  };
};

const SolutionPage = async ({ params }: { params: TParams }) => {
  const { industry: slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <Header />
      <IndustryPage industry={industry} />
      <Footer />
    </>
  );
};

export default SolutionPage;

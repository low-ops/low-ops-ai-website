import Footer from '@/components/footer';
import Header from '@/components/header';
import { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
  className?: string;
};

/** Shared chrome for inner marketing pages. */
const PageShell = ({ children, className }: TProps) => {
  return (
    <>
      <Header />
      <main className={className ?? 'bg-[var(--lo-ink)] text-[var(--lo-fg)]'}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageShell;

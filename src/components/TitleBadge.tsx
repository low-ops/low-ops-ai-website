import { cn } from '@/lib/utils';
import { FC } from 'react';

type TProps = {
  className?: string;
  title: string;
};

const TitleBadge: FC<TProps> = (props) => {
  const { className, title } = props;

  return (
    <div className={cn('mb-2 not-prose md:prose-md', className)}>
      <span className="inline-flex items-center text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--lo-accent)]">
        {title}
      </span>
    </div>
  );
};

export default TitleBadge;

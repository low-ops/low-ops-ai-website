import { techWeUse } from '@/data/tech-we-use';
import Image from 'next/image';

/** Tool logos in a hairline ledger — replaces the orbit illustration. */
const TechWeUse = () => {
  return (
    <ul className="lo-ledger grid-cols-2 sm:grid-cols-3 lg:grid-cols-7">
      {techWeUse.map((tech) => (
        <li
          key={tech.name}
          className="lo-cell flex flex-col items-center justify-center gap-4 px-4 py-8 transition-colors hover:bg-[var(--lo-surface-2)]"
        >
          <span className="grid h-12 w-12 place-items-center">
            <Image
              src={tech.icon}
              alt={tech.name}
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
              unoptimized
            />
          </span>
          <span className="lo-label text-[var(--lo-fg-mut)]">{tech.name}</span>
        </li>
      ))}
      <li className="lo-cell flex flex-col items-center justify-center gap-2 px-4 py-8 text-center">
        <span className="lo-display text-[28px] text-[var(--lo-fg-dim)]">
          +
        </span>
        <span className="lo-label text-[var(--lo-fg-dim)]">
          Anything in a container
        </span>
      </li>
    </ul>
  );
};

export default TechWeUse;

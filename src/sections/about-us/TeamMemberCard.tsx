import { TeamMember } from '@/data/about-us';
import Image from 'next/image';
import { PiGithubLogo, PiLinkedinLogo } from 'react-icons/pi';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

/** Portrait in a hairline cell; details always visible (no hover-only content). */
const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  return (
    <li className="lo-cell flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--lo-ink-2)]">
        <Image
          src={member.image}
          alt={`${member.name} — ${member.position}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top grayscale transition-[filter] duration-500 hover:grayscale-0"
        />
        <span className="lo-label absolute left-4 top-4 rounded-[4px] bg-[var(--lo-surface)] px-2 py-1 text-[var(--lo-fg-dim)]">
          0{index + 1}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-6 py-5">
        <h3 className="lo-display text-[20px] text-[var(--lo-fg)]">
          {member.name}
        </h3>
        <span className="lo-label mt-1 text-[var(--lo-accent)]">
          {member.position}
        </span>
        <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
          {member.bio}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-5">
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="text-[var(--lo-fg-dim)] transition-colors hover:text-[var(--lo-accent)]"
            >
              <PiLinkedinLogo size={20} />
            </a>
          )}
          {member.social.github && (
            <a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on GitHub`}
              className="text-[var(--lo-fg-dim)] transition-colors hover:text-[var(--lo-accent)]"
            >
              <PiGithubLogo size={20} />
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default TeamMemberCard;

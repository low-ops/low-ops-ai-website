import { PiGaugeFill, PiThumbsUpFill, PiUserPlusFill } from 'react-icons/pi';

export const roadmapSteps = [
  {
    step: '01',
    title: 'Create your app',
    description:
      'Log in to Low-Ops and create your application in minutes by choosing a template and a name.',
    Icon: PiUserPlusFill,
    iconPosition: 'below' as const,
    positionClasses: `xl:top-[142px]`,
  },
  {
    step: '02',
    title: 'Build it your way',
    description:
      'Open the source code in your favorite IDE — or hand it to your AI assistant — and start building.',
    Icon: PiGaugeFill,
    iconPosition: 'above' as const,
    positionClasses: `xl:top-[16px] xl:right-[45px]`,
  },
  {
    step: '03',
    title: 'Deploy',
    description:
      'Deploy your application to your environment in a few clicks, so your colleagues can access it.',
    Icon: PiThumbsUpFill,
    iconPosition: 'below' as const,
    positionClasses: `xl:top-[138px] xl:right-[25px]`,
  },
];

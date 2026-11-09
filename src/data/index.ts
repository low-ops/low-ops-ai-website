const data = {
  cta: {
    /** Existing-customer portal login. Does not create an account by itself. */
    loginLink: 'https://portal.app.low-ops.com',
    /** Hosted trial: form submission, access instructions follow by email. */
    trialLink: 'https://hub.cinaq.com/low-ops-trial',
    /** Public GitHub org — app templates and related content. */
    communityLink: 'https://github.com/low-ops/',
    /** Published install charts and scripts used for Community evaluation. */
    communityChartsLink: 'https://github.com/cinaq/helm-charts',
    communityInstallGuide:
      'https://docs.low-ops.com/docs/quick-start/single-node-installation',
    docsLink: 'https://docs.low-ops.com',
    youtubeWalkthrough:
      'https://www.youtube.com/playlist?list=PLj6NKZ2fu4uoT_D2sZSJtbT4cjT2RCOyW',
    youtubeEmbed:
      'https://www.youtube.com/embed/videoseries?list=PLj6NKZ2fu4uoT_D2sZSJtbT4cjT2RCOyW',
    vipAccessLink: 'https://hub.cinaq.com/low-ops-vip',
    /** HubSpot form that queues a callback to schedule the session. */
    personalDemoForm: 'https://hub.cinaq.com/low-ops-personal-demo',
    /** On-site page that explains the session before the form. */
    requestDemoLink: '/request-demo',
    startLink: '/start',
    communityPageLink: '/community',
    pilotLink: '/pilot',
    walkthroughLink: '/walkthrough',
    securityLink: '/security',
    licensingLink: '/licensing',
    partnerApplyLink: '/partners/apply',
    caseStudyLink: '/case-studies/efficient-group',
    /**
     * Alias used by existing CTAs. Points at the on-site request page, not
     * the HubSpot form, so visitors see duration and outcome first.
     */
    personalDemoLink: '/request-demo',
    shadowAiAuditLink: '/request-demo',
    partnerLink: '/partners/apply',
    /** @deprecated Prefer loginLink. Kept so older imports keep compiling. */
    freeAccessLink: 'https://portal.app.low-ops.com',
  },
};

export default data;

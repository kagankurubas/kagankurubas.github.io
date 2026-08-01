export const siteData = {
  header: {
    brand: {
      initials: 'NK',
      name: 'kagankurubas.dev',
    },
    navLinks: [
      { label: 'Work', href: '#work' },
      { label: 'About', href: '#about' },
      { label: 'Now', href: '#now' },
      { label: 'Skills', href: '#skills' },
    ],
  },
  hero: {
    eyebrow: 'Computer Engineer · Game Developer · Musician',
    titleMain: 'I build systems where',
    titleAccent: 'logic meets creativity.',
    description: 'I develop **gameplay systems** and **cross-platform applications**, combining software engineering, interaction design, and sound into focused digital experiences.',
    primaryButton: { label: 'View selected work', href: '#work' },
    secondaryButton: { label: 'GitHub profile ↗', href: 'https://github.com/kagankurubas' },
    proofs: [
      'Habitto v1.0.0 released',
      'Automated Flutter CI',
      'Based in Bursa, Türkiye',
    ],
    profile: {
      image: 'avatar.png',
      statusTitle: 'Open to opportunities',
      statusSubtitle: 'Remote · Hybrid · On-site',
      meta: [
        { title: 'Email', subtitle: 'nurikagankurubas@gmail.com' },
        { title: 'Location', subtitle: 'Bursa, Türkiye' },
        { title: 'Role', subtitle: 'Computer Engineer' },
      ],
    },
  },
  selectedWork: {
    eyebrow: 'Selected work',
    title: 'One finished product says more than ten unfinished demos.',
    description: 'Habitto is my current flagship public project: designed, developed, tested, signed, and distributed as a real Android release.',
    project: {
      label: 'Public Android release · v1.0.0',
      title: 'Habitto',
      description: 'A customizable, local-first habit and routine tracker built to make consistency visible, motivating, and private.',
      features: [
        'Flexible habit scheduling, reminders, streaks, and statistics',
        'Achievement system, themes, local JSON backup, and restore',
        'Automated formatting, analysis, tests, and Android build validation',
      ],
      tags: ['Flutter', 'Dart', 'Hive', 'Local Notifications', 'GitHub Actions'],
      primaryButton: { label: 'Download Android APK ↗', href: 'https://github.com/kagankurubas/habitto/releases/latest' },
      secondaryButton: { label: 'View source ↗', href: 'https://github.com/kagankurubas/habitto' },
      screenshots: [
        'create_habit.jpg',
        'home1.jpg',
        'statistics.jpg',
      ],
      metrics: [
        { title: 'Local-first', subtitle: 'No account and no automatic personal-data upload' },
        { title: 'Release-ready', subtitle: 'Signed APK distributed through GitHub Releases' },
        { title: 'Continuously verified', subtitle: 'Formatting, analysis, tests, and debug build in CI' },
      ],
    },
  },
  about: {
    eyebrow: 'About me',
    title: 'Engineering discipline with a creative point of view.',
    description: 'My work sits between software architecture, game development, visual interaction, and music.',
    bio: [
      'I am a Computer Engineering graduate from Balıkesir University with experience building mobile and desktop games in **Unity**, enterprise-oriented tools with **C# and .NET**, and cross-platform products with **Flutter**.',
      'I am currently developing my skills in **Unreal Engine 5, C++, and Blueprints**. My longer-term direction is gameplay systems, interactive experiences, and technical work where code and sound can reinforce each other.',
      'Outside software, I am a guitarist and musician. That background shapes how I think about rhythm, feedback, pacing, and emotional tone in interactive products.',
    ],
    experience: [
      { title: 'Professional Game Development', timeline: 'Experience', description: 'Built mobile and desktop game systems with Unity for company-owned projects. The source repositories are not publicly available because the work belongs to the company.' },
      { title: 'Application & Product Development', timeline: 'Current', description: 'Designed, shipped, documented, and automated the release workflow for Habitto, a local-first Flutter application.' },
      { title: 'Enterprise Software', timeline: 'Background', description: 'Worked with C#, .NET, SQLite, database-oriented workflows, and custom business software requirements.' },
      { title: 'Music & Audio', timeline: 'Ongoing', description: 'Guitar, music production, Cubase, sound design, and a continuing interest in interactive audio systems.' },
    ],
  },
  now: {
    eyebrow: 'What I am building now',
    title: 'Learning in public, shipping when the work is ready.',
    description: 'I do not publish half-finished repositories just to fill a profile. These are the areas currently moving forward.',
    items: [
      { number: '01', title: 'Unreal Engine 5', description: 'Deepening my understanding of UE5, C++, Blueprints, gameplay architecture, and reusable gameplay systems.' },
      { number: '02', title: 'Taskbar Idle Game', description: 'Preparing a collaborative taskbar idle game project that will become my next public game-development repository.' },
      { number: '03', title: 'Habitto Improvements', description: 'Expanding automated test coverage and planning future accessibility, localization, and backup improvements.' },
    ],
  },
  skills: {
    eyebrow: 'Core capabilities',
    title: 'Tools are useful. The ability to finish is more useful.',
    description: 'My strongest public proof is currently application development; my active growth area is Unreal Engine gameplay development.',
    groups: [
      { title: 'Game Development', tags: ['Unreal Engine 5', 'Unity', 'C++', 'C#', 'Blueprints', 'Gameplay Systems'] },
      { title: 'Application Development', tags: ['Flutter', 'Dart', '.NET', 'Hive', 'SQLite', 'Local-first Apps'] },
      { title: 'Engineering Workflow', tags: ['Git', 'GitHub', 'GitHub Actions', 'Automated Tests', 'Release Signing', 'Technical Documentation'] },
      { title: 'Creative Practice', tags: ['Guitar', 'Cubase', 'Music Production', 'Audio Design', 'Interactive Storytelling', 'Worldbuilding'] },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Have a product, game, or system worth building?',
    description: 'I am open to software-development and game-development opportunities where engineering quality and creative problem solving both matter.',
    primaryButton: { label: 'Send an email', href: 'mailto:nurikagankurubas@gmail.com' },
    secondaryButton: { label: 'LinkedIn ↗', href: 'https://linkedin.com/in/nuri-kağan-kurubas-b512b7217/' },
    links: [
      { label: 'github.com/kagankurubas ↗', href: 'https://github.com/kagankurubas' },
    ],
  },
  footer: {
    copyright: 'Nuri Kağan Kurubaş.',
    builtWith: 'Built with React, TypeScript & Vite.',
  }
};

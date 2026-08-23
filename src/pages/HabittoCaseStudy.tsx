import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { 
  ArrowLeft, 
  ExternalLink, 
  Download, 
  ShieldCheck, 
  Check, 
  X, 
  ArrowDown, 
  Bell, 
  RotateCw, 
  Database,
  Smartphone,
  Lock,
  Calendar,
  Zap
} from 'lucide-react';
import './HabittoCaseStudy.css';

interface HabittoCaseStudyProps {
  onNavigate: (path: string, hash?: string) => void;
}

export const HabittoCaseStudy: React.FC<HabittoCaseStudyProps> = ({ onNavigate }) => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  usePageMetadata({
    title: 'Habitto — Local-First Habit Tracker | Kağan Kurubaş',
    description: 'Engineering case study of Habitto, a privacy-first Flutter habit and routine tracker designed to work locally on-device.',
    canonical: 'https://kagankurubas.github.io/projects/habitto',
    robots: 'index, follow',
    ogType: 'article',
    ogTitle: 'Habitto — Local-First Habit Tracker | Kağan Kurubaş',
    ogDescription: 'Engineering case study of Habitto, a privacy-first Flutter habit and routine tracker designed to work locally on-device.',
    ogUrl: 'https://kagankurubas.github.io/projects/habitto',
    ogImage: 'https://kagankurubas.github.io/og/habitto.png',
    ogImageAlt: 'Habitto — Local-First Habit Tracker Engineering Case Study',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Habitto — Local-First Habit Tracker | Kağan Kurubaş',
    twitterDescription: 'Engineering case study of Habitto, a privacy-first Flutter habit and routine tracker designed to work locally on-device.',
    twitterImage: 'https://kagankurubas.github.io/og/habitto.png',
    twitterImageAlt: 'Habitto — Local-First Habit Tracker Engineering Case Study',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Habitto',
      'applicationCategory': 'LifestyleApplication',
      'operatingSystem': 'Android',
      'softwareVersion': '1.1.0',
      'description': 'Privacy-first, local-first habit and routine tracker for Android.',
      'author': {
        '@type': 'Person',
        'name': 'Kağan Kurubaş',
        'url': 'https://kagankurubas.github.io/'
      }
    }
  });

  const revealHero = useScrollReveal(0.05);
  const revealProduct = useScrollReveal(0.1);
  const revealArch = useScrollReveal(0.1);
  const revealInsights = useScrollReveal(0.1);
  const revealDecisions = useScrollReveal(0.1);
  const revealRelease = useScrollReveal(0.1);

  return (
    <div className="case-study-page habitto-case-study">
      {/* ============================================================ */}
      {/* CASE STUDY NAVIGATION HEADER                                 */}
      {/* ============================================================ */}
      <header className="case-study-header">
        <div className="container case-nav-inner">
          <button 
            type="button" 
            className="back-button"
            onClick={() => onNavigate('/', '#work')}
            aria-label="Back to Selected Work"
          >
            <ArrowLeft size={16} />
            <span>Selected Work</span>
          </button>

          <div className="case-header-meta">
            <span className="case-brand-tag">Habitto</span>
            <span className="case-version-pill">Android v1.1.0</span>
          </div>
        </div>
      </header>

      <main>
        {/* ============================================================ */}
        {/* 01 — HERO                                                    */}
        {/* ============================================================ */}
        <section className="case-section case-hero" ref={revealHero}>
          <div className="container">
            <div className="case-hero-content reveal">
              <div className="case-meta-row">
                <span className="eyebrow">CASE STUDY · PRODUCT ENGINEERING</span>
              </div>

              <h1 className="case-hero-title">Habitto</h1>
              <p className="case-hero-statement">
                A privacy-first habit tracker built to work entirely on-device.
              </p>
              <p className="case-hero-lead">
                A bilingual Android application for creating, scheduling, tracking, and analyzing routines without accounts, cloud infrastructure, or remote analytics.
              </p>

              <div className="case-tech-strip">
                <span className="tech-chip">Flutter</span>
                <span className="tech-chip">Dart</span>
                <span className="tech-chip">Hive</span>
                <span className="tech-chip">Local-First</span>
                <span className="tech-chip">Android</span>
              </div>

              <div className="case-metrics-grid">
                <div className="case-metric-item">
                  <span className="metric-label">DISTRIBUTION</span>
                  <strong className="metric-val">Android v1.1.0</strong>
                </div>
                <div className="case-metric-item">
                  <span className="metric-label">LOCALIZATION</span>
                  <strong className="metric-val">EN / TR Bilingual</strong>
                </div>
                <div className="case-metric-item">
                  <span className="metric-label">ARCHITECTURE</span>
                  <strong className="metric-val">100% Local-First</strong>
                </div>
                <div className="case-metric-item">
                  <span className="metric-label">QUALITY</span>
                  <strong className="metric-val">CI/CD Verified</strong>
                </div>
              </div>

              <div className="case-hero-actions">
                <a 
                  className="button button-primary" 
                  href="https://github.com/kagankurubas/habitto"
                  target="_blank" 
                  rel="noreferrer"
                >
                  <span>View Source</span>
                  <ExternalLink size={14} />
                </a>
                <a 
                  className="button button-secondary" 
                  href="https://github.com/kagankurubas/habitto/releases/latest"
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Download size={15} />
                  <span>GitHub Release</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* HERO MEDIA CONTAINER */}
            <div className="case-hero-media reveal">
              <div className="editorial-media-frame">
                <img 
                  src="/habitto/demo.gif" 
                  alt="Habitto walkthrough demonstration" 
                  className="editorial-media-gif"
                  loading="eager"
                  onClick={() => setLightboxImg('/habitto/demo.gif')}
                />
                <div className="media-caption-bar">
                  <div className="media-status-indicator">
                    <span className="status-dot"></span>
                    <span>Product Demonstration · Routine Tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 02 — PRODUCT EXPERIENCE                                      */}
        {/* ============================================================ */}
        <section className="case-section" id="experience" ref={revealProduct}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">PRODUCT EXPERIENCE</span>
                <h2>Designed around the full routine lifecycle.</h2>
              </div>
              <p>
                Users can create routines, choose icons and colors, assign categories, configure multiple scheduling modes, enable reminders, and track completion entirely on-device.
              </p>
            </div>

            {/* 5 Scheduling Models */}
            <div className="scheduling-models-strip reveal">
              <span className="models-label">RECURRENCE MODES</span>
              <div className="models-chips">
                <div className="model-chip">
                  <Calendar size={14} />
                  <span>01 Daily</span>
                </div>
                <div className="model-chip">
                  <Calendar size={14} />
                  <span>02 Weekdays</span>
                </div>
                <div className="model-chip">
                  <Calendar size={14} />
                  <span>03 Weekends</span>
                </div>
                <div className="model-chip">
                  <RotateCw size={14} />
                  <span>04 N-Day Interval</span>
                </div>
                <div className="model-chip">
                  <Calendar size={14} />
                  <span>05 Specific Weekdays</span>
                </div>
              </div>
            </div>

            {/* Asymmetric Product Screenshots */}
            <div className="product-asymmetric-grid reveal">
              <div 
                className="product-visual-dominant"
                onClick={() => setLightboxImg('/habitto/home3.jpg')}
              >
                <img 
                  src="/habitto/home3.jpg" 
                  alt="Habitto routine list and category filter" 
                  className="product-img"
                  loading="lazy"
                />
                <div className="visual-overlay-caption">
                  <strong>Routine Dashboard</strong>
                  <span>Category filtering and scheduled routine list</span>
                </div>
              </div>

              <div 
                className="product-visual-detail"
                onClick={() => setLightboxImg('/habitto/create_habit.jpg')}
              >
                <img 
                  src="/habitto/create_habit.jpg" 
                  alt="Habitto habit creation dialog" 
                  className="product-img"
                  loading="lazy"
                />
                <div className="visual-overlay-caption">
                  <strong>Creation Modal</strong>
                  <span>Recurrence models, color palette & reminder settings</span>
                </div>
              </div>
            </div>

            {/* Engineering Callout */}
            <div className="engineering-callout-box reveal">
              <div className="callout-icon-wrap">
                <ShieldCheck size={20} />
              </div>
              <div className="callout-text">
                <strong>Fully Local Application State</strong>
                <p>
                  Completion state, recurrence schedules, categories, reminder settings, and theme preferences remain stored locally on the device.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 03 — LOCAL-FIRST ENGINEERING                                 */}
        {/* ============================================================ */}
        <section className="case-section" id="architecture" ref={revealArch}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">ARCHITECTURE</span>
                <h2>Designed to work offline from the ground up.</h2>
              </div>
              <p>
                Habitto uses a layered local-first architecture where reactive UI state, domain services, and Hive persistence all run on-device.
              </p>
            </div>

            {/* ARCHITECTURE DIAGRAM 1: LAYERED FLOW */}
            <div className="architecture-showcase-box reveal">
              <div className="arch-box-header">
                <span className="arch-box-title">System Layer Flow</span>
                <span className="arch-box-badge">Layered Local-First Architecture</span>
              </div>

              <div className="arch-layers-stack">
                <div className="arch-layer-card">
                  <div className="layer-header">
                    <Smartphone size={16} className="layer-icon" />
                    <strong>01 · Flutter Presentation Layer</strong>
                  </div>
                  <p>Screens (Home, Stats, Settings, Detail), custom dialogs, FL Chart visualizers, and Heatmap widgets.</p>
                </div>

                <div className="arch-flow-divider">
                  <ArrowDown size={14} />
                  <span>Hive ValueListenable & ValueNotifier bindings</span>
                </div>

                <div className="arch-layer-card">
                  <div className="layer-header">
                    <Zap size={16} className="layer-icon" />
                    <strong>02 · Reactive State & Domain Services</strong>
                  </div>
                  <p>Core services handle statistics, backups, badges, notifications, and theme logic outside the UI layer.</p>
                </div>

                <div className="arch-flow-divider">
                  <ArrowDown size={14} />
                  <span>TypeAdapter serialization (TypeID: 0 Habit, TypeID: 2 Category)</span>
                </div>

                <div className="arch-layer-card">
                  <div className="layer-header">
                    <Database size={16} className="layer-icon" />
                    <strong>03 · Hive NoSQL Persistence</strong>
                  </div>
                  <p>Hive stores habits, categories, and settings locally with reactive box listeners.</p>
                </div>

                <div className="arch-flow-divider">
                  <ArrowDown size={14} />
                  <span>Application storage sandbox</span>
                </div>

                <div className="arch-layer-card">
                  <div className="layer-header">
                    <Lock size={16} className="layer-icon" />
                    <strong>04 · Local Android Sandbox</strong>
                  </div>
                  <p>Private app storage directory, Android AlarmManager / NotificationManager integration via platform channels.</p>
                </div>
              </div>

              {/* Privacy Callout Grid */}
              <div className="privacy-callout-grid">
                <div className="privacy-pill">
                  <Check size={14} className="privacy-check" />
                  <span>No user account</span>
                </div>
                <div className="privacy-pill">
                  <Check size={14} className="privacy-check" />
                  <span>No cloud database</span>
                </div>
                <div className="privacy-pill">
                  <Check size={14} className="privacy-check" />
                  <span>No remote analytics</span>
                </div>
                <div className="privacy-pill">
                  <Check size={14} className="privacy-check" />
                  <span>Core features work offline</span>
                </div>
              </div>
            </div>

            {/* ARCHITECTURE DIAGRAM 2: ATOMIC BACKUP PIPELINE */}
            <div className="backup-pipeline-box reveal">
              <div className="arch-box-header">
                <span className="arch-box-title">Atomic JSON Backup & Restore Pipeline</span>
                <span className="arch-box-badge">Transactional Rollback Safety</span>
              </div>

              <div className="pipeline-flow-grid">
                <div className="pipeline-step">
                  <span className="step-num">01</span>
                  <strong>JSON Payload</strong>
                  <p>Versioned schema (v1) exported with ISO-8601 timestamps.</p>
                </div>

                <div className="pipeline-arrow-wrap">→</div>

                <div className="pipeline-step">
                  <span className="step-num">02</span>
                  <strong>Schema Validation</strong>
                  <p>Validates structure and required field types.</p>
                </div>

                <div className="pipeline-arrow-wrap">→</div>

                <div className="pipeline-step">
                  <span className="step-num">03</span>
                  <strong>In-Memory Reconstruct</strong>
                  <p>Reconstructs category and habit models in memory before writing to disk.</p>
                </div>

                <div className="pipeline-arrow-wrap">→</div>

                <div className="pipeline-branch-card">
                  <div className="branch-item branch-success">
                    <Check size={14} />
                    <div>
                      <strong>Payload Valid: Commit</strong>
                      <span>Atomic write to active Hive boxes.</span>
                    </div>
                  </div>
                  <div className="branch-item branch-failure">
                    <X size={14} />
                    <div>
                      <strong>Payload Invalid: Abort</strong>
                      <span>Zero partial writes. Existing data untouched.</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="pipeline-note">
                Restore validates and reconstructs the complete backup in memory before writing to Hive. Invalid backups are rejected without partially modifying existing data.
              </p>
            </div>

            {/* NOTIFICATION ENGINEERING CALLOUT */}
            <div className="notification-callout-card reveal">
              <div className="notif-header">
                <Bell size={18} className="notif-icon" />
                <strong>Timezone-Aware Notification Scheduler</strong>
              </div>
              <div className="notif-details-grid">
                <div className="notif-point">
                  <strong>Timezone Matching</strong>
                  <span>Uses the device timezone via <code>flutter_timezone</code>, with a UTC fallback.</span>
                </div>
                <div className="notif-point">
                  <strong>Scheduling</strong>
                  <span>Supports daily, weekday, weekend, custom weekday, and interval schedules.</span>
                </div>
                <div className="notif-point">
                  <strong>Alarm Fallback</strong>
                  <span>Attempts exact scheduling first and falls back to inexact scheduling when Android restrictions require it.</span>
                </div>
                <div className="notif-point">
                  <strong>Deep Linking</strong>
                  <span>Notification payloads route directly to the related habit detail screen.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 04 — INSIGHTS & GAMIFICATION                                 */}
        {/* ============================================================ */}
        <section className="case-section" id="insights" ref={revealInsights}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">BEHAVIORAL FEEDBACK</span>
                <h2>Useful feedback without remote telemetry.</h2>
              </div>
              <p>
                Habitto analyzes completion history locally to show weekly performance, category distribution, consistency trends, and simple behavioral insights.
              </p>
            </div>

            {/* Analytics Showcase Screenshots */}
            <div className="stats-showcase-grid reveal">
              <div 
                className="stats-visual-card"
                onClick={() => setLightboxImg('/habitto/Stat1.jpg')}
              >
                <img 
                  src="/habitto/Stat1.jpg" 
                  alt="Habitto weekly performance chart and insights" 
                  className="stats-img"
                  loading="lazy"
                />
                <div className="stats-card-caption">
                  <strong>Weekly Performance & Insight Analysis</strong>
                  <span>Compares target and completion ratios to highlight performance patterns</span>
                </div>
              </div>

              <div 
                className="stats-visual-card"
                onClick={() => setLightboxImg('/habitto/Stat2.jpg')}
              >
                <img 
                  src="/habitto/Stat2.jpg" 
                  alt="Habitto activity heatmap calendar" 
                  className="stats-img"
                  loading="lazy"
                />
                <div className="stats-card-caption">
                  <strong>Activity Heatmap & Completion Metrics</strong>
                  <span>Annual density visualization and completion rates across time windows</span>
                </div>
              </div>
            </div>

            {/* Analytics Feature Bullets */}
            <div className="analytics-capabilities-row reveal">
              <div className="cap-item">
                <strong>Weekly Aggregation</strong>
                <span>Compares completed routines against scheduled targets across the week.</span>
              </div>
              <div className="cap-item">
                <strong>Category Distribution</strong>
                <span>Shows how completed routines are distributed across categories.</span>
              </div>
              <div className="cap-item">
                <strong>Heuristic Detection</strong>
                <span>Looks for stronger and weaker completion days over recent history.</span>
              </div>
              <div className="cap-item">
                <strong>Social Card Export</strong>
                <span>Generates shareable progress images directly on-device.</span>
              </div>
            </div>

            {/* GAMIFICATION SUB-SECTION */}
            <div className="gamification-sub-block reveal">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">GAMIFICATION ENGINE</span>
                  <h2>22 achievements driven by simple unlock rules.</h2>
                </div>
                <p>
                  Badge logic is kept separate from the UI. Each achievement is evaluated from habit data using small predicate functions, with persistent claim state and audio feedback.
                </p>
              </div>

              <div 
                className="achievements-showcase-card"
                onClick={() => setLightboxImg('/habitto/achievements.jpg')}
              >
                <img 
                  src="/habitto/achievements.jpg" 
                  alt="Habitto achievements grid" 
                  className="achievements-img"
                  loading="lazy"
                />
                <div className="achievements-caption-bar">
                  <span>Categories: General Milestones, Coding, Music, Game Dev, Reading, Sports, and Time-Based Achievements</span>
                </div>
              </div>

              <div className="badge-examples-grid">
                <div className="badge-example-card">
                  <span className="badge-type">STREAK & PROGRESSION</span>
                  <strong>First Step · Alev Alev (Streak 3) · İrade Ustası (Streak 7)</strong>
                  <p>Tracks consecutive day streaks ending today or yesterday.</p>
                </div>
                <div className="badge-example-card">
                  <span className="badge-type">CATEGORY MILESTONES</span>
                  <strong>Coding · Music · Game Dev · Reading · Sports</strong>
                  <p>Tracks completed tasks within specific routine categories.</p>
                </div>
                <div className="badge-example-card">
                  <span className="badge-type">TIME-BASED ACHIEVEMENTS</span>
                  <strong>Early Bird (05:00–08:00) · Night Owl (00:00–05:00)</strong>
                  <p>Evaluates the local time of completion for specific hour windows.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 05 — ENGINEERING DECISIONS                                   */}
        {/* ============================================================ */}
        <section className="case-section" id="decisions" ref={revealDecisions}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">ENGINEERING QUALITY</span>
                <h2>Engineering decisions behind Habitto</h2>
              </div>
              <p>
                Technical choices made during development to keep the app reliable, maintainable, and verifiable.
              </p>
            </div>

            <div className="decisions-grid reveal">
              {/* Decision A */}
              <article className="decision-card">
                <div className="decision-header">
                  <span className="decision-letter">A</span>
                  <h3>Pragmatic State Management</h3>
                </div>
                <p>
                  Habitto uses Flutter's built-in ValueNotifier and Hive ValueListenable APIs instead of adding a larger state-management framework. For a local-first application with limited shared state, this keeps the implementation simple and reactive.
                </p>
              </article>

              {/* Decision B */}
              <article className="decision-card">
                <div className="decision-header">
                  <span className="decision-letter">B</span>
                  <h3>Translation Integrity Pipeline</h3>
                </div>
                <p>
                  An automated test scans translation calls in the Dart source and verifies that every key exists with a non-empty value in both English and Turkish translation files.
                </p>
              </article>

              {/* Decision C */}
              <article className="decision-card">
                <div className="decision-header">
                  <span className="decision-letter">C</span>
                  <h3>Android Reliability</h3>
                </div>
                <p>
                  The Android build uses core library desugaring for compatibility with modern date/time APIs on older Android versions. Notification scheduling also includes timezone handling and exact-to-inexact alarm fallback behavior.
                </p>
              </article>

              {/* Decision D */}
              <article className="decision-card">
                <div className="decision-header">
                  <span className="decision-letter">D</span>
                  <h3>Automated Verification Pipeline</h3>
                </div>
                <div className="ci-pipeline-flow">
                  <span className="ci-node">Push / PR</span>
                  <span className="ci-arrow">→</span>
                  <span className="ci-node">dart format</span>
                  <span className="ci-arrow">→</span>
                  <span className="ci-node">flutter analyze</span>
                  <span className="ci-arrow">→</span>
                  <span className="ci-node">flutter test</span>
                  <span className="ci-arrow">→</span>
                  <span className="ci-node">apk build</span>
                </div>
                <p className="ci-desc">
                  GitHub Actions runs formatting checks, static analysis, unit tests, and a debug APK build on pushes and pull requests. Automated tests cover frequency scheduling, streak calculation, badge rules, backup round-trips, restore failure safety, and localization integrity.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 06 — SHIPPED PRODUCT & LINKS                                 */}
        {/* ============================================================ */}
        <section className="case-section case-release" id="release" ref={revealRelease}>
          <div className="container">
            <div className="release-closing-wrap reveal">
              <span className="eyebrow">RELEASE</span>
              <h2 className="release-headline">Built, tested, signed, and shipped.</h2>
              <p className="release-lead">
                Habitto is distributed as a signed Android release with automated CI checks and a public source repository.
              </p>

              <div className="release-spec-sheet">
                <div className="spec-row">
                  <span className="spec-label">APPLICATION</span>
                  <strong>Habitto</strong>
                </div>
                <div className="spec-row">
                  <span className="spec-label">VERSION</span>
                  <strong>Android Release v1.1.0</strong>
                </div>
                <div className="spec-row">
                  <span className="spec-label">TECH STACK</span>
                  <span>Flutter · Dart · Hive persistence · Local notifications</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">LOCALIZATION</span>
                  <span>English & Turkish (Automated test coverage)</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">BUILD & PRIVACY</span>
                  <span>Signed Android APK · No cloud telemetry · Sandbox storage</span>
                </div>
              </div>

              <div className="release-actions-row">
                <a 
                  className="button button-primary" 
                  href="https://github.com/kagankurubas/habitto" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink size={14} />
                </a>
                <a 
                  className="button button-secondary" 
                  href="https://github.com/kagankurubas/habitto/releases/latest" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Download size={14} />
                  <span>Android Release</span>
                  <ExternalLink size={14} />
                </a>
                <button 
                  type="button" 
                  className="button button-secondary"
                  onClick={() => onNavigate('/', '#work')}
                >
                  <ArrowLeft size={14} />
                  <span>Back to Selected Work</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================ */}
      {/* IMAGE LIGHTBOX MODAL                                         */}
      {/* ============================================================ */}
      {lightboxImg && (
        <div 
          className="case-lightbox-backdrop" 
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImg} alt="Enlarged screenshot" className="lightbox-img" />
            <button 
              className="lightbox-close" 
              onClick={() => setLightboxImg(null)}
              aria-label="Close image preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

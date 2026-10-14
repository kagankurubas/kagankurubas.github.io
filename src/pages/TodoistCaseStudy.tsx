import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMetadata } from '../hooks/usePageMetadata';
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  ArrowDown,
  ArrowRight,
  Terminal,
  Cpu,
  Workflow,
  Server,
  KeyRound,
  CheckCircle2,
  Languages,
  FileText
} from 'lucide-react';
import './TodoistCaseStudy.css';

interface TodoistCaseStudyProps {
  onNavigate: (path: string, hash?: string) => void;
}

export const TodoistCaseStudy: React.FC<TodoistCaseStudyProps> = ({ onNavigate }) => {
  usePageMetadata({
    title: 'Plugvan — MCP & Automation System | Kağan Kurubaş',
    description: 'Engineering case study of a local MCP server connecting AI assistants with Todoist through structured tools, validated API interactions, and a tested Python backend.',
    canonical: 'https://kagankurubas.github.io/projects/todoist',
    robots: 'index, follow',
    ogType: 'article',
    ogTitle: 'Plugvan — MCP & Automation System | Kağan Kurubaş',
    ogDescription: 'Engineering case study of a local MCP server connecting AI assistants with Todoist through structured tools, validated API interactions, and a tested Python backend.',
    ogUrl: 'https://kagankurubas.github.io/projects/todoist',
    ogImage: 'https://kagankurubas.github.io/og/todoist.png',
    ogImageAlt: 'Plugvan — MCP & Automation Infrastructure Case Study',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Plugvan — MCP & Automation System | Kağan Kurubaş',
    twitterDescription: 'Engineering case study of a local MCP server connecting AI assistants with Todoist through structured tools, validated API interactions, and a tested Python backend.',
    twitterImage: 'https://kagankurubas.github.io/og/todoist.png',
    twitterImageAlt: 'Plugvan — MCP & Automation Infrastructure Case Study',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      'name': 'Plugvan',
      'programmingLanguage': 'Python',
      'codeRepository': 'https://github.com/kagankurubas/plugvan',
      'license': 'https://opensource.org/licenses/MIT',
      'description': 'Model Context Protocol server and automation bridge connecting AI assistants and Google Tasks to Todoist.',
      'author': {
        '@type': 'Person',
        'name': 'Kağan Kurubaş',
        'url': 'https://kagankurubas.github.io/'
      }
    }
  });

  const revealHero = useScrollReveal(0.05);
  const revealProblem = useScrollReveal(0.08);
  const revealResolution = useScrollReveal(0.08);
  const revealMcp = useScrollReveal(0.08);
  const revealPrivacy = useScrollReveal(0.08);
  const revealLanguage = useScrollReveal(0.08);
  const revealTesting = useScrollReveal(0.08);
  const revealDecisions = useScrollReveal(0.08);
  const revealOrigin = useScrollReveal(0.08);
  const revealClosing = useScrollReveal(0.08);

  return (
    <div className="case-study-page todoist-case-study">
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
            <span className="case-brand-tag">Plugvan</span>
            <span className="case-version-pill">Python · FastMCP · Pydantic v2</span>
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
                <span className="eyebrow">CASE STUDY · SYSTEMS & AI ENGINEERING</span>
              </div>

              <h1 className="case-hero-title">Plugvan</h1>
              <p className="case-hero-statement">
                Validated Todoist tools for AI assistants, built to fail loudly instead of falling back silently.
              </p>
              <p className="case-hero-lead">
                An open-source Model Context Protocol server in Python that lets AI assistants operate on the Todoist API through hand-written, validated tools. It started as a bridge between Gemini and Todoist and was rebuilt around one rule: never silently guess.
              </p>

              <div className="case-tech-strip">
                <span className="tech-chip">Python 3.10+</span>
                <span className="tech-chip">FastMCP</span>
                <span className="tech-chip">Pydantic v2</span>
              </div>

              <div className="case-metrics-grid">
                <div className="case-metric-item">
                  <span className="metric-label">INTERFACE</span>
                  <strong className="metric-val">MCP</strong>
                </div>
                <div className="case-metric-item">
                  <span className="metric-label">VALIDATION</span>
                  <strong className="metric-val">Pydantic field constraints</strong>
                </div>
                <div className="case-metric-item">
                  <span className="metric-label">TESTING</span>
                  <strong className="metric-val">Hermetic pytest suite, CI on Python 3.10–3.14 and Windows</strong>
                </div>
                <div className="case-metric-item">
                  <span className="metric-label">TRANSPORT</span>
                  <strong className="metric-val">Local stdio</strong>
                </div>
              </div>

              <div className="case-hero-actions">
                <a
                  className="button button-primary"
                  href="https://github.com/kagankurubas/plugvan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>GitHub Repository</span>
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

            {/* HERO SYSTEMS ARCHITECTURE CANVAS */}
            <div className="hero-system-canvas reveal" aria-label="End-to-End System Flow Canvas">
              <div className="canvas-header-bar">
                <div className="canvas-status">
                  <span className="status-dot"></span>
                  <span>End-to-End System Pipeline</span>
                </div>
                <span className="canvas-tag">Local stdio</span>
              </div>

              <div className="system-tier-grid">
                {/* Tier 1: MCP Host */}
                <div className="system-tier-column">
                  <span className="tier-label">01 · MCP HOST</span>
                  <div className="tier-node-stack">
                    <div className="tier-node">
                      <Terminal size={15} className="tier-icon" />
                      <div>
                        <strong>Claude Desktop</strong>
                        <span>MCP host</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tier-flow-arrow">
                  <ArrowRight size={18} className="arrow-desktop" />
                  <ArrowDown size={18} className="arrow-mobile" />
                </div>

                {/* Tier 2: Server */}
                <div className="system-tier-column">
                  <span className="tier-label">02 · SERVER</span>
                  <div className="tier-node-stack">
                    <div className="tier-node">
                      <Server size={15} className="tier-icon" />
                      <div>
                        <strong>FastMCP server</strong>
                        <span>Local stdio</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tier-flow-arrow">
                  <ArrowRight size={18} className="arrow-desktop" />
                  <ArrowDown size={18} className="arrow-mobile" />
                </div>

                {/* Tier 3: Tool Boundary */}
                <div className="system-tier-column highlight-tier">
                  <span className="tier-label">03 · TOOL BOUNDARY</span>
                  <div className="tier-node-stack">
                    <div className="tier-node core-node">
                      <ShieldCheck size={15} className="tier-icon" />
                      <div>
                        <strong>Validate</strong>
                        <span>Field constraints</span>
                      </div>
                    </div>
                    <div className="tier-node core-node">
                      <Workflow size={15} className="tier-icon" />
                      <div>
                        <strong>Resolve</strong>
                        <span>Names to IDs</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tier-flow-arrow">
                  <ArrowRight size={18} className="arrow-desktop" />
                  <ArrowDown size={18} className="arrow-mobile" />
                </div>

                {/* Tier 4: Target System */}
                <div className="system-tier-column">
                  <span className="tier-label">04 · TARGET API</span>
                  <div className="tier-node-stack">
                    <div className="tier-node destination-node">
                      <CheckCircle2 size={16} className="tier-icon-success" />
                      <div>
                        <strong>Todoist API v1</strong>
                        <span>Tasks · Projects · Labels · Sections · Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 02 — THE PROBLEM                                             */}
        {/* ============================================================ */}
        <section className="case-section" id="problem" ref={revealProblem}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">THE PROBLEM</span>
                <h2>Assistants speak in names. Task managers need IDs.</h2>
              </div>
              <p>
                AI assistants refer to projects, sections and labels by name. A naive integration falls back to a default project or the first partial match, so a task lands in the wrong place or the wrong project is deleted.
              </p>
            </div>

            <div className="problem-sources-grid cols-3 reveal">
              <div className="source-card">
                <span className="source-tag">RISK 01</span>
                <strong>Names are ambiguous</strong>
                <p>"Work" can match several projects.</p>
              </div>
              <div className="source-card">
                <span className="source-tag">RISK 02</span>
                <strong>Defaults hide mistakes</strong>
                <p>A silent fallback to Inbox looks like success.</p>
              </div>
              <div className="source-card">
                <span className="source-tag">RISK 03</span>
                <strong>Failures look like absence</strong>
                <p>An API error reported as "not found" misleads both the assistant and the user.</p>
              </div>
            </div>

            {/* Shared Pipeline Flow */}
            <div className="shared-pipeline-bar stages-3 reveal">
              <div className="pipe-stage">
                <span className="pipe-num">01</span>
                <strong>Validate</strong>
                <span>Field constraints</span>
              </div>
              <span className="pipe-sep">→</span>
              <div className="pipe-stage">
                <span className="pipe-num">02</span>
                <strong>Resolve</strong>
                <span>Names to IDs</span>
              </div>
              <span className="pipe-sep">→</span>
              <div className="pipe-stage">
                <span className="pipe-num">03</span>
                <strong>Dispatch</strong>
                <span>Todoist API v1</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 03 — NAME RESOLUTION                                         */}
        {/* ============================================================ */}
        <section className="case-section" id="resolution" ref={revealResolution}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">NAME RESOLUTION</span>
                <h2>Four outcomes. No silent fallback.</h2>
              </div>
              <p>
                Every lookup of a project, section or label by name or ID ends in exactly one of four explicit results, and each one is reported to the assistant as itself.
              </p>
            </div>

            <div className="resolution-flow-card reveal">
              <div className="res-step">
                <span className="res-label">INPUT NAME</span>
                <strong>"Work"</strong>
              </div>
              <span className="res-arrow">↓</span>
              <div className="res-step">
                <span className="res-label">01 · ID</span>
                <span>Matches the Todoist ID exactly</span>
              </div>
              <span className="res-arrow">↓ if no match</span>
              <div className="res-step">
                <span className="res-label">02 · INBOX ALIAS</span>
                <span>Resolves an Inbox alias to the Inbox project</span>
              </div>
              <span className="res-arrow">↓ if no match</span>
              <div className="res-step">
                <span className="res-label">03 · EXACT NAME</span>
                <span>Normalized for case, whitespace and Turkish characters</span>
              </div>
              <span className="res-arrow">↓ if no match</span>
              <div className="res-step">
                <span className="res-label">04 · SINGLE PARTIAL MATCH</span>
                <span>Only where allowed</span>
              </div>
            </div>

            <div className="problem-sources-grid reveal" style={{ marginTop: '36px' }}>
              <div className="source-card">
                <span className="source-tag">RESULT</span>
                <strong>Found</strong>
                <p>Exactly one match.</p>
              </div>
              <div className="source-card">
                <span className="source-tag">RESULT</span>
                <strong>NotFound</strong>
                <p>No candidate matched the name.</p>
              </div>
              <div className="source-card">
                <span className="source-tag">RESULT</span>
                <strong>Ambiguous</strong>
                <p>More than one match; up to 5 candidates are listed.</p>
              </div>
              <div className="source-card">
                <span className="source-tag">RESULT</span>
                <strong>LookupFailed</strong>
                <p>Carries only the exception class name; an API failure is never reported as "not found".</p>
              </div>
            </div>

            <div className="security-details-grid cols-3 reveal">
              <div className="sec-detail-card">
                <ShieldCheck size={16} className="sec-icon" />
                <div>
                  <strong>Destructive operations</strong>
                  <p>Destructive operations (delete or update of projects, sections and labels) accept only an ID or an exact name.</p>
                </div>
              </div>
              <div className="sec-detail-card">
                <CheckCircle2 size={16} className="sec-icon" />
                <div>
                  <strong>Inbox on request only</strong>
                  <p>Inbox is used only when asked for (the default value is 'Inbox'), never as a silent fallback.</p>
                </div>
              </div>
              <div className="sec-detail-card">
                <Workflow size={16} className="sec-icon" />
                <div>
                  <strong>Sections and labels</strong>
                  <p>Sections and labels match by ID or exact name only.</p>
                </div>
              </div>
            </div>

            <div className="reveal" style={{ marginTop: '20px' }}>
              <pre className="code-block">
{`⚠️ Multiple projects found for '{query}'; please use the project ID:
⚠️ Project not found: '{name}'.`}
              </pre>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 04 — TOOLS                                                   */}
        {/* ============================================================ */}
        <section className="case-section" id="mcp" ref={revealMcp}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">TOOLS</span>
                <h2>Tools across tasks, projects, labels, sections and comments.</h2>
              </div>
              <p>
                Using the FastMCP framework over local stdio, Claude Desktop calls hand-written Todoist tools whose arguments are checked against field constraints before any API call. Three of them are shown below.
              </p>
            </div>

            {/* MCP Flow Canvas */}
            <div className="mcp-flow-canvas reveal">
              <div className="mcp-flow-bar">
                <div className="flow-step-node">
                  <Terminal size={14} />
                  <span>Claude Desktop</span>
                </div>
                <span className="flow-arrow">→</span>
                <div className="flow-step-node">
                  <span>Local stdio</span>
                </div>
                <span className="flow-arrow">→</span>
                <div className="flow-step-node highlight-step">
                  <Cpu size={14} />
                  <span>FastMCP Server</span>
                </div>
                <span className="flow-arrow">→</span>
                <div className="flow-step-node">
                  <span>Todoist API v1</span>
                </div>
              </div>
            </div>

            {/* MCP Tool Explorer */}
            <div className="tools-explorer-grid reveal">
              {/* Tool 01 */}
              <div className="tool-card">
                <div className="tool-card-header">
                  <div className="tool-title-group">
                    <span className="tool-badge">TOOL 01</span>
                    <h3>create_task</h3>
                  </div>
                  <span className="tool-action-tag">State-Changing</span>
                </div>
                <p>Creates a new task in Todoist with smart project resolution and natural language due dates.</p>
                <div className="tool-constraints-list">
                  <div className="constraint-item"><code>content</code> ≤ 500 chars (required)</div>
                  <div className="constraint-item"><code>description</code> ≤ 4096 chars</div>
                  <div className="constraint-item"><code>project_name</code> ≤ 120 chars</div>
                  <div className="constraint-item"><code>due_string</code> ≤ 150 chars</div>
                  <div className="constraint-item"><code>priority</code> 1 (Normal) to 4 (Urgent)</div>
                </div>
              </div>

              {/* Tool 02 */}
              <div className="tool-card">
                <div className="tool-card-header">
                  <div className="tool-title-group">
                    <span className="tool-badge">TOOL 02</span>
                    <h3>list_tasks</h3>
                  </div>
                  <span className="tool-action-tag read-tag">Read-Only</span>
                </div>
                <p>Queries and lists open tasks matching filter expressions (e.g. <code>today</code>, <code>p1</code>, <code>overdue</code>).</p>
                <div className="tool-constraints-list">
                  <div className="constraint-item"><code>filter_query</code> ≤ 500 chars (defaults to "today")</div>
                  <div className="constraint-item">Priority color formatting in response output</div>
                  <div className="constraint-item">Sanitized logging on query failure</div>
                </div>
              </div>

              {/* Tool 03 */}
              <div className="tool-card">
                <div className="tool-card-header">
                  <div className="tool-title-group">
                    <span className="tool-badge">TOOL 03</span>
                    <h3>complete_task</h3>
                  </div>
                  <span className="tool-action-tag">State-Changing</span>
                </div>
                <p>Marks an existing Todoist task as completed using its unique identifier string.</p>
                <div className="tool-constraints-list">
                  <div className="constraint-item"><code>task_id</code> ≤ 100 chars (required)</div>
                  <div className="constraint-item">Whitespace and empty ID rejection</div>
                  <div className="constraint-item">Explicit completion status feedback</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 05 — FAILURE BOUNDARIES                                      */}
        {/* ============================================================ */}
        <section className="case-section" id="privacy" ref={revealPrivacy}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">FAILURE BOUNDARIES</span>
                <h2>Errors should be useful without exposing internals.</h2>
              </div>
              <p>
                Internal diagnostic logging is kept separate from the plain-text results the assistant receives.
              </p>
            </div>

            <div className="privacy-comparison-grid reveal">
              <div className="privacy-card internal-card">
                <div className="priv-header">
                  <span className="priv-badge internal-badge">INTERNAL LOGGING</span>
                  <strong>Diagnostic Context</strong>
                </div>
                <div className="priv-list">
                  <div className="priv-item">
                    <span className="priv-key">error_type</span>
                    <span>The exception class name is logged, not the message.</span>
                  </div>
                  <div className="priv-item">
                    <span className="priv-key">tokens</span>
                    <span>Tokens are never logged.</span>
                  </div>
                </div>
              </div>

              <div className="privacy-card client-card">
                <div className="priv-header">
                  <span className="priv-badge client-badge">TOOL RESULT</span>
                  <strong>Sanitized Output</strong>
                </div>
                <div className="priv-list">
                  <div className="priv-item">
                    <span className="priv-key">messages</span>
                    <span>Controlled plain-text messages in the configured language.</span>
                  </div>
                  <div className="priv-item">
                    <span className="priv-key">no internals</span>
                    <span>No tracebacks, exception text or tokens reach the assistant.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 06 — OUTPUT LANGUAGE                                         */}
        {/* ============================================================ */}
        <section className="case-section" id="language" ref={revealLanguage}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">OUTPUT LANGUAGE</span>
                <h2>One catalog, two languages, no silent gaps.</h2>
              </div>
              <p>
                All user-facing messages live in one strict catalog.
              </p>
            </div>

            <div className="security-details-grid cols-3 reveal">
              <div className="sec-detail-card">
                <Languages size={16} className="sec-icon" />
                <div>
                  <strong>Language selection</strong>
                  <p><code>PLUGVAN_LANG</code> selects English (default) or Turkish; an unsupported value falls back to English with a single logged warning.</p>
                </div>
              </div>
              <div className="sec-detail-card">
                <KeyRound size={16} className="sec-icon" />
                <div>
                  <strong>No silent gaps</strong>
                  <p>A missing message key raises an error instead of falling back, and tests enforce identical keys and placeholders in both languages.</p>
                </div>
              </div>
              <div className="sec-detail-card">
                <FileText size={16} className="sec-icon" />
                <div>
                  <strong>Tool descriptions</strong>
                  <p>Tool descriptions stay in English.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 07 — VERIFICATION                                            */}
        {/* ============================================================ */}
        <section className="case-section" id="testing" ref={revealTesting}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">VERIFICATION</span>
                <h2>Hermetic by construction.</h2>
              </div>
              <p>
                The test suite runs without a network, real credentials or the developer's shell environment, so a green run means the same thing on every machine.
              </p>
            </div>

            <div className="test-suites-matrix reveal">
              <div className="test-suite-row">
                <div className="suite-meta">
                  <code>Network guard</code>
                  <span>Every non-loopback connection is rejected during tests.</span>
                </div>
              </div>

              <div className="test-suite-row">
                <div className="suite-meta">
                  <code>Credential and language isolation</code>
                  <span>A fake token is injected; the real shell environment cannot leak in.</span>
                </div>
              </div>

              <div className="test-suite-row">
                <div className="suite-meta">
                  <code>Tool surface snapshot</code>
                  <span>Published tool names, descriptions and schemas are compared with a fixture; an intentional change needs an explicit label.</span>
                </div>
              </div>

              <div className="test-suite-row">
                <div className="suite-meta">
                  <code>Python-version parity</code>
                  <span>Tool descriptions are identical on 3.10–3.14.</span>
                </div>
              </div>

              <div className="test-suite-row">
                <div className="suite-meta">
                  <code>CI matrix</code>
                  <span>Linux on Python 3.10–3.14, plus Windows; actions pinned to commit SHAs.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 08 — ENGINEERING DECISIONS                                   */}
        {/* ============================================================ */}
        <section className="case-section" id="decisions" ref={revealDecisions}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">ENGINEERING DECISIONS</span>
                <h2>Small boundaries that make the server easier to reason about.</h2>
              </div>
              <p>
                Architectural choices focused on validated input, explicit results and controlled failure modes.
              </p>
            </div>

            <div className="decisions-grid reveal">
              <article className="decision-card">
                <div className="decision-header">
                  <span className="decision-letter">A</span>
                  <h3>Validate at the Tool Boundary</h3>
                </div>
                <p>
                  Every tool argument is checked against field constraints and documented API limits before the Todoist API is called.
                </p>
              </article>

              <article className="decision-card">
                <div className="decision-header">
                  <span className="decision-letter">B</span>
                  <h3>Explicit over Implicit</h3>
                </div>
                <p>
                  No silent defaults: an unknown name is reported as not found, and ambiguity is a result the assistant has to resolve rather than a guess.
                </p>
              </article>

              <article className="decision-card">
                <div className="decision-header">
                  <span className="decision-letter">C</span>
                  <h3>Controlled Failure Surfaces</h3>
                </div>
                <p>
                  Downstream API failures and internal tracebacks are caught and converted into clean client error messages, keeping internal exception structures out of user-facing outputs.
                </p>
              </article>

              <article className="decision-card">
                <div className="decision-header">
                  <span className="decision-letter">D</span>
                  <h3>Local stdio Only</h3>
                </div>
                <p>
                  The MCP server runs over standard input/output (stdio) locally alongside Claude Desktop: no hosted proxy and no remote credentials.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 09 — ORIGIN                                                  */}
        {/* ============================================================ */}
        <section className="case-section" id="origin" ref={revealOrigin}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">ORIGIN</span>
                <h2>From a bridge to a server.</h2>
              </div>
              <p>
                Plugvan began as a Gemini-to-Todoist bridge with a FastAPI webhook, a CLI and a Google Tasks sync. As the MCP path proved its value, the other surfaces were removed and the repository was narrowed to a single, well-tested MCP server. The final state of the original bridge is preserved in the repository's <code>legacy-bridge-final</code> tag.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 10 — CLOSING SPEC SHEET                                      */}
        {/* ============================================================ */}
        <section className="case-section case-release" id="closing" ref={revealClosing}>
          <div className="container">
            <div className="release-closing-wrap reveal">
              <span className="eyebrow">SUMMARY</span>
              <h2 className="release-headline">Plugvan</h2>
              <p className="release-lead">
                A validated, tested MCP server for Todoist.
              </p>

              <div className="release-spec-sheet">
                <div className="spec-row">
                  <span className="spec-label">DOMAIN</span>
                  <strong>Systems & AI Engineering</strong>
                </div>
                <div className="spec-row">
                  <span className="spec-label">TECH STACK</span>
                  <span>Python · FastMCP · Pydantic v2 · Todoist API v1</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">VERIFICATION</span>
                  <span>Hermetic pytest suite, CI on Python 3.10–3.14 and Windows</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">LICENSE</span>
                  <span>MIT License</span>
                </div>
              </div>

              <div className="release-actions-row">
                <a
                  className="button button-primary"
                  href="https://github.com/kagankurubas/plugvan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>GitHub Repository</span>
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
    </div>
  );
};

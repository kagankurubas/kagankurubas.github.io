import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { 
  ArrowLeft, 
  ExternalLink, 
  ShieldCheck, 
  Check, 
  ArrowDown, 
  ArrowRight,
  Terminal, 
  Cpu, 
  Layers, 
  Lock, 
  FileCode, 
  Workflow, 
  RotateCw,
  Server,
  KeyRound,
  CheckCircle2,
  FolderGit2
} from 'lucide-react';
import './TodoistCaseStudy.css';

interface TodoistCaseStudyProps {
  onNavigate: (path: string, hash?: string) => void;
}

export const TodoistCaseStudy: React.FC<TodoistCaseStudyProps> = ({ onNavigate }) => {
  usePageMetadata({
    title: 'Todoist Gemini Bridge — MCP & Automation System | Kağan Kurubaş',
    description: 'Engineering case study of a Python automation bridge connecting AI assistants, Google Tasks, and Todoist through MCP, FastAPI, validation, and local synchronization.',
    canonical: 'https://kagankurubas.github.io/projects/todoist',
    robots: 'index, follow',
    ogType: 'article',
    ogTitle: 'Todoist Gemini Bridge — MCP & Automation System | Kağan Kurubaş',
    ogDescription: 'Engineering case study of a Python automation bridge connecting AI assistants, Google Tasks, and Todoist through MCP, FastAPI, validation, and local synchronization.',
    ogUrl: 'https://kagankurubas.github.io/projects/todoist',
    ogImage: 'https://kagankurubas.github.io/og/todoist.png',
    ogImageAlt: 'Todoist Gemini Bridge — MCP & Automation Infrastructure Case Study',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Todoist Gemini Bridge — MCP & Automation System | Kağan Kurubaş',
    twitterDescription: 'Engineering case study of a Python automation bridge connecting AI assistants, Google Tasks, and Todoist through MCP, FastAPI, validation, and local synchronization.',
    twitterImage: 'https://kagankurubas.github.io/og/todoist.png',
    twitterImageAlt: 'Todoist Gemini Bridge — MCP & Automation Infrastructure Case Study',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      'name': 'Todoist Gemini Bridge',
      'programmingLanguage': 'Python',
      'codeRepository': 'https://github.com/kagankurubas/Todoist-Gemini-Bridge',
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
  const revealValidation = useScrollReveal(0.08);
  const revealMcp = useScrollReveal(0.08);
  const revealInterfaces = useScrollReveal(0.08);
  const revealSecurity = useScrollReveal(0.08);
  const revealPrivacy = useScrollReveal(0.08);
  const revealRouting = useScrollReveal(0.08);
  const revealSync = useScrollReveal(0.08);
  const revealDecisions = useScrollReveal(0.08);
  const revealTesting = useScrollReveal(0.08);
  const revealDelivery = useScrollReveal(0.08);
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
            <span className="case-brand-tag">Todoist Gemini Bridge</span>
            <span className="case-version-pill">Python · FastMCP · REST</span>
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

              <h1 className="case-hero-title">Todoist Gemini Bridge</h1>
              <p className="case-hero-statement">
                One bridge between AI assistants, Google Tasks, and Todoist.
              </p>
              <p className="case-hero-lead">
                A Python automation system that validates structured task data, resolves Todoist projects, and exposes task workflows through MCP, REST, CLI, and Google Tasks synchronization.
              </p>

              <div className="case-tech-strip">
                <span className="tech-chip">Python 3.11+</span>
                <span className="tech-chip">FastMCP</span>
                <span className="tech-chip">FastAPI</span>
                <span className="tech-chip">Pydantic v2</span>
                <span className="tech-chip">OAuth 2.0</span>
                <span className="tech-chip">Docker</span>
              </div>

              <div className="case-metrics-grid">
                <div className="case-metric-item">
                  <span className="metric-label">INTERFACES</span>
                  <strong className="metric-val">MCP · REST · CLI · Sync</strong>
                </div>
                <div className="case-metric-item">
                  <span className="metric-label">VALIDATION</span>
                  <strong className="metric-val">Pydantic v2</strong>
                </div>
                <div className="case-metric-item">
                  <span className="metric-label">TESTING</span>
                  <strong className="metric-val">65 automated tests</strong>
                </div>
                <div className="case-metric-item">
                  <span className="metric-label">TRANSPORT</span>
                  <strong className="metric-val">Local stdio / HTTP</strong>
                </div>
              </div>

              <div className="case-hero-actions">
                <a 
                  className="button button-primary" 
                  href="https://github.com/kagankurubas/Todoist-Gemini-Bridge"
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
                <span className="canvas-tag">stdio & HTTP Bridge</span>
              </div>

              <div className="system-tier-grid">
                {/* Tier 1: Input Sources */}
                <div className="system-tier-column">
                  <span className="tier-label">01 · INPUT SOURCES</span>
                  <div className="tier-node-stack">
                    <div className="tier-node">
                      <Terminal size={15} className="tier-icon" />
                      <div>
                        <strong>Claude Desktop</strong>
                        <span>Model Context Protocol Host</span>
                      </div>
                    </div>
                    <div className="tier-node">
                      <FileCode size={15} className="tier-icon" />
                      <div>
                        <strong>LLM / JSON Payloads</strong>
                        <span>Structured task definitions</span>
                      </div>
                    </div>
                    <div className="tier-node">
                      <RotateCw size={15} className="tier-icon" />
                      <div>
                        <strong>Google Tasks</strong>
                        <span>OAuth 2.0 API source</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tier-flow-arrow">
                  <ArrowRight size={18} className="arrow-desktop" />
                  <ArrowDown size={18} className="arrow-mobile" />
                </div>

                {/* Tier 2: Bridge Core */}
                <div className="system-tier-column highlight-tier">
                  <span className="tier-label">02 · BRIDGE CORE</span>
                  <div className="tier-node-stack">
                    <div className="tier-node core-node">
                      <Cpu size={15} className="tier-icon" />
                      <div>
                        <strong>Parse & Clean</strong>
                        <span>Markdown fence stripping</span>
                      </div>
                    </div>
                    <div className="tier-node core-node">
                      <ShieldCheck size={15} className="tier-icon" />
                      <div>
                        <strong>Pydantic v2 Validate</strong>
                        <span>Strict field & batch limits (≤ 50)</span>
                      </div>
                    </div>
                    <div className="tier-node core-node">
                      <Workflow size={15} className="tier-icon" />
                      <div>
                        <strong>Resolve & Route</strong>
                        <span>Normalized project matching</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tier-flow-arrow">
                  <ArrowRight size={18} className="arrow-desktop" />
                  <ArrowDown size={18} className="arrow-mobile" />
                </div>

                {/* Tier 3: Interfaces */}
                <div className="system-tier-column">
                  <span className="tier-label">03 · INTERFACES</span>
                  <div className="tier-node-stack">
                    <div className="tier-node">
                      <Server size={15} className="tier-icon" />
                      <div>
                        <strong>FastMCP Server</strong>
                        <span>Local stdio (JSON-RPC)</span>
                      </div>
                    </div>
                    <div className="tier-node">
                      <Lock size={15} className="tier-icon" />
                      <div>
                        <strong>FastAPI Webhook</strong>
                        <span>Authenticated HTTP (/tasks)</span>
                      </div>
                    </div>
                    <div className="tier-node">
                      <Layers size={15} className="tier-icon" />
                      <div>
                        <strong>Sync Worker / CLI</strong>
                        <span>Google Tasks & local JSON</span>
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
                        <strong>Todoist REST API v2</strong>
                        <span>Projects · Tasks · Priority · Due dates</span>
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
                <h2>Different inputs. One task model.</h2>
              </div>
              <p>
                The bridge accepts task data from multiple entry points, but each path ultimately needs to produce the same validated Todoist task representation.
              </p>
            </div>

            <div className="problem-sources-grid reveal">
              <div className="source-card">
                <span className="source-tag">INPUT 01</span>
                <strong>AI-Generated Structured JSON</strong>
                <p>Chat model responses formatted as raw JSON or enclosed in Markdown code blocks (<code>```json ... ```</code>).</p>
              </div>
              <div className="source-card">
                <span className="source-tag">INPUT 02</span>
                <strong>MCP Tool Invocations</strong>
                <p>Direct function calling parameter payloads passed over local stdio via Claude Desktop.</p>
              </div>
              <div className="source-card">
                <span className="source-tag">INPUT 03</span>
                <strong>HTTP Webhook Requests</strong>
                <p>Automated incoming POST requests containing single or batched task dictionaries.</p>
              </div>
              <div className="source-card">
                <span className="source-tag">INPUT 04</span>
                <strong>CLI & Google Tasks Sync</strong>
                <p>Terminal arguments, sample files, and polled Google Tasks with hashtag and priority annotations.</p>
              </div>
            </div>

            {/* Shared Pipeline Flow */}
            <div className="shared-pipeline-bar reveal">
              <div className="pipe-stage">
                <span className="pipe-num">01</span>
                <strong>Parse</strong>
                <span>Extract JSON / Text</span>
              </div>
              <span className="pipe-sep">→</span>
              <div className="pipe-stage">
                <span className="pipe-num">02</span>
                <strong>Validate</strong>
                <span>Pydantic v2 Schema</span>
              </div>
              <span className="pipe-sep">→</span>
              <div className="pipe-stage">
                <span className="pipe-num">03</span>
                <strong>Resolve</strong>
                <span>Project Name to ID</span>
              </div>
              <span className="pipe-sep">→</span>
              <div className="pipe-stage">
                <span className="pipe-num">04</span>
                <strong>Dispatch</strong>
                <span>Todoist REST Client</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 03 — NORMALIZATION & VALIDATION                              */}
        {/* ============================================================ */}
        <section className="case-section" id="validation" ref={revealValidation}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">INPUT BOUNDARY</span>
                <h2>Normalize first. Validate before dispatch.</h2>
              </div>
              <p>
                Incoming payloads are stripped of code fences, checked against strict structural models, and bounded by batch size constraints before hitting the network.
              </p>
            </div>

            {/* Transformation Visual */}
            <div className="transformation-box reveal">
              <div className="trans-col trans-input">
                <span className="trans-header">RAW INPUT PAYLOAD</span>
                <pre className="code-block">
{`{
  "content": "Prepare portfolio review",
  "project_name": "Work",
  "due_string": "tomorrow at 14:00",
  "priority": 2
}`}
                </pre>
                <span className="code-subtext">Accepts single objects, direct arrays, or <code>{"{tasks: [...]}"}</code></span>
              </div>

              <div className="trans-col trans-pipeline">
                <div className="pipeline-pill">clean_json_text()</div>
                <ArrowDown size={14} className="pill-arrow" />
                <div className="pipeline-pill">Pydantic TaskPayload</div>
                <ArrowDown size={14} className="pill-arrow" />
                <div className="pipeline-pill">Batch Limit (≤ 50)</div>
                <ArrowDown size={14} className="pill-arrow" />
                <div className="pipeline-pill">Normalized Resolver</div>
              </div>

              <div className="trans-col trans-output">
                <span className="trans-header">VALIDATED TASK ENTITY</span>
                <div className="validated-entity-card">
                  <div className="entity-row">
                    <span className="entity-key">content</span>
                    <span className="entity-val">"Prepare portfolio review"</span>
                  </div>
                  <div className="entity-row">
                    <span className="entity-key">project_id</span>
                    <span className="entity-val">"23489102" (resolved)</span>
                  </div>
                  <div className="entity-row">
                    <span className="entity-key">due_string</span>
                    <span className="entity-val">"tomorrow at 14:00"</span>
                  </div>
                  <div className="entity-row">
                    <span className="entity-key">priority</span>
                    <span className="entity-val">2 (Normal to Urgent: 1–4)</span>
                  </div>
                </div>
                <span className="code-subtext">Verified type safety with sanitized error feedback</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 04 — MODEL CONTEXT PROTOCOL (MCP)                            */}
        {/* ============================================================ */}
        <section className="case-section" id="mcp" ref={revealMcp}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">MODEL CONTEXT PROTOCOL</span>
                <h2>Todoist tools exposed directly to AI hosts.</h2>
              </div>
              <p>
                Using the FastMCP framework over local stdio, Claude Desktop interacts with Todoist via standardized JSON-RPC 2.0 tool definitions.
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
                  <span>Local stdio (JSON-RPC)</span>
                </div>
                <span className="flow-arrow">→</span>
                <div className="flow-step-node highlight-step">
                  <Cpu size={14} />
                  <span>FastMCP Server</span>
                </div>
                <span className="flow-arrow">→</span>
                <div className="flow-step-node">
                  <span>Todoist API v2</span>
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
        {/* 05 — SHARED CORE & MULTIPLE INTERFACES                       */}
        {/* ============================================================ */}
        <section className="case-section" id="interfaces" ref={revealInterfaces}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">SHARED CORE</span>
                <h2>Different entry points, shared integration logic.</h2>
              </div>
              <p>
                Whether invoked from an AI tool call, an authenticated webhook, or a background synchronization worker, all entry points converge on the same validation and client layer.
              </p>
            </div>

            <div className="interfaces-grid reveal">
              <div className="interface-card">
                <div className="interface-header">
                  <Server size={16} className="interface-icon" />
                  <strong>MCP Server</strong>
                </div>
                <p>Provides AI-host tool execution over standard input/output streams.</p>
                <span className="interface-meta">Entry: <code>todoist_mcp.py</code></span>
              </div>

              <div className="interface-card">
                <div className="interface-header">
                  <Lock size={16} className="interface-icon" />
                  <strong>REST API</strong>
                </div>
                <p>FastAPI webhook endpoint for authenticated external HTTP payloads.</p>
                <span className="interface-meta">Entry: <code>app.py</code></span>
              </div>

              <div className="interface-card">
                <div className="interface-header">
                  <RotateCw size={16} className="interface-icon" />
                  <strong>Sync Worker</strong>
                </div>
                <p>Google Tasks polling worker extracting hashtags, priority, and due dates.</p>
                <span className="interface-meta">Entry: <code>sync_worker.py</code></span>
              </div>

              <div className="interface-card">
                <div className="interface-header">
                  <Terminal size={16} className="interface-icon" />
                  <strong>CLI Runner</strong>
                </div>
                <p>Direct terminal executor supporting files, JSON strings, and interactive stdin.</p>
                <span className="interface-meta">Entry: <code>main.py</code></span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 06 — REST & SECURITY BOUNDARY                                */}
        {/* ============================================================ */}
        <section className="case-section" id="security" ref={revealSecurity}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">API BOUNDARY</span>
                <h2>External input is validated before reaching Todoist.</h2>
              </div>
              <p>
                The FastAPI service enforces token validation, origin filtering, and batch thresholds before allowing requests into the pipeline.
              </p>
            </div>

            <div className="security-pipeline-box reveal">
              <div className="sec-step">
                <span className="sec-step-num">01</span>
                <strong>HTTP POST</strong>
                <span>Incoming request to <code>/tasks</code></span>
              </div>
              <span className="sec-arrow">→</span>
              <div className="sec-step">
                <span className="sec-step-num">02</span>
                <strong>X-Bridge-Token</strong>
                <span>Header extracted</span>
              </div>
              <span className="sec-arrow">→</span>
              <div className="sec-step">
                <span className="sec-step-num">03</span>
                <strong>Constant-Time Check</strong>
                <span><code>secrets.compare_digest</code></span>
              </div>
              <span className="sec-arrow">→</span>
              <div className="sec-step">
                <span className="sec-step-num">04</span>
                <strong>Pydantic Batch (≤ 50)</strong>
                <span>Type validation</span>
              </div>
              <span className="sec-arrow">→</span>
              <div className="sec-step">
                <span className="sec-step-num">05</span>
                <strong>Project Resolver</strong>
                <span>Dispatch to API</span>
              </div>
            </div>

            <div className="security-details-grid reveal">
              <div className="sec-detail-card">
                <KeyRound size={16} className="sec-icon" />
                <div>
                  <strong>Endpoint Security & CORS</strong>
                  <p><code>/health</code> is public. Operational endpoints (<code>/projects</code>, <code>/tasks</code>) require token authentication. CORS origins are configurable via environment variables.</p>
                </div>
              </div>
              <div className="sec-detail-card">
                <ShieldCheck size={16} className="sec-icon" />
                <div>
                  <strong>Constant-Time Verification</strong>
                  <p>Uses <code>secrets.compare_digest</code> for header evaluation rather than standard string comparison operators.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 07 — ERROR & PRIVACY DESIGN                                  */}
        {/* ============================================================ */}
        <section className="case-section" id="privacy" ref={revealPrivacy}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">FAILURE BOUNDARIES</span>
                <h2>Errors should be useful without exposing internals.</h2>
              </div>
              <p>
                The bridge separates internal diagnostic logging from client-facing responses to reduce accidental secret and payload exposure.
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
                    <span>Logs exception class name (e.g. <code>TodoistAuthError</code>)</span>
                  </div>
                  <div className="priv-item">
                    <span className="priv-key">status_code</span>
                    <span>Captures HTTP status from downstream calls</span>
                  </div>
                  <div className="priv-item">
                    <span className="priv-key">sanitization</span>
                    <span>Avoids printing raw token strings or payload contents into logs</span>
                  </div>
                </div>
              </div>

              <div className="privacy-card client-card">
                <div className="priv-header">
                  <span className="priv-badge client-badge">CLIENT RESPONSE</span>
                  <strong>Sanitized Output</strong>
                </div>
                <div className="priv-list">
                  <div className="priv-item">
                    <span className="priv-key">401 Unauthorized</span>
                    <span>"Invalid or missing X-Bridge-Token authentication header."</span>
                  </div>
                  <div className="priv-item">
                    <span className="priv-key">422 Unprocessable</span>
                    <span>Structured validation details highlighting invalid fields</span>
                  </div>
                  <div className="priv-item">
                    <span className="priv-key">502 Bad Gateway</span>
                    <span>Controlled message when downstream Todoist API fails</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 08 — PROJECT RESOLUTION                                      */}
        {/* ============================================================ */}
        <section className="case-section" id="routing" ref={revealRouting}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">PROJECT ROUTING</span>
                <h2>Human-readable project names, resolved before dispatch.</h2>
              </div>
              <p>
                Users and AI models reference projects by name (e.g. "Work", "Odak & Gelişim"). The resolver normalizes names and matches active Todoist projects before dispatching.
              </p>
            </div>

            <div className="resolution-flow-card reveal">
              <div className="res-step">
                <span className="res-label">INPUT NAME</span>
                <strong>"Work"</strong>
              </div>
              <span className="res-arrow">↓</span>
              <div className="res-step">
                <span className="res-label">NORMALIZATION & ALIASES</span>
                <span>Lowercasing, whitespace stripping, Turkish/Unicode character mapping, and Inbox alias check</span>
              </div>
              <span className="res-arrow">↓</span>
              <div className="res-step">
                <span className="res-label">NORMALIZED EXACT MATCH</span>
                <span>Matches active project name against normalized target</span>
              </div>
              <span className="res-arrow">↓ if no match</span>
              <div className="res-step">
                <span className="res-label">SUBSTRING MATCH</span>
                <span>Matches substring within active project names</span>
              </div>
              <span className="res-arrow">↓ if no match</span>
              <div className="res-step success-step">
                <span className="res-label">RESOLUTION OUTPUT</span>
                <strong>Resolved Project ID (or None if no match)</strong>
              </div>
            </div>

            <p className="pipeline-note" style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
              When resolution yields no matching project ID (<code>None</code>), the downstream Todoist API defaults the task to the user's Inbox.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 09 — GOOGLE TASKS SYNC                                       */}
        {/* ============================================================ */}
        <section className="case-section" id="sync" ref={revealSync}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">AUTOMATION</span>
                <h2>Google Tasks can act as another ingestion source.</h2>
              </div>
              <p>
                The background sync worker queries open Google Tasks via OAuth 2.0, extracts metadata tags from titles and notes, pushes them to Todoist, and deletes successfully transferred tasks. Current synchronization is one-way.
              </p>
            </div>

            <div className="sync-flow-box reveal">
              <div className="sync-node">
                <FolderGit2 size={16} className="sync-icon" />
                <div>
                  <strong>Google Tasks (OAuth 2.0)</strong>
                  <span>Fetches uncompleted items across task lists; deletes transferred tasks</span>
                </div>
              </div>

              <div className="sync-arrow-wrap">→</div>

              <div className="sync-node">
                <Workflow size={16} className="sync-icon" />
                <div>
                  <strong>Tag Parser</strong>
                  <span>Extracts <code>#Project</code>, <code>p[1-4]</code>, and <code>@Date</code> / time from notes</span>
                </div>
              </div>

              <div className="sync-arrow-wrap">→</div>

              <div className="sync-node">
                <CheckCircle2 size={16} className="sync-icon" />
                <div>
                  <strong>Todoist Dispatch</strong>
                  <span>Batch creates tasks via Todoist client; preserves unmigrated failed tasks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 10 — ENGINEERING DECISIONS                                   */}
        {/* ============================================================ */}
        <section className="case-section" id="decisions" ref={revealDecisions}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">ENGINEERING DECISIONS</span>
                <h2>Small boundaries that make the bridge easier to reason about.</h2>
              </div>
              <p>
                Architectural choices focused on input sanitization, controlled failure modes, and clear integration boundaries.
              </p>
            </div>

            <div className="decisions-grid reveal">
              <article className="decision-card">
                <div className="decision-header">
                  <span className="decision-letter">A</span>
                  <h3>Structured Validation at Boundaries</h3>
                </div>
                <p>
                  Pydantic models sit at every entry point. Whether data arrives as raw text, tool parameters, or HTTP bodies, fields are validated and bounded before reaching business logic.
                </p>
              </article>

              <article className="decision-card">
                <div className="decision-header">
                  <span className="decision-letter">B</span>
                  <h3>Shared Integration Logic</h3>
                </div>
                <p>
                  Rather than implementing separate Todoist interaction logic for MCP, REST, and sync workers, all four interfaces converge on a common Todoist client and project resolver.
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
                  <h3>Local MCP Transport</h3>
                </div>
                <p>
                  The MCP server runs over standard input/output (stdio) locally alongside Claude Desktop, avoiding the need for hosted proxy infrastructure or remote credential relays.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 11 — VERIFICATION                                            */}
        {/* ============================================================ */}
        <section className="case-section" id="testing" ref={revealTesting}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">VERIFICATION</span>
                <h2>65 automated tests around the bridge.</h2>
              </div>
              <p>
                Mock-based tests verify core behavior without requiring live Todoist network calls for the tested paths.
              </p>
            </div>

            <div className="test-suites-matrix reveal">
              <div className="test-suite-row">
                <div className="suite-meta">
                  <code>tests/test_api.py</code>
                  <span>FastAPI endpoints, auth token validation, CORS headers, batch error responses</span>
                </div>
                <span className="suite-status"><Check size={14} /> Verified</span>
              </div>

              <div className="test-suite-row">
                <div className="suite-meta">
                  <code>tests/test_mcp.py</code>
                  <span>FastMCP tool execution (create, list, complete), character constraints, error handling</span>
                </div>
                <span className="suite-status"><Check size={14} /> Verified</span>
              </div>

              <div className="test-suite-row">
                <div className="suite-meta">
                  <code>tests/test_parser.py</code>
                  <span>JSON decoding, Markdown fence stripping, batch model validation (≤ 50 items)</span>
                </div>
                <span className="suite-status"><Check size={14} /> Verified</span>
              </div>

              <div className="test-suite-row">
                <div className="suite-meta">
                  <code>tests/test_project_resolution.py</code>
                  <span>Normalized project matching, case insensitivity, inbox alias fallbacks</span>
                </div>
                <span className="suite-status"><Check size={14} /> Verified</span>
              </div>

              <div className="test-suite-row">
                <div className="suite-meta">
                  <code>tests/test_todoist_client.py</code>
                  <span>Error mapping hierarchy (auth, validation, server error), request formatting</span>
                </div>
                <span className="suite-status"><Check size={14} /> Verified</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 12 — DELIVERY & EXECUTION                                    */}
        {/* ============================================================ */}
        <section className="case-section" id="delivery" ref={revealDelivery}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">DELIVERY</span>
                <h2>Designed to run locally, directly, or in a container.</h2>
              </div>
              <p>
                The repository provides execution targets depending on whether the bridge is running interactively, as an MCP tool, or as a background service.
              </p>
            </div>

            <div className="delivery-grid reveal">
              <div className="delivery-card">
                <span className="delivery-badge">MCP</span>
                <strong>Claude Desktop</strong>
                <p>Registered via <code>claude_desktop_config.json</code> as a local STDIO subprocess.</p>
              </div>

              <div className="delivery-card">
                <span className="delivery-badge">REST</span>
                <strong>FastAPI / Uvicorn</strong>
                <p>Run via <code>uvicorn app:app --port 8000</code> with Swagger documentation at <code>/docs</code>.</p>
              </div>

              <div className="delivery-card">
                <span className="delivery-badge">DOCKER</span>
                <strong>Docker Container</strong>
                <p>Containerized environment (<code>python:3.11-slim</code>) configured to run synchronization workers.</p>
              </div>

              <div className="delivery-card">
                <span className="delivery-badge">CLI</span>
                <strong>Terminal Runner</strong>
                <p>Direct invocation via <code>python main.py --file tasks.json</code> for immediate one-off creation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 13 — CLOSING SPEC SHEET                                      */}
        {/* ============================================================ */}
        <section className="case-section case-release" id="closing" ref={revealClosing}>
          <div className="container">
            <div className="release-closing-wrap reveal">
              <span className="eyebrow">SUMMARY</span>
              <h2 className="release-headline">Todoist Gemini Bridge</h2>
              <p className="release-lead">
                A modular Python bridge providing structured task validation and multi-interface execution for Todoist.
              </p>

              <div className="release-spec-sheet">
                <div className="spec-row">
                  <span className="spec-label">DOMAIN</span>
                  <strong>Systems & AI Engineering</strong>
                </div>
                <div className="spec-row">
                  <span className="spec-label">TECH STACK</span>
                  <span>Python · FastMCP · FastAPI · Pydantic v2 · OAuth 2.0 · Docker</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">VERIFICATION</span>
                  <span>65 Pytest automated unit and integration tests</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">LICENSE</span>
                  <span>MIT License</span>
                </div>
              </div>

              <div className="release-actions-row">
                <a 
                  className="button button-primary" 
                  href="https://github.com/kagankurubas/Todoist-Gemini-Bridge" 
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

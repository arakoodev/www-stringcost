import React from "react";
import CodeBlock from "@theme/CodeBlock";
import {
	ArrowRight,
	Check,
	ChevronRight,
	Database,
	FolderLock,
	GitBranch,
	Github,
	HardDrive,
	HelpCircle,
	Layers,
	MessageSquareText,
	PlugZap,
	RefreshCw,
	ShieldAlert,
	Sparkles,
	Terminal,
	X,
} from "lucide-react";

const buttonBase =
	"inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-matter font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]";
const primaryButton = `${buttonBase} bg-white text-[#210F26] hover:bg-brand-accent-100 shadow-[0_20px_50px_-28px_rgba(255,255,255,0.85)]`;
const darkButton = `${buttonBase} bg-[#210F26] text-white hover:bg-[#0D0D0D]`;
const secondaryButtonLight = `${buttonBase} border border-white/35 text-white hover:bg-white/10 hover:border-white/60`;

/* ─── data ─── */

const quickSteps = [
	{
		id: "01",
		title: "Run in an isolated home",
		desc: "No database needed. Claude gets its own $HOME.",
		code: `export ANTHROPIC_API_KEY='sk-ant-...'
npx openeral`,
	},
	{
		id: "02",
		title: "Add StringCost metering",
		desc: "One extra env var. All calls tracked.",
		code: `export STRINGCOST_API_KEY='sk-stringcost-...'
npx openeral`,
	},
	{
		id: "03",
		title: "Add PostgreSQL persistence",
		desc: "Files survive across sessions. Query the DB from bash.",
		code: `export DATABASE_URL=\\
  'postgresql://user:pass@host:5432/db'
npx openeral`,
	},
	{
		id: "04",
		title: "Set a workspace ID",
		desc: "Same ID = same files next session.",
		code: `export OPENERAL_WORKSPACE_ID='project-alpha'
npx openeral`,
	},
];

const features = [
	{
		icon: FolderLock,
		title: "Isolated Home Directory",
		desc: "$HOME points to /home/agent, not your real home. No SSH keys, cloud creds, or .env files exposed.",
		featured: true,
	},
	{
		icon: Database,
		title: "PostgreSQL Persistence",
		desc: "Workspace files serialize to Postgres. Same workspace ID = same files next session.",
	},
	{
		icon: Terminal,
		title: "Database Access via pg",
		desc: "Claude queries Postgres from bash. No driver setup. Just pg \"SELECT * FROM users\".",
	},
	{
		icon: PlugZap,
		title: "Automatic Cost Tracking",
		desc: "Every Anthropic call routes through StringCost. Per-session and per-workspace spend visible.",
	},
	{
		icon: MessageSquareText,
		title: "Agent-Visible Spend",
		desc: "Claude can inspect its own costs, set budget limits, and get recommendations mid-conversation.",
	},
	{
		icon: GitBranch,
		title: "Session Isolation",
		desc: "Each npx openeral gets a fresh session. Concurrent sessions never collide.",
	},
	{
		icon: RefreshCw,
		title: "Memory Refresh",
		desc: "Rewrite Claude's project memory files with relevant context. Lexical + freshness ranking.",
	},
];

const envVars = [
	{
		key: "ANTHROPIC_API_KEY",
		purpose: "Claude Code provider key",
		required: true,
		example: "export ANTHROPIC_API_KEY='sk-ant-...'",
	},
	{
		key: "STRINGCOST_API_KEY",
		purpose: "Turns on proxy metering",
		required: false,
		example: "export STRINGCOST_API_KEY='sk-stringcost-...'",
	},
	{
		key: "DATABASE_URL",
		purpose: "Turns on persistence + pg access",
		required: false,
		example: "export DATABASE_URL='postgresql://...'",
	},
	{
		key: "OPENERAL_WORKSPACE_ID",
		purpose: "Names the persistent workspace",
		required: false,
		example: "export OPENERAL_WORKSPACE_ID='my-project'",
	},
];

const promptTools = [
	{ label: "get_session_cost", desc: "current run spend" },
	{ label: "get_workspace_cost", desc: "project-level spend" },
	{ label: "set_budget_limit", desc: "warn or stop at threshold" },
	{ label: "get_recommendations", desc: "find expensive calls" },
];

const comparisonRows = [
	{ feature: "Isolated home directory", openeral: true, claude: false, docker: true, custom: "manual" },
	{ feature: "PostgreSQL persistence", openeral: true, claude: false, docker: false, custom: "manual" },
	{ feature: "Database from bash", openeral: true, claude: false, docker: false, custom: "manual" },
	{ feature: "Automatic cost tracking", openeral: true, claude: false, docker: false, custom: "manual" },
	{ feature: "Session isolation", openeral: true, claude: false, docker: true, custom: "manual" },
	{ feature: "Zero-config start", openeral: true, claude: false, docker: false, custom: false },
];

const securityRows = [
	{ risk: "SSH keys", fix: "Not mounted into agent home" },
	{ risk: "Cloud credentials", fix: "Kept outside sandbox path" },
	{ risk: ".env files", fix: "Passed through proxy, not filesystem" },
	{ risk: "Git remotes", fix: "Explicit workspace policy required" },
];

const faqItems = [
	{
		q: "Do I need PostgreSQL to start?",
		a: "No. Without DATABASE_URL, OpenEral runs with a local temp home directory. Files are lost when the session ends. Add PostgreSQL when you need persistence.",
	},
	{
		q: "Can I use this with agents other than Claude Code?",
		a: "Yes. The TypeScript API (createOpeneralShell) works with any agent that has bash access. See the Custom Agents section.",
	},
	{
		q: "How does cost tracking work?",
		a: "When STRINGCOST_API_KEY is set, OpenEral presigns your Anthropic key with StringCost and routes all API calls through the proxy. The proxy records cost per session and workspace.",
	},
	{
		q: "What happens if PostgreSQL is down?",
		a: "The agent continues working with local files. Sync resumes when the database reconnects. No data loss for the current session.",
	},
	{
		q: "Is this production-ready?",
		a: "OpenEral is designed for development and staging environments. For production agent deployments, use the StringCost managed plane.",
	},
];

const customAgentCode = `import {
  createOpeneralShell,
  createToolHandler
} from 'openeral-js'

const shell = await createOpeneralShell({
  connectionString: process.env.DATABASE_URL,
  workspaceId: 'project-alpha',
})

const handleBash = createToolHandler(shell)

// Write persistent files
await shell.exec(
  'echo "hello" > /home/agent/notes.txt'
)

// Read back
await shell.exec('cat /home/agent/notes.txt')
// Output: hello`;

/* ─── helpers ─── */

function HighlightedCode({ children, language, title }: { children: string; language: string; title: string }) {
	return (
		<div className="sandbox-code overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D0D] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.75)]">
			<div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
				<div className="flex items-center gap-1.5">
					<span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
					<span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
					<span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
				</div>
				<span className="text-xs font-medium text-white/45">{title}</span>
			</div>
			<CodeBlock language={language}>{children}</CodeBlock>
		</div>
	);
}

function ComparisonCell({ value }: { value: boolean | string }) {
	if (value === true) return <Check className="h-4 w-4 text-emerald-500 mx-auto" />;
	if (value === false) return <X className="h-4 w-4 text-rose-400 mx-auto" />;
	return <span className="text-xs text-brand-text-muted">{value}</span>;
}

/* ─── exports ─── */

export function SandboxHero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
			<div className="absolute inset-0 spend-grid opacity-40" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_22%,rgba(217,193,215,0.24),transparent_50%)]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_86%_76%,rgba(217,185,167,0.16),transparent_42%)]" />
			<div className="glow-orb glow-orb--rose float-slow -left-24 -top-24 h-72 w-72 opacity-45" />
			<div className="glow-orb glow-orb--peach float-medium -bottom-24 right-0 h-96 w-96 opacity-30" />

			<div className="container-custom relative z-10 py-[88px] lg:py-[126px]">
				<div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
					<div className="max-w-2xl space-y-6">
						<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm">
							<Sparkles className="h-4 w-4 text-brand-accent-200" />
							OpenEral
						</div>

						<h1 className="font-display text-[34px] sm:text-[48px] lg:text-[60px] font-bold leading-[1.05] tracking-tight text-balance">
							Isolated home. Persistent workspace. Metered egress.
						</h1>

						{/* Command chip */}
						<code className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-mono text-base text-white backdrop-blur-sm">
							<span className="text-white/50">$</span> npx openeral
						</code>

						<p className="max-w-xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8 text-balance">
							Run Claude Code in a sandbox with PostgreSQL-backed persistence and automatic StringCost spend tracking. No Docker. No SDK.
						</p>

						<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
							<span className="cta-glow">
								<a href="#quick-start" className={`${primaryButton} w-full sm:w-auto`}>
									Get started
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
							</span>
							<a href="https://github.com/sandys/openeral" className={`${secondaryButtonLight} w-full sm:w-auto`}>
								<Github className="mr-2 h-4 w-4" />
								GitHub
							</a>
						</div>

						<div className="flex flex-wrap gap-6 pt-2 text-sm">
							{[["1 command", "to start"], ["0 SDK changes", "to integrate"], ["<1s", "cold start"]].map(([val, label]) => (
								<div key={val}>
									<p className="text-lg font-bold text-white">{val}</p>
									<p className="text-xs text-white/45">{label}</p>
								</div>
							))}
						</div>
					</div>

					<div className="glow-card spend-hero-glow rounded-[28px] border border-white/14 spend-dark-panel p-4 shadow-2xl sm:p-5">
						<div className="glow-sheen" />
						<div className="mb-3 flex items-center justify-between px-1">
							<p className="text-xs uppercase tracking-[0.2em] text-white/45">Run this first</p>
							<span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">30 sec</span>
						</div>
						<HighlightedCode language="bash" title="terminal">
{`git clone \\
  https://github.com/sandys/openeral.git
cd openeral/openeral-js
pnpm install && pnpm build

export ANTHROPIC_API_KEY='sk-ant-...'
npx openeral`}
						</HighlightedCode>
					</div>
				</div>
			</div>
		</section>
	);
}

export function SandboxContent() {
	return (
		<>
			{/* Quick Start — vertical timeline */}
			<section id="quick-start" className="bg-brand-base">
				<div className="container-custom py-[60px] lg:py-[80px]">
					<div className="max-w-2xl space-y-3 mb-10">
						<h2 className="font-display text-[30px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-tight text-brand-text-primary text-balance">
							Four steps. Progressive complexity.
						</h2>
						<p className="text-base text-brand-text-secondary max-w-xl text-balance">
							Start with just an API key. Add metering, persistence, and workspace isolation when you need them.
						</p>
					</div>

					<div className="relative space-y-4 pl-8 lg:pl-12">
						{/* Timeline line */}
						<div className="absolute left-3 lg:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-brand-accent-300 via-brand-accent-200 to-brand-accent-100" />

						{quickSteps.map((step) => (
							<div key={step.id} className="relative grid gap-4 rounded-2xl border border-brand-border bg-white p-5 shadow-sm lg:grid-cols-[1fr_minmax(0,1.2fr)] lg:items-center lg:p-6">
								{/* Step number on timeline */}
								<div className="absolute -left-8 lg:-left-12 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-accent-100 to-brand-accent-200 text-sm font-bold text-brand-text-primary ring-4 ring-brand-base shadow-md">
									{step.id}
								</div>

								<div>
									<h3 className="text-lg font-semibold text-brand-text-primary">{step.title}</h3>
									<p className="mt-1 text-sm text-brand-text-secondary">{step.desc}</p>
								</div>
								<HighlightedCode language="bash" title="terminal">{step.code}</HighlightedCode>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Stat strip */}
			<div className="bg-gradient-to-r from-brand-accent-100/30 via-brand-accent-200/20 to-brand-accent-100/30">
				<div className="container-custom grid grid-cols-2 gap-4 py-7 sm:grid-cols-4">
					{[["local-first", "starts without Postgres"], ["1 env var", "StringCost metering"], ["workspace", "persistent home"], ["pg", "database from bash"]].map(([val, label]) => (
						<div key={val}>
							<p className="text-2xl font-bold text-brand-text-primary">{val}</p>
							<p className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-text-muted">{label}</p>
						</div>
					))}
				</div>
			</div>

			{/* Features grid */}
			<section className="bg-brand-surface">
				<div className="container-custom py-[60px] lg:py-[80px]">
					<div className="max-w-2xl space-y-3 mb-10">
						<h2 className="font-display text-[30px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-tight text-brand-text-primary text-balance">
							Everything in the box
						</h2>
					</div>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{features.map((f) => {
							const Icon = f.icon;
							return (
								<article
									key={f.title}
									className={`group rounded-2xl border border-brand-border bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${f.featured ? "sm:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col justify-between" : ""}`}
								>
									<div>
										<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent-100/50 mb-4 group-hover:bg-brand-accent-200/50 transition-colors">
											<Icon className="h-5 w-5 text-brand-text-secondary" />
										</div>
										<h3 className="text-base font-semibold text-brand-text-primary mb-2">{f.title}</h3>
										<p className="text-sm leading-relaxed text-brand-text-secondary">{f.desc}</p>
									</div>
									{f.featured && (
										<div className="mt-6 pt-4 border-t border-brand-border/50">
											<code className="text-xs text-brand-text-muted">$HOME = /tmp/openeral-&lt;workspace-id&gt;</code>
										</div>
									)}
								</article>
							);
						})}
					</div>
				</div>
			</section>

			{/* Architecture */}
			<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
				<div className="absolute inset-0 spend-grid opacity-30" />
				<div className="container-custom relative z-10 py-[60px] lg:py-[80px]">
					<div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
						<h2 className="font-display text-[30px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-tight text-balance">
							How it fits together
						</h2>
					</div>

					{/* Diagram: horizontal on desktop, vertical on mobile */}
					<div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center max-w-4xl mx-auto mb-8">
						<div className="rounded-2xl border border-white/12 bg-white/[0.06] p-5 text-center backdrop-blur-sm">
							<Terminal className="h-6 w-6 mx-auto mb-2 text-brand-accent-200" />
							<p className="font-semibold text-white">Claude Code</p>
							<p className="text-xs text-white/50 mt-1">Agent runtime</p>
						</div>
						<ChevronRight className="hidden lg:block h-5 w-5 text-white/30 mx-auto" />
						<div className="rounded-2xl border border-white/12 bg-white/[0.06] p-5 text-center backdrop-blur-sm">
							<FolderLock className="h-6 w-6 mx-auto mb-2 text-brand-accent-200" />
							<p className="font-semibold text-white">/home/agent</p>
							<p className="text-xs text-white/50 mt-1">Isolated workspace</p>
						</div>
						<ChevronRight className="hidden lg:block h-5 w-5 text-white/30 mx-auto" />
						<div className="rounded-2xl border border-white/12 bg-white/[0.06] p-5 text-center backdrop-blur-sm">
							<Database className="h-6 w-6 mx-auto mb-2 text-brand-accent-200" />
							<p className="font-semibold text-white">PostgreSQL</p>
							<p className="text-xs text-white/50 mt-1">Workspace storage</p>
						</div>
					</div>

					<div className="grid gap-4 lg:grid-cols-3 max-w-4xl mx-auto text-sm">
						<div className="rounded-xl border border-white/10 bg-white/5 p-4">
							<p className="text-white/70"><strong className="text-white">Startup</strong> &mdash; files restored from Postgres to /home/agent</p>
						</div>
						<div className="rounded-xl border border-white/10 bg-white/5 p-4">
							<p className="text-white/70"><strong className="text-white">Runtime</strong> &mdash; file watcher syncs changes back to Postgres</p>
						</div>
						<div className="rounded-xl border border-white/10 bg-white/5 p-4">
							<p className="text-white/70"><strong className="text-white">Egress</strong> &mdash; API calls route through StringCost proxy for metering</p>
						</div>
					</div>
				</div>
			</section>

			{/* Environment variables — stacked cards */}
			<section className="bg-brand-base">
				<div className="container-custom py-[60px] lg:py-[80px]">
					<div className="max-w-2xl space-y-3 mb-10">
						<h2 className="font-display text-[30px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-tight text-brand-text-primary text-balance">
							Set only what you need
						</h2>
						<p className="text-base text-brand-text-secondary max-w-xl text-balance">
							OpenEral is feature-flagged by environment variables. Start with Anthropic; add StringCost and Postgres when ready.
						</p>
					</div>

					<div className="space-y-3 mb-6">
						{envVars.map((v) => (
							<div key={v.key} className="flex flex-col gap-2 rounded-2xl border border-brand-border bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
								<div className="flex-1">
									<div className="flex items-center gap-3 flex-wrap">
										<code className="text-sm font-bold text-brand-text-primary">{v.key}</code>
										<span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${v.required ? "bg-brand-accent-300 text-white" : "border border-brand-border text-brand-text-muted"}`}>
											{v.required ? "required" : "optional"}
										</span>
									</div>
									<p className="text-sm text-brand-text-secondary mt-1">{v.purpose}</p>
								</div>
								<code className="text-xs text-brand-text-muted bg-brand-base rounded-lg px-3 py-2">{v.example}</code>
							</div>
						))}
					</div>

					<HighlightedCode language="bash" title=".env">
{`ANTHROPIC_API_KEY='sk-ant-...'
STRINGCOST_API_KEY='sk-stringcost-...'
DATABASE_URL='postgresql://user:pass@host:5432/db'
OPENERAL_WORKSPACE_ID='project-alpha'`}
					</HighlightedCode>
				</div>
			</section>

			{/* Persistence deep dive */}
			<section className="bg-brand-surface">
				<div className="container-custom py-[60px] lg:py-[80px]">
					<div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<div className="space-y-4">
							<h2 className="font-display text-[30px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-tight text-brand-text-primary text-balance">
								Files survive across sessions
							</h2>
							<p className="text-base text-brand-text-secondary max-w-xl text-balance">
								Same workspace ID means the same files come back. Claude can also query Postgres directly from bash via the pg command.
							</p>
							<div className="rounded-xl border-l-4 border-brand-accent-300 bg-brand-accent-300/10 p-4">
								<p className="text-sm text-brand-text-secondary">
									<strong className="text-brand-text-primary">Sync strategy:</strong> files sync to Postgres on write with 500ms debounce. On session start, all files restore to /home/agent.
								</p>
							</div>
						</div>

						<div className="space-y-4">
							<HighlightedCode language="bash" title="session 1">
{`echo "notes" > $HOME/notes.txt
# Session ends`}
							</HighlightedCode>
							<HighlightedCode language="bash" title="session 2 (same workspace)">
{`cat $HOME/notes.txt
# Output: notes`}
							</HighlightedCode>
							<HighlightedCode language="bash" title="database queries">
{`pg "SELECT count(*) FROM users"
pg "\\d public.orders"
pg "SELECT * FROM sessions LIMIT 5"`}
							</HighlightedCode>
						</div>
					</div>
				</div>
			</section>

			{/* Agent-visible spend */}
			<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
				<div className="absolute inset-0 spend-grid opacity-30" />
				<div className="container-custom relative z-10 py-[60px] lg:py-[80px]">
					<div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
						<h2 className="font-display text-[30px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-tight text-balance">
							Let Claude see what it costs
						</h2>
						<p className="text-base text-white/70 max-w-xl mx-auto text-balance">
							Package a native OpenEral skill so the agent can inspect StringCost spend, set limits, and warn inside the conversation.
						</p>
					</div>

					<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto mb-8">
						{promptTools.map((t) => (
							<div key={t.label} className="rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3">
								<p className="font-mono text-sm text-white">{t.label}</p>
								<p className="mt-1 text-xs text-white/50">{t.desc}</p>
							</div>
						))}
					</div>

					<div className="max-w-2xl mx-auto">
						<HighlightedCode language="bash" title="inside Claude Code">
{`# Ask inside Claude Code
"How much did this workspace spend today?"
"Warn me at $5 for this task. Stop at $8."
"Which calls in this session were expensive?"`}
						</HighlightedCode>
					</div>
				</div>
			</section>

			{/* Stat strip #2 */}
			<div className="bg-gradient-to-r from-brand-accent-200/20 via-brand-accent-300/10 to-brand-accent-200/20">
				<div className="container-custom grid grid-cols-3 gap-4 py-7 text-center">
					{[["presigned", "API calls route through proxy"], ["per-session", "cost tracked per invocation"], ["per-workspace", "aggregate project spend"]].map(([val, label]) => (
						<div key={val}>
							<p className="text-2xl font-bold text-brand-text-primary">{val}</p>
							<p className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-text-muted">{label}</p>
						</div>
					))}
				</div>
			</div>

			{/* Comparison table */}
			<section className="bg-brand-base">
				<div className="container-custom py-[60px] lg:py-[80px]">
					<div className="max-w-2xl space-y-3 mb-10">
						<p className="text-4xl font-bold text-brand-accent-300">1 command</p>
						<p className="text-sm text-brand-text-muted">vs. 50+ lines of Docker config</p>
						<h2 className="font-display text-[30px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-tight text-brand-text-primary text-balance !mt-6">
							How OpenEral compares
						</h2>
					</div>

					{/* Desktop table */}
					<div className="hidden md:block">
						<div className="rounded-2xl border border-brand-border bg-white shadow-md overflow-hidden">
							<div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] bg-brand-accent-100/30 border-b border-brand-border">
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-brand-text-muted">Feature</div>
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-center text-brand-text-primary">OpenEral</div>
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-center text-brand-text-muted">Plain Claude Code</div>
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-center text-brand-text-muted">Docker Volumes</div>
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-center text-brand-text-muted">Custom Scripts</div>
							</div>
							{comparisonRows.map((row, i) => (
								<div key={row.feature} className={`grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] ${i % 2 === 1 ? "bg-brand-surface/50" : ""} ${i !== comparisonRows.length - 1 ? "border-b border-brand-border/50" : ""}`}>
									<div className="p-4 text-sm font-medium text-brand-text-primary">{row.feature}</div>
									<div className="p-4 flex items-center justify-center"><ComparisonCell value={row.openeral} /></div>
									<div className="p-4 flex items-center justify-center"><ComparisonCell value={row.claude} /></div>
									<div className="p-4 flex items-center justify-center"><ComparisonCell value={row.docker} /></div>
									<div className="p-4 flex items-center justify-center"><ComparisonCell value={row.custom} /></div>
								</div>
							))}
						</div>
					</div>

					{/* Mobile stacked cards */}
					<div className="md:hidden space-y-3">
						{comparisonRows.map((row) => (
							<div key={row.feature} className="rounded-xl border border-brand-border bg-white p-4 shadow-sm">
								<p className="font-semibold text-brand-text-primary mb-3">{row.feature}</p>
								<div className="grid grid-cols-2 gap-2 text-sm">
									<div className="flex items-center gap-2"><ComparisonCell value={row.openeral} /> <span className="text-brand-text-secondary">OpenEral</span></div>
									<div className="flex items-center gap-2"><ComparisonCell value={row.claude} /> <span className="text-brand-text-secondary">Claude Code</span></div>
									<div className="flex items-center gap-2"><ComparisonCell value={row.docker} /> <span className="text-brand-text-secondary">Docker</span></div>
									<div className="flex items-center gap-2"><ComparisonCell value={row.custom} /> <span className="text-brand-text-secondary">Custom</span></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Security */}
			<section className="bg-brand-surface">
				<div className="container-custom py-[60px] lg:py-[80px]">
					<div className="max-w-2xl space-y-3 mb-10">
						<h2 className="font-display text-[30px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-tight text-brand-text-primary text-balance">
							Safe by default
						</h2>
						<p className="text-base text-brand-text-secondary max-w-xl text-balance">
							The sandbox makes the safe path the default. Isolated home, explicit secrets, auditable state.
						</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{securityRows.map((row) => (
							<div key={row.risk} className="rounded-2xl border border-brand-border bg-white p-5 shadow-sm">
								<ShieldAlert className="h-5 w-5 text-rose-500 mb-3" />
								<p className="font-semibold text-brand-text-primary mb-1">{row.risk}</p>
								<p className="text-sm text-brand-text-secondary leading-relaxed">{row.fix}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Custom agents */}
			<section className="bg-brand-base">
				<div className="container-custom py-[60px] lg:py-[80px]">
					<div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
						<div className="space-y-4">
							<h2 className="font-display text-[30px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-tight text-brand-text-primary text-balance">
								Works with any agent that has bash
							</h2>
							<p className="text-base text-brand-text-secondary max-w-xl text-balance">
								Use the shell directly for custom agents. The TypeScript API wraps everything into a single createOpeneralShell call.
							</p>
						</div>
						<HighlightedCode language="typescript" title="custom-agent.ts">
							{customAgentCode}
						</HighlightedCode>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="bg-brand-surface">
				<div className="container-custom py-[60px] lg:py-[80px]">
					<div className="max-w-3xl mx-auto">
						<h2 className="font-display text-[30px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-tight text-brand-text-primary text-balance mb-8">
							FAQ
						</h2>
						<div className="space-y-3">
							{faqItems.map((item) => (
								<div key={item.q} className="rounded-2xl border border-brand-border bg-white p-5 shadow-sm">
									<div className="flex items-start gap-3">
										<HelpCircle className="h-5 w-5 text-brand-accent-300 mt-0.5 flex-shrink-0" />
										<div>
											<h3 className="font-semibold text-brand-text-primary">{item.q}</h3>
											<p className="mt-2 text-sm text-brand-text-secondary leading-relaxed">{item.a}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(217,193,215,0.16),transparent_60%)]" />
				<div className="glow-orb glow-orb--rose float-slow -right-20 -top-20 h-64 w-64 opacity-30" />
				<div className="container-custom relative z-10 py-[80px] lg:py-[110px]">
					<div className="mx-auto max-w-3xl text-center space-y-6">
						<h2 className="font-display text-[32px] sm:text-[44px] lg:text-[56px] font-bold leading-[1.08] tracking-tight text-balance">
							Start with the sandbox. Add metering when it matters.
						</h2>

						<code className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-mono text-base text-white backdrop-blur-sm">
							<span className="text-white/50">$</span> npx openeral
						</code>

						<div className="flex flex-col items-center justify-center gap-3 sm:flex-row pt-2">
							<span className="cta-glow">
								<a href="https://github.com/sandys/openeral" className={primaryButton}>
									View on GitHub
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
							</span>
							<a href="http://app.stringcost.com/" className={secondaryButtonLight}>
								Open StringCost
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

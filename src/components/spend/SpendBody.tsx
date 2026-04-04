import React from "react";
import {
	ArrowRight,
	AlertTriangle,
	ShieldCheck,
	BarChart3,
	DollarSign,
	Eye,
	EyeOff,
	Users,
	FolderGit2,
	Bot,
	TrendingUp,
	Lock,
	CheckCircle2,
	X,
	Zap,
	Building2,
	CreditCard,
	Sparkles,
} from "lucide-react";

const buttonBase =
	"inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-matter font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]";
const primaryButton = `${buttonBase} bg-[#210F26] text-white hover:bg-[#0D0D0D]`;
const secondaryButton = `${buttonBase} border border-brand-accent-300 text-brand-text-secondary hover:bg-brand-accent-100/60`;
const secondaryButtonLight = `${buttonBase} border border-white/40 text-white hover:bg-white/10 hover:border-white/60`;

const shadowAICards = [
	{
		title: "Fragmented Purchasing",
		description:
			"Engineering teams expense Cursor, Copilot, and direct API subscriptions on separate corporate cards — zero central IT oversight.",
		icon: EyeOff,
	},
	{
		title: "Security Circumvention",
		description:
			"When corporate VPNs block AI tools, developers photograph code on personal phones and use consumer-grade AI via mobile networks.",
		icon: Lock,
	},
	{
		title: "Budget Leakage",
		description:
			"20 developers independently expensing a $20/mo AI tool costs $4,800/year in unmanaged spend — plus IP exposure to unvetted LLMs.",
		icon: CreditCard,
	},
];

const vendorComparisons = [
	{
		dimension: "User-Level Tracking",
		copilot: "Native (Usage Metrics API)",
		cursor: "Native (Analytics API)",
		claude: "Native (Analytics API)",
	},
	{
		dimension: "Project/Repo Tracking",
		copilot: "Native (Cost Centers)",
		cursor: "Limited (custom polling)",
		claude: "Proxy headers required",
	},
	{
		dimension: "Departmental Chargeback",
		copilot: "Automated (Azure Subs)",
		cursor: "Highly manual",
		claude: "Infrastructure dependent",
	},
	{
		dimension: "Anomaly Alerts",
		copilot: "Soft budgets",
		cursor: "External tooling needed",
		claude: "Cloud gateway required",
	},
	{
		dimension: "Pricing Predictability",
		copilot: "Seat + premium requests",
		cursor: "Pooled credits + overages",
		claude: "Pure token consumption",
	},
];

const riskMatrix = [
	{
		risk: "Shadow AI",
		icon: EyeOff,
		consequence: "Dispersed spend, IP violations",
		solution: "Centralized dashboard, SSO",
	},
	{
		risk: "Inactive Licenses",
		icon: Users,
		consequence: "Paying for non-contributing users",
		solution: "User-level telemetry, auto-harvesting",
	},
	{
		risk: "Runaway Token Burn",
		icon: TrendingUp,
		consequence: "$1,000+ daily spikes",
		solution: "Real-time alerts, hard limits",
	},
	{
		risk: "Untracked Project Costs",
		icon: FolderGit2,
		consequence: "Margin erosion, flawed CapEx",
		solution: "Repo-level attribution, cost centers",
	},
];

export function SpendHero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white min-h-[90vh] flex items-center">
			{/* Subtle gradient overlays */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(217,193,215,0.25),transparent_50%)]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(217,185,167,0.15),transparent_40%)]" />

			{/* Animated grid background */}
			<div className="absolute inset-0 opacity-20">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `linear-gradient(rgba(217,193,215,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(217,193,215,0.1) 1px, transparent 1px)`,
						backgroundSize: "60px 60px",
					}}
				/>
			</div>

			{/* Floating orbs */}
			<div className="glow-orb glow-orb--rose float-slow -top-32 -left-32 h-64 w-64 opacity-40" />
			<div className="glow-orb glow-orb--peach float-medium -bottom-20 right-0 h-80 w-80 opacity-30" />

			<div className="container-custom relative z-10 py-[100px] lg:py-[140px]">
				<div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
					<div className="space-y-8">
						<div className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-500/10 px-4 py-2 backdrop-blur-sm">
							<AlertTriangle className="h-4 w-4 text-rose-400" />
							<span className="text-sm font-medium text-rose-300">AI Spend Is Out of Control</span>
						</div>

						<h1 className="font-display text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold tracking-tight leading-[1.05]">
							One Runaway Agent.
							<br />
							One Weekend.
							<br />
							<span className="text-rose-400">$1,500.</span>
						</h1>

						<p className="font-body text-lg sm:text-xl leading-[1.6] text-white/80 max-w-xl text-pretty">
							AI coding assistants execute autonomous agentic loops — reading files, running tests, iterating on errors — burning metered LLM tokens with no human in the loop. You don&apos;t find out until the invoice arrives.
						</p>

						<div className="grid grid-cols-2 gap-3 max-w-md">
							<div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
								<p className="text-[10px] uppercase tracking-wider text-white/50">Avg daily cost</p>
								<p className="text-xl font-bold text-white mt-0.5">$6</p>
							</div>
							<div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 backdrop-blur-sm">
								<p className="text-[10px] uppercase tracking-wider text-rose-300">Power user peak</p>
								<p className="text-xl font-bold text-rose-400 mt-0.5">$1,500/day</p>
							</div>
						</div>

						<div className="border-l-2 border-emerald-400 pl-4 py-1">
							<p className="text-base font-semibold text-white">
								StringCost closes the gap.
							</p>
							<p className="text-sm text-white/70 mt-1">
								Real-time anomaly detection fires in 15 minutes. User-level and project-level spend tracking — before the invoice arrives.
							</p>
						</div>

						<div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-2">
							<span className="cta-glow">
								<a href="http://app.stringcost.com/" className={primaryButton}>
									Track Your AI Spend — Free
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
							</span>
							<a href="http://app.stringcost.com/" className={secondaryButtonLight}>
								See the Dashboard
							</a>
						</div>
						<p className="text-xs text-white/50 mt-3 tracking-wide">Trusted by YC and a16z-backed teams</p>
					</div>

					{/* Hero visual - incident timeline card */}
					<div className="relative hidden lg:block">
						<div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-rose-500/10 via-transparent to-emerald-500/10 blur-2xl" />

						<div className="glow-card relative rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl space-y-4">
							<div className="glow-sheen" />

							<div className="flex items-center justify-between">
								<span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Incident Timeline</span>
								<span className="text-xs text-rose-400">Unmanaged → Managed</span>
							</div>

							{[
								{ step: "1", title: "Agentic session starts Friday", desc: "Developer kicks off autonomous coding session before leaving for the weekend" },
								{ step: "2", title: "Recursive error-correction loop", desc: "Agent enters infinite loop — reading, testing, failing, retrying" },
								{ step: "3", title: "Token burn at $50/hr for 30 hours", desc: "Loop consumes metered LLM tokens continuously with no human oversight" },
								{ step: "4", title: "Finance discovers $1,500 anomaly", desc: "Overspend only surfaces on the monthly invoice — weeks later" },
								{ step: "5", title: "With StringCost: Alert in 15 minutes", desc: "Real-time anomaly detection fires, session suspended automatically", highlight: true },
							].map((item) => (
								<div
									key={item.step}
									className={`flex items-start gap-4 p-3 rounded-xl border transition-colors ${item.highlight ? "bg-emerald-500/10 border-emerald-500/20" : "bg-white/5 border-white/5 hover:border-white/10"}`}
								>
									<div className={`flex-shrink-0 h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold ${item.highlight ? "bg-emerald-500/30 text-emerald-400" : "bg-rose-500/20 text-rose-300"}`}>
										{item.step}
									</div>
									<div>
										<h4 className="text-sm font-semibold text-white">{item.title}</h4>
										<p className="text-xs text-white/70 mt-0.5">{item.desc}</p>
									</div>
								</div>
							))}

							<div className="pt-3 border-t border-white/10">
								<div className="flex items-center justify-between text-sm">
									<span className="text-white/70">Without StringCost</span>
									<span className="font-semibold text-rose-400">-$1,500</span>
								</div>
								<div className="flex items-center justify-between text-sm mt-1">
									<span className="text-white/70">With StringCost</span>
									<span className="font-semibold text-emerald-400">-$12.50 (caught in 15 min)</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export function SpendContent() {
	return (
		<>
			{/* Section 2: The Pricing Paradigm Shift — VS Cards */}
			<section className="relative bg-brand-base text-brand-text-primary overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,193,215,0.2),transparent_60%)]" />

				<div className="container-custom relative z-10 py-[80px] lg:py-[120px]">
					<div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
						<h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-matter font-bold tracking-tight leading-[1.15]">
							The Pricing Model That
							<br />
							<span className="underline-hand">Broke Your Budget</span>
						</h2>
						<p className="text-lg text-brand-text-secondary text-pretty">
							AI tools didn&apos;t just change how developers write code — they changed how vendors charge for it.
						</p>
					</div>

					<div className="flex flex-col md:flex-row gap-6 items-center">
						<article className="flex-1 flex flex-col gap-4 p-6 rounded-2xl border border-brand-overlay/60 bg-brand-surface shadow-sm w-full">
							<div className="flex items-center gap-3">
								<span className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">OLD</span>
								<h3 className="text-lg font-matter font-semibold text-brand-text-primary">Traditional SaaS</h3>
							</div>
							<div className="space-y-4 text-sm text-brand-text-secondary">
								<div>
									<p className="font-semibold text-brand-text-primary mb-1">Predictable Per-Seat Cost</p>
									<p>$20/seat/month, same every month. Budget once, forget about it.</p>
								</div>
								<div>
									<p className="font-semibold text-brand-text-primary mb-1">Static Utilization</p>
									<p>Every seat costs the same regardless of usage.</p>
								</div>
							</div>
						</article>

						<div className="flex items-center justify-center">
							<div className="rounded-full bg-brand-accent-200 text-brand-text-primary w-12 h-12 flex items-center justify-center text-sm font-bold">
								VS
							</div>
						</div>

						<article className="flex-1 flex flex-col gap-4 p-6 rounded-2xl border border-brand-accent-300 bg-brand-accent-300/15 shadow-sm mesh-gradient-bg mesh-gradient-bg-delay-2 w-full">
							<div className="flex items-center gap-3">
								<span className="inline-flex items-center rounded-full bg-brand-accent-300 px-3 py-1 text-xs font-semibold text-white">NEW</span>
								<h3 className="text-lg font-matter font-semibold text-brand-text-primary">AI Coding Assistants</h3>
							</div>
							<div className="space-y-4 text-sm text-brand-text-secondary">
								<div>
									<p className="font-semibold text-brand-text-primary mb-1">Volatile Per-Token Cost</p>
									<p>A single agent loop can 10x your bill overnight.</p>
								</div>
								<div>
									<p className="font-semibold text-brand-text-primary mb-1">Dynamic Consumption</p>
									<p>Power users cost 50x more than light users.</p>
								</div>
							</div>
						</article>
					</div>

					{/* Fast Company + Garry Tan callouts */}
					<div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto mt-12">

					{/* Fast Company */}
					<div className="rounded-2xl border border-brand-accent-300 bg-brand-accent-300/10 p-6 shadow-sm mesh-gradient-bg">
						<div className="flex flex-col gap-4">
							<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
								<div className="sm:flex-1">
									<p className="font-body text-base font-semibold text-brand-text-primary sm:text-lg">
										<a href="https://www.fastcompany.com/91520702/y-combinator-garry-tan-agentic-ai-social-media" target="_blank" rel="noopener noreferrer" className="hover:underline">
											Fast Company:
										</a>
									</p>
									<p className="mt-2 font-body text-base italic text-brand-text-secondary sm:text-lg">
										<em>&ldquo;Y Combinator&apos;s CEO says he ships <strong className="underline-hand text-brand-text-primary">37,000 lines of AI code per day</strong>. A developer looked under the hood.&rdquo;</em>
									</p>
								</div>
							</div>
							<div className="border-l-4 border-brand-accent-200 pl-4">
								<p className="font-body text-sm text-brand-text-secondary">
									Code generation is no longer constrained — one developer can produce more output than an entire team. Without tight spend controls, that velocity translates directly into <strong className="text-brand-text-primary">uncapped token consumption</strong> and <strong className="text-brand-text-primary">runaway invoices</strong>.
								</p>
							</div>
						</div>
					</div>

					{/* Garry Tan tweet */}
					<div className="rounded-2xl border border-brand-accent-100 bg-brand-surface p-6 shadow-sm">
						<div className="flex items-center gap-3 mb-4">
							<div className="h-10 w-10 rounded-full bg-brand-accent-100 flex items-center justify-center text-sm font-bold text-brand-text-secondary">GT</div>
							<div>
								<a href="https://x.com/garrytan/status/2031910564344262988" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-text-primary hover:underline">@garrytan</a>
								<p className="text-xs text-brand-text-muted">Y Combinator CEO</p>
							</div>
						</div>
						<blockquote className="text-sm text-brand-text-secondary leading-relaxed italic mb-4">
							&ldquo;I&apos;m working on 3 different big projects simultaneously across 15 sessions all the time. In the last 7 days I&apos;m averaging <strong className="underline-hand text-brand-text-primary not-italic">17k lines of code per day</strong>, 35% tests.&rdquo;
						</blockquote>
						<div className="border-l-4 border-brand-accent-200 pl-3">
							<p className="text-xs text-brand-text-muted">
								One developer now produces more code than an entire team. Every line is a metered token burn.
							</p>
						</div>
					</div>

					</div>

					<div className="max-w-3xl mx-auto mt-6">
						<div className="rounded-2xl border border-brand-overlay/60 bg-brand-surface p-6">
							<p className="text-sm font-medium text-brand-text-primary text-center">
								78% of IT leaders report unexpected charges from AI consumption tiers. The flat-rate SaaS budget is a myth in the age of LLM inference.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* All Agents Are Coding Agents */}
			<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(217,193,215,0.15),transparent_50%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(217,185,167,0.1),transparent_40%)]" />

				<div className="container-custom relative z-10 py-[80px] lg:py-[120px]">
					<div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
						<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm mx-auto">
							<Zap className="h-4 w-4 text-brand-accent-200" />
							<span className="text-sm font-medium text-white/80">The CLI Is the New Runtime</span>
						</div>

						<h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-matter font-bold tracking-tight leading-[1.15]">
							All agents are coding agents.
							<br />
							<span className="bg-gradient-to-r from-white via-brand-accent-100 to-brand-accent-200 bg-clip-text text-transparent">
								Your compliance &amp; spend boundary is the CLI.
							</span>
						</h2>
						<p className="text-lg text-white/80 text-pretty">
							AI agents aren&apos;t chatbots anymore — they generate code at industrial scale, and they all run through CLIs. That makes the CLI your financial control plane.
						</p>
					</div>

					{/* Tweet callout cards */}
					<div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-10">
						{/* Garry Tan */}
						<div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
							<div className="flex items-center gap-3 mb-4">
								<div className="h-10 w-10 rounded-full bg-brand-accent-300/30 flex items-center justify-center text-sm font-bold text-brand-accent-200">GT</div>
								<div>
									<a href="https://x.com/garrytan/status/2031910564344262988" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:underline">@garrytan</a>
									<p className="text-xs text-white/50">Y Combinator CEO</p>
								</div>
							</div>
							<blockquote className="text-sm text-white/80 leading-relaxed italic mb-4">
								&ldquo;<strong className="text-white not-italic">MCP sucks honestly.</strong> It eats too much context window and you have to toggle it on and off and the auth sucks. I vibe coded a <strong className="underline-hand-green text-white not-italic">CLI wrapper</strong> in 30 minutes&hellip; it worked 100x better and was like 100LOC.&rdquo;
							</blockquote>
							<p className="text-xs text-white/50 border-l-2 border-brand-accent-200 pl-3">
								YC&apos;s CEO ditched MCP for a CLI he built in 30 minutes.
							</p>
						</div>

						{/* Morgan Linton / Perplexity */}
						<div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
							<div className="flex items-center gap-3 mb-4">
								<div className="h-10 w-10 rounded-full bg-brand-accent-300/30 flex items-center justify-center text-sm font-bold text-brand-accent-200">ML</div>
								<div>
									<a href="https://x.com/morganlinton/status/2031795683897077965" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:underline">@morganlinton</a>
									<p className="text-xs text-white/50">on Perplexity</p>
								</div>
							</div>
							<blockquote className="text-sm text-white/80 leading-relaxed italic mb-4">
								&ldquo;The cofounder and CTO of Perplexity just said internally at Perplexity they&apos;re <strong className="underline-hand-green text-white not-italic">moving away from MCPs</strong> and instead using APIs and CLIs.&rdquo;
							</blockquote>
							<p className="text-xs text-white/50 border-l-2 border-brand-accent-200 pl-3">
								Perplexity is dropping MCP for APIs and CLIs internally.
							</p>
						</div>

						{/* Karan Vaidya */}
						<div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
							<div className="flex items-center gap-3 mb-4">
								<div className="h-10 w-10 rounded-full bg-brand-accent-300/30 flex items-center justify-center text-sm font-bold text-brand-accent-200">KV</div>
								<div>
									<a href="https://x.com/KaranVaidya6/status/2037530089706176638" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:underline">@KaranVaidya6</a>
									<p className="text-xs text-white/50">Composio</p>
								</div>
							</div>
							<blockquote className="text-sm text-white/80 leading-relaxed italic mb-4">
								&ldquo;We posed a simple question: MCP or CLI? Basically everyone under 35 said CLI. Final score — <strong className="underline-hand-green text-white not-italic">MCP: 3 vs CLI: 17</strong>. SF has spoken.&rdquo;
							</blockquote>
							<p className="text-xs text-white/50 border-l-2 border-brand-accent-200 pl-3">
								SF developers voted. The CLI won in a landslide.
							</p>
						</div>
					</div>

					{/* OpenClaw callout */}
					<div className="max-w-3xl mx-auto mb-8">
						<div className="border-l-2 border-brand-accent-200 pl-5 py-2">
							<p className="text-sm text-white/70">
								Even <strong className="text-white">OpenClaw</strong> — a general-purpose personal AI assistant with 60K+ GitHub stars — now ships a coding-agent skill that spawns Codex and Claude Code sub-agents. Every agent is becoming a coding agent.
							</p>
						</div>
					</div>

					{/* Bottom punchline */}
					<div className="max-w-3xl mx-auto">
						<div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
							<p className="text-sm font-medium text-white">
								If every agent writes code through a CLI, then the CLI is your financial control plane. StringCost sits at that boundary — tracking every token, every session, every dollar.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Section 3: The Shadow AI Crisis */}
			<section className="bg-brand-surface border-y border-brand-border/40">
				<div className="container-custom py-[80px] lg:py-[120px]">
					<div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
						<h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-matter font-bold tracking-tight leading-[1.15]">
							Shadow AI Is Already
							<br />
							<span className="underline-hand">in Your Organization</span>
						</h2>
						<p className="text-lg text-brand-text-secondary text-pretty">
							When procurement moves slower than productivity, developers take matters into their own hands.
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-3">
						{shadowAICards.map((card, index) => (
							<article
								key={card.title}
								className="group relative rounded-2xl border border-brand-border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-brand-accent-300 hover:-translate-y-1"
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<div className="flex items-start gap-4">
									<div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-accent-100/60 to-brand-accent-200/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<card.icon className="h-6 w-6 text-brand-text-secondary" />
									</div>
									<div>
										<h3 className="text-base font-semibold text-brand-text-primary mb-2">{card.title}</h3>
										<p className="text-sm text-brand-text-secondary leading-relaxed">{card.description}</p>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Section 4: Granular Cost Attribution */}
			<section className="relative bg-brand-base text-brand-text-primary overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,193,215,0.15),transparent_50%)]" />

				<div className="container-custom relative z-10 py-[80px] lg:py-[120px]">
					<div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
						<h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-matter font-bold tracking-tight leading-[1.15]">
							Track Every Dollar to the
							<br />
							<span className="underline-hand">Developer and the Project</span>
						</h2>
						<p className="text-lg text-brand-text-secondary text-pretty">
							Monolithic AI invoices are a relic. Modern FinOps requires attribution down to the user, the repo, and the cost center.
						</p>
					</div>

					<div className="flex flex-col lg:flex-row gap-6 items-center">
						<div className="flex-1 rounded-2xl border border-brand-accent-100 bg-brand-accent-100/20 p-6 shadow-sm w-full">
							<div className="flex items-center gap-3 mb-4">
								<div className="h-10 w-10 rounded-xl bg-brand-accent-100/40 flex items-center justify-center">
									<Users className="h-5 w-5 text-brand-text-secondary" />
								</div>
								<h3 className="text-lg font-matter font-semibold text-brand-text-primary">User-Level Tracking</h3>
							</div>
							<p className="text-sm font-semibold text-brand-text-primary mb-3">License Harvesting &amp; ROI</p>
							<ul className="space-y-3 text-sm text-brand-text-secondary">
								<li className="flex items-start gap-2">
									<span className="mt-1 inline-block size-1.5 rounded-full bg-brand-accent-100 flex-shrink-0" />
									<span>Identify inactive seats — 20 unused Copilot licenses = $5,000+/year wasted</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="mt-1 inline-block size-1.5 rounded-full bg-brand-accent-100 flex-shrink-0" />
									<span>Distinguish &ldquo;active&rdquo; vs &ldquo;engaged&rdquo; users with deep engagement telemetry</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="mt-1 inline-block size-1.5 rounded-full bg-brand-accent-100 flex-shrink-0" />
									<span>Correlate token spend with pull request volume, cycle time, and bug rates</span>
								</li>
							</ul>
						</div>

						<div className="flex items-center justify-center">
							<div className="rounded-full bg-brand-accent-300 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold">
								+
							</div>
						</div>

						<div className="flex-1 rounded-2xl border border-brand-accent-200 bg-brand-accent-200/20 p-6 shadow-sm w-full">
							<div className="flex items-center gap-3 mb-4">
								<div className="h-10 w-10 rounded-xl bg-brand-accent-200/40 flex items-center justify-center">
									<FolderGit2 className="h-5 w-5 text-brand-text-secondary" />
								</div>
								<h3 className="text-lg font-matter font-semibold text-brand-text-primary">Project-Level Tracking</h3>
							</div>
							<p className="text-sm font-semibold text-brand-text-primary mb-3">Chargebacks &amp; Capitalization</p>
							<ul className="space-y-3 text-sm text-brand-text-secondary">
								<li className="flex items-start gap-2">
									<span className="mt-1 inline-block size-1.5 rounded-full bg-brand-accent-200 flex-shrink-0" />
									<span>Tag AI costs to specific repos, teams, or clients for accurate chargebacks</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="mt-1 inline-block size-1.5 rounded-full bg-brand-accent-200 flex-shrink-0" />
									<span>Separate CapEx (new R&amp;D) from OpEx (maintenance) for ASC 350-40 compliance</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="mt-1 inline-block size-1.5 rounded-full bg-brand-accent-200 flex-shrink-0" />
									<span>Consulting firms: pass exact AI inference costs through to client invoices</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Section 6: Vendor Telemetry Comparison */}
			<section className="bg-brand-surface border-y border-brand-border/40">
				<div className="container-custom py-[80px] lg:py-[120px]">
					<div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
						<h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-matter font-bold tracking-tight leading-[1.15]">
							Native Vendor Tracking
							<br />
							<span className="underline-hand">Isn&apos;t Enough</span>
						</h2>
						<p className="text-lg text-brand-text-secondary text-pretty">
							Each AI tool provides different levels of governance. StringCost fills the gaps across all of them.
						</p>
					</div>

					<div className="max-w-5xl mx-auto">
						<div className="rounded-2xl border border-brand-border bg-white shadow-sm overflow-hidden">
							{/* Header */}
							<div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] bg-brand-surface border-b border-brand-border">
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-brand-text-muted">Dimension</div>
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-center text-brand-text-muted border-x border-brand-border/50">
									GitHub Copilot
								</div>
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-center text-brand-text-muted border-r border-brand-border/50">
									Cursor
								</div>
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-center text-brand-text-muted">
									Claude Code
								</div>
							</div>

							{/* Rows */}
							{vendorComparisons.map((row, index) => (
								<div
									key={row.dimension}
									className={`grid grid-cols-[1.2fr_1fr_1fr_1fr] ${index !== vendorComparisons.length - 1 ? "border-b border-brand-border/50" : ""}`}
								>
									<div className="p-4 flex items-center">
										<span className="text-sm font-medium text-brand-text-primary">{row.dimension}</span>
									</div>
									<div className="p-4 flex items-center justify-center border-x border-brand-border/30 text-sm text-brand-text-secondary text-center">
										{row.copilot}
									</div>
									<div className="p-4 flex items-center justify-center border-r border-brand-border/30 text-sm text-brand-text-secondary text-center">
										{row.cursor}
									</div>
									<div className="p-4 flex items-center justify-center text-sm text-brand-text-secondary text-center">
										{row.claude}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Bottom callout */}
					<div className="max-w-3xl mx-auto mt-12">
						<div className="rounded-2xl border border-brand-accent-300 bg-brand-accent-300/10 p-6 mesh-gradient-bg">
							<p className="text-sm font-medium text-brand-text-primary text-center">
								StringCost unifies all three into a single pane of glass with real-time attribution, anomaly detection, and automated chargebacks.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Section 7: The 500-Employee Business Case */}
			<section className="relative bg-brand-base text-brand-text-primary overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,193,215,0.15),transparent_50%)]" />

				<div className="container-custom relative z-10 py-[80px] lg:py-[120px]">
					<div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
						<h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-matter font-bold tracking-tight leading-[1.15]">
							The Financial Case for a
							<br />
							<span className="underline-hand">500-Employee Enterprise</span>
						</h2>
						<p className="text-lg text-brand-text-secondary text-pretty">
							A typical mid-market company with 150 technical staff faces $120K–$180K/year in baseline AI tool costs — before overages.
						</p>
					</div>

					<div className="max-w-4xl mx-auto">
						<div className="rounded-2xl border border-brand-border bg-white shadow-sm overflow-hidden">
							{/* Header */}
							<div className="grid grid-cols-[0.8fr_1fr_1fr] bg-brand-surface border-b border-brand-border">
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-brand-text-muted">Risk</div>
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-center text-rose-600 border-x border-brand-border/50">
									Unmanaged
								</div>
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-center text-emerald-600">
									With StringCost
								</div>
							</div>

							{/* Rows */}
							{riskMatrix.map((row, index) => (
								<div
									key={row.risk}
									className={`grid grid-cols-[0.8fr_1fr_1fr] ${index !== riskMatrix.length - 1 ? "border-b border-brand-border/50" : ""}`}
								>
									<div className="p-4 flex items-center gap-3">
										<div className="flex-shrink-0 h-8 w-8 rounded-lg bg-brand-accent-100/40 flex items-center justify-center">
											<row.icon className="h-4 w-4 text-brand-text-secondary" />
										</div>
										<span className="text-sm font-medium text-brand-text-primary">{row.risk}</span>
									</div>
									<div className="p-4 flex items-center justify-center border-x border-brand-border/30 bg-rose-50/50">
										<div className="flex items-center gap-2 text-sm text-rose-700">
											<X className="h-4 w-4 text-rose-400 flex-shrink-0" />
											{row.consequence}
										</div>
									</div>
									<div className="p-4 flex items-center justify-center bg-emerald-50/50">
										<div className="flex items-center gap-2 text-sm text-emerald-700">
											<CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
											{row.solution}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Section 8: Final CTA */}
			<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(217,193,215,0.15),transparent_60%)]" />
				<div className="glow-orb glow-orb--rose float-slow -top-20 -right-20 h-64 w-64 opacity-30" />
				<div className="glow-orb glow-orb--peach float-medium -bottom-20 -left-20 h-64 w-64 opacity-30" />

				<div className="container-custom relative z-10 py-[100px] lg:py-[140px]">
					<div className="max-w-3xl mx-auto text-center space-y-8">
						<h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-matter font-bold tracking-tight leading-[1.15]">
							Stop budgeting AI like it&apos;s SaaS.
							<br />
							<span className="bg-gradient-to-r from-white via-brand-accent-100 to-brand-accent-200 bg-clip-text text-transparent">
								Start managing it like infrastructure.
							</span>
						</h2>

						<p className="text-lg text-white/80 max-w-xl mx-auto">
							User-level tracking. Project-level attribution. Real-time anomaly detection. One platform.
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
							<a
								href="http://app.stringcost.com/"
								className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-matter font-semibold transition-all duration-200 bg-white text-[#210F26] hover:bg-brand-accent-100 hover:scale-[1.02] active:scale-[0.98]"
							>
								Track Your AI Spend — Free
								<ArrowRight className="ml-2 h-5 w-5" />
							</a>
						</div>

						<div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-white/70">
							<div className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-emerald-400" />
								<span>No integration required</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-emerald-400" />
								<span>Works with any provider</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-emerald-400" />
								<span>Enterprise ready</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

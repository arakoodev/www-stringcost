import React from "react";
import {
	AlertTriangle,
	ArrowRight,
	BarChart3,
	CheckCircle2,
	FolderGit2,
	ShieldCheck,
	Sparkles,
	TrendingUp,
	Users,
	Zap,
} from "lucide-react";

const buttonBase =
	"inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-matter font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]";
const primaryButton = `${buttonBase} bg-[#210F26] text-white hover:bg-[#0D0D0D]`;
const secondaryButton = `${buttonBase} border border-brand-accent-300 text-brand-text-secondary hover:bg-brand-accent-100/60`;
const secondaryButtonLight = `${buttonBase} border border-white/30 text-white hover:bg-white/10 hover:border-white/50`;

const headlineStats = [
	{value: "15 min", label: "Detection window", tone: "text-emerald-400"},
	{value: "250x", label: "Variance between users", tone: "text-white"},
	{value: "$1,500", label: "Weekend runaway session", tone: "text-rose-400"},
];

const vendorComparisons = [
	{
		dimension: "User-level tracking",
		copilot: "Native (Usage Metrics API)",
		cursor: "Native (Analytics API)",
		claude: "Native (Analytics API)",
	},
	{
		dimension: "Project / repo tracking",
		copilot: "Native (Cost Centers)",
		cursor: "Limited (custom polling)",
		claude: "Proxy headers required",
	},
	{
		dimension: "Departmental chargeback",
		copilot: "Automated (Azure Subs)",
		cursor: "Highly manual",
		claude: "Infrastructure dependent",
	},
	{
		dimension: "Anomaly alerts",
		copilot: "Soft budgets",
		cursor: "External tooling needed",
		claude: "Cloud gateway required",
	},
	{
		dimension: "Pricing predictability",
		copilot: "Seat + premium requests",
		cursor: "Pooled credits + overages",
		claude: "Pure token consumption",
	},
];

const controlPillars = [
	{
		title: "Collect telemetry",
		description:
			"Vendor APIs, proxy events, identity data, and billing metadata land in one stream.",
		icon: Sparkles,
	},
	{
		title: "Normalize economics",
		description:
			"Seats, credits, premium requests, and tokens become one comparable ledger.",
		icon: BarChart3,
	},
	{
		title: "Attribute and enforce",
		description:
			"Map costs to users, repos, teams, and cost centers, then trigger policy in real time.",
		icon: ShieldCheck,
	},
];

function SectionLabel({
	children,
	light = false,
}: {
	children: React.ReactNode;
	light?: boolean;
}) {
	return (
		<div
			className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-sm ${
				light
					? "border-white/20 bg-white/5 text-white/80"
					: "border-brand-accent-100 bg-white text-brand-text-secondary"
			}`}
		>
			<Sparkles className={`h-4 w-4 ${light ? "text-brand-accent-200" : "text-brand-accent-300"}`} />
			<span>{children}</span>
		</div>
	);
}

export function SpendHero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
			<div className="absolute inset-0 spend-grid opacity-40" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_25%,rgba(217,193,215,0.24),transparent_50%)]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_88%_78%,rgba(217,185,167,0.16),transparent_40%)]" />
			<div className="glow-orb glow-orb--rose float-slow -left-24 -top-24 h-72 w-72 opacity-45" />
			<div className="glow-orb glow-orb--peach float-medium -bottom-24 right-0 h-96 w-96 opacity-30" />

			<div className="container-custom relative z-10 py-[96px] lg:py-[132px]">
				<div className="grid gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
					<div className="space-y-8">
						<SectionLabel light>Financial control plane for AI developer tools</SectionLabel>

						<div className="space-y-5">
							<h1 className="font-display text-[34px] sm:text-[50px] md:text-[64px] lg:text-[78px] font-bold tracking-tight leading-[1.02] text-balance">
								Developer velocity is compounding.
								<br />
								<span className="text-white/65">So is AI spend.</span>
							</h1>
							<p className="max-w-2xl text-lg sm:text-xl leading-[1.62] text-white/78 text-pretty">
								Seats, pooled credits, premium requests, and token overages now live in the same budget line.
								StringCost turns that chaos into one operating system for finance and engineering.
							</p>
						</div>

						<div className="grid max-w-2xl gap-3 sm:grid-cols-3">
							{headlineStats.map((stat) => (
								<div
									key={stat.label}
									className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 backdrop-blur-sm"
								>
									<p className={`text-2xl font-semibold ${stat.tone}`}>{stat.value}</p>
									<p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/55">{stat.label}</p>
								</div>
							))}
						</div>

						<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
							<span className="cta-glow">
								<a href="http://app.stringcost.com/" className={primaryButton}>
									Track your AI spend
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
							</span>
							<a
								href="https://calendar.app.google/hjN2HkZBLJMtSuku7"
								className={secondaryButtonLight}
							>
								Contact sales
							</a>
						</div>

						<p className="text-sm text-white/56">
							Built for finance, procurement, engineering management, and platform teams buying AI tooling at
							scale.
						</p>
					</div>

					<div className="relative hidden lg:block">
						<div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-white/10 via-transparent to-brand-accent-200/15 blur-3xl" />
						<div className="glow-card spend-hero-glow relative rounded-[32px] border border-white/14 spend-dark-panel p-6 shadow-2xl">
							<div className="glow-sheen" />
							<div className="space-y-5">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-xs uppercase tracking-[0.24em] text-white/55">StringCost</p>
										<p className="mt-2 text-xl font-semibold text-white">AI Spend Control Plane</p>
									</div>
									<span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
										Live anomaly detection
									</span>
								</div>

								<div className="grid gap-3 sm:grid-cols-3">
									<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
										<p className="text-xs uppercase tracking-[0.2em] text-white/45">Today</p>
										<p className="mt-2 text-2xl font-semibold text-white">$482.70</p>
									</div>
									<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
										<p className="text-xs uppercase tracking-[0.2em] text-white/45">Flagged sessions</p>
										<p className="mt-2 text-2xl font-semibold text-rose-300">03</p>
									</div>
									<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
										<p className="text-xs uppercase tracking-[0.2em] text-white/45">Protected budget</p>
										<p className="mt-2 text-2xl font-semibold text-emerald-300">$1.2k</p>
									</div>
								</div>

								<div className="rounded-[28px] border border-rose-400/18 bg-rose-500/10 p-5">
									<div className="flex items-start justify-between gap-4">
										<div>
											<p className="text-xs uppercase tracking-[0.22em] text-rose-200/70">Incident prevented</p>
											<p className="mt-2 text-lg font-semibold text-white">Agent loop exceeded baseline by 18x</p>
											<p className="mt-1 text-sm text-white/70">
												Session paused after 15 minutes. Repo mapped. Chargeback route preserved.
											</p>
										</div>
										<AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-rose-300" />
									</div>
								</div>

								<div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
									<div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
										<div className="flex items-center justify-between">
											<p className="text-xs uppercase tracking-[0.22em] text-white/50">By surface</p>
											<p className="text-xs text-white/45">Today</p>
										</div>
										<div className="mt-4 space-y-4">
											{[
												{label: "Cursor", amount: "$182.40", width: "78%"},
												{label: "Claude Code", amount: "$149.20", width: "61%"},
												{label: "Copilot", amount: "$94.60", width: "42%"},
												{label: "Direct APIs", amount: "$56.50", width: "26%"},
											].map((row) => (
												<div key={row.label} className="space-y-2">
													<div className="flex items-center justify-between text-sm">
														<span className="text-white/72">{row.label}</span>
														<span className="text-white">{row.amount}</span>
													</div>
													<div className="h-2 rounded-full bg-white/8">
														<div
															className="h-full rounded-full bg-gradient-to-r from-brand-accent-100 via-brand-accent-200 to-brand-accent-300"
															style={{width: row.width}}
														/>
													</div>
												</div>
											))}
										</div>
									</div>

									<div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
										<p className="text-xs uppercase tracking-[0.22em] text-white/50">Policy engine</p>
										<div className="mt-4 space-y-3 text-sm">
											<div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
												<p className="text-white/92">User cap</p>
												<p className="mt-1 text-white/58">$300 / day</p>
											</div>
											<div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
												<p className="text-white/92">Repo mapping</p>
												<p className="mt-1 text-white/58">payments-api -&gt; Fintech / OpEx</p>
											</div>
											<div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
												<p className="text-white/92">Incident rule</p>
												<p className="mt-1 text-white/58">Suspend at 8x baseline</p>
											</div>
										</div>
									</div>
								</div>

								<div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
									<div className="flex items-center justify-between">
										<p className="text-xs uppercase tracking-[0.22em] text-white/50">Attribution feed</p>
										<p className="text-xs text-white/45">Live</p>
									</div>
									<div className="mt-4 space-y-3 text-sm">
										{[
											"agent-coder-12 -&gt; repo: payments-api -&gt; team: platform",
											"cursor-credit-burst -&gt; user: akhil -&gt; department: eng",
											"claude-code-session -&gt; client: enterprise rollout -&gt; chargeback ready",
										].map((line) => (
											<div
												key={line}
												className="flex items-center gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-white/70"
											>
												<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
												<span>{line}</span>
											</div>
										))}
									</div>
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
			<section className="relative overflow-hidden bg-brand-base text-brand-text-primary">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,193,215,0.2),transparent_60%)]" />

				<div className="container-custom relative z-10 py-[60px] lg:py-[84px]">
					<div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
						<SectionLabel>Runaway spend</SectionLabel>
						<h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-display font-bold tracking-tight leading-[1.1] text-balance">
							The pricing model that broke your budget.
						</h2>
						<p className="text-lg text-brand-text-secondary max-w-2xl mx-auto text-pretty">
							AI tools did not just change how developers write code. They changed how vendors charge for it,
							and that broke the old SaaS budget model.
						</p>
					</div>

					<div className="flex flex-col md:flex-row gap-6 items-center">
						<article className="flex-1 flex flex-col gap-4 p-6 rounded-2xl border border-brand-overlay/60 bg-brand-surface shadow-sm w-full">
							<div className="flex items-center gap-3">
								<span className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
									OLD
								</span>
								<h3 className="text-lg font-matter font-semibold text-brand-text-primary">
									Traditional SaaS
								</h3>
							</div>
							<div className="space-y-4 text-sm text-brand-text-secondary">
								<div>
									<p className="font-semibold text-brand-text-primary mb-1">Predictable per-seat cost</p>
									<p>$20/seat/month, same every month. Budget once, forget about it.</p>
								</div>
								<div>
									<p className="font-semibold text-brand-text-primary mb-1">Static utilization</p>
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
								<span className="inline-flex items-center rounded-full bg-brand-accent-300 px-3 py-1 text-xs font-semibold text-white">
									NEW
								</span>
								<h3 className="text-lg font-matter font-semibold text-brand-text-primary">
									AI coding assistants
								</h3>
							</div>
							<div className="space-y-4 text-sm text-brand-text-secondary">
								<div>
									<p className="font-semibold text-brand-text-primary mb-1">Volatile per-token cost</p>
									<p>A single agent loop can 10x your bill overnight.</p>
								</div>
								<div>
									<p className="font-semibold text-brand-text-primary mb-1">Dynamic consumption</p>
									<p>Power users cost 50x more than light users.</p>
								</div>
							</div>
						</article>
					</div>

					<div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto mt-8">
						<div className="rounded-2xl border border-brand-accent-300 bg-brand-accent-300/10 p-6 shadow-sm mesh-gradient-bg">
							<div className="flex flex-col gap-4">
								<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
									<div className="sm:flex-1">
										<p className="font-body text-base font-semibold text-brand-text-primary sm:text-lg">
											<a
												href="https://www.fastcompany.com/91520702/y-combinator-garry-tan-agentic-ai-social-media"
												target="_blank"
												rel="noopener noreferrer"
												className="hover:underline"
											>
												Fast Company:
											</a>
										</p>
										<p className="mt-2 font-body text-base italic text-brand-text-secondary sm:text-lg">
											<em>
												&ldquo;Y Combinator&apos;s CEO says he ships{" "}
												<strong className="underline-hand text-brand-text-primary">37,000 lines of AI code per day</strong>.
												A developer looked under the hood.&rdquo;
											</em>
										</p>
									</div>
								</div>
								<div className="border-l-4 border-brand-accent-200 pl-4">
									<p className="font-body text-sm text-brand-text-secondary">
										Code generation is no longer constrained. One developer can produce more output than an entire
										team. Without tight spend controls, that velocity translates directly into{" "}
										<strong className="text-brand-text-primary">uncapped token consumption</strong> and{" "}
										<strong className="text-brand-text-primary">runaway invoices</strong>.
									</p>
								</div>
							</div>
						</div>

						<div className="rounded-2xl border border-brand-accent-100 bg-brand-surface p-6 shadow-sm">
							<div className="flex items-center gap-3 mb-4">
								<div className="h-10 w-10 rounded-full bg-brand-accent-100 flex items-center justify-center text-sm font-bold text-brand-text-secondary">
									GT
								</div>
								<div>
									<a
										href="https://x.com/garrytan/status/2031910564344262988"
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm font-semibold text-brand-text-primary hover:underline"
									>
										@garrytan
									</a>
									<p className="text-xs text-brand-text-muted">Y Combinator CEO</p>
								</div>
							</div>
							<blockquote className="text-sm text-brand-text-secondary leading-relaxed italic mb-4">
								&ldquo;I&apos;m working on 3 different big projects simultaneously across 15 sessions all the time.
								In the last 7 days I&apos;m averaging{" "}
								<strong className="underline-hand text-brand-text-primary not-italic">17k lines of code per day</strong>,
								35% tests.&rdquo;
							</blockquote>
							<div className="border-l-4 border-brand-accent-200 pl-3">
								<p className="text-xs text-brand-text-muted">
									One developer now produces more code than an entire team. Every line is a metered token burn.
								</p>
							</div>
						</div>
					</div>

					<div className="max-w-3xl mx-auto mt-8">
						<div className="rounded-2xl border border-brand-overlay/60 bg-brand-surface p-5">
							<p className="text-sm font-medium text-brand-text-primary text-center">
								78% of IT leaders report unexpected charges from AI consumption tiers. The flat-rate SaaS budget
								is a myth in the age of LLM inference.
							</p>
						</div>
					</div>
				</div>
			</section>

			<div className="bg-gradient-to-r from-brand-accent-100/30 via-brand-accent-200/20 to-brand-accent-100/30">
				<div className="container-custom py-8 flex flex-wrap items-center justify-center gap-10 sm:gap-20 text-center">
					<div>
						<p className="text-3xl sm:text-4xl font-bold text-brand-text-primary">250x</p>
						<p className="text-xs text-brand-text-muted uppercase tracking-wider mt-1">
							Cost variance between users
						</p>
					</div>
					<div className="hidden sm:block w-px h-12 bg-brand-border/50" />
					<div>
						<p className="text-3xl sm:text-4xl font-bold text-brand-text-primary">$1,500</p>
						<p className="text-xs text-brand-text-muted uppercase tracking-wider mt-1">
							Single runaway agent session
						</p>
					</div>
					<div className="hidden sm:block w-px h-12 bg-brand-border/50" />
					<div>
						<p className="text-3xl sm:text-4xl font-bold text-brand-text-primary">15 min</p>
						<p className="text-xs text-brand-text-muted uppercase tracking-wider mt-1">
							StringCost detection time
						</p>
					</div>
				</div>
			</div>

			<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(217,193,215,0.15),transparent_50%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(217,185,167,0.1),transparent_40%)]" />

				<div className="container-custom relative z-10 py-[60px] lg:py-[84px]">
					<div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
						<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm mx-auto">
							<Zap className="h-4 w-4 text-brand-accent-200" />
							<span className="text-sm font-medium text-white/80">The CLI is the new runtime</span>
						</div>

						<h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-display font-bold tracking-tight leading-[1.1] text-balance">
							All agents are coding agents.
							<br />
							<span className="bg-gradient-to-r from-white via-brand-accent-100 to-brand-accent-200 bg-clip-text text-transparent">
								Your compliance &amp; spend boundary is the CLI.
							</span>
						</h2>
						<p className="text-lg text-white/80 max-w-2xl mx-auto text-pretty">
							AI agents are not chatbots anymore. They generate code at industrial scale, and they all run
							through CLIs. That makes the CLI your financial control plane.
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-10">
						<div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
							<div className="flex items-center gap-3 mb-4">
								<div className="h-10 w-10 rounded-full bg-brand-accent-300/30 flex items-center justify-center text-sm font-bold text-brand-accent-200">
									GT
								</div>
								<div>
									<a
										href="https://x.com/garrytan/status/2031910564344262988"
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm font-semibold text-white hover:underline"
									>
										@garrytan
									</a>
									<p className="text-xs text-white/50">Y Combinator CEO</p>
								</div>
							</div>
							<blockquote className="text-sm text-white/80 leading-relaxed italic mb-4">
								&ldquo;<strong className="text-white not-italic">MCP sucks honestly.</strong> It eats too much
								context window and you have to toggle it on and off and the auth sucks. I vibe coded a{" "}
								<strong className="underline-hand-green text-white not-italic">CLI wrapper</strong> in 30
								minutes... it worked 100x better and was like 100LOC.&rdquo;
							</blockquote>
							<p className="text-xs text-white/50 border-l-2 border-brand-accent-200 pl-3">
								YC&apos;s CEO ditched MCP for a CLI he built in 30 minutes.
							</p>
						</div>

						<div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
							<div className="flex items-center gap-3 mb-4">
								<div className="h-10 w-10 rounded-full bg-brand-accent-300/30 flex items-center justify-center text-sm font-bold text-brand-accent-200">
									ML
								</div>
								<div>
									<a
										href="https://x.com/morganlinton/status/2031795683897077965"
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm font-semibold text-white hover:underline"
									>
										@morganlinton
									</a>
									<p className="text-xs text-white/50">on Perplexity</p>
								</div>
							</div>
							<blockquote className="text-sm text-white/80 leading-relaxed italic mb-4">
								&ldquo;The cofounder and CTO of Perplexity just said internally at Perplexity they&apos;re{" "}
								<strong className="underline-hand-green text-white not-italic">moving away from MCPs</strong> and
								instead using APIs and CLIs.&rdquo;
							</blockquote>
							<p className="text-xs text-white/50 border-l-2 border-brand-accent-200 pl-3">
								Perplexity is dropping MCP for APIs and CLIs internally.
							</p>
						</div>

						<div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
							<div className="flex items-center gap-3 mb-4">
								<div className="h-10 w-10 rounded-full bg-brand-accent-300/30 flex items-center justify-center text-sm font-bold text-brand-accent-200">
									KV
								</div>
								<div>
									<a
										href="https://x.com/KaranVaidya6/status/2037530089706176638"
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm font-semibold text-white hover:underline"
									>
										@KaranVaidya6
									</a>
									<p className="text-xs text-white/50">Composio</p>
								</div>
							</div>
							<blockquote className="text-sm text-white/80 leading-relaxed italic mb-4">
								&ldquo;We posed a simple question: MCP or CLI? Basically everyone under 35 said CLI. Final score
								- <strong className="underline-hand-green text-white not-italic">MCP: 3 vs CLI: 17</strong>. SF
								has spoken.&rdquo;
							</blockquote>
							<p className="text-xs text-white/50 border-l-2 border-brand-accent-200 pl-3">
								SF developers voted. The CLI won in a landslide.
							</p>
						</div>
					</div>

					<div className="max-w-3xl mx-auto mb-8">
						<div className="border-l-2 border-brand-accent-200 pl-5 py-2">
							<p className="text-sm text-white/70">
								<strong className="text-white">OpenClaw</strong> (60K+ GitHub stars) proves the point. It
								isn&apos;t an assistant that happens to code. It&apos;s a coding agent that happens to assist.
								Built on Pi&apos;s philosophy: only 4 core tools (Read, Write, Edit, Bash). Everything else is
								generated code. Agents write their own skills as Markdown files, hot-reloaded in 250ms. Extension
								through code generation, not protocol integration, and{" "}
								<strong className="text-white">every extension burns tokens</strong>.
							</p>
						</div>
					</div>

					<div className="max-w-3xl mx-auto">
						<div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
							<p className="text-sm font-medium text-white">
								If every agent writes code through a CLI, then the CLI is your financial control plane.
								StringCost sits at that boundary, tracking every token, every session, and every dollar.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-brand-surface">
				<div className="container-custom py-[60px] lg:py-[84px]">
					<div className="max-w-3xl space-y-4 mb-10">
						<SectionLabel>How StringCost works</SectionLabel>
						<h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-display font-bold tracking-tight leading-[1.1] text-balance text-brand-text-primary">
							StringCost is the operating layer between your tools and the invoice.
						</h2>
						<p className="text-lg leading-8 text-brand-text-secondary text-pretty">
							Instead of waiting for every AI vendor to expose the same controls, StringCost builds one spend
							system across all of them. It sees the telemetry, normalizes the economics, and turns budget policy
							into runtime enforcement.
						</p>
					</div>

					<div className="glow-card spend-panel rounded-[36px] border border-brand-border p-6 shadow-lg">
						<div className="grid gap-6 lg:grid-cols-3">
							{controlPillars.map((pillar) => (
								<div
									key={pillar.title}
									className="rounded-[28px] border border-brand-border/70 bg-white px-5 py-5"
								>
									<pillar.icon className="h-5 w-5 text-brand-text-secondary" />
									<h3 className="mt-4 text-base font-semibold text-brand-text-primary">{pillar.title}</h3>
									<p className="mt-2 text-sm leading-6 text-brand-text-secondary">
										{pillar.description}
									</p>
								</div>
							))}
						</div>

						<div className="spend-divider my-6" />

						<div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
							<div className="rounded-[32px] border border-brand-border/70 bg-white p-6">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-xs uppercase tracking-[0.2em] text-brand-text-muted">Unified ledger</p>
										<p className="mt-2 text-xl font-semibold text-brand-text-primary">
											One stream of spend across seats, credits, and tokens
										</p>
									</div>
									<BarChart3 className="h-5 w-5 text-brand-text-secondary" />
								</div>
								<div className="mt-6 space-y-4">
									{[
										{label: "Cursor pooled credits", amount: "$182.40", width: "74%"},
										{label: "Claude Code sessions", amount: "$149.20", width: "61%"},
										{label: "Copilot premium requests", amount: "$94.60", width: "42%"},
										{label: "Direct API usage", amount: "$56.50", width: "28%"},
									].map((row) => (
										<div key={row.label} className="space-y-2">
											<div className="flex items-center justify-between text-sm">
												<span className="text-brand-text-secondary">{row.label}</span>
												<span className="font-semibold text-brand-text-primary">{row.amount}</span>
											</div>
											<div className="h-2 rounded-full bg-brand-base">
												<div
													className="h-full rounded-full bg-gradient-to-r from-brand-accent-100 via-brand-accent-200 to-brand-accent-300"
													style={{width: row.width}}
												/>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="space-y-5">
								<div className="rounded-[32px] border border-brand-border/70 bg-white p-6">
									<div className="flex items-center gap-3">
										<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-accent-100/40">
											<Users className="h-5 w-5 text-brand-text-secondary" />
										</div>
										<div>
											<p className="text-xs uppercase tracking-[0.2em] text-brand-text-muted">Attribution</p>
											<p className="mt-1 text-lg font-semibold text-brand-text-primary">
												User, repo, team, and cost center
											</p>
										</div>
									</div>
									<div className="mt-4 space-y-3 text-sm text-brand-text-secondary">
										<div className="rounded-2xl border border-brand-border/60 bg-brand-base px-4 py-3">
											agent-coder-12 -&gt; payments-api -&gt; platform
										</div>
										<div className="rounded-2xl border border-brand-border/60 bg-brand-base px-4 py-3">
											cursor-credit-burst -&gt; akhil -&gt; engineering
										</div>
										<div className="rounded-2xl border border-brand-border/60 bg-brand-base px-4 py-3">
											claude-code-session -&gt; rollout client -&gt; chargeback
										</div>
									</div>
								</div>

								<div className="rounded-[32px] border border-emerald-200 bg-emerald-50 p-6">
									<div className="flex items-center gap-3">
										<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100">
											<TrendingUp className="h-5 w-5 text-emerald-700" />
										</div>
										<div>
											<p className="text-xs uppercase tracking-[0.2em] text-emerald-700">Enforcement</p>
											<p className="mt-1 text-lg font-semibold text-brand-text-primary">
												Policy fires while the session is live
											</p>
										</div>
									</div>
									<div className="mt-4 space-y-3 text-sm text-brand-text-secondary">
										<div className="flex items-center justify-between rounded-2xl border border-emerald-200 bg-white px-4 py-3">
											<span>User cap</span>
											<span className="font-semibold text-brand-text-primary">$300 / day</span>
										</div>
										<div className="flex items-center justify-between rounded-2xl border border-emerald-200 bg-white px-4 py-3">
											<span>Incident rule</span>
											<span className="font-semibold text-brand-text-primary">Suspend at 8x baseline</span>
										</div>
										<div className="rounded-2xl border border-emerald-200 bg-white px-4 py-3">
											<p className="font-semibold text-brand-text-primary">Result</p>
											<p className="mt-1">
												Runaway session caught after 15 minutes, not on the monthly invoice.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-brand-base">
				<div className="container-custom py-[60px] lg:py-[84px]">
					<div className="max-w-3xl space-y-4 mb-10">
						<SectionLabel>Vendor governance</SectionLabel>
						<h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-display font-bold tracking-tight leading-[1.1] text-balance text-brand-text-primary">
							Native vendor tracking is not enough.
						</h2>
						<p className="text-lg leading-8 text-brand-text-secondary text-pretty">
							Each AI tool provides a different level of visibility and control. StringCost fills the gaps across
							all of them.
						</p>
					</div>

					<div className="rounded-2xl border border-brand-border bg-white shadow-md overflow-hidden">
						<div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] bg-brand-accent-100/30 border-b border-brand-border">
							<div className="p-4 text-xs font-semibold uppercase tracking-wider text-brand-text-muted">
								Dimension
							</div>
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

						{vendorComparisons.map((row, index) => (
							<div
								key={row.dimension}
								className={`grid grid-cols-[1.2fr_1fr_1fr_1fr] ${
									index % 2 === 1 ? "bg-brand-surface/50" : ""
								} ${index !== vendorComparisons.length - 1 ? "border-b border-brand-border/50" : ""}`}
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

					<div className="mt-8">
						<div className="rounded-2xl bg-brand-accent-300/10 p-6 border-l-4 border-brand-accent-300">
							<p className="text-base font-medium text-brand-text-primary">
								StringCost unifies all three into a single pane of glass with real-time attribution, anomaly
								detection, and automated chargebacks.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(217,193,215,0.16),transparent_60%)]" />
				<div className="glow-orb glow-orb--rose float-slow -right-20 -top-20 h-64 w-64 opacity-30" />
				<div className="glow-orb glow-orb--peach float-medium -bottom-24 -left-20 h-72 w-72 opacity-30" />

				<div className="container-custom relative z-10 py-[104px] lg:py-[132px]">
					<div className="mx-auto max-w-3xl text-center">
						<SectionLabel light>Final step</SectionLabel>
						<h2 className="mt-6 font-display text-[30px] sm:text-[40px] lg:text-[54px] font-bold tracking-tight leading-[1.08] text-balance">
							Stop budgeting AI like it is static software.
							<br />
							Start managing it like live infrastructure.
						</h2>
						<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/78 text-pretty">
							StringCost gives you the control layer between developer-tool velocity and financial exposure:
							user-level tracking, project-level attribution, anomaly detection, and budget enforcement in one
							system.
						</p>
						<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
							<a href="http://app.stringcost.com/" className={primaryButton}>
								Track your AI spend
								<ArrowRight className="ml-2 h-4 w-4" />
							</a>
							<a
								href="https://calendar.app.google/hjN2HkZBLJMtSuku7"
								className={secondaryButton}
							>
								Contact sales
							</a>
						</div>
						<div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/65">
							<div className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-emerald-400" />
								<span>Works across vendors</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-emerald-400" />
								<span>Built for finance and engineering</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-emerald-400" />
								<span>Designed for enterprise rollout</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

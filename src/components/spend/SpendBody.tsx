import React from "react";
import {
	AlertTriangle,
	ArrowRight,
	BarChart3,
	CheckCircle2,
	ShieldCheck,
	Sparkles,
	TrendingUp,
	Users,
	Zap,
} from "lucide-react";

const buttonBase =
	"inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-matter font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]";
const primaryButton = `${buttonBase} bg-[#210F26] text-white hover:bg-[#0D0D0D]`;
const heroPrimaryButton = `${buttonBase} bg-white text-[#210F26] hover:bg-brand-accent-100 shadow-[0_18px_36px_-20px_rgba(255,255,255,0.9)]`;
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

const heroArchitectureLayers = [
	{
		kicker: "Runtime",
		title: "OpenShell-based agent sandbox",
		description:
			"Run coding agents inside a locked-down runtime with explicit permissions and a defined egress path.",
		icon: ShieldCheck,
	},
	{
		kicker: "Proxy",
		title: "StringCost proxy in your environment",
		description:
			"Every model call, tool call, and CLI session flows through the proxy before it becomes vendor spend.",
		icon: Zap,
	},
	{
		kicker: "Managed plane",
		title: "Cloud policy, reporting, and governance",
		description:
			"Budgets, repo attribution, anomaly detection, and chargebacks live in one managed control plane.",
		icon: BarChart3,
	},
];

const runtimePressurePoints = [
	{
		title: "Agent runtime traffic",
		description: "Parallel sessions create spend long before procurement or finance sees a vendor invoice.",
	},
	{
		title: "CLI and tool loops",
		description: "Generated code, bash commands, and tool retries are now the real metered surface.",
	},
	{
		title: "Invoice lag",
		description: "By the time the bill arrives, the only thing left to do is explain the overage.",
	},
];

const cliBridgeSteps = [
	{
		step: "Runtime",
		title: "Execution stays contained",
		description: "OpenShell contains the agent before it spends.",
	},
	{
		step: "CLI",
		title: "Commands are the meter",
		description: "Shell and tool calls are where cost actually forms.",
	},
	{
		step: "Proxy",
		title: "Egress becomes policy",
		description: "The proxy turns live execution into enforceable spend events.",
	},
	{
		step: "Ledger",
		title: "Finance gets closure",
		description: "The managed plane handles attribution and chargeback.",
	},
];

const heroLiveMetrics = [
	{label: "Today", value: "$482.70", tone: "text-white"},
	{label: "Flagged", value: "03", tone: "text-rose-300"},
	{label: "Protected", value: "$1.2k", tone: "text-emerald-300"},
];

const heroAttributionLines = [
	"agent-coder-12 -> payments-api -> platform",
	"cursor-credit-burst -> akhil -> engineering",
	"claude-code-session -> rollout client -> chargeback",
];

const heroVendorMix = [
	{label: "Cursor", amount: "$182.40", width: "78%"},
	{label: "Claude Code", amount: "$149.20", width: "61%"},
	{label: "Copilot", amount: "$94.60", width: "42%"},
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

function HeroSummaryCard({className = ""}: {className?: string}) {
	return (
		<div
			className={`glow-card spend-hero-glow rounded-[28px] border border-white/14 spend-dark-panel p-5 shadow-xl ${className}`}
		>
			<div className="flex items-start justify-between gap-4">
				<div>
					<p className="text-xs uppercase tracking-[0.22em] text-white/45">Live proxy snapshot</p>
					<p className="mt-2 text-lg font-semibold text-white">Spend control before the invoice exists</p>
				</div>
				<span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
					Live
				</span>
			</div>

			<div className="mt-5 rounded-2xl border border-rose-400/18 bg-rose-500/10 p-4">
				<div className="flex items-start justify-between gap-3">
					<div className="min-w-0">
						<p className="text-[10px] uppercase tracking-[0.22em] text-rose-200/70">Proxy event</p>
						<p className="mt-2 text-sm font-semibold text-white">Agent loop exceeded baseline by 18x</p>
						<p className="mt-1 text-sm leading-6 text-white/68">
							Paused after 15 minutes with repo mapping and chargeback preserved.
						</p>
					</div>
					<AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-300" />
				</div>
			</div>

			<div className="mt-4 grid gap-3 sm:grid-cols-3">
				{heroLiveMetrics.map((stat) => (
					<div
						key={stat.label}
						className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
					>
						<p className="text-[10px] uppercase tracking-[0.18em] text-white/45">{stat.label}</p>
						<p className={`mt-3 text-xl font-semibold ${stat.tone}`}>{stat.value}</p>
					</div>
				))}
			</div>

			<div className="mt-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm">
				<div className="flex items-center justify-between gap-3">
					<span className="text-white/72">Incident rule</span>
					<span className="font-semibold text-white">Suspend at 8x baseline</span>
				</div>
			</div>
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

			<div className="container-custom relative z-10 py-[84px] lg:py-[104px] xl:py-[128px]">
				<div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_420px] xl:items-start xl:gap-16">
					<div className="max-w-[640px] space-y-10 lg:space-y-12">
						<SectionLabel light>OpenShell-based runtime + customer-prem proxy</SectionLabel>

						<div className="space-y-8">
							<h1 className="font-display text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-bold tracking-tight leading-[1.06] text-balance">
								Control AI spend where agents run.
								<br />
								<span className="text-white/65">Not after the invoice lands.</span>
							</h1>
							<div className="max-w-[560px] space-y-4 text-base sm:text-[1.0625rem] lg:text-lg leading-[1.7] text-white/70 text-pretty">
								<p>
									StringCost gives enterprises an OpenShell-based runtime for coding agents and a proxy
									deployed in the customer environment.
								</p>
								<p>
									Every model call, tool call, and CLI session flows through that proxy, while the managed
									control plane handles policy, reporting, and governance.
								</p>
							</div>
						</div>

						<div className="grid max-w-[620px] gap-3 sm:grid-cols-3">
							{headlineStats.map((stat) => (
								<div
									key={stat.label}
									className="flex min-h-[112px] flex-col justify-between rounded-2xl border border-white/15 bg-white/10 px-5 py-6 backdrop-blur-sm"
								>
									<p className={`text-[28px] font-semibold leading-none ${stat.tone}`}>{stat.value}</p>
									<p className="pt-4 text-[11px] uppercase tracking-[0.18em] text-white/52 sm:text-xs sm:tracking-[0.2em]">
										{stat.label}
									</p>
								</div>
							))}
						</div>

						<div className="flex flex-col gap-3 pt-3 sm:flex-row sm:items-center sm:gap-4">
							<span className="cta-glow">
								<a href="http://app.stringcost.com/" className={`${heroPrimaryButton} w-full sm:w-auto`}>
									Track your AI spend
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
							</span>
							<a
								href="https://calendar.app.google/hjN2HkZBLJMtSuku7"
								className={`${secondaryButtonLight} w-full sm:w-auto`}
							>
								Contact sales
							</a>
						</div>

						<div className="xl:hidden">
							<HeroSummaryCard />
						</div>
					</div>

					<div className="relative hidden w-full max-w-[420px] justify-self-start xl:block xl:justify-self-end xl:pt-12">
						<div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-white/10 via-transparent to-brand-accent-200/15 blur-3xl" />
						<HeroSummaryCard />
					</div>
				</div>
			</div>
		</section>
	);
}

export function SpendContent() {
	return (
		<>
			<section className="bg-brand-surface border-y border-brand-border/40">
				<div className="container-custom py-[72px] lg:py-[96px]">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<div className="space-y-6">
							<SectionLabel>Deployment model</SectionLabel>
							<h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-display font-bold tracking-tight leading-[1.1] text-balance text-brand-text-primary">
								The runtime, proxy, and ledger are separate on purpose.
							</h2>
							<p className="text-lg leading-8 text-brand-text-secondary text-pretty">
								OpenShell contains execution. StringCost sits on the egress path. The managed control plane
								closes the financial loop with policy, attribution, and reporting.
							</p>
							<div className="rounded-2xl border border-brand-accent-300 bg-brand-accent-300/10 p-6">
								<p className="text-sm font-medium text-brand-text-primary">
									The important point is not observability after the fact. It is control while the session is
									still alive.
								</p>
							</div>
						</div>

						<div className="grid gap-4 md:grid-cols-2">
							{heroArchitectureLayers.map((layer, index) => (
								<div
									key={layer.title}
									className={`rounded-[28px] border border-brand-border bg-white p-6 shadow-sm ${
										index === 2 ? "md:col-span-2" : ""
									}`}
								>
									<div className="flex items-start gap-4">
										<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-accent-100/50">
											<layer.icon className="h-5 w-5 text-brand-text-secondary" />
										</div>
										<div>
											<p className="text-xs uppercase tracking-[0.2em] text-brand-text-muted">{layer.kicker}</p>
											<p className="mt-2 text-lg font-semibold text-brand-text-primary">{layer.title}</p>
											<p className="mt-2 text-sm leading-6 text-brand-text-secondary">{layer.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="mt-12 glow-card spend-panel rounded-[32px] border border-brand-border p-6 shadow-lg">
						<div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
							<div className="rounded-[28px] border border-brand-border/70 bg-white p-6">
								<div className="flex items-center gap-3">
									<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-accent-100/50">
										<Users className="h-5 w-5 text-brand-text-secondary" />
									</div>
									<div>
										<p className="text-xs uppercase tracking-[0.2em] text-brand-text-muted">What the proxy sees</p>
										<p className="mt-1 text-lg font-semibold text-brand-text-primary">
											Repo, user, and cost center before vendor billing lands
										</p>
									</div>
								</div>
								<div className="mt-5 space-y-3 text-sm text-brand-text-secondary">
									{heroAttributionLines.map((line) => (
										<div
											key={line}
											className="flex items-center gap-3 rounded-2xl border border-brand-border/60 bg-brand-base px-4 py-3"
										>
											<span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
											<span>{line}</span>
										</div>
									))}
								</div>
							</div>

							<div className="space-y-5">
								<div className="rounded-[28px] border border-rose-200 bg-rose-50 p-6">
									<p className="text-xs uppercase tracking-[0.2em] text-rose-700">Live control</p>
									<p className="mt-2 text-lg font-semibold text-brand-text-primary">
										Proxy event fired before the invoice existed
									</p>
									<p className="mt-2 text-sm leading-6 text-brand-text-secondary">
										Agent loop exceeded baseline by 18x. The session paused after 15 minutes with repo mapping
										and chargeback context intact.
									</p>
								</div>

								<div className="rounded-[28px] border border-brand-border/70 bg-white p-6">
									<p className="text-xs uppercase tracking-[0.2em] text-brand-text-muted">Vendor surface</p>
									<div className="mt-4 flex flex-wrap gap-2">
										{heroVendorMix.map((row) => (
											<span
												key={row.label}
												className="rounded-full border border-brand-border/70 bg-brand-base px-3 py-1.5 text-xs text-brand-text-secondary"
											>
												{row.label}
											</span>
										))}
									</div>
									<p className="mt-4 text-sm leading-6 text-brand-text-secondary">
										This is the layer that turns raw execution into a ledger entry finance can govern.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative overflow-hidden bg-brand-base text-brand-text-primary">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,193,215,0.2),transparent_60%)]" />

				<div className="container-custom relative z-10 py-[60px] lg:py-[84px]">
					<div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
						<SectionLabel>Runaway spend</SectionLabel>
						<h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-display font-bold tracking-tight leading-[1.1] text-balance">
							The budget breaks inside the runtime.
						</h2>
						<p className="text-lg text-brand-text-secondary max-w-2xl mx-auto text-pretty">
							AI coding tools moved cost from flat seats to live execution. Agent loops, CLI sessions, and tool
							calls now create spend before a vendor invoice exists.
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
									<p>A single runtime loop can 10x your bill before anyone sees the invoice.</p>
								</div>
								<div>
									<p className="font-semibold text-brand-text-primary mb-1">Dynamic consumption</p>
									<p>Power users, CLIs, and tool retries can cost 50x more than light users.</p>
								</div>
							</div>
						</article>
					</div>

					<div className="spend-signal-mask mt-8">
						<div className="spend-signal-track py-2">
							{Array.from({length: 2}).map((_, copyIndex) => (
								<div
									key={copyIndex}
									className="spend-signal-group"
									aria-hidden={copyIndex === 1}
								>
									{runtimePressurePoints.map((point) => (
										<div
											key={`${copyIndex}-${point.title}`}
											className="w-[280px] sm:w-[320px] rounded-2xl border border-brand-overlay/60 bg-white/85 px-5 py-5 shadow-sm backdrop-blur-sm"
										>
											<p className="text-xs uppercase tracking-[0.2em] text-brand-text-muted">
												{point.title}
											</p>
											<p className="mt-3 text-sm leading-6 text-brand-text-secondary">
												{point.description}
											</p>
										</div>
									))}
								</div>
							))}
						</div>
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
										When one developer can ship that much AI-generated code, the real meter is runtime
										execution, not seat count. Without a proxy on that path, the extra velocity turns straight
										into <strong className="text-brand-text-primary">uncapped token burn</strong> and{" "}
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
									Fifteen concurrent sessions means fifteen live cost surfaces. The control point is the runtime
									and proxy boundary, not the invoice artifact at month-end.
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
							Modern agents package work as shell commands, generated code, and tool calls. Run them inside an
							OpenShell-based runtime, route egress through a StringCost proxy in your environment, and the
							managed control plane gets the budget, attribution, and audit trail.
						</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto mb-10">
						{cliBridgeSteps.map((item) => (
							<div
								key={item.step}
								className="rounded-[24px] border border-white/15 bg-white/5 p-4 backdrop-blur-sm"
							>
								<div className="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-accent-200">
									{item.step}
								</div>
								<p className="mt-4 text-base font-semibold text-white">{item.title}</p>
								<p className="mt-2 text-sm leading-6 text-white/68">{item.description}</p>
							</div>
						))}
					</div>

					<div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-10">
						<div className="rounded-2xl border border-rose-300/25 bg-gradient-to-br from-rose-400/12 via-white/5 to-transparent p-6 backdrop-blur-sm shadow-[0_20px_60px_-40px_rgba(251,113,133,0.6)]">
							<div className="flex items-center gap-3 mb-4">
								<div className="h-10 w-10 rounded-full bg-rose-300/20 ring-1 ring-rose-200/30 flex items-center justify-center text-sm font-bold text-rose-200">
									GT
								</div>
								<div>
									<a
										href="https://x.com/garrytan/status/2031910564344262988"
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm font-semibold text-white hover:text-rose-100 hover:underline"
									>
										@garrytan
									</a>
									<p className="text-xs text-rose-100/65">Y Combinator CEO</p>
								</div>
							</div>
							<blockquote className="text-sm text-white/80 leading-relaxed italic mb-4">
								&ldquo;<strong className="text-white not-italic">MCP sucks honestly.</strong> It eats too much
								context window and you have to toggle it on and off and the auth sucks. I vibe coded a{" "}
								<strong className="underline-hand-green text-white not-italic">CLI wrapper</strong> in 30
								minutes... it worked 100x better and was like 100LOC.&rdquo;
							</blockquote>
							<p className="text-xs text-rose-100/70 border-l-2 border-rose-200/60 pl-3">
								YC&apos;s CEO ditched MCP for a CLI he built in 30 minutes.
							</p>
						</div>

						<div className="rounded-2xl border border-sky-300/25 bg-gradient-to-br from-sky-400/12 via-white/5 to-transparent p-6 backdrop-blur-sm shadow-[0_20px_60px_-40px_rgba(56,189,248,0.55)]">
							<div className="flex items-center gap-3 mb-4">
								<div className="h-10 w-10 rounded-full bg-sky-300/20 ring-1 ring-sky-200/30 flex items-center justify-center text-sm font-bold text-sky-200">
									ML
								</div>
								<div>
									<a
										href="https://x.com/morganlinton/status/2031795683897077965"
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm font-semibold text-white hover:text-sky-100 hover:underline"
									>
										@morganlinton
									</a>
									<p className="text-xs text-sky-100/65">on Perplexity</p>
								</div>
							</div>
							<blockquote className="text-sm text-white/80 leading-relaxed italic mb-4">
								&ldquo;The cofounder and CTO of Perplexity just said internally at Perplexity they&apos;re{" "}
								<strong className="underline-hand-green text-white not-italic">moving away from MCPs</strong> and
								instead using APIs and CLIs.&rdquo;
							</blockquote>
							<p className="text-xs text-sky-100/70 border-l-2 border-sky-200/60 pl-3">
								Perplexity is dropping MCP for APIs and CLIs internally.
							</p>
						</div>

						<div className="rounded-2xl border border-amber-300/25 bg-gradient-to-br from-amber-300/12 via-white/5 to-transparent p-6 backdrop-blur-sm shadow-[0_20px_60px_-40px_rgba(251,191,36,0.5)]">
							<div className="flex items-center gap-3 mb-4">
								<div className="h-10 w-10 rounded-full bg-amber-300/20 ring-1 ring-amber-200/30 flex items-center justify-center text-sm font-bold text-amber-100">
									KV
								</div>
								<div>
									<a
										href="https://x.com/KaranVaidya6/status/2037530089706176638"
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm font-semibold text-white hover:text-amber-50 hover:underline"
									>
										@KaranVaidya6
									</a>
									<p className="text-xs text-amber-50/65">Composio</p>
								</div>
							</div>
							<blockquote className="text-sm text-white/80 leading-relaxed italic mb-4">
								&ldquo;We posed a simple question: MCP or CLI? Basically everyone under 35 said CLI. Final score
								- <strong className="underline-hand-green text-white not-italic">MCP: 3 vs CLI: 17</strong>. SF
								has spoken.&rdquo;
							</blockquote>
							<p className="text-xs text-amber-50/70 border-l-2 border-amber-200/60 pl-3">
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
								If agents write code through a CLI, then the spend boundary is where that CLI leaves the
								sandbox. StringCost owns that path: runtime policy in OpenShell, egress control in the proxy,
								and ledger policy in the managed plane.
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

						<div className="spend-divider my-10" />

						<div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
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
								<div className="mt-5 space-y-3 text-sm text-brand-text-secondary">
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

					<div className="overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-md">
						<div className="min-w-[760px] overflow-hidden">
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

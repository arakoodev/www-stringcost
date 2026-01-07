import React from "react";
import { Zap, AlertTriangle, ShieldCheck, PieChart, Coins, Scale, CheckCircle, BarChart3, Lock, RefreshCw, Layers, ArrowRightLeft, Cpu, Server, Code } from 'lucide-react';

const buttonBase = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-matter font-semibold transition-colors duration-150";
const primaryButton = `${buttonBase} bg-[#210F26] text-white hover:bg-[#0D0D0D]`;
const secondaryButton = `${buttonBase} border border-brand-accent-300 text-brand-text-secondary hover:bg-brand-accent-100/60`;

const creditTags = [
	{label: "Protect Margins", color: "bg-brand-accent-100 text-brand-text-secondary"},
	{label: "Prevent Bill Shock", color: "bg-brand-accent-200 text-brand-text-primary"},
	{label: "Ship Faster", color: "bg-brand-accent-300 text-white"},
];

export function OutcomeCreditsHero() {
	return (
		<section className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-8 py-[72px] sm:py-[100px] lg:py-[128px]'>
				<span className='font-body text-[15px] uppercase tracking-[0.3em] text-brand-text-muted font-medium'>Billing Infrastructure for Agents</span>
				<div className='flex flex-col gap-6 max-w-4xl'>
					<h1 className='font-display text-[28px] sm:text-[44px] md:text-[56px] lg:text-[72px] font-bold tracking-tight leading-[1.1] text-balance'>
						StringCost:<br />AI Credits Gateway.
					</h1>
					<div className='space-y-4 max-w-3xl'>
						<p className='font-display text-xl sm:text-2xl font-medium text-brand-text-primary leading-tight text-balance'>
							A production-grade credit system needs to handle complex logic that billing providers like Stripe don&apos;t support.
						</p>
						<p className='font-body text-lg leading-[1.55] text-brand-text-secondary text-pretty'>
							Implement the credit-based billing model used by <strong className='text-brand-text-primary'>Lovable</strong> without building the backend yourself.
						</p>
					</div>
					<div className='flex flex-wrap gap-2 pt-2'>
						{creditTags.map((tag) => (
							<span key={tag.label} className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tag.color}`}>
								{tag.label}
							</span>
						))}
					</div>
				</div>

				<div className='flex flex-col gap-3 sm:flex-row sm:items-center pt-4'>
					<a
						href='https://calendar.app.google/hjN2HkZBLJMtSuku7'
						className={primaryButton}
					>
						Schedule a Demo
					</a>
					<a
						href='https://calendar.app.google/hjN2HkZBLJMtSuku7'
						className={secondaryButton}
					>
						Contact Sales
					</a>
				</div>
			</div>
		</section>
	);
}

export function OutcomeCreditsContent() {
	return (
		<>
			{/* Learning from Lovable Section - Reordered as First */}
			<section className='bg-brand-base text-brand-text-primary pb-[72px]'>
				<div className='container-custom flex flex-col lg:flex-row gap-10 items-start'>
					<div className='lg:w-2/3 space-y-6'>
						<h3 className='font-display text-2xl font-semibold text-brand-text-primary'>Why AI Companies Must Learn to Stop Worrying and Love Credits</h3>
						<div className='p-8 rounded-2xl bg-brand-surface border border-brand-accent-200 shadow-sm'>
							<div className='flex items-center gap-3 mb-6'>
								<span className='inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#FF4F4F]/10 text-[#FF4F4F] font-bold text-xl'>L</span>
								<h4 className='text-xl font-matter font-bold text-brand-text-primary'>Real-World Example: AI Builder &ldquo;Lovable&rdquo;</h4>
							</div>
							
							<p className='text-brand-text-secondary mb-6'>
								Lovable, an AI coding assistant, adopted a credit system (e.g., 100 credits for €25). On the surface, it&apos;s a great example of outcome-based billing. But the implementation revealed critical lessons:
							</p>

							<div className='grid gap-6 md:grid-cols-2'>
								<div className='space-y-2'>
									<h5 className='font-bold text-red-700 flex items-center gap-2'>
										<AlertTriangle className="w-4 h-4" /> Rapid, Opaque Burn
									</h5>
									<p className='text-sm text-brand-text-secondary'>
										Users saw credits vanish without explanation. One user spent $225 in a month with zero transparency on <em>why</em>. <strong className='text-brand-text-primary'>StringCost solves this with audit logs for every deduction.</strong>
									</p>
								</div>
								<div className='space-y-2'>
									<h5 className='font-bold text-red-700 flex items-center gap-2'>
										<AlertTriangle className="w-4 h-4" /> Failures Cost Money
									</h5>
									<p className='text-sm text-brand-text-secondary'>
										If the AI errored 3x, Lovable still charged. Users felt punished for the tool&apos;s mistakes. <strong className='text-brand-text-primary'>StringCost lets you programmatically refund failed tool calls.</strong>
									</p>
								</div>
								<div className='space-y-2'>
									<h5 className='font-bold text-red-700 flex items-center gap-2'>
										<AlertTriangle className="w-4 h-4" /> Unpredictable Costs
									</h5>
									<p className='text-sm text-brand-text-secondary'>
										A feature that cost 5 credits one day might cost 8 the next. <strong className='text-brand-text-primary'>StringCost provides strict rate-limiting and cost-capping per user.</strong>
									</p>
								</div>
								<div className='space-y-2'>
									<h5 className='font-bold text-brand-accent-300 flex items-center gap-2'>
										<CheckCircle className="w-4 h-4" /> Strategic Friction
									</h5>
									<p className='text-sm text-brand-text-secondary'>
										Positive friction: Users admitted the credit cost forced them to &ldquo;think strategically&rdquo; and reduce waste. Used correctly, credits align incentives.
									</p>
								</div>
							</div>
							
							<div className='mt-6 pt-6 border-t border-brand-border/20'>
								<p className='text-sm font-medium text-brand-text-primary italic'>
									The takeaway: Credits are the right model, but a poor implementation alienates users. StringCost gives you the Lovable model—without the user backlash.
								</p>
							</div>
						</div>
					</div>

					{/* Validation Callout - Sticky Side */}
					<div className='lg:w-1/3 lg:sticky lg:top-24 space-y-6'>
						<div className='rounded-2xl border border-brand-accent-300 bg-brand-accent-300/10 p-6 shadow-sm mesh-gradient-bg'>
							<div className='flex flex-col gap-4'>
								<div className='flex items-center gap-3'>
									<div className='flex-shrink-0'>
										<img src='/img/a16z-logo.svg' alt='a16z' className='h-8 w-auto' />
									</div>
								</div>
								<div>
									<p className='font-body text-base font-semibold text-brand-text-primary'>
										<a href='https://a16z.com/newsletter/december-2024-enterprise-newsletter-ai-is-driving-a-shift-towards-outcome-based-pricing/' target='_blank' rel='noopener noreferrer' className='hover:underline'>
											Andreessen Horowitz just declared:
										</a>
									</p>
									<p className='mt-2 font-body text-base italic text-brand-text-secondary'>
										<em>&ldquo;AI is driving a shift towards <strong className='underline-hand text-brand-text-primary'>outcome-based pricing</strong>. Software is becoming labor.&rdquo;</em>
									</p>
								</div>
								<div className='border-l-4 border-brand-accent-200 pl-4 pt-2'>
									<p className='font-body text-base font-semibold text-brand-text-primary'>
										In practice, &ldquo;Outcome-based Billing&rdquo; means <strong className='underline-hand text-brand-text-primary'>Credits</strong>.
									</p>
									<p className='mt-2 font-body text-sm text-brand-text-secondary'>
										Look at the industry leaders: <strong className='text-brand-text-primary'>Lovable</strong>, <strong className='text-brand-text-primary'>Gamma</strong>, and <strong className='text-brand-text-primary'>Miro</strong> have all shifted to credit-based models to solve usage volatility.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Credits vs Usage Section - Enhanced */}
			<section className='bg-brand-base text-brand-text-primary'>
				<div className='max-w-4xl mx-auto space-y-10 border-y border-brand-border/40 py-12'>
					<div className='text-center max-w-3xl mx-auto'>
						<h3 className='font-display text-3xl font-semibold text-brand-text-primary mb-4'>Why Credit-Based instead of Usage-Based?</h3>
						<p className='text-brand-text-secondary text-lg text-pretty'>
							Pure usage billing exposes users to raw metrics they don't understand. Subscriptions expose you to margin risk. Credits are the only model that aligns incentives.
						</p>
					</div>

					<div className='grid gap-8 md:grid-cols-2'>
						{/* Problem Column */}
						<div className='space-y-6 p-6 rounded-3xl bg-red-50/30 border border-red-100'>
							<div className='flex items-center gap-3 mb-2'>
								<div className='p-2 bg-red-100 text-red-600 rounded-lg'><AlertTriangle className="w-5 h-5"/></div>
								<h4 className='font-matter font-bold text-red-900 text-xl'>Usage Billing Fails AI</h4>
							</div>
							<p className='text-brand-text-secondary text-sm leading-relaxed'>
								Pure pay-as-you-go forces users to grapple with technical metrics like token counts. It&apos;s too complicated. Customers end up surprised by unpredictable bills or confused about how usage translates to value.
							</p>
							<div className='space-y-2 mt-4'>
								<div className='flex items-start gap-2 text-sm text-red-800/80'>
									<span className='text-red-500 font-bold'>×</span> Cognitive load friction
								</div>
								<div className='flex items-start gap-2 text-sm text-red-800/80'>
									<span className='text-red-500 font-bold'>×</span> Unpredictable bills (Bill Shock)
								</div>
							</div>
						</div>

						{/* Solution Column */}
						<div className='space-y-6 p-6 rounded-3xl bg-brand-surface border border-brand-accent-300 shadow-lg relative overflow-hidden'>
							<div className='absolute top-0 right-0 w-24 h-24 bg-brand-accent-300/10 rounded-bl-full -mr-4 -mt-4'></div>
							<div className='flex items-center gap-3 mb-2 relative z-10'>
								<div className='p-2 bg-brand-accent-300 text-white rounded-lg'><CheckCircle className="w-5 h-5"/></div>
								<h4 className='font-matter font-bold text-brand-text-primary text-xl'>Credits Fix the Experience</h4>
							</div>
							<p className='text-brand-text-secondary text-sm leading-relaxed relative z-10'>
								Outcome credits abstract complexity. They serve as a unified currency, allowing users to pay for results (tasks completed) while you ensure the credits cover underlying costs.
							</p>
							
							<div className='grid grid-cols-1 gap-3 relative z-10 pt-2'>
								<div className='flex items-start gap-3 p-3 rounded-xl bg-white border border-brand-accent-100/50 shadow-sm'>
									<div className='mt-1 text-brand-accent-300'><Zap className="w-4 h-4"/></div>
									<div>
										<span className='block font-bold text-brand-text-primary text-sm'>Simplicity for Users</span>
										<span className='text-xs text-brand-text-secondary'>Price actions ("Report = 2 credits"), not seconds.</span>
									</div>
								</div>
								<div className='flex items-start gap-3 p-3 rounded-xl bg-white border border-brand-accent-100/50 shadow-sm'>
									<div className='mt-1 text-brand-accent-300'><Lock className="w-4 h-4"/></div>
									<div>
										<span className='block font-bold text-brand-text-primary text-sm'>Predictability Cap</span>
										<span className='text-xs text-brand-text-secondary'>Prepayment acts as a spending cap. Zero surprise bills.</span>
									</div>
								</div>
								<div className='flex items-start gap-3 p-3 rounded-xl bg-white border border-brand-accent-100/50 shadow-sm'>
									<div className='mt-1 text-brand-accent-300'><Scale className="w-4 h-4"/></div>
									<div>
										<span className='block font-bold text-brand-text-primary text-sm'>Flexibility</span>
										<span className='text-xs text-brand-text-secondary'>Adjust "cost" per feature on the fly to protect margin.</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* The Problem Section - Concrete Numbers (Reordered) */}
			<section className='bg-brand-base text-brand-text-primary pb-[72px]'>
				<div className='container-custom flex flex-col gap-10'>
					<div className='max-w-3xl'>
						<h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>The Math Doesn&apos;t Work</h2>
						<p className='mt-4 text-lg leading-[1.55] text-brand-text-secondary text-pretty'>
							You are building an agent. You have two bad choices for billing.
						</p>
					</div>

					<div className='grid gap-6 md:grid-cols-2'>
						<article className='flex flex-col gap-4 p-8 rounded-2xl border border-brand-overlay/60 bg-brand-surface shadow-sm'>
							<div className='flex items-center gap-2 text-red-600'>
								<BarChart3 className="w-5 h-5" />
								<h3 className='text-lg font-matter font-semibold text-brand-text-primary'>Choice A: Subscription ($20/mo)</h3>
							</div>
							<p className='text-brand-text-secondary'>
								A user runs a complex loop. It uses GPT-4o and loops 30 times.
								<br/><br/>
								<strong>Cost to you:</strong> $5.00 for one session.
								<br/>
								<strong>Revenue:</strong> $0 (included in plan).
								<br/><br/>
								<span className='text-red-700 font-semibold'>Result: Power users kill your margin.</span>
							</p>
						</article>
						<article className='flex flex-col gap-4 p-8 rounded-2xl border border-brand-overlay/60 bg-brand-surface shadow-sm'>
							<div className='flex items-center gap-2 text-orange-600'>
								<AlertTriangle className="w-5 h-5" />
								<h3 className='text-lg font-matter font-semibold text-brand-text-primary'>Choice B: Usage ($0.03/run)</h3>
							</div>
							<p className='text-brand-text-secondary'>
								You show the user a meter. They stare at the "Run Agent" button and hesitate. "Will this cost $0.10 or $10.00?"
								<br/><br/>
								<strong>Usage anxiety causes churn.</strong> Users hate unpredictable bills more than they love your features.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* The Solution Section - Concrete Solution */}
			<section className='bg-gradient-to-br from-brand-accent-100/30 via-brand-base to-brand-accent-200/20 text-brand-text-primary py-[72px] lg:py-[100px]'>
				<div className='container-custom flex flex-col gap-10'>
					<div className='max-w-3xl'>
						<h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>The Solution: Prepaid Credits</h2>
						<p className='mt-4 text-lg leading-[1.55] text-brand-text-secondary text-pretty'>
							Sell a bucket of credits upfront (e.g. 500 credits for $20). Price your actions in credits.
						</p>
					</div>

					<div className='rounded-3xl border border-brand-accent-300 bg-brand-accent-300/10 p-8 shadow-sm mesh-gradient-bg'>
						<div className='grid gap-8 md:grid-cols-3'>
							<div className='space-y-3'>
								<div className='w-12 h-12 rounded-full bg-brand-accent-300 flex items-center justify-center text-white mb-4'>
									<ShieldCheck className="w-6 h-6" />
								</div>
								<h3 className='text-lg font-matter font-bold'>Guaranteed Margin</h3>
								<p className='text-sm text-brand-text-secondary'>Price a "Research Task" at 50 credits. If the API cost is $0.50, and 50 credits cost user $1.00, you enforce a 50% margin programmatically.</p>
							</div>
							<div className='space-y-3'>
								<div className='w-12 h-12 rounded-full bg-brand-accent-200 flex items-center justify-center text-brand-text-primary mb-4'>
									<Coins className="w-6 h-6" />
								</div>
								<h3 className='text-lg font-matter font-bold'>Predictable Spend</h3>
								<p className='text-sm text-brand-text-secondary'>The user knows they have 500 credits. They can't accidentally spend $500. It acts as a prepaid cap, eliminating billing anxiety.</p>
							</div>
							<div className='space-y-3'>
								<div className='w-12 h-12 rounded-full bg-brand-accent-100 flex items-center justify-center text-brand-text-primary mb-4'>
									<RefreshCw className="w-6 h-6" />
								</div>
								<h3 className='text-lg font-matter font-bold'>Flexible Pricing</h3>
								<p className='text-sm text-brand-text-secondary'>Change credit prices on the fly. Make "Fast Mode" cost 2x credits without changing your Stripe plans or re-contracting users.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* The Hidden Complexity Section - Restored and Enhanced */}
			<section className='bg-white text-brand-text-primary py-[72px] lg:py-[100px]'>
				<div className='container-custom flex flex-col gap-10'>
					<div className='max-w-3xl'>
						<h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>The Hidden Complexity of Credit Systems</h2>
						<p className='mt-4 text-lg leading-[1.55] text-brand-text-secondary text-pretty'>
							<em className='underline-hand text-brand-text-primary'>&ldquo;We&apos;ll just add a column to the users table.&rdquo;</em>
							<br/>
							That works until you hit your first race condition. A production-grade credit system needs to handle complex logic that billing providers like Stripe don&apos;t support.
						</p>
					</div>

					<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
						<div className='space-y-3 p-6 rounded-2xl bg-brand-surface border border-brand-accent-100/50'>
							<div className='inline-flex items-center gap-2 font-semibold text-brand-text-primary'>
								<span className='flex items-center justify-center w-6 h-6 rounded-full bg-brand-accent-100 text-xs'>1</span>
								Non-Linear Burn Rates
							</div>
							<p className='text-sm text-brand-text-secondary'>Not all agents are equal. You need to charge different rates for "Fast Mode" (GPT-4) vs "Standard Mode" (GPT-3.5) dynamically based on the model selected at runtime.</p>
						</div>
						<div className='space-y-3 p-6 rounded-2xl bg-brand-surface border border-brand-accent-100/50'>
							<div className='inline-flex items-center gap-2 font-semibold text-brand-text-primary'>
								<span className='flex items-center justify-center w-6 h-6 rounded-full bg-brand-accent-100 text-xs'>2</span>
								Real-Time Blocking
							</div>
							<p className='text-sm text-brand-text-secondary'>If a user runs out of credits <em>during</em> a stream, you must cut the connection instantly. Polling every minute isn&apos;t enough; you need millisecond-level gatekeeping.</p>
						</div>
						<div className='space-y-3 p-6 rounded-2xl bg-brand-surface border border-brand-accent-100/50'>
							<div className='inline-flex items-center gap-2 font-semibold text-brand-text-primary'>
								<span className='flex items-center justify-center w-6 h-6 rounded-full bg-brand-accent-100 text-xs'>3</span>
								Rollover Logic
							</div>
							<p className='text-sm text-brand-text-secondary'>Enterprise contracts are messy. "Monthly credits expire, but Top-Up credits roll over." Your ledger must distinguish between different <em>types</em> of credits in the same wallet.</p>
						</div>
						<div className='space-y-3 p-6 rounded-2xl bg-brand-surface border border-brand-accent-100/50'>
							<div className='inline-flex items-center gap-2 font-semibold text-brand-text-primary'>
								<span className='flex items-center justify-center w-6 h-6 rounded-full bg-brand-accent-100 text-xs'>4</span>
								Concurrency &amp; Locking
							</div>
							<p className='text-sm text-brand-text-secondary'>When a user fires 5 parallel agent requests, you can&apos;t just read/write the balance. You need atomic locking to prevent double-spending and race conditions.</p>
						</div>
						<div className='space-y-3 p-6 rounded-2xl bg-brand-surface border border-brand-accent-100/50'>
							<div className='inline-flex items-center gap-2 font-semibold text-brand-text-primary'>
								<span className='flex items-center justify-center w-6 h-6 rounded-full bg-brand-accent-100 text-xs'>5</span>
								Input-Cost Awareness
							</div>
							<p className='text-sm text-brand-text-secondary'>To guarantee margin, the burn rate must be tied to live input costs (tokens). A static "1 credit per run" kills your margin if the run loops 50 times.</p>
						</div>
						<div className='space-y-3 p-6 rounded-2xl bg-brand-surface border border-brand-accent-100/50'>
							<div className='inline-flex items-center gap-2 font-semibold text-brand-text-primary'>
								<span className='flex items-center justify-center w-6 h-6 rounded-full bg-brand-accent-100 text-xs'>6</span>
								Refills &amp; Top-Ups
							</div>
							<p className='text-sm text-brand-text-secondary'>When a user hits 0, you need an auto-recharge trigger that pings Stripe. Building this orchestration securely is a full product in itself.</p>
						</div>
					</div>

					{/* Consumption Mapping Subsection */}
					<div className='mt-12 pt-12 border-t border-brand-border/40'>
						<div className='max-w-3xl mb-8'>
							<h3 className='font-display text-2xl font-semibold text-brand-text-primary'>Consumption Mapping: The Magic</h3>
							<p className='text-brand-text-secondary mt-2 text-sm text-pretty'>
								The hardest part of the complexity is simply deciding how many credits each action &ldquo;costs&rdquo;. StringCost supports flexible mapping strategies:
							</p>
						</div>
						<div className='space-y-4'>
							<div className='flex gap-4 items-start p-4 rounded-xl bg-brand-surface/50 border border-brand-border/40'>
								<div className='w-8 h-8 rounded-full bg-brand-accent-100 flex items-center justify-center shrink-0 font-bold text-brand-text-primary text-sm'>1</div>
								<div>
									<h4 className='font-bold text-brand-text-primary'>Dynamic Proportional Pricing</h4>
									<p className='text-sm text-brand-text-secondary'>Tie credits to measurable units like 1 credit per 1,000 tokens. Abstraction keeps it simple for users, while protecting your margin.</p>
								</div>
							</div>
							<div className='flex gap-4 items-start p-4 rounded-xl bg-brand-surface/50 border border-brand-border/40'>
								<div className='w-8 h-8 rounded-full bg-brand-accent-200 flex items-center justify-center shrink-0 font-bold text-brand-text-primary text-sm'>2</div>
								<div>
									<h4 className='font-bold text-brand-text-primary'>Tiered & Fast-Lane Pricing</h4>
									<p className='text-sm text-brand-text-secondary'>Charge non-linearly. A &ldquo;Fast Agent&rdquo; using a premier model consumes credits faster than a standard agent. You define the rate.</p>
								</div>
							</div>
							<div className='flex gap-4 items-start p-4 rounded-xl bg-brand-surface/50 border border-brand-border/40'>
								<div className='w-8 h-8 rounded-full bg-brand-accent-300 flex items-center justify-center shrink-0 font-bold text-white text-sm'>3</div>
								<div>
									<h4 className='font-bold text-brand-text-primary'>Outcome-Based Bundles</h4>
									<p className='text-sm text-brand-text-secondary'>Price per coarse outcome (e.g., &ldquo;Video Gen = 20 credits&rdquo;). Crucially, our proxy ensures the burn is proportional to actual backend costs, protecting you from outliers.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why This Had to Be a Proxy Section */}
			<section className='bg-gradient-to-br from-[#210F26] to-[#3D1F4A] text-white py-[72px] lg:py-[100px]'>
				<div className='container-custom flex flex-col gap-10'>
					<div className='max-w-4xl mx-auto text-center space-y-6'>
						<h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>
							Credits Require a New Kind of Infrastructure
						</h2>
						<p className='text-lg leading-[1.55] text-white/80 max-w-2xl mx-auto'>
							<em>You can&apos;t abstract outcomes if you&apos;re buried in vendor dashboards.</em>
						</p>
						<p className='text-lg leading-[1.55] text-white/90 max-w-3xl mx-auto'>
							The AI economy needed a new billing unit — the <strong>credit</strong>. But to make credits programmable, cost-aware, and fair, we had to observe everything. That&apos;s why we built <strong>StringCost as a proxy</strong>, not a plugin.
						</p>
					</div>

					<div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-4 sm:p-8">
						<img src="/img/financial-architecture.svg" alt="StringCost Financial Architecture" className="w-full h-auto rounded-lg" />
					</div>

					<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto'>
						<div className='p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm'>
							<h4 className='font-bold mb-2'>Total Observability</h4>
							<p className='text-sm text-white/70'>Every token, tool call, reasoning loop — captured at the edge.</p>
						</div>
						<div className='p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm'>
							<h4 className='font-bold mb-2'>Real-Time Costs</h4>
							<p className='text-sm text-white/70'>Live cost visibility across 250+ LLMs and APIs instantly.</p>
						</div>
						<div className='p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm'>
							<h4 className='font-bold mb-2'>Dynamic Burn</h4>
							<p className='text-sm text-white/70'>Adjust credit burn per call, per agent, per product line.</p>
						</div>
						<div className='p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm'>
							<h4 className='font-bold mb-2'>Policy Engine</h4>
							<p className='text-sm text-white/70'>Built-in pricing logic, expiry, and economic policy enforcement.</p>
						</div>
					</div>

					<div className='max-w-3xl mx-auto text-center border-l-4 border-brand-accent-300 pl-6 py-2 bg-white/5 rounded-r-lg'>
						<p className='text-lg italic font-medium text-white/90'>
							&ldquo;Stripe abstracted merchant complexity. We abstract multi-agent complexity.&rdquo;
						</p>
						<p className='mt-2 text-sm text-white/60'>
							Only a proxy can see the full economic picture — and turn usage chaos into clean, trustable credits.
						</p>
					</div>
				</div>
			</section>

			{/* How it Works - Technical / Functional */}
			<section className='bg-brand-base text-brand-text-primary py-[72px] lg:py-[100px]'>
				<div className='container-custom flex flex-col gap-10'>
					<div className='max-w-4xl space-y-6'>
						<div className='inline-block px-4 py-2 rounded-full bg-brand-accent-300 text-white text-xs font-semibold uppercase tracking-wider'>
							How It Works
						</div>
						<h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>Drop-in Billing Infrastructure</h2>
						<p className='text-lg leading-[1.55] text-brand-text-secondary text-pretty'>
							You don&apos;t need to build a ledger, write a proxy, or handle race conditions in Postgres. StringCost handles the plumbing.
						</p>
					</div>

					<div className='flex flex-col lg:flex-row gap-10 items-start'>
						<div className='lg:w-1/2 space-y-8'>
							<div className='relative p-6 rounded-2xl bg-white border border-brand-accent-100 shadow-sm'>
								<div className='flex items-center gap-3 mb-3'>
									<div className='p-2 bg-brand-accent-100 rounded-lg'><Server className="w-5 h-5 text-brand-text-primary"/></div>
									<h3 className='text-lg font-matter font-bold'>1. The Proxy</h3>
								</div>
								<p className='text-sm text-brand-text-secondary'>
									Route your LLM calls through `api.stringcost.com`. We act as a gateway between your app and OpenAI/Anthropic.
								</p>
							</div>
							<div className='relative p-6 rounded-2xl bg-white border border-brand-accent-100 shadow-sm'>
								<div className='flex items-center gap-3 mb-3'>
									<div className='p-2 bg-brand-accent-100 rounded-lg'><Code className="w-5 h-5 text-brand-text-primary"/></div>
									<h3 className='text-lg font-matter font-bold'>2. The Ledger</h3>
								</div>
								<p className='text-sm text-brand-text-secondary'>
									We meter tokens in real-time. We calculate the cost, check the user&apos;s wallet balance, and deduct credits instantly.
								</p>
							</div>
							<div className='relative p-6 rounded-2xl bg-white border border-brand-accent-100 shadow-sm'>
								<div className='flex items-center gap-3 mb-3'>
									<div className='p-2 bg-brand-accent-100 rounded-lg'><Lock className="w-5 h-5 text-brand-text-primary"/></div>
									<h3 className='text-lg font-matter font-bold'>3. The Gatekeeper</h3>
								</div>
								<p className='text-sm text-brand-text-secondary'>
									Zero balance? Request blocked. You never pay for an API call that you haven&apos;t already been paid for.
								</p>
							</div>
						</div>

						<div className='lg:w-1/2'>
							<div className='rounded-3xl border border-brand-accent-200 bg-brand-surface p-8 shadow-lg mesh-gradient-bg'>
								<h3 className='text-xl font-medium leading-relaxed text-brand-text-primary mb-4'>
									Stripe handles the Charge.<br/>We handle the Consumption.
								</h3>
								<p className='text-brand-text-secondary text-base leading-relaxed'>
									Building a credit system is hard. You need to handle top-ups, expirations, decimals, and concurrency. StringCost gives you a robust Credits API so you can focus on building your agent, not your billing engine.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className='bg-brand-base text-brand-text-primary pb-[72px] lg:pb-[100px]'>
				<div className='container-custom flex flex-col gap-6 text-center'>
					<div className='mx-auto flex max-w-3xl flex-col gap-4 rounded-3xl border border-brand-accent-100 bg-brand-surface p-10 shadow-sm mesh-gradient-bg'>
						<h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>
							Start Monetizing Your Agent
						</h2>
						<p className='text-lg leading-[1.55] text-brand-text-secondary text-pretty'>
							Don&apos;t let infrastructure stall your launch. Add credit-based billing today.
						</p>
						<div className='flex flex-col items-center justify-center gap-3 pt-4 sm:flex-row'>
							<a href='https://calendar.app.google/hjN2HkZBLJMtSuku7' className={primaryButton}>
								Get the Gateway
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

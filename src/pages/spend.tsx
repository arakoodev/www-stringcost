import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { SpendHero, SpendContent } from "../components/spend/SpendBody";

export default function SpendPage() {
	return (
		<Layout
			title="AI Developer Tool Spend Management | StringCost"
			description="Financial control plane for AI developer tools. Detect runaway agent loops, attribute costs by user and repo, and enforce budgets before the invoice lands."
		>
			<Head>
				<meta property="og:image" content="https://www.stringcost.com/img/og-spend.png" />
				<meta property="og:image:secure_url" content="https://www.stringcost.com/img/og-spend.png" />
				<meta name="twitter:image" content="https://www.stringcost.com/img/og-spend.png" />
				<meta
					property="og:description"
					content="Detect runaway agent loops, attribute AI tool costs by user and repo, and enforce spend policy before the invoice lands."
				/>
				<meta
					name="twitter:description"
					content="AI tool spend now behaves like infrastructure. StringCost gives finance and engineering one control plane."
				/>
			</Head>
			<div className="-mt-[64px] flex flex-col">
				<SpendHero />
				<SpendContent />
			</div>
		</Layout>
	);
}

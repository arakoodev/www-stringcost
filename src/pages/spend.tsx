import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { SpendHero, SpendContent } from "../components/spend/SpendBody";

export default function SpendPage() {
	return (
		<Layout title="AI Developer Tool Spend Management | StringCost" description="One runaway agent loop can burn $1,500 in a day. StringCost gives you real-time anomaly detection, user-level tracking, and project-level cost attribution for AI coding tools.">
			<Head>
				<meta property="og:image" content="https://www.stringcost.com/img/og-spend.png" />
				<meta property="og:image:secure_url" content="https://www.stringcost.com/img/og-spend.png" />
				<meta name="twitter:image" content="https://www.stringcost.com/img/og-spend.png" />
				<meta property="og:description" content="One runaway agent loop can burn $1,500 in a day. StringCost gives you real-time anomaly detection, user-level tracking, and project-level cost attribution." />
				<meta name="twitter:description" content="One runaway agent. One weekend. $1,500. StringCost catches runaway AI spend in 15 minutes." />
			</Head>
			<div className="-mt-[64px] flex flex-col">
				<SpendHero />
				<SpendContent />
			</div>
		</Layout>
	);
}

import Layout from "@theme/Layout";
import { SpendHero, SpendContent } from "../components/spend/SpendBody";

export default function SpendPage() {
	return (
		<Layout title="AI Spend Management | StringCost" description="AI coding assistants bill like cloud infrastructure. StringCost gives you user-level and project-level spend tracking, anomaly detection, and automated chargebacks.">
			<div className="-mt-[64px] flex flex-col">
				<SpendHero />
				<SpendContent />
			</div>
		</Layout>
	);
}

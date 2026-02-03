import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { X402Hero, X402Content } from "../components/x402/X402Body";

export default function X402Page() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title="StringCost - The missing layer that makes x402 viable" description="x402 needs accounting. StringCost provides credits, prepaid plans, refunds, usage caps, and line-item audit trails for agentic payments.">
			<div className="-mt-[64px] flex flex-col">
				<X402Hero />
				<X402Content />
			</div>
		</Layout>
	);
}

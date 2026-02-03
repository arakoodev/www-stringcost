import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { X402Hero, X402Content } from "../components/x402/X402Body";

export default function X402Page() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={`x402 | ${siteConfig.title}`} description="Proxy accounting for x402 payments">
			<div className="-mt-[64px] flex flex-col">
				<X402Hero />
				<X402Content />
			</div>
		</Layout>
	);
}

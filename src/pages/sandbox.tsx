import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { SandboxHero, SandboxContent } from "../components/sandbox/SandboxBody";

export default function SandboxPage() {
	return (
		<Layout
			title="OpenEral Agent Sandbox | StringCost"
			description="OpenEral gives Claude Code and custom AI agents an isolated PostgreSQL-backed home directory with automatic StringCost spend tracking."
		>
			<Head>
				<meta
					property="og:description"
					content="OpenEral gives Claude Code and custom AI agents an isolated PostgreSQL-backed home directory with automatic StringCost spend tracking."
				/>
				<meta
					name="twitter:description"
					content="A safe home for AI agents: isolated Claude Code sessions, PostgreSQL persistence, and StringCost spend metering."
				/>
			</Head>
			<div className="-mt-[64px] flex flex-col">
				<SandboxHero />
				<SandboxContent />
			</div>
		</Layout>
	);
}

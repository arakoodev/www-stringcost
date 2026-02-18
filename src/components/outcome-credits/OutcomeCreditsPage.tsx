import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  OutcomeCreditsHero,
  OutcomeCreditsContent,
} from "./OutcomeCreditsBody";

export default function OutcomeCreditsPage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Outcome Credits | ${siteConfig.title}`}
      description="Outcome-based credits for AI Agents"
    >
      <div className="-mt-[64px] flex flex-col">
        <OutcomeCreditsHero />
        <OutcomeCreditsContent />
      </div>
    </Layout>
  );
}

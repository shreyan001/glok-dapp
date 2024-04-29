import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  

  const InfoCard = (
    <div className="p-4 md:p-8 border border-black mb-5 rounded bg-blue-200 w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        🌐 Unlock Knowledge with Glok
      </h1>
      <ul>
        <li>
          💡
          <span className="ml-2">
            Glok revolutionizes research access and monetization by leveraging Web3 technology and AI.
          </span>
        </li>
        <li>
          🚀
          <span className="ml-2">
            Say goodbye to traditional paywalls and subscriptions – Glok lets you unlock precise information when you need it, one token at a time.
          </span>
        </li>
        <li>
          💻
          <span className="ml-2">
            Glok provides access to a vast repository of research documents, data sets, and insights.
          </span>
        </li>
        <li>
          🔍
          <span className="ml-2">
            Easily search for and access specific information on any topic, paying only for the exact content you need.
          </span>
        </li>
        <li>
          🛡️
          <span className="ml-2">
            Ensure better data output by using bigger prompts when asking questions. Contributors who are valid publishers can upload their research documents to enrich the Glok repository.
          </span>
        </li>
      </ul>
    </div>
  );

  return (
    <div> 
      <ChatWindow
        endpoint="api/chat/retrieval_agents"
        emptyStateComponent={InfoCard}
        showIngestForm={true}
        placeholder={
          'Ask anything and unlock knowledge with Glok!'
        }
        emoji="🔓"
        titleText="Glok Knowledge Bot"
      />
    </div>
  );
}

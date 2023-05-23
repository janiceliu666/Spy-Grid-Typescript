import React from "react";
import { Agent } from "../types";

interface AgentProfileProps {
  agent: Agent;
}

const AgentProfile: React.FC<AgentProfileProps> = ({ agent }) => {
  return (
    <div>
      <img src={agent.picture.large} alt="Agent" />
      <h2>{agent.login.username}</h2>
      <p>
        {agent.name.first} {agent.name.last}
      </p>
      {/* Add other agent details here */}
    </div>
  );
};

export default AgentProfile;

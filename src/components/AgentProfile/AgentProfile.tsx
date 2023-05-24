import React from "react";
import useFetchAgent from "../../hooks/useFetchAgent";
import { Agent } from "../types";
import { Button, Spin, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const AgentProfile = () => {
  const { agent, loading, error, fetchAgent } = useFetchAgent();

  console.log("fetch");
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!agent) {
    return null; // Return null or display a fallback UI if agent is null
  }

  return (
    <div className="agent-profile">
      <img src={agent.picture.large} alt="Agent" />
      <h1 className="codename">{agent.login.username}</h1>
      <div className="details">
        <p>
          <strong>Name:</strong> {agent.name.first} {agent.name.last}
        </p>
        <p>
          <strong>City:</strong> {agent.location.city}
        </p>
        <p>
          <strong>State:</strong> {agent.location.state}
        </p>
        <p>
          <strong>Country:</strong> {agent.location.country}
        </p>
        <p>
          <strong>Gender:</strong> {agent.gender}
        </p>
        <p>
          <strong>Date of Birth:</strong>{" "}
          {new Date(agent.dob.date).toLocaleDateString()}
        </p>
        <p>
          <strong>Eye Color:</strong> {agent.eyeColor}
        </p>
        <p>
          <strong>Time Zone:</strong> {agent.location.timezone.offset} (
          {agent.location.timezone.description})
        </p>
      </div>
      <button onClick={fetchAgent}>Next Asset</button>
    </div>
  );
};

export default AgentProfile;

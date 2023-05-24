import React from "react";
import { Button, Spin, Typography } from "antd";
import useFetchAgent from "../../hooks/useFetchAgent";
import styles from "./AgentProfile.module.css"; // Import the CSS module

// Destructure Typography components
const { Title, Text } = Typography;

const AgentProfile = () => {
  // Use the useFetchAgent hook to get agent data, loading status, error message, and fetchAgent function
  const { agent, loading, error, fetchAgent } = useFetchAgent();

  // If data is still loading, display a loading spinner
  if (loading) {
    return (
      <div className={styles["loading-container"]}>
        <Spin />
      </div>
    );
  }

  // If there's an error, display an error message
  if (error) {
    return (
      <div className={styles["error-container"]}>
        <Text type="danger">Error: {error}</Text>
      </div>
    );
  }

  // Return null or display a fallback UI if agent is null
  if (!agent) {
    return null;
  }

  // Render the agent profile UI
  return (
    <div className={styles["agent-profile"]}>
      <div className={styles["agent-image"]}>
        <img src={agent.picture.large} alt="Agent" />
      </div>
      <div className={styles["agent-details"]}>
        <Title level={3} className={styles["codename"]}>
          {agent.login.username}
        </Title>
        <div className={styles["agent-info"]}>
          {/* Rest of the component */}
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
        <Button className={styles["next-button"]} onClick={fetchAgent}>
          Next Asset
        </Button>
      </div>
    </div>
  );
};

export default AgentProfile;

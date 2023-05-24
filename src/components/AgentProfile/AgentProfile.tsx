import React from "react";
import { Button, Spin, Typography } from "antd";
// import { LoadingOutlined } from "@ant-design/icons";
import useFetchAgent from "../../hooks/useFetchAgent";
import styles from "./AgentProfile.module.css"; // Import the CSS module

const { Title, Text } = Typography;

const AgentProfile = () => {
  const { agent, loading, error, fetchAgent } = useFetchAgent();

  if (loading) {
    return (
      <div className={styles["loading-container"]}>
        <Spin />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles["error-container"]}>
        <Text type="danger">Error: {error}</Text>
      </div>
    );
  }

  if (!agent) {
    return null; // Return null or display a fallback UI if agent is null
  }

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

// import React from "react";
// import useFetchAgent from "../../hooks/useFetchAgent";
// import { Agent } from "../types";
// import { Button, Spin, Typography } from "antd";
// import { LoadingOutlined } from "@ant-design/icons";

// const AgentProfile = () => {
//   const { agent, loading, error, fetchAgent } = useFetchAgent();

//   console.log("fetch");
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!agent) {
//     return null; // Return null or display a fallback UI if agent is null
//   }

//   return (
//     <div className="agent-profile">
//       <img src={agent.picture.large} alt="Agent" />
//       <h1 className="codename">{agent.login.username}</h1>
//       <div className="details">
//         <p>
//           <strong>Name:</strong> {agent.name.first} {agent.name.last}
//         </p>
//         <p>
//           <strong>City:</strong> {agent.location.city}
//         </p>
//         <p>
//           <strong>State:</strong> {agent.location.state}
//         </p>
//         <p>
//           <strong>Country:</strong> {agent.location.country}
//         </p>
//         <p>
//           <strong>Gender:</strong> {agent.gender}
//         </p>
//         <p>
//           <strong>Date of Birth:</strong>{" "}
//           {new Date(agent.dob.date).toLocaleDateString()}
//         </p>
//         <p>
//           <strong>Eye Color:</strong> {agent.eyeColor}
//         </p>
//         <p>
//           <strong>Time Zone:</strong> {agent.location.timezone.offset} (
//           {agent.location.timezone.description})
//         </p>
//       </div>
//       <button onClick={fetchAgent}>Next Asset</button>
//     </div>
//   );
// };

// export default AgentProfile;

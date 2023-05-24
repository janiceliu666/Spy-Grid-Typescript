import { useState, useEffect } from "react";
import { Agent } from "../components/types";

const useFetchAgent = () => {
  const [loading, setLoading] = useState(true);
  const [agent, setAgent] = useState<Agent | null>(null);
  const [error, setError] = useState<string | null>(null); //useState(null)

  //const err: unknown = getUnknownValue();s
  const fetchAgent = async () => {
    try {
      console.log("fetch");
      const response = await fetch("https://randomuser.me/api/");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const agentData = data.results[0];
      agentData.eyeColor = ["blue", "brown", "green", "black", "gray"][
        Math.floor(Math.random() * 5)
      ];
      setAgent(agentData);
      setLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error occurred");
      }
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAgent();
  }, []);

  return { agent, loading, error, fetchAgent };
};

export default useFetchAgent;

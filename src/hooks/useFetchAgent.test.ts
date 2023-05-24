// import { renderHook, act } from "@testing-library/react-hooks";
//import { renderHook, act } from "@testing-library/react-hooks";
const { renderHook, act } = require("@testing-library/react-hooks");
const fetchMock = require("jest-fetch-mock");

//import fetchMock from "jest-fetch-mock";
import useFetchAgent from "./useFetchAgent";

fetchMock.enableMocks();

describe("useFetchAgent", () => {
  it("fetches agent on successful API call", async () => {
    const mockAgent = {
      name: { first: "John", last: "Doe" },
      location: { city: "London", state: "London", country: "UK" },
      dob: { date: "1990-01-01" },
      nat: "BR",
      timezone: { description: "London" },
    };

    fetchMock.mockResponseOnce(JSON.stringify({ results: [mockAgent] }));

    const { result, waitForNextUpdate } = renderHook(() => useFetchAgent());

    act(() => {
      expect(result.current.loading).toBe(true);
    });

    await waitForNextUpdate();

    act(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.agent).toEqual(mockAgent);
      expect(result.current.error).toBe(null);
    });
  });

  it("handles error for failed API call", async () => {
    const errorMessage = "Network Error";

    fetchMock.mockRejectOnce(new Error(errorMessage));

    const { result, waitForNextUpdate } = renderHook(() => useFetchAgent());

    act(() => {
      expect(result.current.loading).toBe(true);
    });

    await waitForNextUpdate();

    act(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.agent).toBe(null);
      expect(result.current.error).toBe(errorMessage);
    });
  });
});

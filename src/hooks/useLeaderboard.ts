import { useState, useEffect } from "react";
import { Entry } from "./Entry.type";
// import { generateMockEntries, staticMockResponse } from "./mockResponse";

type LeaderboardError =
  | { errorMessage: string; technicalMessage?: string }
  | undefined;

const REFRESH_MS = 60 * 1000;

const sortEntry = (entry: Entry, otherEntry: Entry): number =>
  entry.score - otherEntry.score;

const forceWait = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

const createFetchData = (
  setEntries: (entries: Entry[]) => void,
  setIsLoading: (_: boolean) => void,
  setError: (_: LeaderboardError) => void
) => async () => {
  setIsLoading(true);
  try {
    const response = await fetch(
      "https://u3jbutkvth.execute-api.eu-west-1.amazonaws.com/prod/scores?seed=4"
    ).then((data) => data.json());

    if (response.length > 0) {
      setEntries(response.sort(sortEntry).reverse());
    } else {
      setError({ errorMessage: "Could not update leaderboard" });
    }
  } catch (err) {
    setError({
      errorMessage: "Could not update leaderboard",
      technicalMessage: err.toString(),
    });
  }

  // For debugging
  // setEntries(staticMockResponse.sort(sortEntry).reverse());
  // setEntries(generateMockEntries(100).sort(sortEntry).reverse());

  // Request is too fast, show progressbar a bit longer so the visitor knows the scores will be updated
  await forceWait(); 
  setIsLoading(false);
};

// TODO clean up timer on unmount
const useLeaderboard = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<LeaderboardError>();

  useEffect(() => {
    const fetchData = createFetchData(setEntries, setIsLoading, setError);
    // const timer = 
    setInterval(fetchData, REFRESH_MS);
    fetchData();
  }, []);

  return { entries, isLoading, error };
};

export default useLeaderboard;

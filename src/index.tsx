/**
 * Single file, minimal example of a React app that uses Relay.
 */
import { createRoot } from "react-dom/client";
import {
  graphql,
  RelayEnvironmentProvider,
  useLazyLoadQuery,
} from "react-relay";
import { Environment, Network, RecordSource, Store } from "relay-runtime";
import type { srcIndexQuery } from "./__generated__/srcIndexQuery.graphql";
import { Suspense } from "react";

// Create the mock network
const network = Network.create(async (operation, variables) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Mock response data
  return {
    data: {
      viewer: {
        name: "Mock User",
      },
    },
  };
});

// Create the Relay environment
const environment = new Environment({
  network,
  store: new Store(new RecordSource()),
});

const query = graphql`
  query srcIndexQuery {
    viewer {
      name
    }
  }
`;

const App = () => {
  const data = useLazyLoadQuery<srcIndexQuery>(query, {});
  return <div>{data?.viewer?.name}</div>;
};

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <RelayEnvironmentProvider environment={environment}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </RelayEnvironmentProvider>
);

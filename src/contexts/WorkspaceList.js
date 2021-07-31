import React, { createContext, useState, useContext, useEffect } from "react";
import last from "lodash/last";
import isEmpty from "lodash/isEmpty";

import { defaultSourceState } from "../utils";
import { workspaceFilter } from "../constants";

import { useBackend, useAuth } from "./Auth";
import { AuthStatus } from "./Auth/state";

const WorkspaceListContext = createContext({
  ...defaultSourceState
});

const filterWorkspaces = (workspaces, filter) => {
  if (filter) {
    return workspaces.filter(workspace => workspace.title.match(filter));
  }
  return workspaces;
};

const getFirstWorkspace = workspaces => {
  if (workspaces.length) {
    return last(workspaces[0].id.split("/"));
  }
  return undefined;
};

export const WorkspaceListProvider = ({ children }) => {
  const { authStatus } = useAuth();
  const backend = useBackend();
  const [workspaceListState, setWorkspaceListState] = useState({
    ...defaultSourceState
  });

  const [firstWorkspace, setFirstWorkspace] = useState(undefined);

  useEffect(() => {
    const getWorkspaces = async () => {
      setWorkspaceListState({ ...workspaceListState, isLoading: true });

      try {
        const workspaces = [];
        let pageQueryResult = await backend
          .workspaces()
          .forCurrentUser()
          .query();

        let pageItems = pageQueryResult.items;
        while (!isEmpty(pageItems)) {
          const allDescriptors = await Promise.all(
            pageItems.map(workspace => workspace.getDescriptor())
          );

          workspaces.push(...allDescriptors);
          pageItems = (await pageQueryResult.next()).items;
        }

        const filteredWorkspaces = filterWorkspaces(
          workspaces,
          workspaceFilter
        );
        setWorkspaceListState({
          ...workspaceListState,
          isLoading: false,
          data: filteredWorkspaces
        });

        setFirstWorkspace(getFirstWorkspace(filteredWorkspaces));
      } catch (error) {
        setWorkspaceListState({
          ...workspaceListState,
          isLoading: false,
          error
        });
      }
    };

    setWorkspaceListState({ ...workspaceListState, isLoading: false });

    if (authStatus === AuthStatus.AUTHORIZED) {
      getWorkspaces().catch(console.error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authStatus, backend]);

  return (
    <WorkspaceListContext.Provider
      value={{ ...workspaceListState, firstWorkspace }}
    >
      {children}
    </WorkspaceListContext.Provider>
  );
};

export const useWorkspaceList = () => useContext(WorkspaceListContext);

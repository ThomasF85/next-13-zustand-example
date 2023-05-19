"use client";

import { useRef } from "react";
import useStore from "./useStore";

/*
  Initializer sets state in client store exactly once before client
  rendering starts. Otherwise it could trigger component updates while
  the updated components are still rendering - thus causing errors.
  This initializer is intended to be used in multiple pages.
  Make sure to call with all relevant state on every
  server component page load.
*/
function StoreInitializer({ state }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    if (!useStore.getState().isInitialized) {
      useStore.setState({ ...state, isInitialized: true });
    }
    initialized.current = true;
  }
  return null;
}

export default StoreInitializer;

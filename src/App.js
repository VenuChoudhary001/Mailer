import React from "react";

import { PROVIDER } from "./context/mail-context";
import ReactRouterSetup from "./Router";
function App() {
  return (
    <div>
      <PROVIDER>
        <ReactRouterSetup />
      </PROVIDER>
    </div>
  );
}

export default App;

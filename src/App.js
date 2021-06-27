import React from "react";
import { PROVIDER } from "./context/mail-context";
import ReactRouterSetup from "./Router";
import { USERPROVIDER } from "./context/user-context";
function App() {
  return (
    <div>
      <USERPROVIDER>
        <PROVIDER>
          <ReactRouterSetup />
        </PROVIDER>
      </USERPROVIDER>
    </div>
  );
}

export default App;

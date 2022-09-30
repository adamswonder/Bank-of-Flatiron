import React from "react";
import AccountContainer from "./AccountContainer";

//this renders the whole project file of transactions
function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;

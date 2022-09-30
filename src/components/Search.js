import React from "react";

//pass search function from AccountContainer as props
function Search({ realTimeSearch }) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={realTimeSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;

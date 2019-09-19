import React from "react";

function Sidebar(props) {
  return (
    <div id="sidebar">
      <img src="theindex.svg" className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <a href={props.showList()}><button >AUTHORS</button></a>
        </h4>
      </section>
    </div>
  );
}

export default Sidebar;

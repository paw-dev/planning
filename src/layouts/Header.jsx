import React from "react";

function Header({ filterList, goToToday, goToNextDay, goToPreviousDay }) {
  return (
    <div className="Header">
      <header className="App-header">
        {/* <button className="main-retractable-panel"></button> */}

        <h1>Планы и итоги</h1>
        {/* <button className="today">{goToToday}Сегодня</button> */}
        {/* <div className="flip">
          <button type="button" className="back" onClick={goToPreviousDay}>
            &lang;
          </button>
          <button type="button" className="forward" onClick={goToNextDay}>
            &rang;
          </button>
        </div> */}
        {/* <button type="button" className="menu">
          День
        </button> */}
        <div className="filterBtn">{filterList}</div>
      </header>
    </div>
  );
}

export default Header;

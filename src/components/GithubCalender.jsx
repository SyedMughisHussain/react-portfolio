import React from "react";
import GitHubCalendar from "react-github-calendar";
import '../App.css'

const HowDaysICode = () => {
  const colorTheme = {
    dark: ["#FF8A8A", "#FF5C5C", "#FF2E2E", "#FF0000", "#D10000"],
  };

  return (
    <div
      style={{
        marginTop: "20px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        width: "90%"
      }}
    >
      <GitHubCalendar
        blockSize={15}
        blockMargin={5}
        theme={colorTheme}
        fontSize={16} 
        username="SyedMughisHussain"
      />
    </div>
  );
};

export default HowDaysICode;

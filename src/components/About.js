import { Link } from "react-router-dom";

function About() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        alt="Loading..."
        src="https://cdn.discordapp.com/emojis/712701509498044446.webp?size=96&quality=lossless"
        style={{
          width: "96px",
          height: "96px",
        }}
        title="DarkViperAU"
      />
      <p style={{ textAlign: "center", padding: "0 0 5em 0" }}>In pogress.</p>
      <Link to="/">Go back.</Link>
    </div>
  );
}

export default About;

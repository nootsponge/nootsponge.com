import { Link } from "react-router-dom";

function About() {
  return (
    <div class="bg-gradient-to-r from-[#5a2fc2] to-[#834dc1] text-white flex h-screen w-full items-center justify-center flex-col">
      <img
        alt="DarkViperAU"
        src="https://cdn.discordapp.com/emojis/712701509498044446.webp?size=96&quality=lossless"
        class="h-auto w-auto"
        title="DarkViperAU"
      />
      <p style={{ textAlign: "center", padding: "0 0 5em 0" }}>In pogress.</p>
      <Link to="/">Go back.</Link>
    </div>
  );
}

export default About;

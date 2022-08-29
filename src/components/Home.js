import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <img
        src="https://cdn.n00t.io/file/ntspng/pfp/sunny_bp_200.gif"
        alt="Loading..."
      />
      <span class="beeg no-margin">NootSponge</span>
      <br />
      <span class="smol">Software Engineer</span>
      <a href="mailto:andrew@nootsponge.com" target="_blank" rel="noreferrer">
        CONTACT
      </a>
      &nbsp;|&nbsp;
      <a href="https://twitter.com/nootsponge" target="_blank" rel="noreferrer">
        TWITTER
      </a>
      &nbsp;|&nbsp;
      <a
        href="https://steamcommunity.com/id/nootspongeborb"
        target="_blank"
        rel="noreferrer"
      >
        STEAM
      </a>
      &nbsp;|&nbsp;
      <a
        href="https://discord.com/users/148680149548793856"
        target="_blank"
        rel="noreferrer"
      >
        DISCORD
      </a>
      &nbsp;|&nbsp;
      <Link to="/about">ABOUT</Link>
    </>
  );
}

export default Home;

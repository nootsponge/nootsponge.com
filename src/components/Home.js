import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.boop = this.boop.bind(this);
  }

  boop(e) {
    e = e || window.event;
    let xPos = e.clientX;
    let yPos = e.clientY;

    xPos -= 12.5;
    yPos -= 27;

    // create new image
    let boop = document.createElement("img");
    boop.src = "/img/heart-solid.png";
    boop.style.position = "absolute";
    boop.style.left = xPos + "px";
    boop.style.top = yPos + "px";
    boop.width = 25;
    boop.height = 25;

    // random rotation from -10 to 10
    let rotation = Math.floor(Math.random() * 30) - 10;
    boop.style.transform = "rotate(" + rotation + "deg)";

    boop.classList.add("origin-center", "transition", "duration-[2000ms]");

    // add to document
    document.body.appendChild(boop);

    // translate up and fade out
    boop.animate(
      [
        {
          transform: "translateY(0px) rotate(" + rotation + "deg)",
          opacity: 1,
        },
        {
          transform: "translateY(-100px) rotate(" + rotation + "deg)",
          opacity: 0,
        },
      ],
      {
        duration: 2000,
        easing: "ease-in-out",
      }
    );

    // remove from document after animation
    setTimeout(() => {
      boop.remove();
    }, 1900);
  }

  render() {
    return (
      <div
        class="bg-cover bg-[-11rem] md:bg-center min-h-screen text-center text-white"
        style={{ backgroundImage: "url('/img/dark-city-background.jpg')" }}
      >
        <div class="w-full md:w-1/3 m-auto pt-20 md:mr-72 flex items-center justify-center flex-col md:float-right">
          <img
            id="headshot"
            src="/img/ren-headshot-transparent.png"
            class="w-80 h-auto max-md:-scale-x-100"
            alt="Loading..."
            useMap="#boopmap"
          />
          <map name="boopmap" id="boopmap">
            <area
              shape="rect"
              style={{ cursor: "pointer" }}
              coords="50,165,105,225"
              alt="boop me"
              onClick={this.boop}
            />
          </map>
          <span class="text-4xl font-semibold text-[#e7da48]">NootSponge</span>
          <br />
          <span class="font-light text-[#e7da48] mt-1">
            Software Developer &amp; Web Designer
          </span>
          <Link
            to="/commissions"
            class="font-light transition-colors text-[#e7da48] hover:text-white underline md:no-underline"
          >
            commissions open!
          </Link>
          <Link
            to="/about"
            class="font-light transition-colors text-[#e7da48] hover:text-white underline md:no-underline"
          >
            about me
          </Link>
          <span class="font-light transition-colors text-[#e7da48] hover:text-white underline md:no-underline">
            <a
              class="transition-colors hover:text-white"
              href="mailto:contact@nootsponge.com"
            >
              contact@nootsponge.com
            </a>
          </span>
          <div class="w-full flex flex-column justify-center items-center space-x-4 mt-3">
            <a
              href="https://twitter.com/renfloof"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/img/twitter-logo.png"
                class="w-12 h-auto transition hover:brightness-75"
                alt="Twitter"
              />
            </a>
            <a
              href="https://discord.com/users/148680149548793856"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/img/discord-logo.png"
                class="w-12 h-auto transition hover:brightness-75"
                alt="Discord"
              />
            </a>
            <a href="https://t.me/nootsponge" target="_blank" rel="noreferrer">
              <img
                src="/img/telegram-logo.png"
                class="w-12 h-auto transition hover:brightness-75"
                alt="Telegram"
              />
            </a>
            <a
              href="https://steamcommunity.com/id/nootspongeborb"
              target="_blank"
              rel="noreferrer"
            >
              <a
                href="https://steamcommunity.com/id/nootspongeborb"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/steam-logo.png"
                  class="w-12 h-auto transition hover:brightness-75"
                  alt="Steam"
                />
              </a>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

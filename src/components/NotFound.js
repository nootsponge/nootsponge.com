import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div class="bg-gradient-to-r from-[#956afa] to-[#8000e3] text-white flex h-screen w-full items-center justify-center flex-col">
      <span class="text-6xl">
        <b>404</b> PAGE<b>NOT</b>FOUND
      </span>
      <Link to="/">Go back.</Link>
    </div>
  );
}

export default NotFound;

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div class="bg-gradient-to-r from-[#5a2fc2] to-[#834dc1] text-white flex h-screen w-full items-center justify-center flex-col">
      <span class="text-6xl">
        <b>404</b> PAGE<b>NOT</b>FOUND
      </span>
      <Link to="/" className="mt-1">
        Go back.
      </Link>
    </div>
  );
}

export default NotFound;

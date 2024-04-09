import { Link, Outlet } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Search",
    path: "/search",
  },
];

const RootPage = () => {
  return (
    <div className="px-4 py-8 max-w-screen-lg mx-auto">
      <nav className="mb-10">
        <ul className="flex gap-5 justify-center">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="font-semibold px-3 py-2 rounded-lg hover:bg-blue-200 bg-blue-100 text-blue-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
export { RootPage };

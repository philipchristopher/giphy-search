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
    <div className="space-y-10">
      <div className="flex gap-5">
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path}>
            {link.name}
          </Link>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export { RootPage };

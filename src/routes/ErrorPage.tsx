import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  const message = isRouteErrorResponse(error)
    ? error.statusText
    : "I believe we're in grave danger";

  return (
    <div className="max-w-prose mx-auto p-4">
      <div className="p-6 border rounded-2xl space-y-5">
        <h1 className="text-2xl font-bold">Whoa Nelly!</h1>
        <p className="text-lg">Something is wrong.</p>
        <p className="italic pl-2 border-l-4 border-rose-400 text-rose-400">
          {message}
        </p>
        <p>
          Take me <Link className="text-blue-500 underline" to="/">home</Link>!
        </p>
      </div>
    </div>
  );
};

export { ErrorPage };

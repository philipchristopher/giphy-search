type ErrorProps = {
    message: string;
  };
  
  const Error: React.FC<ErrorProps> = ({ message }) => {
    return (
      <div className="text-center text-red-500 p-4 bg-red-100 border-red-500 border rounded-lg">
        <p className="font-bold mb-2">Something went wrong. Please try again later.</p>
        <p className="text-sm">Error: {message}</p>
      </div>
    );
  };
  
  export { Error };
  
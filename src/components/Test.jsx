import { useState, useEffect } from "react";

function Test() {
  const [second, setSecond] = useState(5);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (second === 0) {
      setIsLoading(false);
    }
  }, [second]);

  return (
    <div className="flex items-center justify-center h-screen w-full bg-green-600 transition-all duration-500">
      {isLoading ? (
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-3 text-lg text-yellow-300">Loading... {second}s</p>
        </div>
      ) : (
        <h1 className="text-2xl font-semibold text-yellow-300">Welcome!</h1>
      )}
    </div>
  );
}

export default Test;

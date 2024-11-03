import { useState, useEffect, useRef } from "react";

interface ProgressBarProps {
  width?: string; // Width of the progress bar (e.g., '100%', '300px')
  increment?: number; // How much to increment the progress (default: 1)
  intervalTime?: number; // Interval time in milliseconds (default: 1000 ms)
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  width = "384px", // Default width
  increment = 1, // Default increment
  intervalTime = 100, // Default interval time
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning && progress < 100) {
      intervalRef.current = window.setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(intervalRef.current!); // Stop when progress reaches 100
            return 100;
          }
          return prevProgress + increment; // Increment the progress
        });
      }, intervalTime); // Adjust interval time as needed
    }

    // Cleanup function to clear the interval if the component unmounts
    return () => clearInterval(intervalRef.current!);
  }, [isRunning, progress, increment, intervalTime]);

  const start = () => {
    // Only start if the progress is less than 100
    if (progress < 100) {
      setIsRunning(true);
    }
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current!);
  };

  const reset = () => {
    stop();
    setProgress(0);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative h-6 bg-slate-100 rounded-[25px] overflow-hidden"
        style={{ width }}
      >
        <div
          className="absolute top-0 left-0 bottom-0 bg-green-400 transition-all duration-100"
          //style={{ width: `${progress}%` }}
          style={{
            width: "100%",
            transform: `scaleX(${progress / 100})`,
            transformOrigin: "left",
          }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuenow={progress}
          aria-valuemax={100}
        ></div>
        <span
          className="absolute w-full flex items-center justify-center"
          style={{ color: `${progress > 49 ? "#fff" : "#000"}` }}
        >
          {progress}%
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={start}
          className={`px-4 py-2 rounded-md text-white ${
            isRunning || progress >= 100
              ? "cursor-not-allowed bg-blue-300"
              : "bg-blue-500"
          }`}
          disabled={isRunning || progress >= 100}
        >
          Start
        </button>
        <button
          onClick={stop}
          className={`px-4 py-2 text-white rounded-md ${
            progress === 0 || progress >= 100
              ? "cursor-not-allowed bg-red-300"
              : "bg-red-500"
          }`}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button
          onClick={reset}
          className={`px-4 py-2 rounded-md text-white ${
            isRunning || progress === 0
              ? "cursor-not-allowed bg-slate-300"
              : "bg-gray-500"
          }`}
          disabled={isRunning || progress === 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;

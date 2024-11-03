import ProgressBar from "./ProgressBar";

const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h3 className="font-bold mb-4">Progress Bar</h3>
      <ProgressBar width="350px" intervalTime={100} increment={1} />
    </div>
  );
};

export default App;

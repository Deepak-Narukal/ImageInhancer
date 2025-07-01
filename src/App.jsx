import Inhance from "./Inhance";
import Upload from "./upload";

const App = () => {
  return (
    <div className="flex justify-center items-center bg-amber-200 h-screen">
      <div className="h-2/4 w-2/4 pt-2.5 pb-2.5 flex justify-around items-center bg-amber-500">
        <Upload />
        <button
          type="button"
          className="flex items-center border rounded-full bg-yellow-300 p-2.5 h-10 text-center"
        >
          Progress
        </button>
        <Inhance />
      </div>
    </div>
  );
};

export default App;

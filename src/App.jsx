import Calculator from "./components/Calculator";
import Result from "./components/Result";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-[#f0f7ff] p-4">
      <div className="bg-white h-full rounded-3xl shadow-xl flex max-w-4xl w-full overflow-hidden">
        <Calculator />
        <Result />
      </div>
    </div>
  );
}

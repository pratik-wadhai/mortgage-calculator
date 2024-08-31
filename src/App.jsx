import Calculator from "./components/Calculator";
import Result from "./components/Result";
import { useState } from "react";
export default function App() {
  const [result, setResult] = useState(null);
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-[#f0f7ff] p-4">
      <div className="bg-white h-full rounded-3xl shadow-xl flex max-w-4xl w-full overflow-hidden">
        <Calculator setResult={setResult} />
        <Result result={result} />
      </div>
    </div>
  );
}

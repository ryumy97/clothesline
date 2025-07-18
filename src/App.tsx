import { useEffect, useRef } from "react";
import "./App.css";
import Scene from "./canvas/scene";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const scene = new Scene(canvas);

    return () => {
      scene.kill();
    };
  });

  return <canvas className="absolute inset-0" ref={canvasRef} />;
}

export default App;

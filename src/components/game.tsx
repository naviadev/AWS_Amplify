`use client`;
import React, { useRef, useEffect } from "react";
import {
  canvasWidth,
  canvasHeight,
  setupEventListeners,
  updateGame,
} from "../service/data/gameData";
import { draw } from "../service/render/render";
const Game: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    setupEventListeners();
    const intervalId = setInterval(() => {
      updateGame();
      draw(ctx);
    }, 10);
    return () => clearInterval(intervalId);
  }, []);
  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
};
export default Game;

import { ball, paddle, score, canvasWidth, canvasHeight } from "../data/gameData";

export const draw = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  const drawBall = () => {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  };
  const drawPaddle = () => {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  };

  const drawScore = () => {
    ctx.font = "16px Arial";
    ctx.fillText("Score: " + score, 8, 20);
  };

  drawBall();
  drawPaddle();
  drawScore();
};

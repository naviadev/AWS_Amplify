import { Ball } from "../interface/ball.interface";
import { Paddle } from "../interface/paddle.interface";

export const canvasWidth = 400;
export const canvasHeight = 600;

export let ball: Ball = {
  x: canvasWidth / 2,
  y: canvasHeight - 30,
  radius: 10,
  speed: 12,
  dx: 2,
  dy: -2
};

export let paddle: Paddle = {
  x: canvasWidth / 2 - 75,
  y: canvasHeight - 20,
  width: 50,
  height: 10
};

export let rightPressed = false;
export let leftPressed = false;
export let score = 0;


export const setupEventListeners = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Right" || e.key === "ArrowRight") {
      rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      leftPressed = true;
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.key === "Right" || e.key === "ArrowRight") {
      rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      leftPressed = false;
    }
  });
};



export const updateGame = () => {
  // 공 이동 및 충돌 처리
  ball.x += ball.dx;
  ball.y += ball.dy;

  // 벽과 충돌
  if (ball.x + ball.radius > canvasWidth || ball.x - ball.radius < 0) {
    ball.dx = -ball.dx;
  }
  if (ball.y - ball.radius < 0) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.radius > canvasHeight) {
    // 공이 아래로 떨어졌을 때 처리 (게임 오버 로직 추가 가능)
  }

  // 패들과 충돌
  if (ball.y + ball.radius > paddle.y && ball.y < paddle.y + paddle.height) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy = -ball.dy;
      score++;
    }
  }

  // 패들 이동
  if (rightPressed && paddle.x < canvasWidth - paddle.width) {
    paddle.x += 10;
  } else if (leftPressed && paddle.x > 0) {
    paddle.x -= 10;
  }
};

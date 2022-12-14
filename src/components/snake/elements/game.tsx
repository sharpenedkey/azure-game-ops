import "./game.scss";

import React from "react";

const HEIGHT = 10;
const WIDTH = 10;

const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;
const STOP = 32;

const getRandom = () => {
  return {
    x: Math.floor(Math.random() * WIDTH),
    y: Math.floor(Math.random() * HEIGHT),
  };
};

const getStartingPosition = () => {
  return {
    x: 5,
    y: 5,
  };
};

const emptyRows = () =>
  [...Array(WIDTH)].map((_) => [...Array(HEIGHT)].map((_) => "grid-item"));

const increaseSpeed = (speed: number) => (speed > 10 ? speed - 10 : speed + 10);

const initialState = {
  rows: emptyRows(),
  snake: [getStartingPosition()],
  head: getStartingPosition(),
  food: getRandom(),
  direction: STOP,
  speed: 100,
};

interface IState {
  rows: string[][];
  snake: { x: number; y: number }[];
  head: { x: number; y: number };
  food: { x: number; y: number };
  direction: number;
  speed: number;
}

class Game extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.changeDirection;
    document.title = "snake-game";
  }

  componentDidUpdate() {
    this.isCollapsed();
    this.isEaten();
  }

  moveSnake = () => {
    let snakeCopy = [...this.state.snake];
    let head = { ...snakeCopy[snakeCopy.length - 1] };
    switch (this.state.direction) {
      case LEFT:
        head.y += -1;
        break;
      case UP:
        head.x += -1;
        break;
      case RIGHT:
        head.y += 1;
        break;
      case DOWN:
        head.x += 1;
        break;
      default:
        return;
    }
    /* keep the value within range of 0 to HEIGHT */
    head.x += HEIGHT * ((head.x < 0 ? 1 : 0) - (head.x >= HEIGHT ? 1 : 0));
    head.y += WIDTH * ((head.y < 0 ? 1 : 0) - (head.y >= WIDTH ? 1 : 0));

    snakeCopy.push(head);
    snakeCopy.shift();
    this.setState({
      snake: snakeCopy,
      head: head,
    });
    this.update();
  };

  isEaten() {
    let snakeCopy = [...this.state.snake];
    let head = { ...snakeCopy[snakeCopy.length - 1] };
    let food = this.state.food;
    if (head.x === food.x && head.y === food.y) {
      snakeCopy.push(head);
      this.setState({
        snake: snakeCopy,
        food: getRandom(),
        speed: increaseSpeed(this.state.speed),
      });
    }
  }

  update() {
    let newRows = emptyRows();
    this.state.snake.forEach(
      (element) => (newRows[element.x][element.y] = "snake")
    );
    newRows[this.state.food.x][this.state.food.y] = "food";
    this.setState({ rows: newRows });
  }

  isCollapsed = () => {
    let snake = this.state.snake;
    let head = { ...snake[snake.length - 1] };
    for (let i = 0; i < snake.length - 3; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        this.setState(initialState);
        alert(`game over: ${snake.length * 10}`);
      }
    }
  };

  changeDirection = ({ keyCode }: { keyCode: number }) => {
    let direction = this.state.direction;
    switch (keyCode) {
      case LEFT:
        direction = direction === RIGHT ? RIGHT : LEFT;
        break;
      case RIGHT:
        direction = direction === LEFT ? LEFT : RIGHT;
        break;
      case UP:
        direction = direction === DOWN ? DOWN : UP;
        break;
      case DOWN:
        direction = direction === UP ? UP : DOWN;
        break;
      case STOP:
        direction = STOP;
        break;
      default:
        break;
    }
    this.setState({
      direction: direction,
    });
  };

  render() {
    const displayRows = this.state.rows.map((row, i) =>
      row.map((value, j) => <div className={value} />)
    );
    return (
      <div className="a">
        <div className="snake-container">
          <div className="grid">{displayRows}</div>
        </div>
      </div>
    );
  }
}

export default Game;

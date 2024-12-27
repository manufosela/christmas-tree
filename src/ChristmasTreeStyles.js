import { css } from 'lit';

export const ChristmasTreeStyles = css`
  :host {
    display: block;
    padding: 0;
    margin: 0;
    position: relative;
    top: 250px;
    --color1: red;
    --color2: yellow;
    --tree-size: 100px;
    --trunk-color: #8b4513;
    --light1-color: red;
    --light1-shadow-color: blue;
    --light2-color: yellow;
    --light2-shadow-color: purple;
    --light-size: calc(var(--tree-size) / 6);
    --top-ornament-size: calc(var(--tree-size) * 0.66);
    --top-ornament-color: yellow;
    --top-ornament-bg-color: red;
    --bliking-time1: 1s;
    --blinking-time2: 1.5s;
  }

  .tree {
    position: relative;
    width: 0;
    height: 0;
    margin: 1rem;
    border-left: var(--tree-size) solid transparent;
    border-right: var(--tree-size) solid transparent;
    border-bottom: calc(var(--tree-size) * 2) solid #0a4a0a;
  }

  .tree::before,
  .tree::after {
    content: '';
    position: absolute;
    left: calc(var(--tree-size) * -1);
    width: 0;
    height: 0;
    border-left: var(--tree-size) solid transparent;
    border-right: var(--tree-size) solid transparent;
    border-bottom: calc(var(--tree-size) * 2) solid #0a4a0a;
  }

  .tree::before {
    top: calc(var(--tree-size) * -1.2);
  }

  .tree::after {
    top: calc(var(--tree-size) * -2.5);
  }

  .tree .ornament-top {
    position: absolute;
    top: calc(var(--tree-size) * -2.7);
    left: calc(var(--tree-size) / -6);
    width: calc(var(--tree-size) / 3);
    height: calc(var(--tree-size) / 3);
    font-size: var(--top-ornament-size);
    padding: 0;
    margin: 0;
    line-height: calc(var(--top-ornament-size) * 0.9);
    color: var(--top-ornament-color, yellow);
    background-color: var(--top-ornament-bg-color, red);
    border-radius: 50%;
    box-shadow: 0 0 5px 2px var(--top-ornament-color, yellow);
    animation: blink 3s infinite alternate;
    z-index: 2;
  }

  .tree .trunk {
    position: absolute;
    bottom: calc(var(--tree-size) * -2.5);
    left: calc(var(--tree-size) / -6);
    width: calc(var(--tree-size) / 3);
    height: calc(var(--tree-size) / 2);
    background-color: var(--trunk-color);
  }

  .light1 {
    position: absolute;
    width: var(--light-size);
    height: var(--light-size);
    background-color: var(--light1-color);
    border-radius: 50%;
    box-shadow: 0 0 10px 5px var(--light1-shadow-color);
    animation: blink var(--bliking-time1) infinite alternate;
    z-index: 2;
  }
  .light2 {
    position: absolute;
    width: var(--light-size);
    height: var(--light-size);
    background-color: var(--light2-color);
    border-radius: 50%;
    box-shadow: 0 0 10px 5px var(--light2-shadow-color);
    animation: blink var(--blinking-time2) infinite alternate;
    z-index: 2;
  }

  .ornament1 {
    top: calc(var(--tree-size) / -1.8);
    left: calc(var(--tree-size) * -1);
  }

  .ornament2 {
    top: calc(var(--tree-size) / 1.3);
    left: calc(var(--tree-size) * 0.9);
  }

  .ornament3 {
    top: calc(var(--tree-size) * 1.95);
    left: calc(var(--tree-size) / -0.95);
  }

  .ornament4 {
    top: calc(var(--tree-size) / 1.3);
    left: calc(var(--tree-size) * -1.1);
  }

  .ornament5 {
    top: calc(var(--tree-size) / -1.8);
    left: calc(var(--tree-size) * 0.9);
  }

  .ornament6 {
    top: calc(var(--tree-size) * 1.95);
    left: calc(var(--tree-size) * 0.9);
  }

  .ornament7 {
    top: calc(var(--tree-size) * 1.4);
    left: calc(var(--tree-size) / -3);
  }

  .ornament8 {
    top: 0;
    left: 0;
  }

  .ornament9 {
    top: calc(var(--tree-size) * -1.4);
    left: calc(var(--tree-size) / -3);
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

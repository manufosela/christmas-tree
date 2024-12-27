import { html, LitElement } from 'lit';
import { ChristmasTreeStyles } from './ChristmasTreeStyles.js';

export class ChristmasTree extends LitElement {
  static styles = ChristmasTreeStyles;

  static properties = {
    treeSize: { type: String, attribute: 'tree-size' },
    trunkColor: { type: String, attribute: 'trunk-color' },
    light1Color: { type: String, attribute: 'light1-color' },
    light1ShadowColor: { type: String, attribute: 'light1-shadow-color' },
    light2Color: { type: String, attribute: 'light2-color' },
    light2ShadowColor: { type: String, attribute: 'light2-shadow-color' },
    topOrnamentColor: { type: String, attribute: 'top-ornament-color' },
    topOrnamentBgColor: { type: String, attribute: 'top-ornament-bg-color' },
    blinkingTime1: { type: String, attribute: 'blinking-time1' },
    blinkingTime2: { type: String, attribute: 'blinking-time2' },
  };

  constructor() {
    super();
    this.treeSize = '60px';
    this.topPosition = 'calc(var(--tree-size) * 2.)';
    this.trunkColor = '#8b4513';
    this.light1Color = 'red';
    this.light1ShadowColor = 'blue';
    this.light2Color = 'yellow';
    this.light2ShadowColor = 'purple';
    this.topOrnamentBgColor = 'pink';
    this.topOrnamentColor = 'red';
    this.blinkingTime1 = '1s';
    this.blinkingTime2 = '1.5s';
  }

  update(changedProperties) {
    super.update(changedProperties);
    this.style.setProperty('--tree-size', `${this.treeSize}`);
    this.style.setProperty('--trunk-color', this.trunkColor);
    this.style.setProperty('--light1-color', this.light1Color);
    this.style.setProperty('--light1-shadow-color', this.light1ShadowColor);
    this.style.setProperty('--light2-color', this.light2Color);
    this.style.setProperty('--light2-shadow-color', this.light2ShadowColor);
    this.style.setProperty('--top-ornament-color', this.topOrnamentColor);
    this.style.setProperty('--top-ornament-bg-color', this.topOrnamentBgColor);
    this.style.setProperty('top', `${parseFloat(this.treeSize) * 2.5}px`);
  }

  render() {
    return html`
      <div class="tree">
        <div class="trunk"></div>
        <div class="ornament-top">*</div>
        <div class="light1 ornament1"></div>
        <div class="light1 ornament2"></div>
        <div class="light1 ornament3"></div>
        <div class="light2 ornament4"></div>
        <div class="light2 ornament5"></div>
        <div class="light2 ornament6"></div>
        <div class="light2 ornament7"></div>
        <div class="light1 ornament8"></div>
        <div class="light2 ornament9"></div>
      </div>
    `;
  }
}

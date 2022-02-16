function Calculator() {
  return (
    <article className="calc background">
      <h1 className="calc__title logo-screen">calc</h1>

      <div className="calc__theme logo-screen">
        <div className="theme__switch">
          <div className="switch__number">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <span>THEME</span>
          <div className="switch__presets theme-radio-bg">
            <input
              type="radio"
              id="theme1"
              name="theme"
              aria-label="Dark theme"
            />
            <label htmlFor="theme1" aria-hidden="true"></label>
            <input
              type="radio"
              id="theme2"
              name="theme"
              aria-label="Light theme"
            />
            <label htmlFor="theme2" aria-hidden="true"></label>
            <input
              type="radio"
              id="theme3"
              name="theme"
              aria-label="Contrast theme"
            />
            <label htmlFor="theme3" aria-hidden="true"></label>

            <div className="switch__inner"></div>
          </div>
        </div>
      </div>

      <div className="calc__screen screen-bg logo-screen col-span2 border grid">
        <input
          type="text"
          className="screen__numbers"
          id="screen"
          name="screen"
          placeholder="399,981"
          pattern="[^0-9]"
        />
      </div>

      <div className="calc__num-pad col-span2 border grid">
        <button className="num-pad__digits digits">7</button>
        <button className="num-pad__digits digits">8</button>
        <button className="num-pad__digits digits">9</button>
        <button className="num-pad__digits delete num-pad__delete">DEL</button>
        <button className="num-pad__digits digits">4</button>
        <button className="num-pad__digits digits">5</button>
        <button className="num-pad__digits digits">6</button>
        <button className="num-pad__digits digits">+</button>
        <button className="num-pad__digits digits">1</button>
        <button className="num-pad__digits digits">2</button>
        <button className="num-pad__digits digits">3</button>
        <button className="num-pad__digits digits">-</button>
        <button className="num-pad__digits digits">.</button>
        <button className="num-pad__digits digits">0</button>
        <button className="num-pad__digits digits">/</button>
        <button className="num-pad__digits digits">x</button>
        <button className="num-pad__digits delete num-pad__delete col-span2">
          RESET
        </button>
        <button className="num-pad__digits result num-pad__result col-span2">
          =
        </button>
      </div>
    </article>
  );
}

export default Calculator;

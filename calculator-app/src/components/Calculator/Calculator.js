import Theme from "../Theme/Theme";

function Calculator() {
  return (
    <article className="calc grid background">
      <h1 className="calc__title font-3 logo-screen">calc</h1>

      <Theme />

      <div className="calc__screen screen-bg logo-screen col-span2 border grid">
        {/* <input
          type="text"
          className="screen__numbers"
          id="screen"
          name="screen"
          placeholder="399,981"
          pattern="[^0-9]"
        /> */}
        <div className="screen__numbers font-4" id="screen">
          399,981
        </div>
      </div>

      <div className="calc__num-pad numpad-bg col-span2 border grid">
        <button className="num-pad__digits digits digits-shadow digits-bg font-3">7</button>
        <button className="num-pad__digits digits digits-shadow digits-bg font-3">8</button>
        <button className="num-pad__digits digits digits-shadow digits-bg font-3">9</button>
        <button className="num-pad__digits delete delete-shadow delete-bg num-pad__delete font-2">
          DEL
        </button>
        <button className="num-pad__digits digits digits-shadow digits-bg font-3">4</button>
        <button className="num-pad__digits digits digits-shadow digits-bg font-3">5</button>
        <button className="num-pad__digits digits digits-shadow digits-bg font-3">6</button>
        <button className="num-pad__digits digits digits-shadow digits-bg font-3">+</button>
        <button className="num-pad__digits digits digits-shadow digits-bg font-3">1</button>
        <button className="num-pad__digits digits digits-shadow digits-bg font-3">2</button>
        <button className="num-pad__digits digits digits-shadow digits-bg font-3">3</button>
        <button className="num-pad__digits digits digits-shadow digits-bg font-3">-</button>
        <button className="num-pad__digits digits digits-shadow digits-bg font-3">.</button>
        <button className="num-pad__digits digits digits-shadow digits-bg font-3">0</button>
        <button className="num-pad__digits digits digits-shadow digits-bg font-3">/</button>
        <button className="num-pad__digits digits digits-shadow digits-bg font-3">x</button>
        <button className="num-pad__digits delete delete-shadow delete-bg num-pad__delete font-2 col-span2">
          RESET
        </button>
        <button className="num-pad__digits result result-shadow result-bg font-2 num-pad__result col-span2">
          =
        </button>
      </div>
    </article>
  );
}

export default Calculator;

function Theme() {
  return (
    <div className="calc__theme grid font-1 theme-select logo-screen">
      <div className="theme__switch grid">
        <div className="switch__number grid font-1">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <span>THEME</span>
        <div className="switch__presets theme-radio-bg border-1">
          <input type="radio" id="theme1" name="theme" aria-label="Dark theme" />
          <label htmlFor="theme1" aria-hidden="true"></label>
          <input type="radio" id="theme2" name="theme" aria-label="Light theme" />
          <label htmlFor="theme2" aria-hidden="true"></label>
          <input type="radio" id="theme3" name="theme" aria-label="Contrast theme" />
          <label htmlFor="theme3" aria-hidden="true"></label>

          <div className="switch__inner border-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Theme;

import React from "react";
import { BsFillGearFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

interface SwitcherProps {
  show: boolean;
  onClick: () => void;
}

const Switcher: React.FC<SwitcherProps> = ({ show, onClick }) => {
  return (
    <div className="switcher__area">
      <div
        className="switcher__icon"
        style={show ? { right: "280px" } : { right: "0" }}
      >
        <button
          id="switcher_open"
          style={show ? { display: "none" } : { display: "inline-block" }}
        >
          <BsFillGearFill onClick={onClick} />
        </button>
        <button
          id="switcher_close"
          style={show ? { display: "inline-block" } : { display: "none" }}
        >
          <RxCross1 onClick={onClick} />
        </button>
      </div>

      <div
        className="switcher__items"
        style={show ? { right: "0px" } : { right: "-280px" }}
      >
        <div className="switcher__item">
          <div className="switch__title-wrap">
            <h2 className="switcher__title">Cursor</h2>
          </div>
          <div className="switcher__btn">
            <select name="cursor-style" id="cursor_style" defaultValue={2}>
              <option value="1">default</option>
              <option value="2">animated</option>
            </select>
          </div>
        </div>

        <div className="switcher__item">
          <div className="switch__title-wrap">
            <h2 className="switcher__title">mode</h2>
          </div>
          <div className="switcher__btn mode-type wc-col-2">
            <button data-mode="light">light</button>
            <button className="active" data-mode="dark">
              dark
            </button>
          </div>
        </div>

        <div className="switcher__item">
          <div className="switch__title-wrap">
            <h2 className="switcher__title">Language Support</h2>
          </div>
          <div className="switcher__btn lang_dir wc-col-2">
            <button className="active" data-mode="ltr">
              LTR
            </button>
            <button data-mode="rtl">RTL</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switcher;

import { setAttributes, create } from "https://js.sabae.cc/stdcomp.js";

const WEEK = "月火水木金土日";

class InputWeek extends HTMLElement {
  constructor(opts) {
    super();
    setAttributes(this, opts);
    for (const c of WEEK) {
      const lbl = create("label", this);
      const chk = create("input", lbl);
      chk.type = "checkbox";
      const span = create("span", lbl);
      span.textContent = c;
    }
    if (opts?.value) {
      this.value = opts.value;
    }
  }
  set value(v) {
    this.querySelectorAll("input").forEach((inp, idx) => {
      const c = WEEK[idx];
      inp.checked = v.indexOf(c) >= 0;
    });
  }
  get value() {
    const res = [];
    this.querySelectorAll("input").forEach((inp, idx) => {
      if (inp.checked) {
        res.push(WEEK[idx]);
      }
    });
    return res.join("");
  }
}

customElements.define("input-week", InputWeek);

export { InputWeek };

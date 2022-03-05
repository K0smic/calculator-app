import { useReducer } from "react";
import Theme from "../Theme/Theme";
import BtnDigit from "./BtnDigit";
import { BtnDelete, BtnClear, BtnResult } from "./BtnAction";
import BtnOperation from "./BtnOperation";

/* Filter: used for the button actions */
export const ACTIONS = {
  DIGIT: "ins-digit",
  OPERATION: "chs-operation",
  CLEAR: "clear",
  DELETE: "delete",
  RESULT: "result",
};
/* React Hook: take the current state, the type of action (switch case) and the payload (digit or operator) from button */
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.DIGIT:
      if (payload.digit === "0" && state.currentOperand === undefined) return state;
      if (payload.digit === "." && state.currentOperand === undefined) return state;
      if (payload.digit === "." && state.currentOperand && state.currentOperand.includes("."))
        return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.OPERATION:
      return {
        ...state,
        currentOperand: "",
        previousOperand: `${state.currentOperand}`,
        operator: `${payload.operator}`,
      };

    case ACTIONS.DELETE:
      if (state.currentOperand.length === 1) return (state.currentOperand = "");
      return {
        ...state,
        currentOperand: `${state.currentOperand ? state.currentOperand.slice(0, -1) : ""}`,
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.RESULT:
      return {
        ...state,
        currentOperand: `${evaluate(state)}`,
        previousOperand: "",
        operator: "",
      };

    default:
      return console.error("Default case | What!?");
  }
}

/* Convert the inputs and generate the output result */
function evaluate({ currentOperand, previousOperand, operator }) {
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  let result = "";

  if (isNaN(prev) || isNaN(curr)) return "";

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "x":
      result = prev * curr;
      break;
    case "/":
      if (prev === 0 || curr === 0) return "";
      result = prev / curr;
      break;
    default:
      return "";
  }
  return result.toString();
}

function Calculator() {
  const [{ currentOperand }, dispatch] = useReducer(reducer, {});

  return (
    <article className="calc grid background">
      <h1 className="calc__title font-3 logo-screen">calc</h1>

      <Theme />

      <div className="calc__screen screen-bg logo-screen col-span2 border grid">
        <output className="screen__result font-4" id="screen">
          {currentOperand || 0}
        </output>
      </div>

      <div className="calc__num-pad numpad-bg col-span2 border grid font-3">
        <BtnDigit dispatch={dispatch} digit={7} />
        <BtnDigit dispatch={dispatch} digit={8} />
        <BtnDigit dispatch={dispatch} digit={9} />
        <BtnDelete dispatch={dispatch} action={"DEL"} />
        <BtnDigit dispatch={dispatch} digit={4} />
        <BtnDigit dispatch={dispatch} digit={5} />
        <BtnDigit dispatch={dispatch} digit={6} />
        <BtnOperation dispatch={dispatch} operator={"+"} />
        <BtnDigit dispatch={dispatch} digit={1} />
        <BtnDigit dispatch={dispatch} digit={2} />
        <BtnDigit dispatch={dispatch} digit={3} />
        <BtnOperation dispatch={dispatch} operator={"-"} />
        <BtnDigit dispatch={dispatch} digit={"."} />
        <BtnDigit dispatch={dispatch} digit={0} />
        <BtnOperation dispatch={dispatch} operator={"/"} />
        <BtnOperation dispatch={dispatch} operator={"x"} />
        <BtnClear dispatch={dispatch} action={"RESET"} />
        <BtnResult dispatch={dispatch} action={"="} />
      </div>
    </article>
  );
}

export default Calculator;

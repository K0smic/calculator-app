import { ACTIONS } from "./Calculator";

export default function BtnDigit({ dispatch, digit }) {
  return (
    <button
      className="digits digits-shadow digits-bg"
      onClick={() => {
        dispatch({ type: ACTIONS.DIGIT || "", payload: { digit } });
      }}
    >
      {digit}
    </button>
  );
}

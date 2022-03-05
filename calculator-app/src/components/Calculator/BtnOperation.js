import { ACTIONS } from "./Calculator";

export default function BtnOperation({ dispatch, operator }) {
  return (
    <button
      className="digits digits-shadow digits-bg"
      onClick={() => {
        dispatch({ type: ACTIONS.OPERATION || "", payload: { operator } });
      }}
    >
      {operator}
    </button>
  );
}

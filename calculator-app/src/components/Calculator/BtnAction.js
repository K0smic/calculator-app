import { ACTIONS } from "./Calculator";

export function BtnDelete({ dispatch, action }) {
  return (
    <button
      className="delete delete-shadow delete-bg font-2"
      onClick={() => {
        dispatch({ type: ACTIONS.DELETE || "", payload: { action } });
      }}
    >
      {action}
    </button>
  );
}

export function BtnClear({ dispatch, action }) {
  return (
    <button
      className="delete delete-shadow delete-bg font-2 col-span2"
      onClick={() => {
        dispatch({ type: ACTIONS.CLEAR || "", payload: { action } });
      }}
    >
      {action}
    </button>
  );
}

export function BtnResult({ dispatch, action }) {
  return (
    <button
      className="result result-shadow result-bg font-2 col-span2"
      onClick={() => {
        dispatch({ type: ACTIONS.RESULT || "", payload: { action } });
      }}
    >
      {action}
    </button>
  );
}

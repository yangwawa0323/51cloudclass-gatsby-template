// import * as React from "react";
export function useKeypress(key, action, deps) {
  // useEffect(() => {
    function onKeyup(e) {
      if (e.key === key) action();
    }
    window.addEventListener("keyup", onKeyup);
	  return function unbindKeyup() {
		  window.removeEventListener("keyup", onKeyup);
	  }
  // }, deps);
}
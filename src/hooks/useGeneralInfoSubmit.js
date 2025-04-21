import { useCallback } from "react";
import { validateGeneralInfo } from "../utils/validation";

export function useGeneralInfoSubmit(dispatch) {
  return useCallback((e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    
    if (!validateGeneralInfo(data)) {
      return;
    }

    dispatch({ type: "POST_GENERAL_INFO", value: data });
    dispatch({ type: "NEXT_STEP" })
  })
};
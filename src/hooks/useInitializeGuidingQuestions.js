import { useEffect, useContext } from "react";
import { AppraisalsContext, AppraisalsDispatchContext } from "../appraisalContext";
import { useFetchAppraisalData } from "./useFetchAppraisalData";
import { questionsMultiFamiliesArray } from "../info_objects/questionsMultiFamilies";
import { questionsUniFamilyArray } from "../info_objects/questionsUniFamily";

export function useInitializeGuidingQuestions() {
  const { generalInfo } = useContext(AppraisalsContext)
  const dispatch = useContext(AppraisalsDispatchContext)

  const { fetchSquareMeterPrice } = useFetchAppraisalData(dispatch);
  const { VITE_API_BASE_URL } = import.meta.env;
  const { type, stratum, status } = generalInfo;

  useEffect(() => {
    const sqMeterPriceUrl = `${VITE_API_BASE_URL}/square-meter-prices?stratum=${stratum}&status=${status}`

    if(type == 'unifamiliar') {
      dispatch({ type: 'SET_QUESTIONS', value: questionsUniFamilyArray})
    } else {
      dispatch({ type: 'SET_QUESTIONS', value: questionsMultiFamiliesArray})
    }
    fetchSquareMeterPrice(sqMeterPriceUrl);
  }, [])
}
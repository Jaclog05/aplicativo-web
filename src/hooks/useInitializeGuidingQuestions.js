import { useEffect, useContext } from "react";
import { AppraisalsContext, AppraisalsDispatchContext } from "../appraisalContext";
import { useFetchAppraisalData } from "./useFetchAppraisalData";

export function useInitializeGuidingQuestions() {
  const { generalInfo } = useContext(AppraisalsContext)
  const dispatch = useContext(AppraisalsDispatchContext)

  const { fetchQuestions, fetchSquareMeterPrice } = useFetchAppraisalData(dispatch);
  const { VITE_API_BASE_URL } = import.meta.env;
  const { type, stratum, status } = generalInfo;

  useEffect(() => {
    const questionsUrl = `${VITE_API_BASE_URL}/questions?type=${type}`
    const sqMeterPriceUrl = `${VITE_API_BASE_URL}/square-meter-prices?stratum=${stratum}&status=${status}`

    fetchQuestions(questionsUrl);
    fetchSquareMeterPrice(sqMeterPriceUrl);
  }, [])
}
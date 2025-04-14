import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { AppraisalsContext } from "../appraisalContext";
import { useContext } from "react";

function LoadingButton({ text, loadingMessage }) {

  const { isLoading } = useContext(AppraisalsContext)

  return (
    <Button
      className="bootstrap-scope"
      type="submit"
      variant="secondary"
      disabled={isLoading}
      style={{gridArea: 'submit', width: '100%'}}
    >
      {isLoading ? (
        <>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />{" "}
          {loadingMessage}...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

export default LoadingButton;

import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function LoadingButton({ text, isLoading, loadingMessage }) {
  return (
    <Button
      className="bootstrap-scope"
      type="submit"
      variant="primary"
      disabled={isLoading}
      style={{gridArea: 'submit'}}
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

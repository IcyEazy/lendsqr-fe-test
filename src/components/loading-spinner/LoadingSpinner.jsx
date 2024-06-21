import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div data-testid="loading-spinner" className="loading-spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;

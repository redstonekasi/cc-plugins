import { id } from "@cumcord/pluginData";
import { togglePlugin } from "@cumcord/plugins";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="beryl-error-handler">
        <div className="beryl-error-handler-header">
          <div>
            <svg className="beryl-error-handler-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <h1 className="beryl-error-handler-title">An error occured. (Beryl)</h1>
          </div>
          <button
            onClick={() => {
              togglePlugin(id);
            }}>
            Toggle Beryl
          </button>
        </div>
        <code className="beryl-error-handler-code">{this.state.error.toString()}</code>
      </div>
    );
  }
}

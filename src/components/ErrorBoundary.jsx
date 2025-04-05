import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2 className="text-center text-red-600 mt-10">
          Something went wrong. Please try again later.
        </h2>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };

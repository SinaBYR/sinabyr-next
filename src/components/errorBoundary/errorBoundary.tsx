import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_error: Error): State{
    return {
      hasError: true
    }
  }
  

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log({ error, errorInfo })
  }

  public render() {
    if(this.state.hasError) {
      return <h1 color="red">Sorry... there was an error.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
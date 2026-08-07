import type { ErrorInfo, ReactNode } from "react";
import React, { Component } from "react";
import ErrorFallback from "./ErrorFallback";
import type { ErrorBoundaryProps, ErrorBoundaryState } from "./types";

const haveResetKeysChanged = (previous: unknown[] = [], next: unknown[] = []): boolean =>
  previous.length !== next.length || next.some((key, index) => !Object.is(key, previous[index]));

/**
 * Catches render, lifecycle and constructor errors thrown by its descendants and swaps the
 * subtree for a themed fallback instead of unmounting the whole app.
 *
 * React error boundaries cannot catch errors thrown in event handlers, in async callbacks,
 * or during server rendering — rethrow those from state to surface them here.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // `componentDidCatch` fills in the component stack right after this.
    return { error, errorInfo: null };
  }

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  public componentDidUpdate(prevProps: ErrorBoundaryProps): void {
    const { resetKeys } = this.props;
    const { error } = this.state;

    if (error !== null && haveResetKeysChanged(prevProps.resetKeys, resetKeys)) {
      this.resetErrorBoundary();
    }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    const { onError } = this.props;

    this.setState({ errorInfo });
    onError?.(error, errorInfo);
  }

  private resetErrorBoundary = (): void => {
    const { onReset } = this.props;

    this.setState({ error: null, errorInfo: null });
    onReset?.();
  };

  public render(): ReactNode {
    const { children, fallback, title, description, actionText, showDetails } = this.props;
    const { error, errorInfo } = this.state;

    if (error === null) {
      return children;
    }

    if (typeof fallback === "function") {
      return fallback({ error, errorInfo, resetErrorBoundary: this.resetErrorBoundary });
    }

    if (fallback !== undefined) {
      return fallback;
    }

    return (
      <ErrorFallback
        error={error}
        errorInfo={errorInfo}
        resetErrorBoundary={this.resetErrorBoundary}
        title={title}
        description={description}
        actionText={actionText}
        showDetails={showDetails}
      />
    );
  }
}

export default ErrorBoundary;

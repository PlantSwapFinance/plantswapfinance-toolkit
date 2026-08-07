import type { ErrorInfo, ReactNode } from "react";

/** Presentation options shared by `ErrorBoundary` and its default `ErrorFallback`. */
export interface ErrorFallbackOptions {
  /** Title of the default fallback. */
  title?: string;
  /** Description of the default fallback. */
  description?: string;
  /** Label of the default fallback action button. */
  actionText?: string;
  /**
   * Show the error message and component stack in the default fallback.
   * Defaults to `true` outside of production builds.
   */
  showDetails?: boolean;
}

export interface ErrorBoundaryFallbackProps {
  /** The error thrown by a descendant during render, in a lifecycle method, or in a constructor. */
  error: Error;
  /** React's error info, mainly `componentStack`. Null until `componentDidCatch` has run. */
  errorInfo: ErrorInfo | null;
  /** Clears the error state and re-renders the children. */
  resetErrorBoundary: () => void;
}

export interface ErrorFallbackProps extends ErrorBoundaryFallbackProps, ErrorFallbackOptions {}

export type ErrorBoundaryFallbackRender = (props: ErrorBoundaryFallbackProps) => ReactNode;

export interface ErrorBoundaryProps extends ErrorFallbackOptions {
  children?: ReactNode;
  /**
   * Either a static node, or a render function receiving the error and a reset handler.
   * Defaults to the themed `ErrorFallback` card.
   */
  fallback?: ReactNode | ErrorBoundaryFallbackRender;
  /** Called whenever an error is caught. Use it to report to Sentry, a logger, etc. */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  /** Called after the boundary resets, either from the action button or from `resetKeys`. */
  onReset?: () => void;
  /**
   * The boundary resets itself when any of these values change (shallow, index-wise compare).
   * Handy to recover on navigation: `resetKeys={[pathname]}`.
   */
  resetKeys?: unknown[];
}

export interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

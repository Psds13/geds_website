/**
 * Nortech Logging Utility
 * 
 * Centralizes error reporting and logging strategy.
 * All errors should be routed through this module for consistency.
 * In production, errors are sent to Sentry automatically.
 */

export enum LogLevel {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

interface ErrorContext {
  component?: string;
  action?: string;
  [key: string]: any;
}

/**
 * Report an error to Sentry (production) or console (development)
 * Usage: reportError(error, { component: 'Header', action: 'fetchData' })
 */
export function reportError(error: unknown, context?: ErrorContext): void {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // In development, log to console for debugging
  if (isDevelopment) {
    console.error('Error:', error, 'Context:', context);
  }

  // In production, errors are automatically captured by Sentry instrumentation
  // This function can be extended to add custom context
  if (typeof window !== 'undefined' && (window as any).__SENTRY__) {
    (window as any).__SENTRY__.captureException(error, {
      tags: context,
    });
  }
}

/**
 * Log warnings for development and monitoring purposes
 * Usage: logWarning('User input validation failed', { field: 'email' })
 */
export function logWarning(message: string, context?: ErrorContext): void {
  if (process.env.NODE_ENV === 'development') {
    console.warn(message, context);
  }
  
  // Could be extended for production monitoring
}

/**
 * Info logging - use sparingly in production
 * Usage: logInfo('User logged in', { userId: '123' })
 */
export function logInfo(message: string, context?: ErrorContext): void {
  if (process.env.NODE_ENV === 'development') {
    console.info(message, context);
  }
}

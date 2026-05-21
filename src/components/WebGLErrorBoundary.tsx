import { Component, type ErrorInfo, type ReactNode } from 'react';

type Props = { children: ReactNode };

type State = { hasError: boolean };

/**
 * Catches failures from Three/WebGL (shader compile, context creation, etc.)
 * so a bad GPU driver does not blank the entire SPA.
 */
export class WebGLErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('[WebGL/Ballpit]', error.message, info.componentStack);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 30% 20%, rgba(82, 39, 255, 0.4), transparent 55%), radial-gradient(ellipse at 70% 40%, rgba(124, 255, 103, 0.22), transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(255, 107, 107, 0.18), transparent 45%), var(--color-bg, #0a0a0f)',
          }}
        />
      );
    }
    return this.props.children;
  }
}

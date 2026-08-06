import React, { useState } from "react";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "../../testHelpers";
import type { ErrorBoundaryFallbackProps } from "../../components/ErrorBoundary";
import { ErrorBoundary } from "../../components/ErrorBoundary";

const BOOM = "Failed to load the farm data";

const Bomb: React.FC<{ shouldThrow: boolean }> = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error(BOOM);
  }

  return <div>Children rendered</div>;
};

/** Toggles the throwing child off through `onReset`, the way a consuming app would. */
const ResettableHarness: React.FC<{ actionText?: string }> = ({ actionText }) => {
  const [shouldThrow, setShouldThrow] = useState(true);

  return (
    <ErrorBoundary actionText={actionText} showDetails={false} onReset={() => setShouldThrow(false)}>
      <Bomb shouldThrow={shouldThrow} />
    </ErrorBoundary>
  );
};

/** Recovers on "navigation" — the boundary resets itself when `resetKeys` changes. */
const RouteHarness: React.FC = () => {
  const [route, setRoute] = useState("farms");

  return (
    <div>
      <button type="button" onClick={() => setRoute("pools")}>
        Navigate
      </button>
      <ErrorBoundary resetKeys={[route]} fallback={<div>Fallback shown</div>}>
        <Bomb shouldThrow={route === "farms"} />
      </ErrorBoundary>
    </div>
  );
};

// React always logs caught boundary errors to the console; keep the suite output readable.
let consoleError: jest.SpyInstance;

beforeEach(() => {
  consoleError = jest.spyOn(console, "error").mockImplementation(() => undefined);
});

afterEach(() => {
  consoleError.mockRestore();
});

it("renders children when nothing throws", () => {
  renderWithTheme(
    <ErrorBoundary>
      <Bomb shouldThrow={false} />
    </ErrorBoundary>,
  );

  expect(screen.getByText("Children rendered")).toBeInTheDocument();
});

it("renders the default fallback when a child throws", () => {
  const { asFragment } = renderWithTheme(
    <ErrorBoundary showDetails={false}>
      <Bomb shouldThrow />
    </ErrorBoundary>,
  );

  expect(asFragment()).toMatchInlineSnapshot(`
   <DocumentFragment>
     .c10 {
     align-items: center;
     border: 0;
     border-radius: 16px;
     box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;
     cursor: pointer;
     display: inline-flex;
     font-family: inherit;
     font-size: 16px;
     font-weight: 600;
     justify-content: center;
     letter-spacing: 0.03em;
     line-height: 1;
     opacity: 1;
     outline: 0;
     transition: background-color 0.2s,opacity 0.2s;
     height: 32px;
     padding: 0 16px;
     background-color: #2B6E37;
     color: white;
   }

   .c10:hover:not(:disabled):not(.plant-button--disabled):not(.plant-button--disabled):not(:active) {
     opacity: 0.65;
   }

   .c10:active:not(:disabled):not(.plant-button--disabled):not(.plant-button--disabled) {
     opacity: 0.85;
     transform: translateY(1px);
     box-shadow: none;
   }

   .c10:disabled,
   .c10.plant-button--disabled {
     background-color: #E9EAEB;
     border-color: #E9EAEB;
     box-shadow: none;
     color: #BDC2C4;
     cursor: not-allowed;
   }

   .c6 {
     align-self: center;
     fill: #FFFFFF;
     flex-shrink: 0;
   }

   .c11 {
     align-self: center;
     fill: currentColor;
     flex-shrink: 0;
     margin-right: 0.5rem;
   }

   .c0 {
     background-color: #FFFFFF;
     border: 0px 2px 12px -8px rgba(25, 19, 38, 0.1),0px 1px 1px rgba(25, 19, 38, 0.05);
     border-radius: 24px;
     box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1),0px 1px 1px rgba(25, 19, 38, 0.05);
     color: #4D2419;
     overflow: hidden;
     position: relative;
   }

   .c1 {
     padding: 24px;
   }

   .c3 {
     margin-bottom: 16px;
   }

   .c2 {
     display: flex;
     align-items: center;
     flex-direction: column;
   }

   .c4 {
     display: flex;
   }

   .c7 {
     color: #4D2419;
     font-size: 16px;
     font-weight: 600;
     line-height: 1.5;
     margin-bottom: 8px;
     text-align: center;
   }

   .c9 {
     color: #2B6E37;
     font-size: 16px;
     font-weight: 400;
     line-height: 1.5;
     margin-bottom: 24px;
     text-align: center;
   }

   .c8 {
     font-size: 20px;
     font-weight: 600;
     line-height: 1.1;
   }

   .c5 {
     align-items: center;
     background-color: #AC2C2C;
     border-radius: 50%;
     height: 56px;
     justify-content: center;
     width: 56px;
   }

   @media screen and (min-width: 968px) {
     .c8 {
       font-size: 20px;
     }
   }

   <div
       class="c0"
     >
       <div
         class="c1"
       >
         <div
           class="c2"
         >
           <div
             class="c3 c4 c5"
           >
             <svg
               class="c6"
               color="invertedContrast"
               viewBox="0 0 24 24"
               width="28px"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 d="M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z"
               />
             </svg>
           </div>
           <h2
             class="c7 c8"
             color="text"
             scale="md"
           >
             Something went wrong
           </h2>
           <div
             class="c9"
             color="textSubtle"
           >
             An unexpected error occurred and this section could not be displayed. Try again, or reload the page if the problem persists.
           </div>
           <button
             class="c10"
             scale="sm"
           >
             <svg
               class="c11"
               color="currentColor"
               viewBox="0 0 24 24"
               width="20px"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 d="M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z"
               />
             </svg>
             Try again
           </button>
         </div>
       </div>
     </div>
   </DocumentFragment>
  `);
});

it("shows the error details when showDetails is enabled", () => {
  renderWithTheme(
    <ErrorBoundary showDetails>
      <Bomb shouldThrow />
    </ErrorBoundary>,
  );

  expect(screen.getByText("Error details")).toBeInTheDocument();
  expect(screen.getByText(new RegExp(BOOM))).toBeInTheDocument();
});

it("hides the error details when showDetails is disabled", () => {
  renderWithTheme(
    <ErrorBoundary showDetails={false}>
      <Bomb shouldThrow />
    </ErrorBoundary>,
  );

  expect(screen.queryByText("Error details")).not.toBeInTheDocument();
});

it("calls onError with the error and the component stack", () => {
  const onError = jest.fn();

  renderWithTheme(
    <ErrorBoundary showDetails={false} onError={onError}>
      <Bomb shouldThrow />
    </ErrorBoundary>,
  );

  expect(onError).toHaveBeenCalledTimes(1);
  const [error, errorInfo] = onError.mock.calls[0];
  expect(error).toBeInstanceOf(Error);
  expect(error.message).toBe(BOOM);
  expect(typeof errorInfo.componentStack).toBe("string");
});

it("recovers when the default fallback action is pressed", () => {
  renderWithTheme(<ResettableHarness />);

  expect(screen.getByText("Something went wrong")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Try again"));

  expect(screen.getByText("Children rendered")).toBeInTheDocument();
});

it("uses a custom action label", () => {
  renderWithTheme(<ResettableHarness actionText="Reload the farm" />);

  expect(screen.getByText("Reload the farm")).toBeInTheDocument();
});

it("renders a static fallback node when one is provided", () => {
  renderWithTheme(
    <ErrorBoundary fallback={<div>Static fallback</div>}>
      <Bomb shouldThrow />
    </ErrorBoundary>,
  );

  expect(screen.getByText("Static fallback")).toBeInTheDocument();
  expect(screen.queryByText("Something went wrong")).not.toBeInTheDocument();
});

it("passes the error and a working reset handler to a fallback render function", () => {
  const renderFallback = ({ error, resetErrorBoundary }: ErrorBoundaryFallbackProps) => (
    <div>
      <p>{error.message}</p>
      <button type="button" onClick={resetErrorBoundary}>
        Retry
      </button>
    </div>
  );

  const Harness: React.FC = () => {
    const [shouldThrow, setShouldThrow] = useState(true);

    return (
      <ErrorBoundary onReset={() => setShouldThrow(false)} fallback={renderFallback}>
        <Bomb shouldThrow={shouldThrow} />
      </ErrorBoundary>
    );
  };

  renderWithTheme(<Harness />);

  expect(screen.getByText(BOOM)).toBeInTheDocument();

  fireEvent.click(screen.getByText("Retry"));

  expect(screen.getByText("Children rendered")).toBeInTheDocument();
});

it("resets itself when resetKeys change", () => {
  renderWithTheme(<RouteHarness />);

  expect(screen.getByText("Fallback shown")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Navigate"));

  expect(screen.getByText("Children rendered")).toBeInTheDocument();
  expect(screen.queryByText("Fallback shown")).not.toBeInTheDocument();
});

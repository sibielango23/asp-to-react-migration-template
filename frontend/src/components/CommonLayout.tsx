import { PropsWithChildren } from "react";

export function CommonLayout({ children }: PropsWithChildren) {
  return (
    <main style={{ fontFamily: "sans-serif", margin: "1rem auto", maxWidth: 960 }}>
      <h1>ASP to React Migration Template</h1>
      {children}
    </main>
  );
}


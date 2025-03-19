import React from "react";
import HeroProvider from "./hero-provider";

export default function Providers({ children }: React.PropsWithChildren) {
  return <HeroProvider>{children}</HeroProvider>;
}

import { HeroUIProvider } from "@/components/hero";

export default function HeroProvider({ children }: React.PropsWithChildren) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}

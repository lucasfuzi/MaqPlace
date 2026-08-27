/**
 * Sinal de Concreto: controla a central de operação como uma camada sólida acima do marketplace.
 */
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Audience = "provider" | "client";
type DashboardOverlayState = {
  isDashboardOpen: boolean;
  audience: Audience;
  openDashboard: (audience: Audience) => void;
  closeDashboard: () => void;
};

const DashboardOverlayContext = createContext<DashboardOverlayState | null>(null);

export function DashboardOverlayProvider({ children }: { children: React.ReactNode }) {
  const [isDashboardOpen, setDashboardOpen] = useState(false);
  const [audience, setAudience] = useState<Audience>("client");

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isDashboardOpen ? "hidden" : previousOverflow;
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isDashboardOpen]);

  const value = useMemo(() => ({
    isDashboardOpen,
    audience,
    openDashboard: (nextAudience: Audience) => { setAudience(nextAudience); setDashboardOpen(true); },
    closeDashboard: () => setDashboardOpen(false),
  }), [isDashboardOpen, audience]);

  return <DashboardOverlayContext.Provider value={value}>{children}</DashboardOverlayContext.Provider>;
}

export function useDashboardOverlay() {
  const context = useContext(DashboardOverlayContext);
  if (!context) throw new Error("useDashboardOverlay deve ser utilizado dentro de DashboardOverlayProvider");
  return context;
}

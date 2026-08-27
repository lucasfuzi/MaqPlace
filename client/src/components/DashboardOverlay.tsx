/**
 * Sinal de Concreto: monta o dashboard como tela de comando fixa e opaca sobre a página ativa.
 */
import { useDashboardOverlay } from "@/contexts/DashboardOverlayContext";
import ProviderDashboard from "@/pages/ProviderDashboard";
import ClientDashboard from "@/pages/ClientDashboard";

export function DashboardOverlay() {
  const { isDashboardOpen, audience } = useDashboardOverlay();
  if (!isDashboardOpen) return null;
  return audience === "provider" ? <ProviderDashboard /> : <ClientDashboard />;
}

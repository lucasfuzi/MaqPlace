/**
 * Sinal de Concreto: monta o dashboard como tela de comando fixa e opaca sobre a página ativa.
 */
import { useDashboardOverlay } from "@/contexts/DashboardOverlayContext";
import ProviderDashboard from "@/pages/ProviderDashboard";
import ClientDashboard from "@/pages/ClientDashboard";

export function DashboardOverlay() {
  const { isDashboardOpen, audience } = useDashboardOverlay();
  if (!isDashboardOpen) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Dashboard ${audience === "provider" ? "do prestador" : "do cliente"}`}
      className="fixed inset-0 isolate z-[9999] overflow-x-hidden overflow-y-auto bg-[#F3F1EB]"
    >
      {audience === "provider" ? <ProviderDashboard /> : <ClientDashboard />}
    </div>
  );
}

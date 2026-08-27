/**
 * Sinal de Concreto: painel lateral sólido em uma camada isolada, sempre acima do conteúdo externo.
 */
import { Brand } from "@/components/Brand";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Bell,
  ChevronLeft,
  ClipboardList,
  FileText,
  Heart,
  LayoutDashboard,
  LogOut,
  Mail,
  Settings,
  Star,
  Tractor,
  UserRound,
  WalletCards,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useDashboardOverlay } from "@/contexts/DashboardOverlayContext";
import { Link, useLocation } from "wouter";

type NavItem = { label: string; icon: LucideIcon; href: string };

const providerNav: NavItem[] = [
  { label: "Visão geral", icon: LayoutDashboard, href: "/dashboard/prestador" },
  { label: "Minhas máquinas", icon: Tractor, href: "/maquinas" },
  { label: "Solicitações", icon: ClipboardList, href: "/dashboard/prestador" },
  { label: "Orçamentos", icon: WalletCards, href: "/dashboard/prestador" },
  { label: "Contratos", icon: FileText, href: "/dashboard/prestador" },
  { label: "Mensagens", icon: Mail, href: "/dashboard/prestador" },
  { label: "Avaliações", icon: Star, href: "/dashboard/prestador" },
];

const clientNav: NavItem[] = [
  { label: "Visão geral", icon: LayoutDashboard, href: "/dashboard/cliente" },
  { label: "Minhas solicitações", icon: ClipboardList, href: "/dashboard/cliente" },
  { label: "Orçamentos", icon: WalletCards, href: "/dashboard/cliente" },
  { label: "Contratos", icon: FileText, href: "/dashboard/cliente" },
  { label: "Favoritos", icon: Heart, href: "/maquinas" },
  { label: "Mensagens", icon: Mail, href: "/dashboard/cliente" },
];

export function DashboardShell({ audience, children }: { audience: "provider" | "client"; children: React.ReactNode }) {
  const [location, setLocation] = useLocation();
  const { isDashboardOpen, closeDashboard } = useDashboardOverlay();
  const isProvider = audience === "provider";
  const nav = isProvider ? providerNav : clientNav;
  const name = isProvider ? "Terramax Operações" : "Lucas Ferreira";
  const initials = isProvider ? "TO" : "LF";
  const closePanel = () => {
    if (isDashboardOpen) closeDashboard();
    else setLocation("/");
  };

  return (
    <div role="dialog" aria-modal="true" aria-label={`Dashboard ${isProvider ? "do prestador" : "do cliente"}`} className="fixed inset-0 isolate z-[9999] overflow-x-hidden overflow-y-auto bg-[#F3F1EB] text-[#252724]">
      <aside className="fixed inset-y-0 left-0 z-[30] hidden w-[264px] flex-col bg-[#252724] px-5 py-6 text-white lg:flex">
        <Brand inverse />
        <div className="mt-9">
          <p className="sidebar-label">{isProvider ? "ÁREA DO PRESTADOR" : "ÁREA DO CLIENTE"}</p>
          <nav className="mt-3 space-y-1" aria-label="Navegação do dashboard">
            {nav.map(({ label, icon: Icon, href }, index) => (
              <Link
                key={`${label}-${index}`}
                href={href}
                onClick={() => { if (isDashboardOpen) closeDashboard(); }}
                className={`sidebar-link ${(index === 0 && location.startsWith("/dashboard")) ? "sidebar-link-active" : ""}`}
              >
                <Icon className="h-[18px] w-[18px]" />
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto border-t border-white/10 pt-5">
          <Link onClick={closePanel} href={isProvider ? "/prestadores" : "/"} className="sidebar-link">
            <ChevronLeft className="h-[18px] w-[18px]" />
            Voltar ao marketplace
          </Link>
          <div className="mt-5 flex items-center gap-3">
            <Avatar className="h-10 w-10 border border-white/15">
              <AvatarFallback className="bg-[#F4B400] font-bold text-[#252724]">{initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{name}</p>
              <p className="text-xs text-white/45">Conta de demonstração</p>
            </div>
            <LogOut className="ml-auto h-4 w-4 text-white/45" />
          </div>
        </div>
      </aside>

      <div className="relative z-10 min-h-screen bg-[#F3F1EB] lg:pl-[264px]">
        <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-black/5 bg-[#F3F1EB] px-5 md:px-8">
          <div className="lg:hidden"><Brand compact /></div>
          <div className="hidden lg:block">
            <p className="section-eyebrow">PAINEL DE OPERAÇÃO</p>
            <p className="mt-0.5 text-sm font-medium text-[#676861]">
              {isProvider ? "Acompanhe sua operação em tempo real" : "Acompanhe seus serviços e orçamentos"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={closePanel} className="inline-flex items-center gap-2 border border-[#D6D2C8] bg-[#FCFBF8] px-3 py-2 text-xs font-bold text-[#55564F] transition hover:border-[#B88700] hover:text-[#252724]" aria-label="Fechar dashboard">
              <X className="h-4 w-4" />
              <span className="hidden sm:inline">Fechar painel</span>
            </button>
            <button className="relative rounded-full border border-[#D6D2C8] bg-[#FCFBF8] p-2.5" aria-label="Notificações">
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#F4B400]" />
            </button>
            <Link href={isProvider ? "/prestadores" : "/perfil"} className="hidden items-center gap-2 text-sm font-semibold sm:flex">
              <UserRound className="h-4 w-4 text-[#B88700]" />
              Meu perfil
            </Link>
          </div>
        </header>
        <main className="relative z-10 bg-[#F3F1EB] px-5 py-7 md:px-8 md:py-9">{children}</main>
      </div>
    </div>
  );
}

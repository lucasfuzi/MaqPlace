/**
 * Sinal de Concreto: navegação como painel de operação, com amarelo reservado para decisão.
 */
import { Brand } from "@/components/Brand";
import { Button } from "@/components/ui/button";
import { useDashboardOverlay } from "@/contexts/DashboardOverlayContext";
import { Menu, X, ArrowUpRight, MapPinned, ShieldCheck, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

const links = [
  { label: "Início", href: "/" },
  { label: "Encontrar máquinas", href: "/maquinas" },
  { label: "Prestadores", href: "/prestadores" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Sobre", href: "/sobre" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { openDashboard } = useDashboardOverlay();
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F7F5F0]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-8">
        <Brand />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`nav-link ${location === link.href ? "nav-link-active" : ""}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button onClick={() => openDashboard("client")} className="nav-link">Painel</button>
          <Link href="/login" className="nav-link">Entrar</Link>
          <Link href="/cadastro"><Button className="button-signal px-5">Cadastrar-se <ArrowUpRight className="ml-1.5 h-4 w-4" /></Button></Link>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setOpen((current) => !current)} className="lg:hidden" aria-label="Abrir menu">
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="border-t border-black/5 bg-[#F7F5F0] px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Navegação móvel">
            {links.map((link) => <Link onClick={close} key={link.href} href={link.href} className="rounded-sm px-3 py-3 font-medium text-[#252724] hover:bg-[#EEEAE0]">{link.label}</Link>)}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Link onClick={close} href="/login"><Button variant="outline" className="w-full border-[#252724]/20">Entrar</Button></Link>
              <Link onClick={close} href="/cadastro"><Button className="button-signal w-full">Cadastrar-se</Button></Link>
              <Button onClick={() => { close(); openDashboard("client"); }} variant="outline" className="col-span-2 border-[#252724]/20">Abrir painel</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const { openDashboard } = useDashboardOverlay();
  return (
    <footer className="bg-[#252724] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 md:grid-cols-[1.25fr_1fr_1fr] md:px-8">
        <div>
          <Brand inverse />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">Conectando projetos às máquinas certas. Compare, solicite e contrate com clareza.</p>
          <div className="mt-6 flex gap-3"><span className="footer-social"><Instagram className="h-4 w-4" /></span><span className="footer-social"><Linkedin className="h-4 w-4" /></span></div>
        </div>
        <div>
          <p className="footer-label">PLATAFORMA</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <Link href="/maquinas">Encontrar máquinas</Link><Link href="/prestadores">Para prestadores</Link><Link href="/sobre">Como funciona</Link><button onClick={() => openDashboard("provider")} className="w-fit text-left">Área do prestador</button>
          </div>
        </div>
        <div>
          <p className="footer-label">CONFIANÇA</p>
          <div className="mt-4 space-y-4 text-sm text-white/70">
            <p className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 text-[#F4B400]" />Informações organizadas para negociar com mais segurança.</p>
            <p className="flex gap-2"><MapPinned className="mt-0.5 h-4 w-4 text-[#F4B400]" />Equipamentos e serviços próximos da sua obra.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/45">Projeto acadêmico desenvolvido no SENAI — Tecnologia da Informação.</div>
    </footer>
  );
}

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#F7F5F0] text-[#252724]"><SiteHeader /><main>{children}</main><SiteFooter /></div>;
}

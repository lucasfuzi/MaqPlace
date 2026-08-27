/**
 * Sinal de Concreto: cartão de equipamento com dados objetivos, etiqueta técnica e ação sinalizada.
 */
import type { Machine } from "@/lib/marketplace";
import { formatCurrency } from "@/lib/marketplace";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, ArrowUpRight, Clock3, ClipboardCheck } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

export function MachineCard({ machine, favorite, onFavorite, variant = "grid" }: { machine: Machine; favorite: boolean; onFavorite: () => void; variant?: "grid" | "list" }) {
  const statusClass = machine.availability === "Disponível" ? "status-available" : machine.availability === "Em breve" ? "status-pending" : "status-unavailable";
  const toggle = (event: React.MouseEvent) => {
    event.preventDefault(); event.stopPropagation(); onFavorite(); toast(favorite ? "Removido dos favoritos" : "Adicionado aos favoritos", { description: machine.name });
  };
  const content = <>
    <div className={`relative overflow-hidden ${variant === "list" ? "h-full min-h-[230px] md:w-[300px]" : "aspect-[1.22]"}`}>
      <img src={machine.image} alt={machine.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      <span className={`absolute left-3 top-3 ${statusClass}`}>{machine.availability}</span>
      <button onClick={toggle} aria-label="Alternar favorito" className="absolute right-3 top-3 rounded-full bg-white/92 p-2.5 text-[#252724] shadow-sm transition hover:bg-white hover:text-[#F4B400]">
        <Heart className={`h-4 w-4 ${favorite ? "fill-[#F4B400] text-[#F4B400]" : ""}`} />
      </button>
    </div>
    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-start justify-between gap-3"><span className="technical-tag">{machine.type}</span><span className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-[#72736B]"><ClipboardCheck className="h-3.5 w-3.5 text-[#B88700]" />Orçamento sob consulta</span></div>
      <h3 className="mt-3 font-display text-[1.45rem] font-bold leading-6 tracking-tight">{machine.name}</h3>
      <p className="mt-2 flex items-center gap-1.5 text-sm text-[#676861]"><MapPin className="h-3.5 w-3.5 text-[#B88700]" />{machine.location} <span className="text-[#9B9B92]">· {machine.distance} km</span></p>
      <div className="my-4 h-px bg-[#E5E1D8]" />
      <div className="flex items-end justify-between gap-2"><div><p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7A7B74]">a partir de</p><p className="font-display text-2xl font-bold">{formatCurrency(machine.priceHour)}<span className="font-body text-sm font-medium text-[#676861]">/hora</span></p></div><span className="text-xs text-[#676861]">{formatCurrency(machine.priceDay)}/dia</span></div>
      <div className="mt-5 flex items-center justify-between border-t border-[#E5E1D8] pt-4 text-sm"><span className="flex items-center gap-2 font-medium text-[#52534C]"><span className="avatar-initials">{machine.providerInitials}</span>{machine.provider}</span><ArrowUpRight className="h-4 w-4 text-[#B88700] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div>
    </div>
  </>;
  if (variant === "list") return <Link href={`/detalhes/${machine.id}`} className="group card-machine flex overflow-hidden">{content}</Link>;
  return <Link href={`/detalhes/${machine.id}`} className="group card-machine flex flex-col overflow-hidden">{content}</Link>;
}

export function EmptyMachines() {
  return <div className="flex min-h-72 flex-col items-center justify-center border border-dashed border-[#D6D2C8] bg-[#FCFBF8] px-5 text-center"><Clock3 className="h-8 w-8 text-[#B88700]" /><h3 className="mt-4 font-display text-2xl font-bold">Nenhum equipamento nesta busca</h3><p className="mt-2 max-w-sm text-sm text-[#676861]">Ajuste os filtros ou remova alguma condição para ver mais opções na região.</p><Button variant="outline" className="mt-5">Limpar filtros</Button></div>;
}

/**
 * Sinal de Concreto: marca geométrica, contraste grafite/amarelo e presença industrial.
 */
import { logoImage } from "@/lib/marketplace";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export function Brand({ inverse = false, compact = false }: { inverse?: boolean; compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="MáquinaFácil — Início">
      <img src={logoImage} alt="Símbolo MáquinaFácil" className="h-9 w-9 object-contain transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105" />
      {!compact && (
        <span className={cn("font-display text-2xl font-bold tracking-tight", inverse ? "text-white" : "text-[#252724]")}>
          MÁQUINA<span className="text-[#F4B400]">FÁCIL</span>
        </span>
      )}
    </Link>
  );
}

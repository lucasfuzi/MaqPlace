/**
 * Sinal de Concreto: rota não encontrada como uma placa de desvio clara, com retorno imediato à plataforma.
 */
import { Brand } from "@/components/Brand";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center bg-[#252724] p-5 text-white"><div className="max-w-md text-center"><Brand inverse /><div className="my-10 flex justify-center"><span className="grid h-20 w-20 place-items-center border border-[#F4B400] bg-white/5"><Construction className="h-9 w-9 text-[#F4B400]" /></span></div><p className="section-eyebrow">ROTA FORA DO MAPA</p><h1 className="mt-3 font-display text-6xl font-bold uppercase leading-[0.85]">Este trecho não está disponível.</h1><p className="mt-6 text-sm leading-6 text-white/65">A página que você procurou não foi encontrada. Retorne ao marketplace para continuar sua busca.</p><Link href="/"><Button className="button-signal mt-8 h-12"><ArrowLeft className="mr-2 h-4 w-4" />Voltar ao início</Button></Link></div></main>;
}

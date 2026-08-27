/**
 * Sinal de Concreto: modal de decisão objetiva para transformar interesse em solicitação rastreável.
 */
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CalendarDays, CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function QuoteDialog({ equipmentName, triggerLabel = "Solicitar orçamento" }: { equipmentName: string; triggerLabel?: string }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const submit = (event: React.FormEvent) => { event.preventDefault(); const quotes = JSON.parse(localStorage.getItem("maqfacil-orcamentos") || "[]"); quotes.push({ equipmentName, createdAt: new Date().toISOString(), status: "Solicitado" }); localStorage.setItem("maqfacil-orcamentos", JSON.stringify(quotes)); setSent(true); toast.success("Solicitação enviada", { description: "O prestador receberá os dados do seu projeto." }); };
  const reset = (value: boolean) => { setOpen(value); if (!value) setTimeout(() => setSent(false), 200); };
  return <Dialog open={open} onOpenChange={reset}>
    <DialogTrigger asChild><Button className="button-signal h-12 px-5"><Send className="mr-2 h-4 w-4" />{triggerLabel}</Button></DialogTrigger>
    <DialogContent className="max-w-lg border-0 bg-[#FCFBF8] p-0">
      {sent ? <div className="p-9 text-center"><CheckCircle2 className="mx-auto h-12 w-12 text-[#4D7C56]" /><DialogTitle className="mt-5 font-display text-3xl">Solicitação encaminhada</DialogTitle><DialogDescription className="mx-auto mt-3 max-w-sm leading-6">Seus dados foram organizados e o prestador pode responder pela área de mensagens.</DialogDescription><Button onClick={() => reset(false)} className="button-dark mt-7">Voltar à plataforma</Button></div> : <>
        <DialogHeader className="border-b border-[#E5E1D8] px-7 pb-5 pt-7"><p className="section-eyebrow">NOVA SOLICITAÇÃO</p><DialogTitle className="font-display text-3xl">Solicitar orçamento</DialogTitle><DialogDescription>Informe o essencial para <strong className="text-[#252724]">{equipmentName}</strong>.</DialogDescription></DialogHeader>
        <form onSubmit={submit} className="space-y-4 p-7"><div className="grid gap-4 sm:grid-cols-2"><label className="form-label">Seu nome<input required className="form-control" placeholder="Como podemos chamar você?" /></label><label className="form-label">Telefone<input required type="tel" className="form-control" placeholder="(00) 00000-0000" /></label></div><label className="form-label">Local do serviço<input required className="form-control" placeholder="Cidade, bairro ou endereço" /></label><div className="grid gap-4 sm:grid-cols-2"><label className="form-label">Data prevista<input required type="date" className="form-control" /></label><label className="form-label">Tempo estimado<select className="form-control" defaultValue=""><option value="" disabled>Selecione</option><option>Até 1 dia</option><option>2 a 5 dias</option><option>Mais de 5 dias</option></select></label></div><label className="form-label">Descreva o serviço<textarea className="form-control min-h-24 resize-none" placeholder="Ex.: abertura de vala, retirada de terra, acesso ao local..." /></label><div className="flex items-center justify-between gap-4 border-t border-[#E5E1D8] pt-5"><p className="flex gap-2 text-xs leading-5 text-[#676861]"><CalendarDays className="h-4 w-4 shrink-0 text-[#B88700]" />Você receberá uma notificação quando houver resposta.</p><Button type="submit" className="button-signal shrink-0">Enviar pedido</Button></div></form>
      </>}
    </DialogContent>
  </Dialog>;
}

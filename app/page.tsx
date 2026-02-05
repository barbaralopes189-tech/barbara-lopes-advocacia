import { Button } from "@/components/ui/button";
import { Scale, Home, HeartHandshake, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F5F4] text-[#2B2B2B] font-serif">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <h1 className="text-xl tracking-wide">Bárbara Lopes Advocacia</h1>
        <a
          href="https://wa.me/5513982281060"
          target="_blank"
          className="flex items-center gap-2 text-sm text-[#5E142B] hover:opacity-80"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-4xl leading-tight mb-6">
            Advocacia com atuação ética,<br />
            técnica e acolhedora
          </h2>
          <p className="text-lg text-[#555555] mb-8 leading-relaxed">
            Atuação profissional nas áreas de Direito Civil, Direito de Família e Direito
            Imobiliário, com foco em orientação jurídica responsável, atendimento humanizado
            e soluções construídas de forma clara e transparente.
          </p>
          <Button className="bg-[#5E142B] text-white hover:opacity-90">
            Agendar atendimento
          </Button>
        </div>

        <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
  <img
    src="/foto-barbara.png"
    alt="Bárbara Lopes – Advogada"
    className="w-full h-full object-cover"
  />
</div>
      </section>

      {/* Sobre */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl mb-8">Sobre a Advogada</h3>
          <p className="text-lg text-[#555555] leading-relaxed">
            Sou Bárbara Lopes, advogada com mais de cinco anos de atuação profissional,
            dedicada às áreas cível, familiar e imobiliária. Minha trajetória é pautada pela
            ética, pelo estudo contínuo e pela responsabilidade no exercício da advocacia.
            <br /><br />
            Acredito que o Direito deve ser exercido com sensibilidade, técnica e clareza,
            respeitando a individualidade de cada caso e oferecendo ao cliente segurança
            jurídica e orientação consciente em momentos importantes de sua vida.
          </p>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl mb-12 text-center">Áreas de Atuação</h3>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <Scale className="mb-4 text-[#5E142B]" />
            <h4 className="text-xl mb-3">Direito Civil</h4>
            <p className="text-[#555555]">
              Atuação em demandas cíveis de forma estratégica e responsável, envolvendo
              contratos, responsabilidade civil, obrigações e conflitos patrimoniais.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <HeartHandshake className="mb-4 text-[#5E142B]" />
            <h4 className="text-xl mb-3">Direito de Família</h4>
            <p className="text-[#555555]">
              Atuação em questões familiares com atenção à dimensão jurídica e humana,
              abrangendo divórcios, pensão alimentícia, guarda, união estável e partilha de bens.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <Home className="mb-4 text-[#5E142B]" />
            <h4 className="text-xl mb-3">Direito Imobiliário</h4>
            <p className="text-[#555555]">
              Assessoria jurídica em negócios e conflitos imobiliários, incluindo compra e
              venda, locação, regularização de imóveis e análise contratual.
            </p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h3 className="text-3xl mb-6">Contato</h3>
        <p className="text-lg text-[#555555] mb-8">
          Para informações e orientações jurídicas, entre em contato.
        </p>
        <a href="https://wa.me/5513982281060" target="_blank">
          <Button className="bg-[#5E142B] text-white hover:opacity-90">
            Falar pelo WhatsApp
          </Button>
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#2B2B2B] text-[#D5CDCB] py-10 text-center text-sm">
        © {new Date().getFullYear()} Bárbara Lopes Advocacia · Conteúdo meramente informativo,
        nos termos do Código de Ética e Disciplina da OAB.
      </footer>
    </div>
  );
}
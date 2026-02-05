export default function SiteBarbaraLopes() {
  return (
    <div style={{ fontFamily: "serif", backgroundColor: "#5E142B", color: "#fff" }}>
      
      {/* Header */}
      <div style={{ padding: "30px", display: "flex", justifyContent: "space-between" }}>
        <h2>Bárbara Lopes • Advocacia</h2>
        <a href="https://wa.me/5513982281060" target="_blank">
          <button style={{ background: "#E8616E", color: "#fff", padding: "10px 20px", border: "none" }}>
            Contato via WhatsApp
          </button>
        </a>
      </div>

      {/* Hero */}
      <div style={{ padding: "60px 30px" }}>
        <h1>Advocacia pautada na ética, técnica e acolhimento humano</h1>
        <p style={{ maxWidth: "600px" }}>
          Atuação profissional nas áreas Cível, Família e Imobiliário, com mais de 5 anos de
          experiência, prestando assessoria jurídica de forma ética e responsável, em
          conformidade com o Código de Ética e Disciplina da OAB.
        </p>
      </div>

      {/* Áreas */}
      <div style={{ background: "#fff", color: "#000", padding: "40px" }}>
        <h2>Áreas de Atuação</h2>
        <ul>
          <li><strong>Direito Civil</strong> — contratos, obrigações e responsabilidade civil</li>
          <li><strong>Direito de Família</strong> — divórcio, guarda, pensão e partilha</li>
          <li><strong>Direito Imobiliário</strong> — compra e venda, locação e regularização</li>
        </ul>
      </div>

      {/* Sobre */}
      <div style={{ padding: "40px" }}>
        <h2>Sobre a Advogada</h2>
        <p>
          Sou Bárbara Lopes, advogada há mais de 5 anos, com atuação nas áreas cível,
          família e imobiliária. Minha trajetória é pautada pela ética, escuta ativa
          e responsabilidade profissional.
        </p>
      </div>

      {/* Footer */}
      <div style={{ background: "#000", color: "#ccc", padding: "20px", fontSize: "14px" }}>
        © {new Date().getFullYear()} Bárbara Lopes Advocacia <br />
        Site com caráter exclusivamente informativo, nos termos do Código de Ética e Disciplina da OAB.
      </div>
    </div>
  );
}
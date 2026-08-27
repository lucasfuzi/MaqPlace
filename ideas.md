# Direção de Design — MáquinaFácil

## Três direções exploradas

### 1. Terminal de Obra
**Introdução breve:** Um sistema editorial de alta densidade que traduz a linguagem visual de pátios, placas técnicas e documentação de infraestrutura em uma interface digital precisa. A sensação é de controle, credibilidade e movimento no canteiro.

**Probabilidade:** 0.07

### 2. Atlas Industrial
**Introdução breve:** Uma navegação espacial inspirada em mapas de território e sinalização de operações logísticas, combinando superfícies minerais claras com um grafite de engenharia. A experiência prioriza descoberta local e comparação segura.

**Probabilidade:** 0.04

### 3. Sinal de Concreto
**Introdução breve:** Uma interpretação contemporânea do modernismo construtivo brasileiro, com blocos de informação marcados por amarelo de segurança, tipografia robusta e fotografias imersivas. A interface parece uma central tecnológica de contratação, não um catálogo genérico.

**Probabilidade:** 0.08

---

## Direção escolhida: Sinal de Concreto

### Movimento de design

**Modernismo construtivo brasileiro + wayfinding industrial.** A identidade usa a contundência de sinalização de obra, a materialidade do concreto e estruturas assimétricas para transformar o marketplace em uma plataforma de decisões operacionais.

### Princípios centrais

1. **Informação é estrutura:** cada preço, disponibilidade e ação deve ter hierarquia inequívoca e escaneável.
2. **Contraste operacional:** o amarelo funciona como sinal de ação e alerta; o grafite sustenta solidez; o off-white cria respiro de projeto técnico.
3. **Assimetria com propósito:** a página intercala faixas editoriais, painéis sobrepostos e bordas técnicas, evitando blocos centralizados repetitivos.
4. **Materialidade digital:** pequenas texturas, sombras secas e linhas de referência lembram projetos de engenharia sem imitar uma página corporativa convencional.

### Filosofia de cor

O **grafite profundo** estabelece segurança e peso institucional. Um fundo **mineral quente** oferece luminosidade e distância do branco clínico. O **amarelo sinalização** aparece apenas em pontos de decisão — busca, chamadas e estados ativos —, preservando sua potência sem gerar ruído visual. Cinzas de aço organizam dados e divisórias.

### Paradigma de layout

A interface será organizada como uma sequência de **painéis de operação**: herói com coluna de comando e vitrine de obra, faixas numéricas horizontais, listas laterais para filtros e dashboards com navegação vertical fixa. Os conteúdos se conectam por uma linha-guia amarela e cortes angulares discretos, em vez de uma grade centralizada uniforme.

### Elementos de assinatura

1. **Linha-guia de segurança:** filete amarelo que conecta rótulos, etapas e blocos de dados.
2. **Etiquetas técnicas:** pílulas retangulares de cantos mínimos com letras em caixa alta, como sinalização de equipamento.
3. **Cantos de estrutura:** recortes angulares e superfícies com sombra seca, usados nas grandes seções e nas barras de busca.

### Filosofia de interação

As interações devem ser diretas e rastreáveis: ações principais confirmam visualmente com mudança de estado, filtros dão retorno instantâneo e modais enquadram decisões importantes. O produto deve parecer uma ferramenta de trabalho confiável, e não uma experiência lúdica.

### Animação

Movimentos curtos de 120–260 ms, com `cubic-bezier(0.23, 1, 0.32, 1)`. Cartões se elevam 2–4 px e revelam a linha-guia; painéis e modais entram com opacidade e leve deslocamento vertical; os grupos principais podem surgir em cascata de até 60 ms. Todas as transições não essenciais respeitam `prefers-reduced-motion`.

### Sistema tipográfico

**Barlow Condensed** entrega manchetes industriais, números grandes e etiquetas técnicas com presença. **Manrope** garante legibilidade para descrições, formulários e dados densos. Títulos usam caixa alta seletiva, espaçamento levemente fechado e pesos 600–800; textos corridos permanecem em 400–500, com entrelinha generosa.

### Essência da marca

**MáquinaFácil é o marketplace operacional que aproxima obras e equipamentos certos, para contratar serviços pesados com clareza e confiança.**

Personalidade: **confiável, objetiva, resoluta**.

### Voz da marca

A voz é direta, técnica quando necessário e acolhedora sem promessas vazias. Manchetes apontam o próximo passo; CTAs descrevem a ação exata; microcopy reduz incerteza.

> “Sua obra não pode esperar. Encontre quem está pronto para operar.”

> “Compare disponibilidade, valor e distância antes de solicitar.”

### Logotipo e símbolo

O símbolo será um **M geométrico formado por dois braços articulados de escavadeira**, criando simultaneamente uma ponte e uma marca de localização. Ele será aplicado sem texto dentro do cabeçalho e do favicon; o wordmark usa Barlow Condensed com cortes angulares no “M” e no “F”.

### Cor de assinatura

**Amarelo Sinal — `#F4B400`**. Um amarelo de segurança com calor suficiente para ser memorável, usado exclusivamente para ação, orientação e status de atenção.

## Style Decisions

- A linha-guia amarela é um conector estrutural recorrente: acompanha rótulos de seção, arestas de painéis, números de etapas, filtros ativos e blocos de decisão; não é aplicada como enfeite aleatório.
- A imagem principal de qualquer equipamento deve priorizar máquina, operador, pátio ou frente de trabalho. Texturas técnicas e documentos podem contextualizar, mas nunca substituir o ativo sob avaliação.
- O símbolo da MáquinaFácil resolve um “M” geométrico por braços de escavadeira, com cortes angulares reproduzidos pela linguagem de painéis e etiquetas da interface.

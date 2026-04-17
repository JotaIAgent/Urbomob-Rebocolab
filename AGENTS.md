# Urbomob - Diretrizes de Agentes e Skills

Este projeto baseia-se em uma arquitetura de Design Premium (Industrial-Minimalista e "Orgânica/Cinematográfica"). Ferramentas de IA que manipulam este repositório devem consultar constantemente as skills listadas abaixo.

## Skills Recomendadas (Global e Locais)

1. **`frontend-design` & `design-spells`**: Qualquer nova seção adicionada ou refatorada não deve se comportar como um layout blocky (chato) genérico. Sempre traga intenção, balanço de branco e componentes premium que façam o site parecer uma revista editorial. Utilize micro-interações do `design-spells`.
   
2. **`react-patterns` & `react-component-performance`**: Os componentes do Urbomob são renderizados com Vite + TS. O padrão esperado é que as animações do `framer-motion` não quebrem as atualizações e sigam as restrições da tipagem mais severa e boas práticas do React 18+.

3. **`tailwind-patterns`**: Evite *Inline Styles* a não ser que sejam calculados parametricamente (ex: escalas e posições dinâmicas via TS). Siga o padrão dos tokens providos no projeto Urbomob.

4. **`ui-a11y`**: Qualquer grande reformulação de UX/Interação deve manter validações de acessibilidade de teclado e visuais minimamente consistentes.

Aplica-se em todas as refatorações. Mantenha essas definições em consideração.

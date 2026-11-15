# Requisitos de UX e engenharia — consentimento de cookies

## Estados

1. `unknown`: visitante ainda não escolheu.
2. `accepted`: categorias opcionais escolhidas pelo visitante.
3. `rejected`: opcionais recusados.
4. `custom`: preferências personalizadas.

## Interface mínima

- Aviso curto, linguagem simples e link para a política.
- Ações visíveis: **Aceitar opcionais**, **Rejeitar opcionais**, **Configurar**.
- Na tela de configuração, categorias necessárias aparecem sempre ativas e não podem ser desligadas se forem realmente indispensáveis.
- Categorias opcionais começam desligadas quando consentimento for a base legal aplicável.
- Ações de aceitar e rejeitar devem ter destaque e esforço equivalentes.
- Não usar cores, contrastes, posição ou texto para induzir aceitação.
- Preferências podem ser reabertas em todas as páginas.
- Suporte a teclado, foco visível, leitores de tela, contraste e `prefers-reduced-motion`.

## Comportamento

- Não inicializar analytics, publicidade, pixels ou SDKs opcionais antes da escolha quando o consentimento for exigido.
- Não basta esconder o banner: bloquear a execução real dos scripts e requisições opcionais.
- Persistir versão do aviso, data/hora e categorias selecionadas, com minimização de dados.
- Permitir alteração e retirada de consentimento.
- Se a versão das finalidades ou fornecedores mudar materialmente, avaliar a necessidade de pedir nova escolha.
- Não assumir que apagar o registro local remove cookies de terceiros já instalados. Documentar o mecanismo de cada fornecedor.
- Não armazenar dados pessoais desnecessários no registro de consentimento.

## Testes obrigatórios

- Primeira visita: nenhum script opcional executa antes da escolha.
- Rejeitar: scripts opcionais permanecem bloqueados após recarregar.
- Aceitar analytics sem marketing: somente analytics é ativado.
- Personalizar: cada categoria respeita a escolha individual.
- Revogar: bloqueia carregamentos futuros e orienta sobre remoção de cookies existentes.
- Navegação entre páginas: preferência permanece consistente.
- Navegador sem localStorage: interface continua funcional e falha de forma segura.
- Teclado/leitor de tela: todos os controles são alcançáveis e nomeados.

O exemplo técnico deste módulo é uma base demonstrativa. Integração real exige inventário, configuração e testes dos fornecedores presentes no site.

# Prompt — implementar privacidade e cookies em site empresarial brasileiro

Você é responsável por implementar a camada técnica de privacidade e consentimento de um site empresarial. Antes de alterar qualquer arquivo, inspecione o projeto e preserve sua arquitetura, convenções, conteúdo e funcionalidades existentes. Não exclua nem renomeie arquivos sem autorização expressa.

## Objetivo

Preparar uma implementação de privacidade clara e acessível, considerando a LGPD e as orientações aplicáveis da ANPD, sem alegar conformidade jurídica automática.

## Pesquisa e descoberta obrigatórias

- Identifique formulários, campos, finalidades, integrações, analytics, pixels, scripts, embeds, cookies e tecnologias de armazenamento.
- Não invente razão social, CNPJ, endereço, encarregado, fornecedores, bases legais, prazos ou práticas.
- Marque dados ausentes como `[PENDENTE DE CONFIRMAÇÃO PELO CLIENTE]`.
- Faça uma tabela por finalidade: dados, hipótese legal candidata, compartilhamento, retenção e controles.
- Verifique fontes oficiais atuais: LGPD no Planalto e materiais da ANPD.

## Implementação

- Criar páginas/rotas de Política de Privacidade, Política de Cookies e Termos de Uso somente se aplicáveis.
- Implementar banner com ações de aceitar opcionais, rejeitar opcionais e configurar.
- Necessários ficam separados; opcionais começam desativados quando consentimento for a base aplicável.
- Bloquear tecnicamente scripts opcionais antes da escolha quando exigido.
- Disponibilizar central permanente para alterar e retirar escolhas.
- Persistir somente o necessário e documentar versão e validade da preferência.
- Não inserir scripts opcionais de terceiros diretamente antes da decisão.
- A interface deve ser responsiva, acessível, sem dark patterns e compatível com teclado/leitor de tela.

## Testes de aceite

- Nenhuma chamada opcional antes da escolha, quando consentimento for exigido.
- Rejeitar mantém categorias opcionais desligadas após reload.
- Preferências individuais são respeitadas.
- Revogação bloqueia carregamentos futuros.
- Política e inventário correspondem ao tráfego real.
- Nenhum placeholder é apresentado como fato.
- Testes mobile, acessibilidade e rede anexados ao relatório.

## Entrega

Apresente arquivos criados/modificados, justificativa, testes executados, evidências, limitações, perguntas pendentes e itens que precisam de validação jurídica. Não declarar "100% conforme LGPD". Solicite revisão do controlador e de profissional jurídico/encarregado quando necessário.

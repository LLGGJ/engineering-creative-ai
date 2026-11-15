# Engineering Creative AI

**Master Knowledge System para Claude** — pacote modular de instruções, guias, fluxos de trabalho, checklists, prompts e referências para engenharia reversa autorizada, desenvolvimento de software e design digital.

## O que é

Este repositório não treina nem altera os pesos do Claude. Ele fornece uma Skill e uma base de conhecimento que o Claude pode consultar durante conversas, conforme o ambiente e as ferramentas disponíveis.

## Áreas

- Engenharia reversa autorizada e análise de aplicações.
- Desenvolvimento, arquitetura, depuração e testes.
- Android, Kotlin, Java e análise de APK.
- APIs e integrações.
- Segurança e auditoria defensiva.
- Pesquisa técnica e GitHub.
- Web design 3D cinematográfico.
- Inteligência comercial.
- Economia de tokens e uso eficiente de conectores.
- QA, avaliação e melhoria controlada.

## Instalação no Claude

A interface e o suporte a Skills podem variar conforme o produto/plano:
1. Baixe o ZIP deste repositório.
2. Importe-o como Skill, se sua versão do Claude oferecer esse recurso, ou extraia os arquivos e forneça `SKILL.md` como instrução e os módulos relevantes como conhecimento.
3. Teste com uma tarefa pequena e confirme se o Claude consegue consultar arquivos adicionais.
4. Conecte separadamente as ferramentas que desejar usar (GitHub, terminal, navegador etc.). O ZIP não concede permissões nem credenciais.

## Como usar com eficiência

Leia primeiro `SKILL.md`. Depois carregue apenas os arquivos necessários para a tarefa. Consulte `REFERENCES/REFERENCE-INDEX.md` para links oficiais. Não carregue o repositório inteiro no contexto a cada pedido.

## Estrutura

- `CORE/`: identidade operacional, autonomia, conectores e eficiência de tokens.
- `SPECIALISTS/`: instruções especializadas.
- `KNOWLEDGE/`: fundamentos e guias didáticos.
- `WORKFLOWS/`: processos reproduzíveis.
- `PROMPTS/`: modelos de prompts.
- `CHECKLISTS/`: listas de validação.
- `TOOLS/`: scripts locais auxiliares.
- `REFERENCES/`: índice de fontes externas.
- `EVALUATIONS/`: casos de teste e critérios de qualidade.

## Segurança e limites

Use engenharia reversa apenas em software, arquivos e sistemas próprios ou para os quais exista autorização. Não use este pacote para roubo de credenciais, malware, invasão, exfiltração, evasão de controles ou acesso não autorizado.

## Licença

Este projeto é disponibilizado sob MIT. Veja `LICENSE`. Links e nomes de ferramentas de terceiros são referências; cada projeto mantém sua própria licença e termos.

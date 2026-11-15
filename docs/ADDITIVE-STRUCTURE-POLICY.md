# Política de estrutura aditiva

Esta política protege usuários que baixam a Skill e mantêm cópias locais.

## Contrato de compatibilidade

- Caminhos publicados são estáveis: não remover, renomear ou reutilizar para outro propósito.
- Novas capacidades entram em novos arquivos ou subpastas.
- Uma melhoria de conteúdo pode atualizar o arquivo no mesmo caminho quando o assunto permanecer compatível.
- Quando a substituição mudar significativamente o propósito, preservar o documento anterior em `ARCHIVE/` e apontar o novo caminho.
- Não sobrescrever dados locais do usuário durante atualizações.

## Como descontinuar

1. Adicionar aviso `DEPRECATED` no arquivo antigo.
2. Explicar motivo, data e sucessor.
3. Manter o conteúdo legado acessível.
4. Adicionar teste que confirme a existência do caminho antigo.
5. Só considerar remoção em uma decisão explícita de breaking change — e nunca em atualizações automáticas.

## Atualização segura

1. Fazer backup ou branch.
2. Extrair a nova versão em diretório separado.
3. Comparar manifestos.
4. Copiar apenas novos arquivos e alterações aprovadas.
5. Rodar `python scripts/validate_package.py` e testes.
6. Revisar diff antes do commit.

O pacote não executa atualização automática nem altera repositórios remotos.

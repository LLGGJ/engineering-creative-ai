# Workflow: atualização segura de repositório

1. Identifique branch, estado e backup.
2. Leia `PACKAGE-MANIFEST.json` e compare com o diretório real.
3. Faça alterações em branch ou cópia.
4. Não apague/renomeie caminhos publicados.
5. Adicione novos arquivos em locais estáveis.
6. Se houver substituição conceitual, preserve a versão antiga e documente sucessor.
7. Atualize changelog e manifesto.
8. Execute validação e testes.
9. Revise `git diff --stat` e `git diff --check`.
10. Só publique após autorização explícita.

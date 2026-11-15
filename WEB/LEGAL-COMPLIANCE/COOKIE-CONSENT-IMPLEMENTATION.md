# Integração do exemplo de consentimento

O diretório `COOKIE-CONSENT-EXAMPLE/` contém um exemplo demonstrativo sem dependências externas.

## Arquivos

- `cookie-consent.css`: estilos do banner e painel.
- `cookie-consent.js`: API e gerenciamento de preferências.
- `demo.html`: demonstração independente.

## Integração em um site

1. Copie os dois arquivos CSS/JS para os assets do projeto.
2. Inclua o CSS no `<head>` e carregue o JS com `defer`.
3. Faça inventário de todos os scripts, pixels, iframes, SDKs e tags.
4. Para cada integração opcional, use `CookieConsent.loadScript({ category, src })` em vez de inserir o script diretamente.
5. Use `analytics` ou `marketing` apenas como categorias de exemplo; adapte a classificação à finalidade real e à análise legal.
6. Mantenha recursos estritamente necessários separados e documentados.
7. Teste a rede do navegador: não pode haver requisição opcional antes da escolha quando consentimento for exigido.

Exemplo:

```html
<link rel="stylesheet" href="/assets/cookie-consent.css">
<script defer src="/assets/cookie-consent.js"></script>
<script>
  window.addEventListener("cookieconsent:ready", () => {
    window.CookieConsent.loadScript({
      category: "analytics",
      src: "https://analytics.example.invalid/script.js"
    });
  });
</script>
```

`example.invalid` é um domínio reservado para documentação; substitua somente por fornecedor efetivamente contratado e validado.

## Limitações importantes

- O exemplo grava preferências em `localStorage`; isso não substitui um registro de consentimento auditável quando necessário.
- O código não descobre cookies automaticamente nem remove cookies de terceiros.
- O código não decide a base legal.
- Um script já carregado não pode ser "desexecutado" de modo confiável; ao revogar, impeça novos carregamentos e implemente a limpeza específica de cada fornecedor.
- A organização deve revisar validade, retenção, segurança, acessibilidade e compatibilidade com suas tecnologias.

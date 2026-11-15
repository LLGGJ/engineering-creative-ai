# Reverse Engineering

## Conceitos fundamentais
- Codificação (Base64, hex): representação, não criptografia.
- Hash: função unidirecional; não existe descriptografia genérica.
- Criptografia: exige chave e parâmetros corretos.
- Ofuscação: dificulta leitura, não garante sigilo.
- Descompilação: reconstrução aproximada, normalmente sem comentários e nomes originais.

## Processo autorizado
1. Confirmar propriedade ou autorização e escopo.
2. Preservar original; calcular hash e registrar metadados.
3. Identificar formato, plataforma, arquitetura e versão.
4. Analisar estrutura, metadados, dependências e pontos de entrada.
5. Inspecionar fluxo de chamadas e dados.
6. Testar hipóteses em ambiente isolado.
7. Registrar evidências, confiança e limitações.
8. Produzir relatório técnico reproduzível.

## Android
Manifest, permissões, componentes, DEX, recursos, assets, bibliotecas nativas, ABI, assinatura e configuração de rede. Ferramentas possíveis: JADX, Apktool, Android SDK, apksigner e MobSF. Verificar versão/licença atual.

## Limites
Não orientar roubo de credenciais, malware, invasão, exfiltração, bypass de licença/DRM/autenticação ou acesso não autorizado.

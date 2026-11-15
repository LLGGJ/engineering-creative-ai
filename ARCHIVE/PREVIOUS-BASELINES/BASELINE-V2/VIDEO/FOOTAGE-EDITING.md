# Editing Existing Footage

## Quando usar
Filmagens, entrevistas, podcasts, gravações de tela, eventos, vídeos longos e material bruto do usuário.

## Pipeline recomendado
1. Inventariar arquivos e usar `ffprobe` para duração, resolução, FPS, codec, áudio e metadados.
2. Gerar proxies quando os originais forem pesados.
3. Transcrever áudio com timestamps quando ferramenta disponível.
4. Criar uma Edit Decision List (EDL): fonte, in, out, motivo, faixa, tratamento e confiança.
5. Apresentar cortes propostos antes de edição destrutiva.
6. Remover silêncios e erros sem cortar sílabas, respirações naturais ou contexto.
7. Organizar montagem principal, B-roll, overlays, títulos e transições.
8. Tratar áudio antes de finalizar imagem: ruído, loudness, clipping, fades e sincronismo.
9. Inserir legendas com revisão humana.
10. Renderizar, revisar e corrigir.

## Boas práticas
- Não sobrescrever arquivos originais.
- Evitar corte no meio de palavra.
- Preservar contexto e intenção.
- Não usar música ou footage sem licença.
- Criar versões 16:9, 9:16 e 1:1 somente quando solicitadas.
- Verificar sincronismo em pontos diferentes do vídeo.

## Ferramentas
FFmpeg/ffprobe para processamento; Whisper ou alternativa para transcrição; Remotion/HyperFrames para motion; NLE como DaVinci Resolve, Premiere ou Kdenlive quando apropriado.

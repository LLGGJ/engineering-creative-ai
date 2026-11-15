# FFmpeg & FFprobe Cookbook

## Inspecionar primeiro
```bash
ffprobe -v error -show_streams -show_format -of json input.mp4
```

## Extrair áudio
```bash
ffmpeg -i input.mp4 -vn -c:a pcm_s16le audio.wav
```

## Criar proxy
```bash
ffmpeg -i input.mp4 -vf "scale=960:-2" -c:v libx264 -preset ultrafast -crf 28 -c:a aac proxy.mp4
```

## Cortar sem recodificar (pode depender de keyframes)
```bash
ffmpeg -ss 00:00:10 -to 00:00:20 -i input.mp4 -c copy cut.mp4
```

## Export H.264 compatível
```bash
ffmpeg -i input.mov -c:v libx264 -crf 20 -preset medium -pix_fmt yuv420p -c:a aac -b:a 192k -movflags +faststart output.mp4
```

## Regras
- Probar entrada antes de escolher operação.
- Não usar `-y` automaticamente se isso puder sobrescrever arquivo do usuário.
- Preferir nomes de saída novos.
- Concatenar somente streams compatíveis ou normalizar parâmetros.
- Conferir áudio/vídeo, duração, resolução, FPS e metadados após export.
- Ajustar CRF, codec e bitrate ao destino; exemplos são pontos de partida, não presets universais.

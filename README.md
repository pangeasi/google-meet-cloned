Proyecto para hackaton de Twilio en la comunidad de discord de @midudev https://twitch.tv/midudev

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Changelog

### v1.0.1

- pantalla room:
  - fix: cuando un partipante entra, no se muestra bien el grid, room es null.
- los toast se posicionan arriba

### v1.0.0

- pantalla home:
  - implementación módulo crear nueva reunión, este consta de un input (con nombre de sala autogenereado) y botón para redirigir a página de sala (room)
- pantalla room:
  - implentación basica del principal participante.
  - implementación twilio
  - validaciones con toast: conectado, desconectado, nuevo participante conectado, participante desconectado.
  - implementación boton para desconectarse de la sala.
- Se implementa input para identidad del usuario con relleno aleatorio (personajes de starwars)
- Validación de duplicidad de identidad antes de conectar a una sala, por si alguien esta usando ese mismo nombre

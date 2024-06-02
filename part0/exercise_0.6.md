``` mermaid
  sequenceDiagram
  participant browser
  participant server

  browser-->>server: POST https://fullstack-exampleapp.herokuapp.com/new_note_spa
  activate server
  server-->>browser: 201 Created
  deactivate server

  Note right of browser: Note that instead of the redirect request. The browser stays on the same page and sends no further HTTP requests.
```

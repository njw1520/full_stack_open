``` mermaid
  sequenceDiagram
  participant browser
  participant server

  browser-->>server: POST https://fullstack-exampleapp.herokuapp.com/new_note_spa
  activate server
  server-->>browser: 201 Created
  deactivate server

  Note left of browser: This time the server does not ask for a redirect, the browser stays on the same page, and it sends no further HTTP requests.
```

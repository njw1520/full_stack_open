``` mermaid
    sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://fullstack.exampleapp.herokuapp.com/new_note
    activate server
    server-->>browser: 302 Redirect Request
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML page
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS File
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JS File
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON File
    deactivate server

    Note right of browser: The initial POST request returns a 302 that results in a redirect to reload the notes page which further results in the subsequent CSS, JS, and JSON blob.
```

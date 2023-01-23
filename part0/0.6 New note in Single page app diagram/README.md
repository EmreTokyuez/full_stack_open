```mermaid 
sequenceDiagram
    participant browser
    participant server
    activate browser
    browser-->>server:  JSON POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa 
    deactivate browser
    activate server
    server-->>browser: 201
```
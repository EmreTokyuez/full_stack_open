```mermaid 
sequenceDiagram
    participant browser
    participant server
    activate browser
    browser-->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    deactivate browser
    activate server
    server-->>browser: HTML 
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
```
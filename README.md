# React - Vite configuration from scratch

## Install development dependencies
- `yarn add -D @vitejs/plugin-react vite`

## Install production dependencies
- `yarn add react react-dom`

## Define type module and scripts
```json
{
    ...,
    ...,
    ...,
    "type": "module",
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
    },
    ...,
    ...,
    ...,
}
```

## Create vite configuration file `vite.config.js`
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()]
});
```

## Create the entry point of our application
```javascript
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```
# Tecnical test
## APIs
- [Random Facts](https://catfact.ninja/fact)
- [Random Images](https://cataas.com/cat/says/hello)

1. Get a random cat fact to the first API
2. Extract the first word of the fact
3. Show a cat image with the extracted word

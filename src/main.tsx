/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { worker } from "./mocks/browser.ts";

async function main() {

  // if (process.env.NODE_ENV === 'development') {
  if (window.location.pathname === '/my-msw-app') {
    window.location.pathname = '/my-msw-app/'
    return
  }

  await worker.start({
    serviceWorker: {
      url: '/my-msw-app/mockServiceWorker.js',
    },
  })
  // }

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

main();

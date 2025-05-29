import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import './index.css'
import App from './App.tsx'
import { client } from './apolloClient';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
  <StrictMode>
    <App />
  </StrictMode>
  </ApolloProvider>
)

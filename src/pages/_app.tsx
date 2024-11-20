import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react'
import { PetraWallet } from 'petra-plugin-wallet-adapter'
import { PontemWallet } from '@pontem/wallet-adapter-plugin'
import { OKXWallet } from '@okwallet/aptos-wallet-adapter'
import { TrustWallet } from '@trustwallet/aptos-wallet-adapter'
import { HeaderPage } from '@/common/components/Header'
import { configureStore } from '@reduxjs/toolkit'
import reducer from '@/modules/app/reducer'
import { initRootState } from '@/modules/rootReducer'
import { Provider as ReduxProvider } from 'react-redux'
import { Footer } from '@/common/components/Footer'

const wallets = [
  new PetraWallet(),
  new PontemWallet(),
  new OKXWallet(),
  new TrustWallet(),
  // new NightlyWallet(),
]

const isDevelopmentMode = process.env.NODE_ENV === 'development'

export const store = configureStore({
  reducer: {
    app: reducer,
  },
  preloadedState: initRootState,
  devTools: isDevelopmentMode,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: {
        ignoredPaths: ['connection'],
      },
    }).concat([]),
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AptosWalletAdapterProvider
      plugins={wallets as any}
      autoConnect={true}
      onError={(error) => {
        console.log('error', error)
      }}
    >
      <ReduxProvider store={store}>
        <HeaderPage />
        <Component {...pageProps} />
        <Footer />
      </ReduxProvider>
    </AptosWalletAdapterProvider>
  )
}

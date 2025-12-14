import { http, createConfig } from 'wagmi'
import { base } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

const projectId = 'YOUR_PROJECT_ID' // Free WalletConnect Cloud project ID

export const config = createConfig({
    chains: [base],
    connectors: [
        walletConnect({
            projectId,
            metadata: {
                name: 'Best Dama Game',
                description: 'Turkish Checkers on Base',
                url: 'https://bestdamagame.vercel.app',
                icons: ['https://bestdamagame.vercel.app/icon.png']
            },
            showQrModal: true
        }),
        injected(),
    ],
    transports: {
        [base.id]: http(),
    },
})

import { http, createConfig } from 'wagmi'
import { base } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

const projectId = 'f8cb0e744ab87f4abdfc914b5ea7cfcb'

export const config = createConfig({
    chains: [base],
    connectors: [
        walletConnect({
            projectId,
            metadata: {
                name: 'Best Dama Game',
                description: 'Turkish Checkers on Base',
                url: 'https://checkersgame.workers.dev',
                icons: ['https://checkersgame.workers.dev/icon.png']
            },
            showQrModal: true
        }),
        injected(),
    ],
    transports: {
        [base.id]: http(),
    },
})

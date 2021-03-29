import { InjectedConnector } from '@web3-react/injected-connector'

const supportedChainIds = [
    1, // Mainet
    3, // Ropsten
    4, // Rinkeby
    42, // Kovan
    0x64, // xDAI
]

export const injected = new InjectedConnector({
    supportedChainIds
})

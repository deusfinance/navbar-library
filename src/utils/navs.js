import React from 'react';

export default [
    {
        id: "app",
        text: "APP",
        path: "/",
        exact: true,
        children: [
            {
                id: "swap",
                text: "SWAP",
                path: "https://app.deus.finance/swap",
                exact: true,
            },
            {
                id: "staking",
                text: "STAKING",
                path: "https://app.deus.finance/staking",
                exact: false,
            },

            {
                id: "vaults",
                text: "VAULTS",
                path: "https://app.deus.finance/vaults",
                exact: true,
            },
        ]
    },
    {
        id: "sync",
        text: <span>BUY&thinsp;Stocks</span>,
        path: "/",
        exact: true,
        children: [
            {
                id: "mainsync",
                text: "MAINNET",
                path: "https://app.deus.finance/synchronizer",
                exact: true,
            },
            {
                id: "xdai-sync",
                text: "xDAI",
                path: "https://app.deus.finance/crosschain/xdai/synchronizer",
                exact: true,
            },
        ]
    },
    {
        id: "futures",
        text: "FUTURES",
        path: "/",
        exact: true,
        children: [
            {
                id: "coinbase",
                text: "COINBASE",
                path: "https://app.deus.finance/coinbase",
                exact: true,

            },
            {
                id: "bakkt",
                text: "BAKKT",
                path: "https://app.deus.finance/bakkt",
                exact: true,
            },
            {
                id: "musk",
                text: "MUSK",
                path: "https://app.deus.finance/musk",
                exact: true,
            }
        ]
    },
    {
        id: "learn",
        text: "LEARN",
        path: "/",
        exact: true,
        children: [
            {
                id: "wiki",
                text: "DEUS wiki",
                path: "https://wiki.deus.finance/docs",
                out: true,
                exact: true,

            },
            {
                id: "litepaper",
                text: "LITEPAPER",
                path: "https://deus.finance/litepaper.pdf",
                out: true,
                exact: true,

            },
        ]
    },
    {
        id: "tools",
        text: "TOOLS",
        path: "/",
        exact: true,
        children: [
            {
                id: "simulate",
                text: "DEUS simulator",
                path: "https://simulate.deus.finance",
                out: true,
                exact: true,

            },
            {
                id: "chart",
                text: "DEUS tradingview",
                path: "https://chart.deus.finance",
                out: true,
                exact: true,
            },
            {
                id: "vote",
                text: "DEUS vote",
                path: "https://vote.deus.finance",
                out: true,
                exact: true,
            },
        ]
    },
]


export const deusChains = {
  1: "Main",
  4: "Rinkbey",
  100: "xDAI",
  56: "BSC",
  97: "BSCTest"
}

export const getCorrectChainId = (str) => {
  const arr = Object.entries(deusChains)

  for (let i = 0; i < arr.length; i++) {
      if (str.includes('/' + arr[i][1].toLowerCase())) {
          return Number(arr[i][0])
      }
  }
  return 1 //mainnet
}

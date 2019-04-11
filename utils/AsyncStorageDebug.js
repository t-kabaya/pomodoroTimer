import { AsyncStorage } from 'react-native'

export const AsyncStorageDebug = () =>
  AsyncStorage.getAllKeys((err, keys) =>
    AsyncStorage.multiGet(keys, (error, stores) => {
      window.asdebug = stores
      window.astable = () => console.table(stores)
      window.asclear = () => AsyncStorage.clear()
    })
  )
import { createBrowserHistory } from 'history'

const getHistory = () => {

    if (typeof window !== `undefined`) { // or typeof document !== 'undefined'
        return createBrowserHistory()
    }
    return null
}

export default getHistory()
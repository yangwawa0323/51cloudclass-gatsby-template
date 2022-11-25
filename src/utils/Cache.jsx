import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const clientSideEmotionCache = createCache({
    key: 'css',
    prepend: true,
})

const EmotionCacheWrapper = ({children}) =>{
    <CacheProvider value={clientSideEmotionCache}>
        {children}
    </CacheProvider>
}

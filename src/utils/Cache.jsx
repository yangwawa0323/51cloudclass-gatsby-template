import * as React from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

const createEmotionCache = () => {
  return createCache({
    key: "css",
    prepend: true,
  });
};

const clientSideEmotionCache = createEmotionCache();

const EmotionCacheWrapper = ({ children }) => {
  <CacheProvider value={clientSideEmotionCache}>
    <CssBaseline />
    {children}
  </CacheProvider>;
};

export default EmotionCacheWrapper;

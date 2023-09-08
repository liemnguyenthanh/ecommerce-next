import '@/services/axios.config';
import { createTheme } from '@/theme';
import createEmotionCache from '@/theme/cache/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';

type Props = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const mainTheme = createTheme();

function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: Props) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;

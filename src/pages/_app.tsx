import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { NextPage } from 'next';
import lightThemeOptions from '@/theme/appearance/lightTheme';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/theme/cache/createEmotionCache';
import '@/services/axios.config';

type Props = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const mainTheme = createTheme(lightThemeOptions);

function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: Props) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={mainTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;

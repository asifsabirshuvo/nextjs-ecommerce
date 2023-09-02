import './../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux';
import { wrapper } from '../store/store';
import '../styles/globals.css';

function MyApp({ Component, ...rest }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;
    return (
        <ThemeProvider
            attribute="class" >
            <Provider store={store}>
                <Component className="bg-red-500" {...pageProps} />
            </Provider>
        </ThemeProvider >
    );
}

export default MyApp;
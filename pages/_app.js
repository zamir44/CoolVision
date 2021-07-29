import '../styles/main.css'
import "../styles/Carousel.css"
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
    return (
        <>
        <DefaultSeo
            title="Cool Vision Tetovo"
            description="Cool Vision Tetovë."
            openGraph={{
            type: "website",
            locale: "en_EN",
            url: "https://yjn.demlab.org/",
            site_name: "Young Journalists' Network",
            description: "Cool Vision Tetovë"
            }}
        />
        <Component {...pageProps} />
        </>
    ) 
}

export default MyApp

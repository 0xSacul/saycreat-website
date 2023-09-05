import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "SAYCREAT • Concepteur Grapique"}
                </title>
                <meta name="title" content="SAYCREAT" />
                <meta name="description" content="SAYCREAT Your Design." />
                <meta name="keywords" content="sayfaie, saycreat, saycreate, design, ui, ux, graphisme, graphique, conception, concepteur, artist, minia, maker" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="French" />
                <meta name="author" content="https://github.com/0xSacul" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="SAYCREAT" />
                <meta property="og:description" content="SAYCREAT Your Design." />
                <meta property="og:image" content="https://sacul.cloud/img/bg-main.png" />
                <meta property="og:url" content="http://saycreat.fr/" />
                <meta name="theme-color" content="#1e2025" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="SAYCREAT" />
                <meta property="twitter:description" content="SAYCREAT Your Design." />
                <meta property="twitter:image" content="https://sacul.cloud/img/bg-main.png" />
            </Head>
        </>
    )
}

export default PageHead
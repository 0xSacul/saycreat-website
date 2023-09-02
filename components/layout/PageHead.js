import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Vfolio- Personal Portfolio Nextjs Template"}
                </title>
            </Head>
        </>
    )
}

export default PageHead
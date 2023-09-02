import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "SAYCREAT • Concepteur Grapique"}
                </title>
            </Head>
        </>
    )
}

export default PageHead
import Nav from "./Nav"
import Head from "next/head"

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>My Blog</title>
                <meta keyword="My Blog Powered by Next js" />
                <meta contents="My Blog Powered by Next js" />
            </Head>
            <Nav />
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout
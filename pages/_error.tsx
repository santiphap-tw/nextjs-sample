import { NextPageContext } from "next";

Error.getInitialProps = (ctx: NextPageContext) => {
    console.log("window", typeof window)
    console.log("req.url", ctx.req?.url)
    console.log("asPath", ctx.asPath)
    return {}
}

export default function Error() {
    return <>Error</>;
}
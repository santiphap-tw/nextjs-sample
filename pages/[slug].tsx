export default function Page() {
  return <>HelloWorld</>;
}

export async function getStaticProps() {
    return {
        notFound: true
    }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking" 
    }
}
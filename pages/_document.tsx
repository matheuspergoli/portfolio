import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
	return (
		<Html lang='pt-br'>
			<Head>
				<meta name='application-name' content='Portfólio' />
				<meta name='keywords' content='portfólio, reactjs, nextjs' />
				<meta name='author' content='Matheus Pergoli' />
				<meta property='og:title' content='Portfólio' />
				<meta property='og:description' content='Portfólio - Matheus Pergoli' />
				<meta property='og:image' content='/portfolio-img.png' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document

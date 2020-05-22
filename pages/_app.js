import NextApp from 'next/app';

class App extends NextApp {
	static async getInitialProps(appContext) {
		const appProps = await NextApp.getInitialProps(appContext);

		return {
			...appProps,
		}
	}

	render() {
		const {
			Component,
			pageProps,
		} = this.props;

		return (
			<div>
				<h3>App Wrapper</h3>
				<Component {...pageProps} />
			</div>
		);
	}
}

export default App;

import getConfig from 'next/config'

const {
	// serverRuntimeConfig,
	publicRuntimeConfig,
} = getConfig();

const { API_URL } = publicRuntimeConfig

const Home = (props) => {
  return (
		<div>
			<div>publicRuntimeConfig API_URL is {API_URL}</div>
		</div>
	)
}

Home.getInitialProps = async function() {
	// const { API_URL } = serverRuntimeConfig
	return {
	// 	API_URL,
	}
}

export default Home;

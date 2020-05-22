import getConfig from 'next/config'

import Foo from '../components/Foo';

const {
	publicRuntimeConfig,
} = getConfig();

const { API_URL } = publicRuntimeConfig

const Home = (props) => {
  return (
		<div>
			<div>publicRuntimeConfig API_URL is {API_URL}</div>
			<Foo />
		</div>
	)
}

export default Home;

import getConfig from 'next/config'

const {
	publicRuntimeConfig,
} = getConfig();

const { API_URL } = publicRuntimeConfig

const Foo = (props) => (
	<div>
		Foo publicRuntimeConfig API_URL is {API_URL}
	</div>
)

export default Foo;

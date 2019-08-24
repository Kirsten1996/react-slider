import React, { Component } from 'react'
import Slider from '../../components/organisms/Slider'
import data from '../../appData/slides'
import '../../theme/index.scss'

class App extends Component {
	render() {
		return (
				<div>
					<Slider data={data.slides} />
				</div>
		)
	}
}

export default App

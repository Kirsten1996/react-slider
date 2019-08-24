import React, {Component} from 'react'
import Slide from '../../atoms/Slide'

class Slider extends Component {
	render() {
		const { data } = this.props
		return (
				<div>
					{data.map((item, index) => (
							<div key={index}>
								<Slide item={item} />
							</div>
					))}
				</div>
		)
	}
}

export default Slider

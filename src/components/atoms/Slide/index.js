import React, {Component} from 'react'
import './Slide.scss'

class Slide extends Component {
	render() {
		const { item } = this.props
		return (
				<li>
					<div className="slide-image-wrapper">
						<img
								className="slide-image"
								alt={item.headline}
								src={item.src}
						/>
					</div>

					<article className="slide-content">
						<h2 className="slide-headline">{item.headline}</h2>
						<button className="slide-action btn">{item.button}</button>
					</article>
				</li>
		)
	}
}

export default Slide

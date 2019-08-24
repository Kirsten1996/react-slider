import React, {Component} from 'react'

class Slide extends Component {
	render() {
		const { item } = this.props
		return (
				<li>
					<div className="slide__image-wrapper">
						<img
								className="slide__image"
								alt={item.headline}
								src={item.src}
						/>
					</div>

					<article className="slide__content">
						<h2 className="slide__headline">{item.headline}</h2>
						<button className="slide__action btn">{item.button}</button>
					</article>
				</li>
		)
	}
}

export default Slide

import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
	<ContentLoader
		speed={2}
		width={150}
		height={210}
		viewBox="0 0 150 210"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="91" y="135" rx="0" ry="0" width="0" height="1" />
		<rect x="0" y="112" rx="5" ry="5" width="150" height="15" />
		<rect x="0" y="133" rx="5" ry="5" width="100" height="15" />
		<rect x="0" y="178" rx="5" ry="5" width="80" height="25" />
		<rect x="118" y="175" rx="10" ry="10" width="32" height="32" />
		<rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
	</ContentLoader>
)

export default Skeleton;


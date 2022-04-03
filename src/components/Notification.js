import React from 'react'

function Notification({ showNotification}) {
	return (
	<div className= {`notification-container ${showNotification ? 'show' : ""}`}>
		<p>You have already enetered this letter</p>
	</div>
	)
}

export default Notification
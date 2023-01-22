import React, { useEffect, useState } from 'react'

import styles from './styles.module.css'

const TypingText = ({ text, speed = 200 }) => {
    const [typingText, setTypingText] = useState('')
	const words = text.split('')
	const length = words.length
	let index = 0
	let word = ''

	useEffect(() => {
		const timerId = setInterval(() => {
			if (index === length) {
				clearInterval(timerId)
			} else {
				word += words[index]
				setTypingText(word)
				index++
			}
		}, speed)

        return () => clearInterval(timerId);
	}, [])

    return (
        <div className={styles.typewriter}>{typingText}<span className={styles.caret} /></div>
    )
}

export default TypingText
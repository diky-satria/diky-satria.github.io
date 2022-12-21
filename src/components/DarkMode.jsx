import React, { useState } from 'react'
import { BsFillMoonFill, BsFillBrightnessHighFill } from 'react-icons/bs'

export default function DarkMode() {
    const [dark, setDark] = useState(false)

    const darkMode = (e) => {
        var el = document.getElementsByClassName('dark');
        var body = document.getElementsByTagName('body')[0]

        if (el.length > 0) {
            body.classList.remove('dark')
            e.currentTarget.classList.remove('bg-dark-light')
            setDark(false)
        }else{
            body.classList.add('dark')
            e.currentTarget.classList.add('bg-dark-light')
            setDark(true)
        }
    }

    return (
        <div>
            <div className="dark-mode" onClick={(e)=>darkMode(e)}>
                { dark ? <BsFillBrightnessHighFill className="ic" /> : <BsFillMoonFill className="ic" /> }
            </div>
        </div>
    )
}

import React from 'react'
import ThemeContext from '../context/theme-context'

const ThemeBar = () => {
    return (
        <ThemeContext.Consumer>
            {
                theme => {
                    // console.log(theme)
                    return (
                        <div
                            style={ {backgroundColor: theme.bgColor,
                                color: theme.color}}
                        >
                            12312331
                        </div>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
}

export default ThemeBar

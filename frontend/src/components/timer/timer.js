import React, { Component } from 'react'

// Timer for the image rating, no actual functionality, just visual countdown of 3 minutes. Users can still vote after 3 minutes, but once they vote it can't be edited.

export default class Timer extends Component {
    state = {
        minutes: 3,
        seconds: 0,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }


    render() {
        const { minutes, seconds } = this.state
        return (
            <div className="votingTimer">  
                { minutes === 0 && seconds === 0
                    ? <h4 className="expired">No more voting!</h4>
                    : <h4>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h4>
                }
            </div>
        )
    }
}
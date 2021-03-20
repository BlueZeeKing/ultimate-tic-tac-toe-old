import React from 'react'
import './Toggle.css';

class Header extends React.Component {
    constructor(props) {
        super(props)

        let settings = JSON.parse(localStorage.getItem('settings'))

        if (settings !== null) {
            if (!settings.toggle) {
                document.documentElement.style.setProperty('--highlight-color', 'rgba(255, 255, 255, 0)');
            } else {
                document.documentElement.style.setProperty('--highlight-color', settings.color);
            }
        }

        this.state = { settings: false }

        this.openSettings = this.openSettings.bind(this)
        this.closeSettings = this.closeSettings.bind(this)
    }

    openSettings() {
        this.setState({ settings: true })
    }

    closeSettings() {
        this.setState({ settings: false })
    }

    render() {
        let settings;
        if (this.state.settings) {
            settings = <Settings close={this.closeSettings} />
        }

        return (
            <div className="w-screen absolute top-0 left-0 bg-blue-500">
                <div className="relative">
                    <button className="h-18 md:h-auto material-icons transition-all duration-200 cursor-pointer absolute top-0 left-0 m-4 my-2 md:m-4 text-4xl md:text-5xl lg:text-6xl text-white outline-none focus:outline-none" onClick={this.openSettings}>settings</button>
                    <h1 className="px-16 w-full text-center py-2 md:py-4 font-extrabold text-3xl md:text-5xl lg:text-6xl text-blue text-white">Ultimate TicTacToe</h1>
                </div>
                {settings}
            </div>
        )
    }
}

class Settings extends React.Component {
    constructor(props) {
        super(props)

        if (localStorage.getItem("settings") === null) {
            localStorage.setItem("settings", JSON.stringify({
                color: '#505050',
                toggle: true
            }))
        }

        this.state = JSON.parse(localStorage.getItem('settings'))

        this.handleColor = this.handleColor.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.close = this.close.bind(this)
    }

    handleColor(e) {
        this.setState({
            color: e.target.value
        })
    }

    handleToggle(e) {
        this.setState({
            toggle: e.target.checked
        })
    }

    close() {
        if (!this.state.toggle) {
            document.documentElement.style.setProperty('--highlight-color', 'rgba(255, 255, 255, 0)');
        } else {
            document.documentElement.style.setProperty('--highlight-color', this.state.color);
        }

        localStorage.setItem("settings", JSON.stringify(this.state))

        this.props.close()
    }

    render() {
        return (
            <div className="w-4/5 md:w-1/2 lg:w-1/3 h-screen absolute top-0 left-0 shadow bg-white p-2 z-50">
                <div className="relative">
                    <span className="float-left inline-block align-middle m-1">Active Square Color: </span>
                    <label style={{ backgroundColor: this.state.color }} className="m-1 p-1 w-16 h-6 rounded border border-gray-200 inline-block" >
                        <input className="opacity-0 w-16 h-6" type="color" value={this.state.color} onChange={this.handleColor} disabled={!this.state.toggle} />
                    </label>

                    <br />

                    <span className="height float-left inline-block align-middle m-1">Active Square Highlight: </span>
                    <label className="switch inline-block m-1 h-6">
                        <input type="checkbox" checked={this.state.toggle} onChange={this.handleToggle} />
                        <span className="slider round"></span>
                    </label>

                    <button className="material-icons transition-all duration-200 cursor-pointer absolute top-0 right-0 m-1 text-xl text-gray-500 focus:text-black outline-none focus:outline-none" onClick={this.close}>close</button>
                </div>
            </div>
        )
    }
}

export default Header;
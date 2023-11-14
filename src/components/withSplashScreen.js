import React, { Component, useEffect } from 'react';

function SplashMessage() {
    return (
        <div className="splash-background">
            <h2 className="welcome-to">Welcome to</h2>
            <h2 className="the-header">the</h2>
            <h1 className="aquapod-header">AquaPod</h1>
        </div>
    )
    
}

export default function withSplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            // await request
            try {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 3000)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            const { loading } = this.state;
            // show loading message
            if (loading) {
                return (
                    <SplashMessage />
                )
                
            } else {
                //otherwise, show desired route ?
                return <WrappedComponent {...this.props} />;
            }
        }
    }
} 
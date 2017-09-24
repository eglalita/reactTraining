import React, {Component} from 'react'

export const withLoading = (WrapComponent) => {
    return class extends Component{
        constructor(props){
            super(props)
            this.state = {
                isLoading: false,
            }
        }

        loading(){
            this.setState({
                isLoading: true,
            })
        }

        loaded(){
            this.setState({
                isLoading: false,
            })
        }
        render(){
            const { props } = this
            const { isLoading } = this.state
            return (
                <WrapComponent 
                    {...props} 
                    isLoading={isLoading} 
                    loading={() => this.loading()}
                    loaded={() => this.loading()}
                />
            )
        }
    }
}


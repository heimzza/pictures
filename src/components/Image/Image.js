import React, { Component } from 'react';

class Image extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            spanCount: 1
        }
    }
    componentDidMount() {
        // console.log(this.myRef);
        this.myRef.current.addEventListener('load', () => {
            console.log(this.myRef.current.clientHeight);
            const spanCountCalculator = Math.round(this.myRef.current.clientHeight / 5) + 1;

            this.setState({
                spanCount:spanCountCalculator
            })
                
        });
    }
    
    render() {
        const {image} = this.props;
        return (
            <img style={{gridRowEnd:`span ${this.state.spanCount}`}} ref={this.myRef} key={image.id} src={image.urls.regular} alt="" />
        );
    }
}

export default Image;
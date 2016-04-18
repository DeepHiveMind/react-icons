
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoEye extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m17.5 10c7.7 0 13.4 5.5 17.5 10.1-4 3.9-9.7 9.9-17.5 9.9s-12.3-4.7-17.5-10c6.1-6.2 11.1-10 17.5-10z m0 17.1c3.8 0 7-3.2 7-7.1s-3.2-7.1-7-7.1-7 3.2-7 7.1 3.2 7.1 7 7.1z m0-9.6c0 1.4 1.1 2.5 2.5 2.5 0.6 0 1.1-0.2 1.6-0.5v0.5c0 2.3-1.8 4.1-4.1 4.1s-4.1-1.8-4.1-4.1 1.8-4.1 4.1-4.1h0.6c-0.4 0.4-0.6 1-0.6 1.6z"/></g>
            </IconBase>
        );
    }
}


let React = require('react');
let IconBase = require('react-icon-base');

export default class IoBackspace extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m39 7.3c0.7 0.7 1 1.6 1 2.6v20c0 2.1-1.6 3.9-3.6 3.9h-23.3c-1 0-1.9-0.3-2.6-0.8-0.7-0.3-1.3-0.8-1.8-1.5l-0.1-0.1-8.6-11.4 8.6-11.6c1.1-1.4 2.7-2.2 4.5-2.2h23.3c1 0 1.9 0.4 2.6 1.1z m-6.7 18.6l-6-5.9 6-5.9c0.3-0.3 0.3-0.7 0-1l-1.7-1.7c-0.1-0.2-0.3-0.2-0.4-0.2s-0.4 0-0.5 0.2l-6 5.9-5.9-5.9c-0.1-0.2-0.3-0.2-0.5-0.2s-0.3 0-0.4 0.2l-1.7 1.7c-0.3 0.3-0.3 0.7 0 1l6 5.9-6 5.9c-0.1 0.2-0.2 0.4-0.2 0.5s0.1 0.3 0.2 0.5l1.7 1.7c0.1 0.2 0.3 0.2 0.4 0.2s0.4 0 0.5-0.2l5.9-6 6 6c0.1 0.2 0.3 0.2 0.5 0.2s0.3 0 0.4-0.2l1.7-1.7c0.1-0.2 0.2-0.3 0.2-0.5s-0.1-0.3-0.2-0.5z"/></g>
            </IconBase>
        );
    }
}

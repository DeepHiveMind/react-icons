
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiMap extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m34 5.1c-0.6-0.2-1.4-0.1-1.8 0.4l-6.5 6.4-7.2-5.7c-0.6-0.5-1.6-0.5-2.2 0.1l-7.5 7.5c-0.3 0.3-0.5 0.8-0.5 1.2v16.7c0 0.6 0.4 1.3 1.1 1.5 0.2 0.1 0.4 0.1 0.6 0.1 0.4 0 0.9-0.1 1.2-0.5l6.4-6.4 7.2 5.7c0.7 0.6 1.6 0.5 2.2-0.1l7.5-7.5c0.3-0.3 0.5-0.7 0.5-1.2v-16.6c0-0.7-0.4-1.3-1-1.6z m-22.3 22.5v-11.9l5-5v12.1c-0.1 0-5 4.8-5 4.8z m6.8-4.7c0-0.1-0.1-0.1-0.2-0.1v-12.5s6.6 5.2 6.7 5.3v12.4l-6.5-5.1z m13.2-0.3l-5 5v-12c0.1-0.1 5-4.9 5-4.9v11.9z"/></g>
            </IconBase>
        );
    }
}

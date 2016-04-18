
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiWorld extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 3.3c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z m3.3 3.4c0 1.6-0.8 3.3-2.5 3.3s-2.5 1.7-2.5 3.3v5s1.7 0 1.7-5c0-0.9 0.7-1.6 1.7-1.6s1.6 0.7 1.6 1.6v5c-0.9 0-1.6 0.8-1.6 1.7s0.7 1.7 1.6 1.7c1 0 1.7-0.8 1.7-1.7h1.7v-3.3l1.6 1.6-1.6 1.7c0 5 0 5-3.4 6.7 0-1.7-1.6-1.7-5-1.7v-3.3l-3.3-3.4v-3.3c-1.7 0-1.7 1.7-1.7 1.7l-4.9-4.9c0.2-0.4 0.4-0.7 0.6-1l0.9-1.1c2.4-2.9 6-4.7 10.1-4.7 1.2 0 2.3 0.2 3.3 0.4v1.3z"/></g>
            </IconBase>
        );
    }
}

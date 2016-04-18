
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdFilter extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m35 28.4v-23.4h-23.4v23.4h23.4z m0-26.8c1.8 0 3.4 1.6 3.4 3.4v23.4c0 1.8-1.6 3.2-3.4 3.2h-23.4c-1.8 0-3.2-1.4-3.2-3.2v-23.4c0-1.8 1.4-3.4 3.2-3.4h23.4z m-30 6.8v26.6h26.6v3.4h-26.6c-1.8 0-3.4-1.6-3.4-3.4v-26.6h3.4z m21.6 8.8l5.9 7.8h-18.4l4.7-5.9 3.2 3.9z"/></g>
            </IconBase>
        );
    }
}

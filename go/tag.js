
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoTag extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m17.5 2.5h-10l-5 5v10l20 20 15-15-20-20z m-12.5 13.8v-7.5l3.8-3.8h7.5l17.5 17.5-11.3 11.3-17.5-17.5z m15-3.8l-7.5 7.5 10 10 7.5-7.5-10-10z m-3.7 7.5l3.7-3.7 6.3 6.2-3.8 3.8-6.2-6.3z m-1.3-8.7c0-2.1-1.7-3.8-3.7-3.8s-3.8 1.7-3.8 3.8 1.7 3.7 3.8 3.7 3.7-1.7 3.7-3.7z m-3.7 1.2c-0.7 0-1.3-0.6-1.3-1.2s0.6-1.3 1.3-1.3 1.2 0.6 1.2 1.3-0.6 1.2-1.2 1.2z"/></g>
            </IconBase>
        );
    }
}

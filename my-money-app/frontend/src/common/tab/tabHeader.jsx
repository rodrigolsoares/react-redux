import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import IF from '../operator/if'
import {selectTab} from './tabAction'

class TabHeader extends Component {

    render(){

        const selected = this.props.tab.selected === this.props.target
        const visible = this.props.tab.visible[this.props.target]

        return (
            <IF test={visible}>
                <li className = {selected ? 'active' : ''}>
                    <a href='javaScript:;' data-toggle='tab'
                    onClick={() => this.props.selectTab(this.props.target)}
                    data-target={this.props.target}>
                        <i className={`fa fa-${this.props.icon}`} /> {this.props.label} 
                    </a>
                </li>
            </IF>
        )
    }
}


const mapStateToProps = state => ({tab: state.tab})
const mapDispachToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(mapStateToProps, mapDispachToProps)(TabHeader)
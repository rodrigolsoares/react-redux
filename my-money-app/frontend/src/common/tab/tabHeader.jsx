import React, {Component} from 'react'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {selectTab} from './tabAction'

class TabHeader extends Component {

    render(){

        const selected = this.props.tab.selected === this.props.target


        return (
            <li className = {selected ? 'active' : ''}>
                <a href='javaScript:;' data-toggle='tab'
                   onClick={() => this.props.selectTab(this.props.target)}
                   data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`} /> {this.props.label} 
                </a>
            </li>
        )
    }
}


const mapStateToProps = state => ({tab: state.tab})
const mapDispachToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(mapStateToProps, mapDispachToProps)(TabHeader)
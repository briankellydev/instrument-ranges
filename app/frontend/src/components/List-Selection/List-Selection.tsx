import React from 'react';
import './List-Selection.scss';

export class ListSelection extends React.Component<{name: string, active: boolean}> {
    render() {
        return (
            <div className={`ListSelection${this.props.active ? ' active' : ''}`}>
                {this.props.name}
                <i className="fa fa-caret-right"></i>
            </div>
        );
    }
};
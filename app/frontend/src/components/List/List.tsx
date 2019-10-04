import React from 'react';
import './List.scss';
import { ListSelection } from '../List-Selection/List-Selection';

interface ListProps {
    name: string,
    listItems: string[],
    itemSelected: any,
    activeItem: string,
}

export class List extends React.Component<ListProps> {
    render() {
        return (
            <div className="List">
                <h2>{this.props.name}</h2>
                {this.props.listItems.map((listItem: string, index: number) => {
                    return (
                        <div key={index} onClick={() => this.props.itemSelected(listItem)}>
                            <ListSelection name={listItem} active={this.props.activeItem === listItem}/>
                        </div>
                    
                    )
                })}
            </div>
        );
    }
};
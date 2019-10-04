import React from 'react';
import './InstrumentDetails.scss';
import { Instrument } from '../../interfaces/Instrument';

export class InstrumentDetails extends React.Component<{instrument: Instrument}> {
    render() {
        return (
            <div className="Instrument">
                <h2>{this.props.instrument.name}</h2>
                <div>
                    <img src={this.props.instrument.imgUrl}/>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="bold">Key</div> {this.props.instrument.key}
                    </div>
                    <div className="col-6">
                    <div className="bold">Range (written)</div> {this.props.instrument.rangeBottom}-{this.props.instrument.rangeTop}
                    </div>
                </div>
            </div>
        )
    }
}
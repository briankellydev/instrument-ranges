import React from 'react';
import './App.scss';
import { List } from './components/List/List';
import { Instrument } from './interfaces/Instrument';
import { InstrumentDetails } from './components/InstrumentDetails/InstrumentDetails';
const axios = require('axios').default;

interface AppState {
  families: string[];
  lists: React.ClassicElement<typeof List>[];
  instrumentDisplayed: React.ClassicElement<typeof InstrumentDetails>[];
  selectedInstrument: string;
  selectedFamily: string;
  instruments: Instrument[];
}

const InitialState: AppState = {
  families: [],
  lists: [],
  instrumentDisplayed: [],
  selectedInstrument: '',
  selectedFamily: '',
  instruments: []
}

class App extends React.Component<{}, AppState> {
  state: AppState = InitialState;

  constructor() {
    super(InitialState, {});
    axios.get('/api/families').then((resp: {data: string[]}) => {
      this.setState({
        families: resp.data,
        lists: [(
        <div key="0" className="col-3">
          <List
            name="Families"
            listItems={resp.data}
            activeItem={this.state.selectedFamily}
            itemSelected={this.selectFamily.bind(this)}
          />
        </div>)]
      });
    });
  }

  render() {
    return (<div className="App">
      <header>
        <h1>Common Instrument Ranges</h1>
      </header>
      <div className="AppBody">
        <div className="row">
          {this.state.lists}
          <div className="col-6" key="2">
            {this.state.instrumentDisplayed}
          </div>
        </div>
      </div>
      
    </div>
    );
  }

  private selectFamily(family: string) {
    axios.get(`/api/instruments/?family=${family}`).then((resp: {data: Instrument[]}) => {
      this.setState({
        instrumentDisplayed: [],
        selectedInstrument: '',
        selectedFamily: family,
        instruments: resp.data
      });
      this.renderLists(family, '');
    });
    
  }

  private selectInstrument(inst: string) {
    this.setState({
      instrumentDisplayed: [(
        <InstrumentDetails instrument={this.chooseInstrument(inst)} />
      )],
      selectedInstrument: inst
    });
    this.renderLists(this.state.selectedFamily, inst);
  }

  private filterInstruments(instruments: Instrument[]) {
    return instruments.map((instrument: Instrument) => {
      return instrument.name;
    });
  }

  private chooseInstrument(instrument: string) {
    const inst = this.state.instruments.find((inst: Instrument) => {
      return inst.name === instrument;
    });
    const blankInst: Instrument = {
      name: '',
      key: '',
      imgUrl: '',
      family: '',
      rangeTop: '',
      rangeBottom: ''
    }
    return inst  || blankInst;
  }

  private renderLists(family: string, instrument: string) {
    this.setState({
      lists: [
        (
          <div key="0" className="col-3">
            <List
              name="Families"
              listItems={this.state.families}
              activeItem={family}
              itemSelected={this.selectFamily.bind(this)}
            />
          </div>
        ),
        (
          <div key="1" className="col-3">
            <List
              name="Instruments"
              listItems={this.filterInstruments(this.state.instruments)}
              activeItem={instrument}
              itemSelected={this.selectInstrument.bind(this)}
            />
          </div>
        ),
      ]
    });
  }
}

export default App;

import React, { Component } from 'react';

import { Param, Model } from './types';
import ParamsEditor from "./ParamEditor";

interface State {
    model: Model;
}

const params: Param[] = [
    {
        id: 1,
        name: 'Назначение',
        type: 'string',
    },
    {
        id: 2,
        name: 'Длина',
        type: 'string',
    },
];

const model: Model = {
    paramValues: [
        {
            paramId: 1,
            value: 'повседневное',
        },
        {
            paramId: 2,
            value: 'макси',
        },
    ],
    colors: [],
};

class App extends Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            model,
        };
    }

    handleModelChange = (model: Model) => {
        this.setState({ model });
    };

    handleGetModel = () => {
        console.log(this.state.model);
    };

    render() {
        return (
            <div>
                <ParamsEditor params={params} model={this.state.model} onChange={this.handleModelChange} />
                <button onClick={this.handleGetModel}>Get Model</button>
            </div>
        );
    }
}

export default App;




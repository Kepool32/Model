import React, { Component } from 'react';
import { Param, ParamValue, Model } from './types';

interface Props {
    params: Param[];
    model: Model;
    onChange: (model: Model) => void;
}

interface State {
    paramValues: ParamValue[];
}

class ParamsEditor extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        const { model } = this.props;
        this.state = {
            paramValues: model.paramValues,
        };
    }

    handleParamChange = (event: React.ChangeEvent<HTMLInputElement>, paramId: number) => {
        const { paramValues } = this.state;

        const paramValueIndex = paramValues.findIndex((paramValue) => paramValue.paramId === paramId);

        if (paramValueIndex !== -1) {
            const newParamValues = [...paramValues];
            newParamValues[paramValueIndex] = {
                ...newParamValues[paramValueIndex],
                value: event.target.value,
            };
            this.setState({ paramValues: newParamValues }, () => {
                this.props.onChange({
                    ...this.props.model,
                    paramValues: this.state.paramValues,
                });
            });
        } else {
            const newParamValues = [...paramValues, { paramId, value: event.target.value }];
            this.setState({ paramValues: newParamValues }, () => {
                this.props.onChange({
                    ...this.props.model,
                    paramValues: this.state.paramValues,
                });
            });
        }
    };

    render() {
        const { params } = this.props;
        const { paramValues } = this.state;

        return (
            <div>
                {params.map((param) => (
                    <div key={param.id}>
                        <label htmlFor={`param-${param.id}`}>{param.name}</label>
                        <input
                            type="text"
                            id={`param-${param.id}`}
                            value={paramValues.find((paramValue) => paramValue.paramId === param.id)?.value || ''}
                            onChange={(event) => this.handleParamChange(event, param.id)}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default ParamsEditor;



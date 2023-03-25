export interface Param {
    id: number;
    name: string;
    type: "string" | "number" | "select";
    options?: string[]; // опциональный массив строк для типа "select"
}

export interface ParamValue {
    paramId: number;
    value: string | number; // значение может быть как строкой, так и числом
}
interface Color {
    id: number;
    name: string;
}
export interface Model {
    paramValues: ParamValue[];
    colors: Color[];
}

export interface Props {
    params: Param[];
    model: Model;
}

export interface State {
    paramValues: ParamValue[];
}
export interface MyProps {
    style?: {},
    label?: string,
    initValue?: string,
    val?: string,
    roll?: boolean,
    callback?: (value: string) => void
}

export interface MyState {
    value: string
}

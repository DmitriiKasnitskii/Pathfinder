export interface MyProps {
    style?: {},
    label?: string,
    initValue?: string,
    val?: string,
    roll?: boolean,
    className?: string,
    callback?: (e: any) => void
}

export interface MyState {
    value: string
}

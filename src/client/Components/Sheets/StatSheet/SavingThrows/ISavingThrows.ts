export interface MyProps {
  openPopup: (initValue: string, throwName: string) => void,
  locale: string
}

export interface MyState {
  temp: {
    FORT: string,
    REFLEX: string,
    WILL: string
  }
}

export interface MyProps {
  openPopup: (initValue: string, throwName: string) => void,
  locale: string,
  mainStats: any,
  savingThrows: any
}

export interface MyState {
  temp: {
    FORT: string,
    REFLEX: string,
    WILL: string
  }
}

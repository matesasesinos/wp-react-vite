interface CounterState {
  count: number;
}

type CounterAction = {
  type: 'INCREMENT';
};

const initialState: CounterState = {
  count: 0,
};

const counterReducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export default counterReducer;

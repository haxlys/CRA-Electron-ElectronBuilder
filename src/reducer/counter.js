import * as types from "../constants/actionType";

const initialState = {
  counters: [
    {
      number: 0
    }
  ]
};

function counter(state = initialState, action) {
  const { counters } = state;

  switch (action.type) {
    case types.INCREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number + 1
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    case types.DECREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number - 1
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    default:
      return state;
  }
}

export default counter;

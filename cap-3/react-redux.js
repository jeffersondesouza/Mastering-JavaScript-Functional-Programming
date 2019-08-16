const INITIAL_STATE = {
  name: "",
  users: [1]
};

function reducer1(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CREATE":
      return {
        ...INITIAL_STATE,
        name: "OLA",
        users: [1, 2, 3]
      };
    case "DELETADO":
      return {
        ...INITIAL_STATE,
        name: "DELETADO",
        users: []
      };
    default:
      return state;
  }
}

console.log(reducer1({}, { type: "CREATE" }));
console.log(reducer1({}, { type: "DELETADO" }));
console.log("-------------");


const CREATE = 'a:CREATE';

const dispatchTable = {
  [CREATE]: (state, action) => ({
    ...state,
    name: "OLA",
    users: [1, 2, 3]
  }),
  DELETADO: (state, action) => ({
    ...state,
    name: "DELETADO",
    users: []
  })
};

function reducer2(state = INITIAL_STATE, action) {
  return dispatchTable[action.type]
    ? dispatchTable[action.type](state, action)
    : state;
}

console.log(reducer2({}, { type: "a:CREATE" }));
console.log(reducer2({}, { type: "DELETADO" }));

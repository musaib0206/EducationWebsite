// import {useReducer} from "react";

// const App = () => {

//     let reducer = (state,{type}) => {
//         switch (type) {
//           case "Increment": {
//             return { count: state.count + 1 };
//           }
//           case "Decrement": {
//             return { count: state.count - 1 };
//           }
//           case "Reset": {
//             return { count:0};
//           }
//         }
//    }

//     let [state,dispatch]=useReducer(reducer,{count:0})
//     return (
//       <div>
//         <h1>{state.count}</h1>
//         <button onClick={() => dispatch({ type: "Increment" })}>
//           Increment
//         </button>
//         <button onClick={() => dispatch({ type: "Decrement" })}>
//           Decrement
//         </button>
//         <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
//       </div>
//     );
// };

// export default App;

// import React, { useReducer } from "react";

// let InitialValues = { name: "", email: "", password: "" };

// let reducer = (state, action) => {
//   switch (action.type) {
//     case "name":
//       return { ...state, name: action.value };
//     case "email":
//       return { ...state, email: action.value };
//     case "password":
//       return { ...state, password: action.value };
//     default:
//       throw new Error();
//   }
// };

// const App = () => {
//   let handleSubmit = e => {
//     e.preventDefault();
//     console.log(state);
//   };

//   let [state, dispatch] = useReducer(reducer, InitialValues);
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={state.name}
//           placeholder="enter name"
//           onChange={e => dispatch({ type: "name", value: e.target.value })}
//         />
//         <input
//           type="text"
//           value={state.email}
//           placeholder="enter email"
//           onChange={e => dispatch({ type: "email", value: e.target.value })}
//         />
//         <input
//           type="password"
//           value={state.password}
//           placeholder="enter password"
//           onChange={e => dispatch({ type: "password", value: e.target.value })}
//         />
//         <button>submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;

// import { useReducer } from "react";

// let App = () => {
//   let initialState = {
//     email: "",
//     password: "",
//   };
//   let reducer = (state, action) => {
//     switch (action.type) {
//       case "email": {
//         return { ...state, email: action.value };
//       }
//       case "password": {
//         return { ...state, password: action.value };
//       }
//     }
   
//     };
//     let handleSubmit = e => {
//         console.log(e)
//         e.preventDefault();
//         console.log(state);
//       };
//   let [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <section className="main">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email</label>
//         <input
//           type="text"
//           onChange={e => dispatch({ type: "email", value: e.target.value })}
//         />
//         <label htmlFor="Password">Password</label>
//         <input
//           type="text"
//           onChange={e => dispatch({ type: "password", value: e.target.value })}
//         />
//         <button >Submit</button>
//       </form>
//     </section>
//   );
// };
// export default App;

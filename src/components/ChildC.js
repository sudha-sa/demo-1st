import React, { useContext } from "react";
import { data, data1 } from "../App";


function ChildC(){
   const firstname = useContext(data);
   const gender = useContext(data1)
   // console.log(getData)
//  return(
//     <>
//     <data.Consumer>
//       {
//          (name)=>{
//             return(
// <data1.Consumer>
//    {
//       (gender)=>{
//          return(
//               <h1>me name is {name} and my gnder is {gender}</h1>
//          )
//       }
//    }
// </data1.Consumer>
             
//             )
//          }
//       }
//     </data.Consumer>
//     </>
//  )

return(
   <>
   <h1>hi my name is {firstname} and gender is gender</h1>
   </>
)
}
export default ChildC;
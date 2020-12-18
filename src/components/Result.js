import React from 'react';

const Result = (props) => {
    return ( 
         <div className="u-full-width result">
             <h2>Results:</h2>
             <p>The loan amount: $ {props.amount}</p>
             <p>Months to repay: {props.term}</p>
             <p>Total Payment: $ {props.total}</p>
             <p>Monthly Payment: $ {(props.total/ props.term).toFixed(2) }</p>

         </div>
     );
}
 
export default Result;
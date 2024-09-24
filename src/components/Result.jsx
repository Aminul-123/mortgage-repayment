
export default function Result ({val, totalVal}) {
  
    console.log(val);
    return (
        <>
        <div className="result">
          <h2>Your Result</h2>
          <p>Your results are shown below based on the information you provided. To adjust
             the form , edit the form and click 'calculate repayment' again.</p>

             <div className="resVal">
                <div className="total">

                <p>Your monthly repayment</p>
                <span className="val">
                    &pound; {val}
                </span>
                </div>

                <hr />
                <div className="total">
                    <p>Total you'll repay over the term</p>
                    <span className="totalVal">
                        &pound; {totalVal.toFixed(2)} 
                    </span>
                </div>

             </div>
        </div>
        </>
    )
}
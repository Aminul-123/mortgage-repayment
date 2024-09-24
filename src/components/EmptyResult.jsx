
export default function EmptyResult () {
    return (
        <>
          <div className="emptyResult result">
            <div className="emptyImg">
                <img src="images/illustration-empty.svg" alt="img for empty result" />
            </div>
            <div>
                <h3>Results shown here</h3>
                <p>Complete the form and click 'calculate repayment' to see what your monthly repayment would be.</p>
            </div>
          </div>
        </>
    )
}
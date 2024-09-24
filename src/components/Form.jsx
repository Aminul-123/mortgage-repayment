import { useState } from "react";

//{mortgageAmount, setMortgageAmount, term , setTerm, interestRate, setInterestRate, setMonthlyPayment, setIsValid}
export default function Form ({ mortgageAmount, term, interestRate, formData, setFormData, setShowRes, setVal}) {
  
   const [errors, setErrors] = useState({});
   const [type , setType] = useState('');

   function handleChange (e) {
    const {name, value, checked} = e.target;
    
 
    console.log(name, checked);
    if (name === 'interest' && checked) {
        setType('Interest');
    }
    else if (name === 'repayment' && checked) {
        setType('Repayment');
    }
    else  {
       const err =  errors.newError ('This field is required');
        console.log(err);
    }

   

   console.log(type )
    setFormData({
        ...formData, [name] : value
    })
   }




   
    function handleSubmit (e) {
        e.preventDefault();

        const validationErrors = {}
        if (!formData.mortgageAmount.trim()) {
            validationErrors.mortgageAmountError = 'This field is required';
        }
        if (!formData.term.trim()) {
            validationErrors.termError = 'This field is required';
        }
        if (!formData.interestRate.trim()) {
            validationErrors.interestRateError = 'This field is required';
        }
        if (!type.trim())  {
            validationErrors.typeError = 'this field is required';
        }

        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
           // console.log('Form submitted successfully');
            
                    
            const rate = Number(interestRate)/100; 
            const numerator = Number(mortgageAmount) * (rate / 12)  
            const denumerator = 1 -  Math.pow(1 + rate /12, -12 * Number(term))
            const res = Number((numerator / denumerator).toFixed(2));
            setVal(res)
            setShowRes(true)
        }

    }
 //  console.log(errors)
   // console.log(monthlyPayment)
    return (
        <>
        <div className="form">
            <div className="heading">
                <h3>Mortgage calculator</h3>
                <span className="textSize"> clear all </span>
            </div>
            <form className="textSize" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="amount">Mortgage amount</label>
                    <div className="inputAmount">
                        <span className={`euro ${errors.mortgageAmountError ? 'allError' : ''}`}>&pound;</span>
                        <input type="number" id="amount" className="inputOutline" name="mortgageAmount"
                        // value={mortgageAmount}
                        // onChange={(e) => setMortgageAmount(e.target.value)} 
                        onChange={handleChange}
                        />
                        {
                            errors.mortgageAmountError && <p className="error amountErr">
                                {errors.mortgageAmountError}
                            </p>
                        }
                       
                    </div>
                    <div className="mortgage-flex textSize">
                        <div >
                            <label htmlFor="term">Mortgage term</label>
                            <div className="term-flex">
                                <input type="number" id="term"  
                                // value={term}
                                // onChange={(e) => setTerm(e.target.value)}
                                name="term"
                                onChange={handleChange}
                                 />
                                <span>years</span>

                                {
                                    errors.termError && (
                                        <p className="error termErr "> {errors.termError} </p>
                                    )
                                }
                               
                            </div>
                        </div>
                        <div>
                            <label htmlFor="rate">Interest rate</label>
                            <div className="rate-flex ">
                                <input type="number" id="rate" 
                                // value={interestRate}
                                // onChange={(e) => setInterestRate(e.target.value)}
                                name="interestRate"
                                onChange={handleChange}
                                 />
                                <span>%</span>
                                {errors.interestRateError && (
                                    <p className="error rateErr">{errors.interestRateError} </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mortgage-type textSize">
                        <label htmlFor="mortgage-type">Mortgage type</label>
                        <div id="mortgage-type">
                            <button className="option">
                                <input type="radio" className="noOutline" 
                                name="repayment" onChange={handleChange}  />
                                <span>Repayment</span>
                            </button>
                            <button className="option"> 
                                <input type="radio" className="noOutline" 
                                name="interest" onChange={handleChange} />
                                <span>Interest only</span>
                            </button>
                            {
                                errors.typeError && <p className="error"> {errors.typeError} </p>
                            }
                        </div>

                    </div>
                    <button className="btn">
                        <img src="images/icon-calculator.svg" alt="calc" />
                        <p>Calculate Repayment</p>
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}
import { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import EmptyResult from "./components/EmptyResult";

export default function App () {
  const [showRes, setShowRes] = useState(false);
  const [val, setVal] = useState('')
  const [formData ,setFormData] = useState({
    mortgageAmount: '',
    term: '',
    interestRate : ''

   })
   function handleClear () {
    setFormData({
      mortgageAmount : '',
      term : '',
      interestRate : '',
    })
   }
  const totalVal = val * 12 * Number(formData.term)
  return (
    <>
      <main className="main">
          <Form mortgageAmount={formData.mortgageAmount}
                term={formData.term}
                interestRate={formData.interestRate}
                formData={formData}
                setFormData={setFormData}
                setShowRes={setShowRes}
                setVal={setVal}
                handleClear={handleClear}
                />
                
               {
                showRes ? (
                  <Result val={val} totalVal={totalVal} />
                ) : (

                <EmptyResult />
                )
               }  
        
      </main>
    </>
  )
}
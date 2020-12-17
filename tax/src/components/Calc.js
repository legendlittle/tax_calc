import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Display from './Display'
import '../Calc.css'


function Calc() {
    function handleChange(e) {
        console.log(e.target.value);
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        switch (data.filing) {
            case "Single":
                {
                    if (data.month >= 12) {

                        {
                            if (data.tax <= 40000) {
                                setTax(.1 * data.tax)
                            }
                            else if (data.tax <= 441450) {
                                setTax(4000 + 0.15 * (data.tax - 40000))
                            }
                            else {
                                setTax(400 + 60217.5 + 0.2 * (data.tax - 441450))
                            }
                        }
                    } else {


                        if (data.tax <= 9875) {
                            setTax(.1 * data.tax);
                            setDiff(0);
                        }
                        else if (data.tax <= 40125) {
                            setTax(987.5 + 0.12 * (data.tax - 9875))
                            setDiff(987.5 + 0.12 * (data.tax - 9875) - ((data.tax > 40000 ? (4000 + 0.15 * (data.tax - 40000)) : (.1 * data.tax))))

                            console.log(tax);
                            console.log(987.5 + 0.12 * (data.tax - 9875))
                            console.log(4000 + (0.15 * (data.tax - 40000)))
                        }

                        else if (data.tax <= 85525) {
                            setTax(987.5 + 3630 + 0.22 * (data.tax - 40125))
                            setDiff(987.5 + 3630 + 0.22 * (data.tax - 40125) - (4000 + (0.15 * (data.tax - 40000))))
                            console.log(tax);
                        }
                        else if (data.tax < 163300) {
                            setTax(987.5 + 3630 + 9988 + 0.24 * (data.tax - 85525))
                            setDiff(987.5 + 3630 + 9988 + 0.24 * (data.tax - 85525) - (4000 + (0.15 * (data.tax - 40000))))
                            console.log(tax);
                        }
                        else if (data.tax <= 207350) {
                            setTax(987.5 + 3630 + 9988 + 18666 + 0.32 * (data.tax - 163300))
                            setDiff(987.5 + 3630 + 9988 + 18666 + 0.32 * (data.tax - 163300) - (4000 + (0.15 * (data.tax - 40000))))
                            console.log(tax);
                        }
                        else if (data.tax <= 518400) {
                            setTax(987.5 + 3630 + 9988 + 18666 + 14096 + 0.35 * (data.tax - 207350))
                            setDiff(987.5 + 3630 + 9988 + 18666 + 14096 + 0.35 * (data.tax - 207350) - (4000 + (0.20 * (data.tax - 441450) + (0.15 * 401450))))
                            console.log(tax);
                        }
                        else {
                            setTax(987.5 + 3630 + 9988 + 18666 + 14096 + 108867.5 + 0.37 * (data.tax - 518400))
                            setDiff(987.5 + 3630 + 9988 + 18666 + 14096 + 108867.5 + 0.37 * (data.tax - 518400) - (4000 + (0.15 * 478400) + (0.2 * (data.tax - 441450))))
                            console.log(tax);

                        }
                    }
                }
                break;


            case "Head of Household":
                {

                }
                break;
            case "Married filing jointly":
                {

                }
                break;
            case "Married filing separately":
        }

    };
    const [tax, setTax] = useState(0);
    const [diff, setDiff] = useState(0);
    const [perc, setPerc] = useState(0);
    const [amt, setAmt] = useState(0);
    const [month, setMonth] = useState(0);



    return (
        <>  

        <h2 className='title'> Tax Calculator for Stonks</h2>
        <h4 className='by'> by Davey Wong (github.com/legendlittle)</h4>



        <br>
        </br>

        <h3 className='enter'> Enter your information below to see how much tax liability you have</h3>
        <br>
        </br>
        <br>
        </br>
        <div className='enterInfo'>

            <input className='form-control' type='number' name='amt' placeholder='Amount of Gains' min='0' onChange={e => setAmt(e.target.value)}/>
            <input className='form-control' placeholder="Months held (round up)" type='number' name='month' min='1' onChange={e => setMonth(e.target.value)} />
            
        </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select name="filing" ref={register}>
                    <option value="Single">Single</option>
                    <option value="Head of Household"> Head of Household</option>
                    <option value="Married filing jointly"> Married filing jointly</option>
                    <option value="Married filing separately"> Married filing separately</option>
                </select>
                
                

                <input type="submit" />
            </form>

            <Display owed={tax} diff={diff} perc={perc} />
        </>
    )
};

export default Calc;

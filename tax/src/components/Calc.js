import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Display from './Display'



function Calc() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        switch (data.filing) {
            case "Single":
                {
                    switch (data.gain) {
                        case "lterm":
                            {
                                if (data.tax < 40000) {
                                    setTax(.1 * data.tax)
                                }
                                else if (data.tax < 441450) {
                                    setTax(4000 + 0.15 * (data.tax - 40000))
                                }
                                else {
                                    setTax(400 + 60217.5 + 0.2 * (data.tax - 441450))
                                }
                            }
                            break;
                        case "sterm":
                            {
                                if (data.tax < 9875) {
                                    setTax(.1 * data.tax);
                                    setDiff(0);
                                }
                                else if (data.tax < 40125) {
                                    setTax(987.5 + 0.12 * (data.tax - 9875))
                                    setDiff(987.5 + 0.12 * (data.tax - 9875) - (4000 + (0.15 * (data.tax - 40000))))
                                }
                                else if (data.tax < 85525) {
                                    setTax(987.5 + 3630 + 0.22 * (data.tax - 40125))
                                    setDiff(987.5 + 3630 + 0.22 * (data.tax - 40125) - (4000 + (0.15 * (data.tax - 40000))))
                                }
                                else if (data.tax < 163300) {
                                    setTax(987.5 + 3630 + 9988 + 0.24 * (data.tax - 85525))
                                    setDiff(987.5 + 3630 + 9988 + 0.24 * (data.tax - 85525) - (4000 + (0.15 * (data.tax - 40000))))
                                }
                                else if (data.tax < 207350) {
                                    setTax(987.5 + 3630 + 9988 + 18666 + 0.32 * (data.tax - 163300))
                                    setDiff(987.5 + 3630 + 9988 + 18666 + 0.32 * (data.tax - 163300) - (4000 + (0.15 * (data.tax - 40000))))
                                }
                                else if (data.tax < 518400) {
                                    setTax(987.5 + 3630 + 9988 + 18666 + 14096 + 0.35 * (data.tax - 207350))
                                    setDiff(987.5 + 3630 + 9988 + 18666 + 14096 + 0.35 * (data.tax - 207350) - (4000 + (0.20 * (data.tax - 441450) + (0.15 * 401450))))
                                }
                                else {
                                    setTax(987.5 + 3630 + 9988 + 18666 + 14096 + 108867.5 + 0.37 * (data.tax - 518400))
                                    setDiff(987.5 + 3630 + 9988 + 18666 + 14096 + 108867.5 + 0.37 * (data.tax - 518400) - (4000 + (0.15 * 478400) + (0.2 * (data.tax - 441450))))
                                }
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
    const [tax, setTax] = useState('');
    const [diff, setDiff] = useState('');



    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select name="filing" ref={register}>
                    <option value="Single">Single</option>
                    <option value="Head of Household"> Head of Household</option>
                    <option value="Married filing jointly"> Married filing jointly</option>
                    <option value="Married filing separately"> Married filing separately</option>
                </select>
                <select name="gain" ref={register}>
                    <option value="lterm">Long-term Capital Gains (Held over 1 year)</option>
                    <option value="sterm"> Short-term Capital Gains</option>
                </select>
                <input type="number" placeholder="Amount of Taxable Income" name="tax" ref={register({ required: true, min: 0 })} />

                <input type="submit" />
            </form>

            <Display owed={tax} diff={diff} />
        </>
    )
};

export default Calc;

import { FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import { useState } from "react"
import { SelectedFundProps } from "../select-isa-stepper/select-isa-stepper";

const MAX_AMOUNT = 20000;
const MIN_AMOUNT = 50;

/**
 * Render the input for the user to enter how much they would like to invest in a fund.
 * Performace validation on the input
 * 
 * @param { SelectedFundProps } 
 * @returns A React element that renders the ISA amount input component
 */
export default function SelectISAAmountInput({ selectedFund, setSelectedFund }: SelectedFundProps) {
    const [amount, setAmount] = useState(selectedFund.amount === 0 ? "" : selectedFund.amount.toString());

    const validateAmount = (amount: number): string => {
        let error = "";
        if (Number.isNaN(amount)) {
            error = "Error: Amount must be a number";
        }
        if (amount < MIN_AMOUNT) {
            error = "Error: Amount must be greater than 50";
        }
        if (amount > MAX_AMOUNT) {
            error = "Error: You cannot invest more then £20,000";
        }
        if (String(amount).split(".")[1]?.length > 2) {
            error = "Error: You cannot have more than 2 decimal places";
        }
        return error;
    }

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let amount = parseFloat(value);
        const error = validateAmount(amount);
        setAmount(value);
        setSelectedFund({ id: selectedFund.id, amount: !!error.length ? 0 : amount, error });
    }

    return (
        <FormControl fullWidth sx={{ margin: "0 1 1 1" }}>
            <InputLabel htmlFor="amount-input">Investment amount</InputLabel>
            <OutlinedInput
                id="amount-input"
                startAdornment={<InputAdornment position="start">£</InputAdornment>}
                label="Investment amount"
                placeholder="0.00"
                aria-describedby="amount-input"
                inputProps={{
                    'aria-label': 'amount input',
                }}
                value={ amount }
                onChange={ handleAmountChange }
                error={ !!selectedFund.error.length }
            />
            {!!selectedFund.error.length && <FormHelperText sx={{ color: "red" }} id="amount-input-error">{ selectedFund.error }</FormHelperText>}
        </FormControl>
    )
}
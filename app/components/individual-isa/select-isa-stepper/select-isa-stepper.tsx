import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import { SetStateAction, useState } from "react";
import { Fund, setUserFund } from "~/api";
import SelectISATabs from "../select-isa-tabs/select-isa-tabs";
import SelectISAAmountInfo from "../select-isa-amount-info.tsx/select-isa-amount-info";
import SelectISAAmountInput from "../select-isa-amount-input/select-isa-amount-input";
import SelectISAReview from "../select-isa-review/select-isa-review";
import LoadingSpinner from "../../common/loading-spinner/loading-spinner";

const steps = ['Select an ISA fund', 'Choose amount to invest', 'Review'];

interface SelectISAStepperProps {
    funds: Fund[]
}

export interface SelectedFund {
    id: string,
    amount: number,
    error: string
}

export interface SelectedFundProps {
    selectedFund: SelectedFund
    setSelectedFund: (value: SetStateAction<{ id: string; amount: number; error: string }>) => void
}

/**
 * Render the select individual ISA fund stepper.
 * This component handles the disaplying of the correct informatin when investing into a fund
 * 
 * @param { SelectISAStepperProps } props 
 * @returns A React element that renders the stepper component
 */
export default function SelectISAStepper({ funds }: SelectISAStepperProps) {
    const [activeStep, setActiveStep] = useState(0);
    const [selectedFund, setSelectedFund] = useState({ id: "", amount: 0, error: "" });
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = () => {
        setIsLoading(true);
        setUserFund("3910ce07-4462-4782-b388-670c8dd37164", selectedFund.id, selectedFund.amount)
            .then(() => {
                setIsLoading(false);
                document.location.href="/";
            });
    }

    const handleNext = () => {
        if (activeStep ===  steps.length - 1) {
            onSubmit();
            return;
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const renderStepperPages = () => {
        const fund = funds.find(f => f.id === selectedFund.id)!;
        switch(activeStep) {
            case 0:
                return(<SelectISATabs selectedFund={ selectedFund } setSelectedFund={ setSelectedFund } funds={ funds }/>);
            case 1:
                
                return (
                    <SelectISAAmountInfo fund={ fund }>
                        <SelectISAAmountInput selectedFund={ selectedFund } setSelectedFund={ setSelectedFund }/>
                    </SelectISAAmountInfo>
                );
            case 2:
                return (<SelectISAReview selectedFund={ selectedFund } fund={ fund }/>);
        }
    }

    const isNextDisabled = () => {
        if (activeStep === 0 && !selectedFund.id) {
            return true
        }
        if (activeStep === 1 && (!!selectedFund.error.length || selectedFund.amount === 0)) {
            return true
        }
        return false;
    }

    const renderNextButtonInnerHTML = () => {
        if (isLoading) {
            return (
                <LoadingSpinner size="20px" color="white"/>
            )
        }
        if (activeStep === steps.length - 1) {
            return "submit";
        }
        return "next";
    }

    return (
        <Box sx={{ width: "100%" }}>
            <Stepper activeStep={ activeStep } sx={{ p: "30px 50px" }}>
            {steps.map((label) => {
                const stepProps: { completed?: boolean } = {};
                return (
                    <Step key={label} {...stepProps}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                );
            })}
            </Stepper>
            <Box sx={{ display: 'flex', flexDirection: 'row', p: "0 40px" }}>
                <Button
                    color="inherit"
                    disabled={ activeStep === 0 }
                    onClick={ handleBack }
                    sx={{ mr: 1 }}
                    variant="contained"
                    >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={ handleNext } disabled={ isNextDisabled() } variant="contained">
                    { renderNextButtonInnerHTML() }
                </Button>
            </Box>
            { renderStepperPages() }
        </Box>
    )
}

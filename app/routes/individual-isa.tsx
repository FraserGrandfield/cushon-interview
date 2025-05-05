import { useEffect, useState } from "react";
import { Fund, getFunds } from "~/api";
import FullScreenSpinnerContainer from "~/components/common/full-screen-spinner-container/full-screen-spinner-container";
import Header from "~/components/common/header/header";
import LoadingSpinner from "~/components/common/loading-spinner/loading-spinner";
import SelectISAStepper from "~/components/individual-isa/select-isa-stepper/select-isa-stepper";

/**
 * Individual ISA selection page.
 * Page where a user can select an ISA fund to invest into.
 * 
 * @returns A React element that renders the Indvidual ISA selection page.
 */
export default function IndividualISA() {
    const [funds, setFunds] = useState([] as Fund[]);

    const loadFunds = async () => {
        const response = await getFunds();
        setFunds(response);
    }

    useEffect(() => {
        loadFunds();
    }, []);

    return (
        <Header>
            {!funds.length ?
            <FullScreenSpinnerContainer>
                <LoadingSpinner size={"250px"}/>
            </FullScreenSpinnerContainer> :
            <SelectISAStepper funds={ funds }/>}
        </Header>
    )
}

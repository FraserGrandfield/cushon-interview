import { useEffect, useState } from "react";
import { Fund, getFunds } from "~/api";
import FullScreenSpinnerContainer from "~/components/common/full-screen-spinner-handler/full-screen-spinner-handler";
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
    const [isLoading, setIsLoading] = useState(true);

    const loadFunds = async () => {
        const response = await getFunds();
        setFunds(response);
        setIsLoading(false);
    }

    useEffect(() => {
        loadFunds();
    }, []);

    return (
        <FullScreenSpinnerContainer isLoading={ isLoading }>
            <SelectISAStepper funds={ funds }/>
        </FullScreenSpinnerContainer>
    )
}

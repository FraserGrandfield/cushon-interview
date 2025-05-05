import { useEffect, useState } from "react";
import { Fund, getFunds } from "~/api";
import Header from "~/components/header/header";
import LoadingSpinner from "~/components/loading-spinner/loading-spinner";
import SelectISAStepper from "~/components/select-isa-stepper/select-isa-stepper";

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
        setFunds(response)
    }

    useEffect(() => {
        loadFunds();
    }, [])

    return (
        <Header>
            {!funds.length ?
            <div className="flex h-screen">
                <div className="m-auto">
                    <LoadingSpinner size={"250px"}/>
                </div>
            </div> :
            <SelectISAStepper funds={ funds }/>}
        </Header>
    )
}

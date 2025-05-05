import { Typography } from "@mui/material";
import { Fund } from "~/api";

/**
 * Render the selected funds info component.
 * This will format and display the fund a user selects
 * 
 * @param { Fund } fund to display
 * @returns A React element that renders the selected funds info component
 */
export default function SelectedFundsInfo({ fund }: { fund: Fund }) {

    return (
        <>
            <Typography className="text-sm font-medium mb-2">Your fund selection:</Typography>
            <ul className="text-sm">
                <li key={fund.id}>{ fund.label }</li>
            </ul>
        </>
    )
}

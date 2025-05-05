import { Typography } from "@mui/material";
import { Fund } from "~/api";


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
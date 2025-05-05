import { Fund } from "~/api";
import { SelectedFund } from "./select-isa-stepper/select-isa-stepper";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import SelectedFundsInfo from "./selected-funds-info";

interface SelectISAReviewProps {
    selectedFund: SelectedFund,
    fund: Fund
}

export default function SelectISAReview({ selectedFund, fund }: SelectISAReviewProps) {

    return (
        <div className="grid justify-items-center">
            <Card sx={{ width: "50%" }}>
                <CardContent>
                    <Typography>Investment Amount</Typography>
                    { `£${selectedFund.amount}` }
                    <Divider sx={{ margin: "20px 5px" }}/>
                    <SelectedFundsInfo fund={ fund }/>
                </CardContent>
            </Card>
        </div>
    )
}
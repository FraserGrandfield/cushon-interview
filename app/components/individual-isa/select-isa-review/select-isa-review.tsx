import { Fund } from "~/api";
import { SelectedFund } from "../select-isa-stepper/select-isa-stepper";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import SelectedFundsInfo from "../selected-funds-info/selected-funds-info";

interface SelectISAReviewProps {
    selectedFund: SelectedFund,
    fund: Fund
}

/**
 * Render the selected isa review page
 * 
 * @param { SelectISAReviewProps } props
 * @returns A React element that renders the selected isa review page
 */
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
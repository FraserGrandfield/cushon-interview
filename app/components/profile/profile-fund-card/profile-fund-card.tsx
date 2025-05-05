import { Card, CardContent, Typography } from "@mui/material";
import { getFundById, UserFund } from "../../../api";
import { useEffect, useState } from "react";

/**
 * Renders a card with the info of a users fund, how much they have invested and how much its worth
 * 
 * @param { UserFund } userFund 
 * @returns A React element that renders information a users fund
 */
export default function ProfileFundCard({ userFund }: { userFund: UserFund }) {
    const [fundName, setFundName] = useState("");

    const loadFundName = async () => {
        const fundResponse = await getFundById(userFund.fundId);
        setFundName(fundResponse.label);
    }

    useEffect(() => {
        loadFundName();
    }, []);

    return (
        <Card sx={{ width: "50%", marginTop: "50px" }}>
            <CardContent>
                <Typography variant="h5">{ fundName }</Typography>
                <Typography sx={{ marginTop: "15px" }}>{ `Invest Amount: £${userFund.amountInvested}` }</Typography>
                <Typography sx={{ marginTop: "15px", fontWeight: "bold" }}>{ `Current Value: £${userFund.currentValue}` }</Typography>
            </CardContent>
        </Card>
    )
}
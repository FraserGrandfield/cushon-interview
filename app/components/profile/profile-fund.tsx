import { Card, CardContent, Divider, Typography } from "@mui/material";
import { getFundById, UserFund } from "~/api";
import SelectedFundsInfo from "../individual-isa/selected-funds-info/selected-funds-info";
import { useEffect, useState } from "react";

export default function ProfileFund({ userFund }: { userFund: UserFund }) {
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
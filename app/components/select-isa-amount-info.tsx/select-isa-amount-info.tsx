import { Card, CardContent, Divider } from "@mui/material"
import { Fund } from "~/api"
import SelectedFundsInfo from "../selected-funds-info";

interface SelectISAAmountInfoProps {
    children: React.ReactNode;
    fund: Fund;
}

/**
 * Render the information on for how much a user wants to invest
 * 
 * @param { SelectISAAmountInfoProps } props 
 * @returns A React element that renders the amount info
 */
export default function SelectISAAmountInfo({ children, fund }: SelectISAAmountInfoProps) {

    return (
        <div className="grid justify-items-center">
            <Card sx={{ width: "50%" }}>
                <CardContent>
                    { children }
                    <p className="text-xs text-muted-foreground">ISA allowance: up to £20,000 per tax year</p>
                    <Divider sx={{ margin: "20px 5px" }}/>
                    <SelectedFundsInfo fund={ fund }/>
                </CardContent>
            </Card>
        </div>
    )
}


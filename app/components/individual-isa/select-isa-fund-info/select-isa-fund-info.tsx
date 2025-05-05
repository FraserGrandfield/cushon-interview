import { Button, Card, Divider, Typography } from "@mui/material";
import { Fund } from "~/api";
import { SelectedFundProps } from "../select-isa-stepper/select-isa-stepper";

interface SelectISAFundInfoProps extends SelectedFundProps {
    fund: Fund
}

/**
 * Render a information paragraph with styling
 * 
 * @param { React.ReactNode } children text to disaply
 * @returns A React element that renders a styled information paragrpah
 */
function InfoParagraph({ children }: {children: React.ReactNode}) {
    return (
        <p style={{ margin: "20px 0 0" }}>
            { children }
        </p>
    )
}

/**
 * Render the portfolio information
 * 
 * @param { Fund } fund information
 * @returns A React element that renders the portfolio information
 */
function PortfolioInfo({ fund }: { fund: Fund }) {
    return (
        <>
            <Typography
                variant="h5"
                sx={{ fontWeight: "bold", padding: "20px 0 0" }}
            >
                Portfolio
            </Typography>
            <InfoParagraph>
                { fund.portfolioDescription }
            </InfoParagraph>
            <div className="grid grid-cols-2">
                {fund.portfolio.map((p, index) => {
                    return (
                        <Card style={{ padding: "15px", margin: "20px" }} key={`portfolio-${index}`}>
                            <Typography
                                variant="h6"
                            >
                                { p.name }
                            </Typography>
                            <InfoParagraph>
                                { p.about }
                            </InfoParagraph>
                            <InfoParagraph>
                                { `Percentage: ${p.percentage * 100}%` }
                            </InfoParagraph>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}

/**
 * Render the fund informatin component. Here a user can also select a fund
 * 
 * @param { SelectISAFundInfoProps } props 
 * @returns A React element that renders the fund info
 */
export default function SelectISAFundInfo({ selectedFund, setSelectedFund, fund }: SelectISAFundInfoProps) {

    const handleSelectFund = () => {
        let id = fund.id;
        if (selectedFund.id === id) {
            id = "";
        }
        setSelectedFund({ id, amount: selectedFund.amount, error: selectedFund.error });
    }

    return (
        <div className="grid grid-flow-row justify-items-center">
            <div style={{ maxWidth: "80%" }}>
                <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold" }}
                >
                    { fund.label }
                </Typography>
                <InfoParagraph>
                    { fund.summary }
                </InfoParagraph>
                <InfoParagraph>
                    { `Annual Charges: ${fund.charges}%` }
                </InfoParagraph>
                <div className="grid justify-items-center">
                    <Button
                        onClick={ handleSelectFund }
                        variant="contained"
                        sx={{ width: "180px", margin: "20px", padding: "10px" }}
                    >
                        { selectedFund.id === fund.id ? "Unselect Fund" : "Select Fund" }
                    </Button>
                </div>
                <Divider sx={{ padding: "20px 0 0" }}></Divider>
                <PortfolioInfo fund={ fund }></PortfolioInfo>
            </div>
        </div>
    )
}

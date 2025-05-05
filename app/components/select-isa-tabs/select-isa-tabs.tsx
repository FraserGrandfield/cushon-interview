import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { Fund } from "~/api";
import { SelectedFundProps } from "../select-isa-stepper/select-isa-stepper";
import SelectISAFundInfo from "../select-isa-fund-info/select-isa-fund-info";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

interface SelectISATabsProps extends SelectedFundProps {
    funds: Fund[]
}

interface TabPanelProps {
    children: React.ReactNode;
    value: number;
}

/**
 * Add accesbility attributes
 * 
 * @param index of element
 * @returns Accessbility attributes
 */
function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
}

/**
 * Render the tab panel which will display the information in a tab
 * 
 * @param { TabPanelProps } props
 * @returns A React element that renders the tab info component
 */
function TabPanel({ children, value }: TabPanelProps) {
    return (
        <div
            role="tabpanel"
            id={ `vertical-tabpanel-${value}` }
            aria-labelledby={ `vertical-tab-${value}` }
        >
            <Box sx={{ p: 3 }}>
                { children }
            </Box>
        </div>
    );
}

/**
 * Render tabs for each fund.
 * These tabs will display all the info about each fund and allows a user to select a fund to invest in
 * 
 * @param { SelectISATabsProps } props
 * @returns A React element that renders the tabs component
 */
export default function SelectISATabs({ selectedFund, setSelectedFund, funds }: SelectISATabsProps) {
    const [value, setValue] = useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Tabs
                orientation="vertical"
                value={ value }
                onChange={ handleChange }
                aria-label="Individual ISA vertical tabs"
                sx={{ borderRight: 1, borderColor: 'divider', minWidth: "15%" }}
            >
                {funds.map((fund, index) => (
                    <Tab
                        icon={fund.id === selectedFund.id ? <CheckCircleIcon/> : <PanoramaFishEyeIcon/>}
                        label={fund.label}
                        { ...a11yProps(index) }
                        key={ fund.label }
                    />
                ))}
            </Tabs>
            <TabPanel value={ value }>
                <SelectISAFundInfo fund={ funds[value] } selectedFund={selectedFund} setSelectedFund={ setSelectedFund }/>
            </TabPanel>
        </Box>
    )
}
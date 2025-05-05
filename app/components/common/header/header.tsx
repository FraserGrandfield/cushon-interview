import { AppBar, Box, Link, Toolbar } from "@mui/material";
import logo from "../../../../assests/logo.svg";

interface Pages {
    label: string;
    route: string;
}

const pages: Pages[] = [
    {
        label: "Individual ISAs",
        route: "/individual-isa"
    },
    {
        label: "Workplace ISAs",
        route: "/workplace-isa"
    }
];

/**
 * Renders the header at the top of the screen.
 * This contains link to the home page, indvidual isa and workplace isa page.
 * 
 * @param { React.PropsWithChildren } children
 * @returns A React element that renders the header.
 */
export default function Header({ children }: React.PropsWithChildren) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ padding: "20px 0" }}>
                <Toolbar>
                <img
                    style={{ width: "50px" }}
                    src={ logo }
                    alt="Natwest logo"
                />
                <div style={{ flexGrow: 1 }}>
                    <Link
                        color="inherit"
                        href="/"
                        sx={{ fontWeight: 700, fontSize: "40px", paddingLeft: "15px" }}
                        underline="hover"
                    >
                        NatWest Cushon
                    </Link>
                </div>
                {pages.map((page) => (
                    <Link
                        key={ page.label }
                        href={ page.route }
                        sx={{ m: 1 }}
                        color="inherit"
                        underline="hover"
                    >
                        { page.label }
                    </Link>
                ))}
                </Toolbar>
            </AppBar>
            { children }
        </Box>
    )
}

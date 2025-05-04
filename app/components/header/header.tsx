import { AppBar, Box, Link, Toolbar } from "@mui/material";
import logo from "../../../assests/logo.svg";

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

export default function Header({ children }: React.PropsWithChildren) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "var(--primary-backround)" }}>
                <Toolbar disableGutters>
                <img
                    style={{ width: "30px", padding: "10px 2px" }}
                    src={ logo }
                    alt="Natwest logo"
                />
                <div style={{ flexGrow: 1 }}>
                    <Link
                        color="inherit"
                        href="/"
                        sx={{ fontWeight: 700 }}
                        underline="hover"
                    >
                        NatWest Cushon
                    </Link>
                </div>
                {pages.map((page) => (
                    <Link
                        key={ page.label }
                        href={ page.route }
                        fontSize="10px"
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

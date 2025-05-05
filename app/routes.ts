import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("individual-isa", "routes/individual-isa.tsx"),
    route("workplace-isa", "routes/workplace-isa.tsx"),
    route("profile", "routes/profile.tsx"),
] satisfies RouteConfig;

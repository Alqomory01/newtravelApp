import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [index("routes/index.tsx"),
route("home", "routes/home.tsx"),
route("about", "routes/about.tsx"),
route("contact", "routes/contact.tsx"), 
route("services", "routes/services.tsx"),
route("api", "routes/api.tsx"),
route("cart", "routes/cart.tsx"),
route("checkout", "routes/checkout.tsx")] satisfies RouteConfig;

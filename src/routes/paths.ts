/**
 * Auth Routes.
 * This is a list of routes or pages that are used for authentication. e.g login, register etc
 */
export const authRoutes = {
    // auth
    signIn: "/login",
    signUp: "/register",
};

/**
 * Admin Routes
 * This is a list of routes or pages that are used for authentication of the admin. e.g dashboard, orders management etc
 */
export const adminRoutes = {
    admindashboard: "/admin/dashboard",
    adminorders: "/admin/orders",
    adminordersEdit: (id:string) =>  `/admin/orders/edit/${id}`,
    adminsingleProperty: (id:string) =>  `/admin/orders/${id}`,
    adminprofile: "/admin/profile",
    adminsales: "/admin/sales",
}

/**
 * Public Routes
 * This is a list of routes or pages that are accessible to the everyone without a need to login  e.g homepage, orders, contact us etc
 */
export const publicRoutes = {
    home: "/",
    about: "/about",
    menu: "/menu",
    singleOrder: (id: string) => `/order/${id}`,
    contact: "/contact"
}
/**
 * App Route Paths
 * This is a combination of all the available routes/pages i.e. authRoutes, adminRoutes, publicRoutes etc
 */
export const appRoutePaths = {
    ...authRoutes,
    ...adminRoutes,
    ...publicRoutes,
    googleMap: `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Olusegun%20Obasajo%20Way,%20secondary,%20Abuja,%20Nigeria+(Oakyard%20orders)&t=&z=14&ie=UTF8&iwloc=B&output=embed`
}
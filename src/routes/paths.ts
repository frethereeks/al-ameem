/**
 * Auth Routes.
 * This is a list of routes or pages that are used for authentication. e.g login, register etc
 */
export const authRoutes = {
    // auth
    signIn: "/auth/signin",
    signUp: "/register",
};

/**
 * Admin Routes
 * This is a list of routes or pages that are used for authentication of the admin. e.g dashboard, orders management etc
 */
export const adminRoutes = {
    admindashboard: "/admin/dashboard",
    adminmenu: "/admin/menu",
    admincontact: "/admin/contact",
    adminuser: "/admin/users",
    adminmenuEdit: (id:string) =>  `/admin/menu/edit/${id}`,
    adminprofile: "/admin/profile",
    adminsales: "/admin/sales",
}

/**
 * Public Routes
 * This is a list of routes or pages that are accessible to the everyone without a need to login  e.g homepage, menu, contact us etc
 */
export const publicRoutes = {
    home: "/",
    about: "/about",
    cart: "/cart",
    menu: "/menu",
    search: "/search",
    singleMenu: (id: string) => `/menu/${id}`,
    signin: "/auth/signin",
    signup: "/auth/signup",
    verify: "/auth/verify",
    logout: "/auth/logout",
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
    // googleMap: `https://maps.app.goo.gl/7q2hgr9obyQ3n1BUA`
    // googleMap: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63046.03375002715!2d7.4210509825374!3d9.029321524200391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1035165ba88bee7d%3A0xdf337f9cbe52f432!2sWara%2C%20Kebbi%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1731548770732!5m2!1sen!2sus`
    // googleMap: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.075724064212!2d7.330377173550967!3d9.147633787123667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd9541d73ee59%3A0xf84479d6310b6bd4!2sKubwa!5e0!3m2!1sen!2sng!4v1740608194303!5m2!1sen!2sng`
    googleMap: `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31512.579717641827!2d7.3111099928578644!3d9.147928198948978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sf01%20kubwa!5e0!3m2!1sen!2sng!4v1740609044843!5m2!1sen!2sng`
}
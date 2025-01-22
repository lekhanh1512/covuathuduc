import { lazy } from "react";

const ViewAboutPage = lazy(
    () => import("@/pages/AboutPage/index")
  );
const ViewCoursePage = lazy(
    () => import("@/pages/CoursePage/index")
  );

  const ViewFaciPage = lazy(
    () => import("@/pages/FacilitiesPage/index")
  );

  const ViewTourPage = lazy(
    () => import("@/pages/TournamentPage/index")
  );

  const ViewNewsPage = lazy(
    () => import("@/pages/NewsPage/index")
  );

  const ViewContactPage = lazy(
    () => import("@/pages/ContactPage/index")
  );
  const coreRoutes = [
    {
      path: "/about",
      title: "Về Chúng Tôi",
      component: ViewAboutPage,
    },
    {
      path: "/courses",
      title: "Khóa Học",
      component: ViewCoursePage,
    },
    {
      path: "/facilities",
      title: "Về Chúng Tôi",
      component: ViewFaciPage,
    },
    {
      path: "/tournament",
      title: "Về Chúng Tôi",
      component: ViewTourPage,
    },
    {
      path: "/news",
      title: "Về Chúng Tôi",
      component: ViewNewsPage,
    },
    {
      path: "/contact",
      title: "Về Chúng Tôi",
      component: ViewContactPage,
    },

  ];
  
  const routes = [...coreRoutes];
  export default routes;
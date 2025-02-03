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
      path: "/ve-chung-toi",
      title: "Về Chúng Tôi",
      component: ViewAboutPage,
    },
    {
      path: "/khoa-hoc",
      title: "Khóa Học",
      component: ViewCoursePage,
    },
    {
      path: "/he-thong-co-so",
      title: "Về Chúng Tôi",
      component: ViewFaciPage,
    },
    {
      path: "/giai-dau",
      title: "Về Chúng Tôi",
      component: ViewTourPage,
    },
    {
      path: "/tin-tuc",
      title: "Về Chúng Tôi",
      component: ViewNewsPage,
    },
    {
      path: "/lien-he",
      title: "Về Chúng Tôi",
      component: ViewContactPage,
    },

  ];
  
  const routes = [...coreRoutes];
  export default routes;
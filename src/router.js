import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import GetInvolved from "./pages/GetInvolved.vue";
import Blog from './pages/Blog.vue'
import BlogPost from './pages/BlogPost.vue'
import TalkAndWalk from "./pages/TalkAndWalk.vue";
import StateOfEducationAndMentalHealth from "./pages/StateOfEducationAndMentalHealth.vue"
import TheDifferenceBetweenStressAndStressors from "./pages/TheDifferenceBetweenStressAndStressors.vue"
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Help from './pages/Help.vue'
import SignIn from './pages/SignIn.vue'
import SignUp from './pages/SignUp.vue'
import ResetPassword from './pages/ResetPassword.vue'
import PageNotFound from './pages/PageNotFound.vue'
import Education from './pages/Education.vue'
import NonProfits from './pages/NonProfits.vue'
import Enterprise from './pages/Enterprise.vue'
import Terms from './pages/Terms.vue'
import Privacy from './pages/Privacy.vue';
import RequestDemo from './pages/RequestDemo.vue'
import Verification from './pages/Verification.vue'
import Apply from './pages/Apply.vue'
import CreatorApp from "./pages/CreatorApp.vue"
import ProfessionalApp from './pages/ProfessionalApp.vue'
import PrivateApp from './pages/PrivateApp.vue'
import CaseStudies from './pages/CaseStudies.vue'
import WhyTadHealth from "./pages/WhyTadHealth.vue"
import Podcasts from "./pages/Podcasts.vue"
import Admin from "./pages/Admin.vue"
import PodcastsList from "./pages/PodcastsList.vue"
import ArticlesList from "./pages/ArticlesList.vue"
import AdminLogin from "./pages/AdminLogin.vue"
import AdminHome from "./pages/AdminHome.vue"
import BHHSCaseStudy from "./pages/BHHSCaseStudy.vue";
import GetTadHealth from './pages/GetTadHealth.vue'
import GetTadHealthForm from './pages/GetTadHealthForm.vue'
import UploadPodcast from "./pages/UploadPodcast.vue"
import UploadArticle from "./pages/UploadArticle.vue";
import SinglePodcast from "./pages/SinglePodcast.vue";
import SingleArticle from "./pages/SingleArticle.vue";
import PodcastsActive from "./pages/PodcastsActive.vue";
import Article from "./pages/Article.vue"
import store from "./main";
import Safety from "./pages/Safety.vue";
import Resources from "./pages/Resources.vue";
import Coordination from "./pages/Coordination.vue";
import Analytics from "./pages/Analytics.vue";
import Billing from "./pages/Billing.vue";
import Platform from "./pages/Platform.vue";
import Pricing from "./pages/Pricing.vue";
import RequestDemoSuccess from "./pages/RequestDemoSuccess.vue";
import AnalyticsNew from './pages/AnalyticsNew.vue';
import CrisisManagement from './pages/CrisisManagement.vue';
import BillingNew from "./pages/BillingNew.vue";

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 });
    } else {
      document.querySelector("html").style.scrollBehavior = "auto";
      window.scroll({ top: 0 });
      document.querySelector("html").style.scrollBehavior = "";
    }
  },
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Home,
      name: "Home",
    },
    {
      path: "/apply",
      component: Apply,
    },
    {
      path: "/creator-application",
      component: CreatorApp,
    },
    {
      path: "/professional-application",
      component: ProfessionalApp,
    },
    {
      path: "/private-application",
      component: PrivateApp,
    },
    {
      path: "/get-involved",
      component: GetInvolved,
    },
    {
      path: "/blog",
      component: Blog,
    },
    {
      path: "/blog-post",
      component: BlogPost,
    },
    {
      path: "/bhhs-case-study",
      component: BHHSCaseStudy,
    },
    {
      path: "/talk-and-walk",
      component: TalkAndWalk,
    },
    {
      path: "/state-of-education-and-mental-health",
      component: StateOfEducationAndMentalHealth,
    },
    {
      path: "/the-difference-between-stress-and-stressors",
      component: TheDifferenceBetweenStressAndStressors,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/get-tadhealth",
      component: GetTadHealth,
    },
    {
      path: "/join-community",
      component: GetTadHealthForm,
    },
    {
      path: "/contact",
      component: Contact,
    },
    {
      path: "/education",
      component: Education,
    },
    {
      path: "/enterprise",
      component: Enterprise,
    },
    {
      path: "/help",
      component: Help,
    },
    {
      path: "/organizations",
      component: NonProfits,
    },
    {
      path: "/signin",
      component: SignIn,
    },
    {
      path: "/signup",
      component: SignUp,
    },
    {
      path: "/terms",
      component: Terms,
    },
    {
      path: "/privacy",
      component: Privacy,
    },
    {
      path: "/reset-password",
      component: ResetPassword,
    },
    {
      path: "/request-demo",
      component: RequestDemo,
    },
    {
      path: "/request-demo-success",
      component: RequestDemoSuccess,
      name: "RequestDemoSuccess",
    },
    {
      path: "/verification",
      component: Verification,
    },
    {
      path: "/casestudies",
      component: CaseStudies,
    },
    {
      path: "/whytadhealth",
      component: WhyTadHealth,
    },
    {
      path: "/podcasts",
      component: Podcasts,
    },
    {
      path: "/login",
      name: "AdminLogin",
      component: AdminLogin,
    },
    {
      path: "/podcasts/:slug",
      component: PodcastsActive,
      name: "PodcastsActive",
    },
    {
      path: "/blog/:slug",
      component: Article,
      name: "Article",
    },
    {
      path: "/tadhealth-platform",
      component: Platform,
    },
    {
      path: "/tadhealth-safety",
      component: Safety,
    },
    {
      path: "/tadhealth-resources",
      component: Resources,
    },
    {
      path: "/tadhealth-coordination",
      component: Coordination,
    },
    {
      path: "/tadhealth-analytics",
      component: Analytics,
    },
    {
      path: "/tadhealth-analytics-new",
      component: AnalyticsNew,
    },
    {
      path: "/tadhealth-billing",
      component: Billing,
    },
    {
      path: "/tadhealth-billing-new",
      component: BillingNew,
    },
    {
      path: "/tadhealth-crisis-management",
      component: CrisisManagement,
    },
    {
      path: "/pricing",
      component: Pricing,
    },
    {
      path: "/admin",
      component: Admin,
      beforeEnter: (to, from, next) => {
        if (!store.state.user) {
          next({ name: "AdminLogin" });
        } else {
          next();
        }
      },

      children: [
        {
          path: "home",
          component: AdminHome,
        },
        {
          path: "podcast/:slug",
          component: SinglePodcast,
          name: "SinglePodcast",
        },
        {
          path: "article/:slug",
          component: SingleArticle,
          name: "SingleArticle",
        },

        {
          path: "articles",
          component: ArticlesList,
        },
        {
          name: "podcasts",
          path: "podcasts",
          component: PodcastsList,
        },
        {
          name: "upload-podcast",
          path: "upload-podcast",
          component: UploadPodcast,
        },
        {
          name: "upload-article",
          path: "upload-article",
          component: UploadArticle,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: PageNotFound,
    },
  ],
});

export default router

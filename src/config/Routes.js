import RevenueCustomerCompaignPage from "../pages/revenueCustomerCompaign/index";
import ChangePassword from "../pages/changePassword/index";
import ForgetPassword from "../pages/forgetPassword/forgetPassword";
import CreateAccount from "../pages/createAccount/createAccount";
import SignUp from "../pages/SignUp/signUp";
import SignIn from "../pages/LogIn/logIn";
import CallAnalyticsPage from "../pages/callAnalytics/index";
import AdwardsPage from "../pages/adwords/index";
import Yelp from "../pages/yelp/index";
import RepairPal from "../pages/RepairPal/index";
import Settings from "../pages/settings/index";
import CallInsightsPage from "../pages/callInsights/index";
import CallDetails from "../pages/conversationDetails/index";
import DashboardPage from "../pages/dashboard/index";
import Report from "../pages/report/index";
import RankingReport from "../pages/rankingReport";
import ReportBI from "../pages/reportBI";

export const DynamicRoutes = {
  public: [
    {
      path: "/",
      element: <SignIn />
    }
    // { path: "/changePassword", element: <ChangePassword /> },
    // { path: "/forgetPassword", element: <ForgetPassword /> },
    // { path: "/createAccount", element: <CreateAccount /> },
    // { path: "/signUp", element: <SignUp /> },

    // {
    //   path: "/dashboard",
    //   element: <DashboardPage />
    // }
  ],

  admin: [
    // {
    //   path: "/",
    //   element: <SignIn />,
    // },
    // { path: "/changePassword", element: <ChangePassword /> },
    // { path: "/forgetPassword", element: <ForgetPassword /> },
    // { path: "/createAccount", element: <CreateAccount /> },
    // { path: "/signUp", element: <SignUp /> },
    {
      path: "/Reporting",
      element: <ReportBI />
    },

    {
      path: "/dashboard",
      element: <Settings />
    }
  ],
  private: [
    {
      path: "/Reporting",
      element: <ReportBI />
    }
    // {
    //   path: "/callInsights",
    //   element: <CallInsightsPage />
    // },

    // {
    //   path: "/conversationDetails",
    //   element: <CallDetails />
    // },
    // {
    //   path: "/report/",
    //   element: <RankingReport />
    // },
    // {
    //   path: "/report/business_report",
    //   element: <Report />
    // },
    // {
    //   path: "/callAnalytics",
    //   element: <CallAnalyticsPage />
    // },
    // {
    //   path: "/yelp",
    //   element: <Yelp />
    // },
    // {
    //   path: "/repairPal",
    //   element: <RepairPal />
    // },

    // {
    //   path: "/settings",
    //   element: <Settings />
    // },

    // {
    //   path: "/revenue_customer_campaign",
    //   element: <RevenueCustomerCompaignPage />
    // },

    // {
    //   path: "/dashboard",
    //   element: <DashboardPage />
    // },
    // {
    //   path: "/adwords",
    //   element: <AdwardsPage />
    // }
  ],
  privateForStan: [
    {
      path: "/Reporting",
      element: <ReportBI />
    },
    {
      path: "/callInsights",
      element: <CallInsightsPage />
    },

    {
      path: "/conversationDetails",
      element: <CallDetails />
    },
    {
      path: "/report/ranking_report",
      element: <RankingReport />
    },
    {
      path: "/report/business_report",
      element: <Report />
    },
    {
      path: "/callAnalytics",
      element: <CallAnalyticsPage />
    },
    {
      path: "/yelp",
      element: <Yelp />
    },
    {
      path: "/repairPal",
      element: <RepairPal />
    },

    {
      path: "/settings",
      element: <Settings />
    },

    {
      path: "/revenue_customer_campaign",
      element: <RevenueCustomerCompaignPage />
    },

    {
      path: "/dashboard",
      element: <DashboardPage />
    },
    {
      path: "/adwords",
      element: <AdwardsPage />
    }
  ]
};

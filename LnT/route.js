import React, { lazy } from "react";
import CompartmentVersion from "../component/CompartmentVersion/CompartmentVersion";
const Login = lazy(() => import("../component/login/LoginPage"));
const Home = lazy(() => import("../component/Dashboard/Home"));
const ConfigCategory = lazy(() =>
  import("../component/ConfigCategory/ConfigCategory")
);

// Import your component
const DefaultBagWeight = lazy(() =>
  import("../component/lnt/Master/DefaultBagWeight/DefaultBagWeight")
);
const LoadULD = lazy(() => import("../component/lnt/Master/LoadULD/LoadULD"));
const CombinedLoadLimits = lazy(() =>
  import("../component/lnt/Master/CombinedLoadLimits/CombinedLoadLimits")
);
const CumulativeLoadLimits = lazy(() =>
  import("../component/lnt/Master/CumulativeLoadLimits/CumulativeLoadLimits")
);
const Bew = lazy(() => import("../component/lnt/Master/Bew/Bew"));
const EmailTypeBAddress = lazy(() =>
  import("../component/lnt/Master/EmailTypeBAddress/EmailTypeBAddress")
);
const ContainerTareWeight = lazy(() =>
  import("../component/lnt/Master/ContainerTareWeight/ContainerTareWeight")
);
const MtowRestriction = lazy(() =>
  import("../component/lnt/Master/MtowRestriction/MtowRestriction")
);
const DOW = lazy(() => import("../component/lnt/Master/DOW/DOW"));
const DGSPCLCode = lazy(() =>
  import("../component/lnt/Master/DGSPCLCode/DGSPCLCode")
);
const MinimumCrew = lazy(() =>
  import("../component/lnt/Master/MinimumCrew/MinimumCrew")
);

const BasicAircraftDetails = lazy(() =>
  import("../component/lnt/Master/Basic_Aircraft_Details/BasicAircraftDetails")
);

const FuelIndex = lazy(() =>
  import("../component/lnt/Master/FuelIndex/FuelIndex")
);

const StabTrimData = lazy(() =>
  import("../component/lnt/Master/StabTrim/StabTrimData")
);
const JumpSeat = lazy(() =>
  import("../component/lnt/Master/JumpSeat/JumpSeat")
);
const IndexLimit = lazy(() =>
  import("../component/lnt/Master/IndexLimit/IndexLimit")
);
//const AssessmentType = lazy(() => import("../component/itms/assessmentType")); Dashboard
const LntDashboard = lazy(() =>
  import("../component/Containers/lntDashboards/LntDashboard")
);

const TrimSheet = lazy(() => import("../component/TrimSheet/TrimSheet"));

const Compartment = lazy(() =>
  import("../component/lnt/Master/Compartment/Compartment")
);

const UldInformation = lazy(() =>
  import("../component/lnt/Master/ULD_Information/UldInformation")
);

const routes = [
  //------------commom Routes------------
  {
    path: "/",
    component: <Login />,
    wrapRoute: "AuthRoutes",
  },

  {
    path: "/dashboard",
    component: <Home />,
    wrapRoute: "ProtectedRoutes",
  },

  // please do not delete above route
  {
    path: "/Defaultweight",
    component: <DefaultBagWeight />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    path: "/Bew",
    component: <Bew />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    path: "EmailTypeBAddress",
    component: <EmailTypeBAddress />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    path: "ContainerTareWeight",
    component: <ContainerTareWeight />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    path: "MtowRestriction",
    component: <MtowRestriction />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    path: "BasicAircraftDetails",
    component: <BasicAircraftDetails />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    path: "IndexLimit",
    component: <IndexLimit />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    path: "JumpSeat",
    component: <JumpSeat />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    path: "StabTrimData",
    component: <StabTrimData />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    path: "FuelIndex",
    component: <FuelIndex />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    path: "DOW",
    component: <DOW />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    path: "DGSPCLCode",
    component: <DGSPCLCode />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    path: "MinimumCrew",
    component: <MinimumCrew />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    path: "Compartment",
    component: <Compartment />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    path: "UldInformation",
    component: <UldInformation />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    // Dashboard
    path: "LntDashboard",
    component: <LntDashboard />,
    wrapRoute: "ProtectedRoutes",
  },
  //
  {
    // Dashboard
    path: "TrimSheet",
    component: <TrimSheet />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    // Dashboard
    path: "LoadULD",
    component: <LoadULD />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    // Dashboard
    path: "CombinedLoadLimits",
    component: <CombinedLoadLimits />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    // Dashboard
    path: "CumulativeLoadLimits",
    component: <CumulativeLoadLimits />,
    wrapRoute: "ProtectedRoutes",
  },
  {
    // Dashboard
    path: "ConfigCategory",
    component: <ConfigCategory />,
    wrapRoute: "ProtectedRoutes",
  },

  {
    // Dashboard
    path: "CompartmentVersion",
    component: <CompartmentVersion />,
    wrapRoute: "ProtectedRoutes",
  },

  {},
];

export default routes;

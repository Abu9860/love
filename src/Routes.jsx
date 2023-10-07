import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Hostelfurniturereportdamage = React.lazy(() =>
  import("pages/Hostelfurniturereportdamage"),
);
const Hosteladdfurnitureselectcategory = React.lazy(() =>
  import("pages/Hosteladdfurnitureselectcategory"),
);
const HostelfurniturereportdamageOne = React.lazy(() =>
  import("pages/HostelfurniturereportdamageOne"),
);
const Hostelfurniturepayamountconfirm = React.lazy(() =>
  import("pages/Hostelfurniturepayamountconfirm"),
);
const Hostelfurniturepayamount = React.lazy(() =>
  import("pages/Hostelfurniturepayamount"),
);
const Hostelfurnitureorderviewdetails = React.lazy(() =>
  import("pages/Hostelfurnitureorderviewdetails"),
);
const Viewstudentsassignedhostel = React.lazy(() =>
  import("pages/Viewstudentsassignedhostel"),
);
const Hostelsfurniture = React.lazy(() => import("pages/Hostelsfurniture"));
const Hostelfurniturepaymentpaylater = React.lazy(() =>
  import("pages/Hostelfurniturepaymentpaylater"),
);
const Hostelfurniturepaymentsuccesfull = React.lazy(() =>
  import("pages/Hostelfurniturepaymentsuccesfull"),
);
const Hostelfurniturepayment = React.lazy(() =>
  import("pages/Hostelfurniturepayment"),
);
const HosteladdfurnitureTwo = React.lazy(() =>
  import("pages/HosteladdfurnitureTwo"),
);
const Hosteladdvendor = React.lazy(() => import("pages/Hosteladdvendor"));
const Hosteladdfurniture = React.lazy(() => import("pages/Hosteladdfurniture"));
const Hostelfurnituremodal = React.lazy(() =>
  import("pages/Hostelfurnituremodal"),
);
const DashboardaddDefaulterconfirm = React.lazy(() =>
  import("pages/DashboardaddDefaulterconfirm"),
);
const Viewstudentsremovedhostel = React.lazy(() =>
  import("pages/Viewstudentsremovedhostel"),
);
const Viewstudentsunassignedhostel = React.lazy(() =>
  import("pages/Viewstudentsunassignedhostel"),
);
const ViewstudentsassignedhostelOne = React.lazy(() =>
  import("pages/ViewstudentsassignedhostelOne"),
);
const Dashboardaddstudentscancellationprompt = React.lazy(() =>
  import("pages/Dashboardaddstudentscancellationprompt"),
);
const Removetenantcheckpaymentlink = React.lazy(() =>
  import("pages/Removetenantcheckpaymentlink"),
);
const Removeteantmoneyrecovery = React.lazy(() =>
  import("pages/Removeteantmoneyrecovery"),
);
const Removetenantsuccess = React.lazy(() =>
  import("pages/Removetenantsuccess"),
);
const Removetenantpaymentnotrecieved = React.lazy(() =>
  import("pages/Removetenantpaymentnotrecieved"),
);
const Removetenantcheck = React.lazy(() => import("pages/Removetenantcheck"));
const Removetenant = React.lazy(() => import("pages/Removetenant"));
const Hostelassignedmodal = React.lazy(() =>
  import("pages/Hostelassignedmodal"),
);
const Hostelsassigned = React.lazy(() => import("pages/Hostelsassigned"));
const DashboardaddDefaulter = React.lazy(() =>
  import("pages/DashboardaddDefaulter"),
);
const Viewstudents = React.lazy(() => import("pages/Viewstudents"));
const Viewstudentsinhostel = React.lazy(() =>
  import("pages/Viewstudentsinhostel"),
);
const Viewstudentsouthostel = React.lazy(() =>
  import("pages/Viewstudentsouthostel"),
);
const Dashboardaddstudentsduration = React.lazy(() =>
  import("pages/Dashboardaddstudentsduration"),
);
const DashboardaddroomsTwo = React.lazy(() =>
  import("pages/DashboardaddroomsTwo"),
);
const Dashboardaddroomsfurniture = React.lazy(() =>
  import("pages/Dashboardaddroomsfurniture"),
);
const Dashboardaddrooms = React.lazy(() => import("pages/Dashboardaddrooms"));
const DashboardaddroomsThree = React.lazy(() =>
  import("pages/DashboardaddroomsThree"),
);
const DashboardaddroomsOne = React.lazy(() =>
  import("pages/DashboardaddroomsOne"),
);
const Hostelsrooms = React.lazy(() => import("pages/Hostelsrooms"));
const Dashboardaddhostelsconfirmation = React.lazy(() =>
  import("pages/Dashboardaddhostelsconfirmation"),
);
const Dashboardaddhostels = React.lazy(() =>
  import("pages/Dashboardaddhostels"),
);
const Hostelshostel = React.lazy(() => import("pages/Hostelshostel"));
const Dashboardstudents = React.lazy(() => import("pages/Dashboardstudents"));
const Dashboardaddstudents = React.lazy(() =>
  import("pages/Dashboardaddstudents"),
);
const Dashboardaddstudentsaddress = React.lazy(() =>
  import("pages/Dashboardaddstudentsaddress"),
);
const Dashboardaddstudentsguardians = React.lazy(() =>
  import("pages/Dashboardaddstudentsguardians"),
);
const Dashboardaddstudentsallocation = React.lazy(() =>
  import("pages/Dashboardaddstudentsallocation"),
);
const Dashboardaddstudentsmeal = React.lazy(() =>
  import("pages/Dashboardaddstudentsmeal"),
);
const Dashboardaddstudentspreview = React.lazy(() =>
  import("pages/Dashboardaddstudentspreview"),
);
const Dashboardaddstudentsbilling = React.lazy(() =>
  import("pages/Dashboardaddstudentsbilling"),
);
const Dashboardaddstudentssetuppayment = React.lazy(() =>
  import("pages/Dashboardaddstudentssetuppayment"),
);
const Dashboardaddstudentssetuppaymentlinksuccess = React.lazy(() =>
  import("pages/Dashboardaddstudentssetuppaymentlinksuccess"),
);
const Maintenance = React.lazy(() => import("pages/Maintenance"));
const Accounts = React.lazy(() => import("pages/Accounts"));
const Attendance = React.lazy(() => import("pages/Attendance"));
const Rooms = React.lazy(() => import("pages/Rooms"));
const Accountscredit = React.lazy(() => import("pages/Accountscredit"));
const Attendancein = React.lazy(() => import("pages/Attendancein"));
const Stock = React.lazy(() => import("pages/Stock"));
const Accountscreditexpand = React.lazy(() =>
  import("pages/Accountscreditexpand"),
);
const Attendanceout = React.lazy(() => import("pages/Attendanceout"));
const Attendanceleavemanagement = React.lazy(() =>
  import("pages/Attendanceleavemanagement"),
);
const AccountDebitdetails = React.lazy(() =>
  import("pages/AccountDebitdetails"),
);
const Accountcreditdetails = React.lazy(() =>
  import("pages/Accountcreditdetails"),
);
const Grantleave = React.lazy(() => import("pages/Grantleave"));
const Accountsdebit = React.lazy(() => import("pages/Accountsdebit"));
const Accountsdebitexpand = React.lazy(() =>
  import("pages/Accountsdebitexpand"),
);
const Grantleaveconfirm = React.lazy(() => import("pages/Grantleaveconfirm"));
const AccountsdebitexpandOne = React.lazy(() =>
  import("pages/AccountsdebitexpandOne"),
);
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/accountsdebitexpandone"
            element={<AccountsdebitexpandOne />}
          />
          <Route path="/grantleaveconfirm" element={<Grantleaveconfirm />} />
          <Route
            path="/accountsdebitexpand"
            element={<Accountsdebitexpand />}
          />
          <Route path="/accountsdebit" element={<Accountsdebit />} />
          <Route path="/grantleave" element={<Grantleave />} />
          <Route
            path="/accountcreditdetails"
            element={<Accountcreditdetails />}
          />
          <Route
            path="/accountdebitdetails"
            element={<AccountDebitdetails />}
          />
          <Route
            path="/attendanceleavemanagement"
            element={<Attendanceleavemanagement />}
          />
          <Route path="/attendanceout" element={<Attendanceout />} />
          <Route
            path="/accountscreditexpand"
            element={<Accountscreditexpand />}
          />
          <Route path="/stock" element={<Stock />} />
          <Route path="/attendancein" element={<Attendancein />} />
          <Route path="/accountscredit" element={<Accountscredit />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route
            path="/dashboardaddstudentssetuppaymentlinksuccess"
            element={<Dashboardaddstudentssetuppaymentlinksuccess />}
          />
          <Route
            path="/dashboardaddstudentssetuppayment"
            element={<Dashboardaddstudentssetuppayment />}
          />
          <Route
            path="/dashboardaddstudentsbilling"
            element={<Dashboardaddstudentsbilling />}
          />
          <Route
            path="/dashboardaddstudentspreview"
            element={<Dashboardaddstudentspreview />}
          />
          <Route
            path="/dashboardaddstudentsmeal"
            element={<Dashboardaddstudentsmeal />}
          />
          <Route
            path="/dashboardaddstudentsallocation"
            element={<Dashboardaddstudentsallocation />}
          />
          <Route
            path="/dashboardaddstudentsguardians"
            element={<Dashboardaddstudentsguardians />}
          />
          <Route
            path="/dashboardaddstudentsaddress"
            element={<Dashboardaddstudentsaddress />}
          />
          <Route
            path="/dashboardaddstudents"
            element={<Dashboardaddstudents />}
          />
          <Route path="/dashboardstudents" element={<Dashboardstudents />} />
          <Route path="/hostelshostel" element={<Hostelshostel />} />
          <Route
            path="/dashboardaddhostels"
            element={<Dashboardaddhostels />}
          />
          <Route
            path="/dashboardaddhostelsconfirmation"
            element={<Dashboardaddhostelsconfirmation />}
          />
          <Route path="/hostelsrooms" element={<Hostelsrooms />} />
          <Route
            path="/dashboardaddroomsone"
            element={<DashboardaddroomsOne />}
          />
          <Route
            path="/dashboardaddroomsthree"
            element={<DashboardaddroomsThree />}
          />
          <Route path="/dashboardaddrooms" element={<Dashboardaddrooms />} />
          <Route
            path="/dashboardaddroomsfurniture"
            element={<Dashboardaddroomsfurniture />}
          />
          <Route
            path="/dashboardaddroomstwo"
            element={<DashboardaddroomsTwo />}
          />
          <Route
            path="/dashboardaddstudentsduration"
            element={<Dashboardaddstudentsduration />}
          />
          <Route
            path="/viewstudentsouthostel"
            element={<Viewstudentsouthostel />}
          />
          <Route
            path="/viewstudentsinhostel"
            element={<Viewstudentsinhostel />}
          />
          <Route path="/viewstudents" element={<Viewstudents />} />
          <Route
            path="/dashboardadddefaulter"
            element={<DashboardaddDefaulter />}
          />
          <Route path="/hostelsassigned" element={<Hostelsassigned />} />
          <Route
            path="/hostelassignedmodal"
            element={<Hostelassignedmodal />}
          />
          <Route path="/removetenant" element={<Removetenant />} />
          <Route path="/removetenantcheck" element={<Removetenantcheck />} />
          <Route
            path="/removetenantpaymentnotrecieved"
            element={<Removetenantpaymentnotrecieved />}
          />
          <Route
            path="/removetenantsuccess"
            element={<Removetenantsuccess />}
          />
          <Route
            path="/removeteantmoneyrecovery"
            element={<Removeteantmoneyrecovery />}
          />
          <Route
            path="/removetenantcheckpaymentlink"
            element={<Removetenantcheckpaymentlink />}
          />
          <Route
            path="/dashboardaddstudentscancellationprompt"
            element={<Dashboardaddstudentscancellationprompt />}
          />
          <Route
            path="/viewstudentsassignedhostelone"
            element={<ViewstudentsassignedhostelOne />}
          />
          <Route
            path="/viewstudentsunassignedhostel"
            element={<Viewstudentsunassignedhostel />}
          />
          <Route
            path="/viewstudentsremovedhostel"
            element={<Viewstudentsremovedhostel />}
          />
          <Route
            path="/dashboardadddefaulterconfirm"
            element={<DashboardaddDefaulterconfirm />}
          />
          <Route
            path="/hostelfurnituremodal"
            element={<Hostelfurnituremodal />}
          />
          <Route path="/hosteladdfurniture" element={<Hosteladdfurniture />} />
          <Route path="/hosteladdvendor" element={<Hosteladdvendor />} />
          <Route
            path="/hosteladdfurnituretwo"
            element={<HosteladdfurnitureTwo />}
          />
          <Route
            path="/hostelfurniturepayment"
            element={<Hostelfurniturepayment />}
          />
          <Route
            path="/hostelfurniturepaymentsuccesfull"
            element={<Hostelfurniturepaymentsuccesfull />}
          />
          <Route
            path="/hostelfurniturepaymentpaylater"
            element={<Hostelfurniturepaymentpaylater />}
          />
          <Route path="/hostelsfurniture" element={<Hostelsfurniture />} />
          <Route
            path="/viewstudentsassignedhostel"
            element={<Viewstudentsassignedhostel />}
          />
          <Route
            path="/hostelfurnitureorderviewdetails"
            element={<Hostelfurnitureorderviewdetails />}
          />
          <Route
            path="/hostelfurniturepayamount"
            element={<Hostelfurniturepayamount />}
          />
          <Route
            path="/hostelfurniturepayamountconfirm"
            element={<Hostelfurniturepayamountconfirm />}
          />
          <Route
            path="/hostelfurniturereportdamageone"
            element={<HostelfurniturereportdamageOne />}
          />
          <Route
            path="/hosteladdfurnitureselectcategory"
            element={<Hosteladdfurnitureselectcategory />}
          />
          <Route
            path="/hostelfurniturereportdamage"
            element={<Hostelfurniturereportdamage />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

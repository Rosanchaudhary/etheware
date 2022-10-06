import { useSelector } from "react-redux";
import { selectStep } from "../../redux/registerSlice";

import BottomBar from "../../components/BottomBar/BottomBar";
import SignupScreen from "../SignupScreen/SignupScreen";
import Vision from "../Visions/Visions";
import Category from "../Category/Category";
import OrganizationName from "../OrganizationName/OrganizationName";
import CreateProject from "../CreateProject/CreateProject";
import SelectDate from "../SelectDate/SelectDate";
import DomainName from "../DomainName/DomainName";
import SetBudget from "../SetBudget/SetBudget";
import CheckOut from "../CheckOut/CheckOut";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import Congratulation from "../Congratulations/Congratulations";

// import { onAuthStateChanged, getAuth } from "firebase/auth";
// import LoadingScreen from "../LoadingScreen/LoadingScreen";
// import { useEffect, useState } from "react";

import "../SignupScreen/SignupScreen.css";

const ProfileScreen = () => {
  const step = useSelector(selectStep);
  // const [currentUser, setCurrentUser] = useState(null);
  // const [pending, setPending] = useState(true);
  // const auth = getAuth();

  return (
    <div className="containers">
      {(() => {
        switch (step) {
          case 0:
            return <SignupScreen />;
          case 1:
            return <Vision />;
          case 2:
            return <Category />;
          case 3:
            return <OrganizationName />;
          case 4:
            return <CreateProject />;
          case 5:
            return <SelectDate />;
          case 6:
            return <DomainName />;
          case 7:
            return <SetBudget />;
          case 8:
            return <CheckOut />;
          case 9:
            return <PlaceOrder />;
          case 10:
            return <Congratulation />;
          default:
            return null;
        }
      })()}

      <BottomBar />
    </div>
  );

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     setCurrentUser(user);
  //     setPending(false);
  //   });
  // }, [auth]);

  // if (pending) {
  //   return <LoadingScreen />;
  // } else {
  //   if (currentUser) {
  //     return <div>Logged IN</div>;
  //   } else {
  //     return (
  //       <div className="containers">
  //         {(() => {
  //           switch (step) {
  //             case 0:
  //               return <LoginScreen />;
  //             case 1:
  //               return <Vision />;
  //             case 2:
  //               return <Category />;
  //             case 3:
  //               return <OrganizationName />;
  //             case 4:
  //               return <CreateProject />;
  //             case 5:
  //               return <SelectDate />;
  //             case 6:
  //               return <DomainName />;
  //             case 7:
  //               return <SetBudget />;
  //             case 8:
  //               return <CheckOut />;
  //             case 9:
  //               return <PlaceOrder />;
  //             case 10:
  //               return <Congratulation />;
  //             default:
  //               return null;
  //           }
  //         })()}

  //         <BottomBar />
  //       </div>
  //     );
  //   }
  // }
};

export default ProfileScreen;

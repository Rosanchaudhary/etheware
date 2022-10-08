import { useSelector } from "react-redux";
import { selectStep } from "../../redux/stepSlice";

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

import "../SignupScreen/SignupScreen.css";

const ProfileScreen = () => {
  const step = useSelector(selectStep);

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
};

export default ProfileScreen;

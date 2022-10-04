import { useLocation } from "react-router-dom";
import BirthdayCake from "../statics/imgs/Birthdaycake.png";
import { CgCalendarDates } from "react-icons/cg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IconContext } from "react-icons";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Event() {
  const location = useLocation();

  console.log(location.state);
  let startDate = new Date(location.state.startTime);
  let endDate = new Date(location.state.endTime);
  console.log(startDate);
  let startDateStr =
    startDate.getDate() +
      " " +
      months[startDate.getMonth() - 1] +
      " " +
      startDate.getHours() +
      ":" +
      startDate.getMinutes() + " " + ((startDate.getHours() >= 12) ? "PM" : "AM");
  let endDateStr =
    endDate.getDate() +
      " " +
      months[endDate.getMonth() - 1] +
      " " +
      endDate.getHours() +
      ":" +
      endDate.getMinutes() + " " + ((endDate.getHours() >= 12) ? "PM" : "AM");
  return (
    // 
    <div className="">
      <div className="max-w-[593px] mx-auto md:mt-16">
          <img src={BirthdayCake} alt="birthday cake"/>
          <div className="m-4">
            <h1 className="font-bold text-3xl text-[#240D57]">
              {location.state.eventName}
            </h1>
            <p className="text-gray-600 font-normal mb-4">
              Hosted by {location.state.hostName}
            </p>
            <div className="flex items-center mb-2">
              <IconContext.Provider value={{ color: "blue", size: "1.4em" }}>
                <div className="p-2 mr-1">
                  <CgCalendarDates />
                </div>
              </IconContext.Provider>
              <div>
                <p className="font-bold text-[#240D57]">{startDateStr}</p>
                <p>to {endDateStr}</p>
              </div>
            </div>
            <div className="flex items-center">
              <IconContext.Provider value={{ color: "blue", size: "1.4em" }}>
                <div className="p-2 mr-1">
                  <HiOutlineLocationMarker />
                </div>
                <div>
                  <p className="font-bold text-[#240D57]">{location.state.streetName}</p>
                  <p>
                    {location.state.suburb}, {location.state.state},{" "}
                    {location.state.postcode}
                  </p>
                </div>
              </IconContext.Provider>
            </div>
          </div>
      </div>
    </div>
  );
}

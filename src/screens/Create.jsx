import DateTimePicker from "react-datetime-picker";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  eventName: "",
  hostName: "",
  streetName: "",
  suburb: "",
  state: "",
  postcode: "",
  startTime: "",
  endTime: "",
  imgFile: "",
};

export default function Create() {
  const [formState, setFromState] = useState(initialState);
  const inputStyle = "block p-1 border-[#240D57] border-2 rounded-md mb-2";
  const labelStyle = "font-medium text-sm";
  return (
    <div className="flex justify-center items-center text-[#8456EC] mt-6">      
      <form className="">
      <h1>Fill the Event Details</h1>  
        <label htmlFor="eventName" className={labelStyle}>
          Event name
        </label>
        <input
          type="text"
          id="eventName"
          className={inputStyle}
          value={formState.eventName}
          onChange={(e) =>
            setFromState((prevS) => ({ ...prevS, eventName: e.target.value }))
          }
        />

        <label htmlFor="hostName" className={labelStyle}>
          Host name
        </label>
        <input
          type="text"
          id="hostName"
          className={inputStyle}
          value={formState.hostName}
          onChange={(e) =>
            setFromState((prevS) => ({ ...prevS, hostName: e.target.value }))
          }
        />

        <label htmlFor="startTime" className={labelStyle}>
          Start Time
        </label>
        <div>
          <DateTimePicker
            onChange={(time) =>
              setFromState((prevS) => ({ ...prevS, startTime: time }))
            }
            value={formState.startTime}
          />
        </div>

        <label htmlFor="endTime" className={labelStyle}>
          End Time
        </label>
        <div>
          <DateTimePicker
            onChange={(time) =>
              setFromState((prevS) => ({ ...prevS, endTime: time }))
            }
            value={formState.endTime}
          />
        </div>

        <label htmlFor="streetName" className={labelStyle}>
          streetName
        </label>
        <input
          type="text"
          id="streetName"
          className={inputStyle}
          value={formState.streetName}
          onChange={(e) =>
            setFromState((prevS) => ({ ...prevS, streetName: e.target.value }))
          }
        />
        <label htmlFor="suburb" className={labelStyle}>
          suburb
        </label>
        <input
          type="text"
          id="suburb"
          className={inputStyle}
          value={formState.suburb}
          onChange={(e) =>
            setFromState((prevS) => ({ ...prevS, suburb: e.target.value }))
          }
        />
        <label htmlFor="suburb" className={labelStyle}>
          state
        </label>
        <input
          type="text"
          id="state"
          className={inputStyle}
          value={formState.state}
          onChange={(e) =>
            setFromState((prevS) => ({ ...prevS, state: e.target.value }))
          }
        />
        <label htmlFor="postcode" className={labelStyle}>
          postcode
        </label>
        <input
          type="text"
          id="postcode"
          className={inputStyle}
          value={formState.postcode}
          onChange={(e) =>
            setFromState((prevS) => ({ ...prevS, postcode: e.target.value }))
          }
        />

        <label htmlFor="imgFile" className={labelStyle}>
          Event image
        </label>
        <input
          type="file"
          id="imgFile"
          className="block mb-3"
          //   value={initialState.location}
          onChange={(e) =>
            setFromState((prevS) => ({ ...prevS, imgFile: e.target.files[0] }))
          }
        />
        <Link to={"/event"} state={formState}>
          <button
            type="button"
            className="rounded-md py-1 px-4 text-base font-bold text-white bg-[#8456EC]"
            //   onClick={() => {console.log(formState); window.s = formState;}}
          >
            <p>Next</p>
          </button>
        </Link>
      </form>
    </div>
  );
}

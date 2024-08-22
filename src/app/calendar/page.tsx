"use client";
import React from "react";
import { DAYS, EventsData, MONTHS, MONTHS_DATA } from "./_constant";

const Page = () => {
  const getDaysOfMonth = (year: number, month: number) => {
    const actualDays = MONTHS_DATA[year as keyof typeof MONTHS_DATA][month];
    return Array.from({ length: actualDays }, (_, i) => i + 1);
  };

  const days = getDaysOfMonth(2081, 4);

  return (
    <>
      <div className="w-[900px] h-full bg-gray-surface p-6">
        <div className="text-gray-onSurface ">{MONTHS["4"]}, 2081</div>
        <div className="grid grid-cols-7 mb-4 mt-2 rounded-md gap-4">
          {Object.entries(DAYS)?.map((item) => {
            return (
              <div
                key={item[0]}
                className="border w-[100px] border-gray-outlineBrighter rounded-md text-gray-onSurface h-full flex justify-center items-center"
              >
                {item[1]}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-7 gap-4 rounded-md">
          {days.map((day) => {
            // const eventDetails = EventsData?.find(
            //   (item) => day == item?.date?.split("/")[2]
            // );

            // console.log("eventDetails ::", eventDetails, day);
            return (
              <div
                key={day}
                className="border w-[100px] text-[12px] text-gray-onSurface border-gray-outlineBrighter h-[80px] flex flex-col justify-between rounded-md p-1"
              >
                <div> {day}</div>
                {/* event  */}
                <div
                  className={`bg-success-container text-success-onContainer rounded-md px-0.5`}
                >{`Children's day`}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;

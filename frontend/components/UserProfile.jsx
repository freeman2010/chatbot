import React, { useEffect, useState } from "react";
import axios from "axios";
import NavLink from "next/link";

const backend_domain = process.env.NEXT_PUBLIC_BACKEND_DOMAIN;

const UserProfile = ({ access_token }) => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    fullName: "",
    address: "",
    profession: "",
    appointments: [],
  });

  function formatTime(inputTime) {
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const formattedTime = new Date(inputTime).toLocaleDateString(
      "en-US",
      options
    );

    return formattedTime;
  }

  useEffect(() => {
    async function getUserProfile() {
      try {
        const user = await axios.get(`${backend_domain}/users/user-details`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        setUserDetails(user.data.userDetails);
      } catch (err) {
        console.log(err);
      }
    }
    getUserProfile();
  }, []);

  return (
    <>
      <section class="text-gray-600 body-font shadow-lg bg-gradient-to-r from-blue-200 to-indigo-400 bg-opacity-50">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              My details
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              These are the details filled up by y ou during signup. We respect
              your privacy and these will be kept as secret. Feel free to make
              appointments from docts and discuss about their issues.
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Name</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  {userDetails.fullName}
                </span>
              </div>
            </div>

            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Email Address</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">{userDetails.email}</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">My Address</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  {userDetails.address}
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Profession</span>
              </div>
            </div>

            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  {userDetails.profession}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="text-center mt-32">
        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 mt-4">
          My appointments
        </h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Click on the cards which will take you to the video calls.
        </p>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {userDetails.appointments.map((item, idx) => (
              <div class="p-4 lg:w-1/3" key={idx}>
                <NavLink
                  class="text-indigo-500 inline-flex items-center"
                  href={`/room/${item.meet_link}`}
                >
                  <div class="bg-yellow-300 h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative transition duration-300 ease-in-out transform hover:scale-105">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-800 mb-1">
                      user email
                    </h2>
                    <h1 class="title-font sm:text-sm text-xl font-medium text-gray-900 ">
                      {item.doctor}
                    </h1>
                    <h2 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      {formatTime(item.time)}
                    </h2>

                    <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;

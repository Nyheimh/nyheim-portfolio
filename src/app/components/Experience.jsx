import React from "react";

const Experience = () => {
  return (
    <>
      <div class="-my-6">
        {/* <!-- Item #1 --> */}
        <div class="relative pl-8 sm:pl-32 py-6 group">
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              May 2021 - Nov 2021
            </time>
            <div class="text-xl font-bold text-white-900">Orchestra Health</div>
          </div>
          {/* <!-- Content --> */}
          <div class="text-slate-500">Software Engineer I</div>
        </div>

        {/* <!-- Item #2 --> */}
        <div class="relative pl-8 sm:pl-32 py-6 group">
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-slate-100 rounded-full">
              Nov 2021 - June 2022
            </time>
            <div class="text-xl font-bold text-white-900">Workit Health</div>
          </div>
          {/* <!-- Content --> */}
          <div class="text-slate-500">Junior Full Stack Software Engineer</div>
        </div>

        {/* <!-- Item #3 --> */}
        <div class="relative pl-8 sm:pl-32 py-6 group">
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 bg-slate-500 hover:bg-slate-700 rounded-full">
              Aug 2022 - July 2023
            </time>
            <div class="text-xl font-bold text-white-900">ConnectRN</div>
          </div>
          {/* <!-- Content --> */}
          <div class="text-slate-500">Full Stack Software Engineer</div>
        </div>
        <div class="relative pl-8 sm:pl-32 py-6 group">
          <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 bg-slate-600 hover:bg-slate-100 rounded-full">
              Current
            </time>
            <a
              href="https://docs.google.com/document/d/1EWsj9-Y4VY1AcdpdHviOQfM-XlnsVO1X_XC0KObn--o/edit?usp=sharing"
              download="your-resume.pdf"
              class="bg-slate-500 hover:bg-slate-700 text-white font-bold rounded-full py-2 px-4 md:px-6 flex items-center"
            >
              My Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;

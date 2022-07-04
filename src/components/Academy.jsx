import React from "react";
import { Fade } from "react-awesome-reveal";

function Academy() {
  const schools = [
    {
      state: "UIN Syarif Hidayatullah Jakarta",
      time: "2018 - Now",
    },
    {
      state: "MAN 19 Jakarta",
      time: "2015 - 2018",
    },
  ];

  const certifications = [
    {
      provider: "Dicoding Indonesia",
      course: "Belajar Membuat Aplikasi Web dengan React",
      date: "26 Jun 2022",
    },
    {
      provider: "Freecodecamp",
      course: "JavaScript Algorithms and Data Structures",
      date: "23 February 2022",
    },
    {
      provider: "Dicoding Indonesia",
      course: "Belajar Membuat Front-End Web untuk Pemula",
      date: "5 Aug 2021",
    },
    {
      provider: "Dicoding Indonesia",
      course: "Belajar Membuat Aplikasi Back-End untuk Pemula",
      date: "16 Jun 2021",
    },
  ];
  return (
    <div id="academy" className="p-8 w-full h-auto mx-auto">
      <div className="container mx-auto h-full flex flex-col">
        <Fade direction="bottom" triggerOnce={true} delay={500} duration={2000}>
          <div className="my-2 md:my-4 text-4xl">
            <h1 className="text-black dark:text-white text-center px-6 py-4 font-bold">
              Where I{" "}
              <span className="text-emerald-500 text-emerald underline underline-offset-2 decoration-emerald-500">
                Study{" "}
              </span>
              Programming
            </h1>
          </div>
        </Fade>

        <div className="mt-16 px-8 flex flex-col md:flex-row justify-center md:justify-between">
          <Fade direction="left" triggerOnce={true} delay={500} duration={2000}>
            <div className="steps steps-vertical h-96">
              {schools.map((school) => (
                <div
                  className="step step-success"
                  data-content=""
                  key={school.state}>
                  <div className="ml-6 text-left">
                    <h2 className="text-lg font-poppins font font-medium text-emerald-800 dark:text-emerald-400">
                      {school.state}
                    </h2>
                    <p className="text-base font-montserrat dark:text-slate-500 font-light">
                      {school.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
          <Fade
            direction="right"
            triggerOnce={true}
            delay={500}
            duration={2000}>
            <div className="steps steps-vertical h-auto">
              {certifications.map((certificate) => (
                <div className="step step-success" data-content="">
                  <div className="ml-6 text-left flex flex-col gap-y-2 lg:gap-y-0">
                    <h2 className="font-poppins text-lg lg:text-base font-medium text-emerald-800 dark:text-emerald-400">
                      {certificate.provider}
                    </h2>
                    <p className="font-base lg:text-lg font-semibold font-montserrat">
                      {certificate.course}
                    </p>
                    <p className="text-base font-montserrat text-gray-400 dark:text-slate-500 font-light">
                      {certificate.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Academy;

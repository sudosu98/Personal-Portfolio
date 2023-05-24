import {
  BriefcaseIcon,
  BuildingOfficeIcon,
  ClockIcon,
  CloudArrowDownIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";


export default function Header() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between ml-4 mr-4 mt-4">
      <div className="flex items-center justify-center">
        <div className="flex mr-10">
          <div className="avatar w-32">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="/myphoto.jpg" />
            </div>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Sourabh Upadhye
            </h2>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <BriefcaseIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                Software Engineer
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <ClockIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                Full-time
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <MapPinIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                Hyderabad
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <BuildingOfficeIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                Purecode Software R&D
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <a
          href="https://drive.google.com/file/d/1rVgOuBwErDbtAB8RIkAhj-8eg1GQRxPL/view?usp=sharing"
          target="/"
          className="sm:block"
        >
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <CloudArrowDownIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Resume
          </button>
        </a>
      </div>
    </div>
  );
}

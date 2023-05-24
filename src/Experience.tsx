import { FC } from "react";
export interface Experience {
  title: string;
  subtitle: string;
  workType: string;
  workDescription: string[];
  dateText: string;
  skills: Array<{ name: string }>;
}
export interface ExpereinceProps {
  experience: Experience;
  expId: string;
}

const ExperienceCard: FC<ExpereinceProps> = ({ experience, expId }) => {
  return (
    <div id={expId} className="carousel-item w-full justify-center">
      <div className="ml-10 mr-10 bg-white px-10 py-10">
        <div className="mt-3 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Company Name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {experience.subtitle}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Role
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {experience.title}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Timeline
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {experience.dateText}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Work Type
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {experience.workType}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Experience
              </dt>
              <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0">
                {experience.workDescription.length != 0 ? (
                  experience.workDescription.map((desc) => {
                    return (
                      <dd key={desc.length} className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0">
                        {desc}
                      </dd>
                    );
                  })
                ) : (
                  <dd>No Work Description</dd>
                )}
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

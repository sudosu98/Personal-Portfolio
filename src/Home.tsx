import ExperienceCard from "./Experience";
import Flow from "./Node";
import { experiences } from "./content/experience";
import { useHomeContext } from "./context/HomeContext";
import { HOME_ACTIONS } from "./context/HomeContextConstants";

const Home = () => {
  const { state, dispatch } = useHomeContext();
  const TABS = {
    skills: "Skills",
  };
  return (
    <div
      className="flex mx-10 my-10 card shadow-xl bg-blue-50"
      style={{ minHeight: "700px" }}
    >
      <div className="tabs flex justify-start bg-gray-50">
        {experiences.map((experience, i) => {
          return (
            <div
              key={experience.title + i}
              className={`tab tab-lg tab-lifted ${
                state.experienceTab === experience.subtitle ? "tab-active" : ""
              }`}
              onClick={() => {
                dispatch({
                  type: HOME_ACTIONS.SET_ACTIVE_TAB,
                  payload: {
                    experienceTab: experience.subtitle,
                    experienceData: experience,
                    experienceActive: true,
                  },
                });
              }}
            >
              {experience.subtitle}
            </div>
          );
        })}
        <div
          className={`tab tab-lg tab-lifted ${
            state.activeTab === "Skills" ? "tab-active" : ""
          }`}
          onClick={() => {
            dispatch({
              type: HOME_ACTIONS.SET_ACTIVE_TAB,
              payload: {
                activeTab: "Skills",
              },
            });
          }}
        >
          Skills
        </div>
      </div>
      {state.activeTab !== TABS.skills && (
        <div className="bg-white card-body ">
          <ExperienceCard
            experience={state.experienceData}
            expId={`${state.experienceData.subtitle}`}
            key={state.experienceData.subtitle}
          />
        </div>
      )}

      {state.activeTab === TABS.skills && (
        <div className="bg-white card-body h-96">
          <Flow />
        </div>
      )}
    </div>
  );
};

export default Home;

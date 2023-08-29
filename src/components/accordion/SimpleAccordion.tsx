import classNames from "classnames";
import { CaretIcon } from "../../utils/icons/CaretIcon";

interface IProps {
  users?: any;
  repos?: any;
  open?: boolean;
  setOpen?: any;
  fetchRepos?: any;
  activeRepoIndex?: number | null;
  index?: number;
}

export const SimpleAccordion: React.FunctionComponent<IProps> = ({
  users,
  repos,
  open,
  setOpen,
  fetchRepos,
  activeRepoIndex,
  index,
}: IProps): JSX.Element => {
  return (
    <div className="w-full mt-5">
      <input
        id="expandCollapse"
        checked={open}
        type="checkbox"
        className="peer sr-only"
      />
      <label
        htmlFor="expandCollapse"
        className={classNames(
          "cursor-pointer flex items-center justify-between w-full bg-slate-100 p-1 font-medium text-left text-gray-500 border border-b-0 border-gray-200",
          "hover:bg-stone-100",
          "transition-colors duration-1000 ease-in-out"
        )}
        onClick={() => {
          setOpen(!open);
          fetchRepos(users.login, index);
        }}
      >
        {users?.login}
        <CaretIcon
          height={20}
          width={20}
          className={classNames("ml-4", {
            "rotate-180": open,
          })}
        />
      </label>

      {activeRepoIndex === index && (
        <div
          className={classNames(
            "overflow-hidden h-0 mt-2",
            "peer-checked:h-[200px] peer-checked:overflow-scroll ",
            "transition-[height] duration-1000 ease-in-out "
          )}
        >
          {repos?.map((repo: any, index: any) => (
            <div
              key={index}
              className="w-full mt-2 text-left bg-slate-50 p-2"
            >
              <p className="font-bold"> {repo.name}</p>
              <p className="text-gray-700">Repository Description</p>
              <span>{repo.description || "-"} </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

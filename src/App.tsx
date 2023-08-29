import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SimpleAccordion } from "./components/accordion/SimpleAccordion";
import {
  getInitialRenderReset,
  getUserListGit,
  getUserListGitDetail,
} from "./stores/actions/users";
import { AppDispatch } from "./stores";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [activeRepoIndex, setActiveRepoIndex] = useState<number | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { loading, userList, userDetails } = useSelector(
    (state: any) => state.users
  );

  useEffect(() => {
    dispatch(getInitialRenderReset()); // eslint-disable-next-line
  }, []);

  const fetchRepos = async (username: string, index: number) => {
    setActiveRepoIndex(activeRepoIndex === index ? null : index);
    dispatch(getUserListGitDetail(username));
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Enter") {
        dispatch(getUserListGit(searchTerm));
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    }; // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="flex  h-screen w-full bg-teal-lighter">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
        <div className="mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search GitHub users"
            className="border p-2 rounded"
          />
          <button
            onClick={() => dispatch(getUserListGit(searchTerm))}
            disabled={loading}
            className="bg-blue-500 text-white p-2 rounded ml-2"
          >
            Search
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {userList?.data?.items.length > 0 &&
          userList?.data?.items?.map((user: any, index: any) => {
            return (
              <SimpleAccordion
                index={index}
                fetchRepos={fetchRepos}
                activeRepoIndex={activeRepoIndex}
                users={user}
                open={open}
                setOpen={setOpen}
                repos={userDetails?.data}
              />
            );
          })}
      </div>
    </div>
  );
};

export default App;

import { useDispatch, useSelector } from "react-redux";
import { addPaste, editPaste } from "../redux/pasteSlice";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

const Home = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  const createPaste = () => {
    if (title !== "" && value !== "") {
      const paste = {
        title: title,
        content: value,
        _id: pasteId || Date.now().toString(34),
        createdAt: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      };

      if (pasteId) {
        // update
        dispatch(editPaste(paste));
      } else {
        // create
        dispatch(addPaste(paste));
      }

      // after creation or updation
      setTitle("");
      setValue("");
      setSearchParams("");
    } else {
      toast("Inputs can't be empty!");
    }
  };

  return (
    <div className="min-w-full flex flex-col gap-3 sm:gap-6">
      <div className="flex flex-row justify-between">
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[70%] border rounded-md py-1 px-2 text-sm sm:rounded-full sm:py-2 sm:px-3 sm:text-base"
        />
        <button
          className="w-[20%] border rounded-md py-1 px-2 hover:bg-gray-200/50 hover:text-black active:scale-95 active:bg-gray-300/50 transition-colors duration-500 ease-out text-sm cursor-pointer sm:rounded-full sm:py-2 sm:px-3 sm:text-base"
          onClick={createPaste}
        >
          {pasteId ? "Update" : "Create"}
        </button>
      </div>

      <div className="w-full">
        <textarea
          placeholder="Enter Content"
          rows={18}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full border-[1px] rounded-md py-1 px-2 sm:rounded-2xl sm:py-2 sm:px-3 sm:text-base"
        ></textarea>
      </div>
    </div>
  );
};

export default Home;

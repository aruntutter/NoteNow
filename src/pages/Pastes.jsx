import { useState } from "react";
import {
  CiRead,
  CiEdit,
  CiTrash,
  CiMedicalClipboard,
  CiShare2,
} from "react-icons/ci";
import Logo from "../assets/notenow_logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { deletePaste } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  // filteredData is now an array
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (pasteID) => {
    dispatch(deletePaste(pasteID));
  };

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content);
    toast.success("Copied!");
  };

  const handleShare = (paste) => {
    const url = window.location.origin + `/pastes/${paste._id}`;
    navigator.clipboard.writeText(url);
    toast.success("Shareable link copied!");
  };

  return (
    <div className="min-w-full flex flex-col gap-3 sm:gap-6">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        className="border rounded-md py-1 px-2 text-sm sm:rounded-full sm:py-2 sm:px-3 sm:text-base"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-2.5">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div
              className="flex flex-col justify-between gap-6 border rounded py-1 px-2 text-sm sm:py-2 sm:px-3 sm:text-base"
              key={paste._id}
            >
              <div className="flex flex-col gap-2 ">
                <p className="font-bold text-lg leading-5">{paste.title}</p>
                <p className="text-sm">{paste.content}</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1.5 justify-center items-center">
                  <img
                    src={Logo}
                    alt="NoteNow logo"
                    className="w-4 h-4 inline-block"
                  />
                  <p className="text-[12px]">{paste.createdAt}</p>
                </div>
                <ul className="flex flex-row items-center justify-center gap-4">
                  <li className="cursor-pointer text-[18px] hover:text-white active:text-white active:scale-90">
                    <Link to={`/pastes/${paste._id}`}>
                      <CiRead />
                    </Link>
                  </li>
                  <li
                    className="cursor-pointer text-[18px]
                  hover:text-white active:text-white active:scale-90"
                  >
                    <Link to={`/?pasteId=${paste._id}`}>
                      <CiEdit />
                    </Link>
                  </li>
                  <li
                    className="cursor-pointer text-[18px] hover:text-white active:text-white active:scale-90"
                    onClick={() => handleDelete(paste._id)}
                  >
                    <CiTrash />
                  </li>
                  <li
                    className="cursor-pointer text-[18px] hover:text-white active:text-white active:scale-90"
                    onClick={() => {
                      handleCopy(paste.content);
                    }}
                  >
                    <CiMedicalClipboard />
                  </li>
                  <li
                    className="cursor-pointer text-[18px] hover:text-white active:text-white active:scale-90"
                    onClick={() => handleShare(paste)}
                  >
                    <CiShare2 />
                  </li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-sm">No data found!</p>
        )}
      </div>
    </div>
  );
};

export default Pastes;

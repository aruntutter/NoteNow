import toast from "react-hot-toast";
import { CiMedicalClipboard, CiShare2 } from "react-icons/ci";
import Logo from "../assets/notenow_logo.svg";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0];

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
      <div className="flex flex-row justify-between">
        <input
          type="text"
          value={paste.title}
          disabled
          className="w-full border rounded-md py-1 px-2 text-[14px] sm:rounded-full sm:py-2 sm:px-3 sm:text-sm"
        />
      </div>

      <div className="relative w-full flex flex-col gap-2.5">
        <textarea
          rows={18}
          value={paste.content}
          disabled
          className="w-full border-[1px] rounded-md py-1 px-2 sm:rounded-2xl sm:py-2 sm:px-3 text-[14px] sm:text-sm"
        ></textarea>
        <div className="flex flex-row justify-between py-1 sm:py-2">
          <div className="flex flex-row gap-1.5 sm:gap-2 justify-center items-center">
            <img
              src={Logo}
              alt="NoteNow logo"
              className="w-5 h-5 sm:w-6 sm:h-6 inline-block"
            />
            <p className="text-xs sm:text-sm md:text-base">{paste.createdAt}</p>
          </div>
          <ul className="flex flex-row items-center justify-center gap-3 sm:gap-4">
            <li
              className="cursor-pointer text-lg sm:text-xl hover:text-white active:text-white active:scale-90"
              onClick={() => {
                handleCopy(paste.content);
              }}
            >
              <CiMedicalClipboard />
            </li>
            <li
              className="cursor-pointer text-lg sm:text-xl hover:text-white  active:text-white active:scale-90"
              onClick={() => handleShare(paste)}
            >
              <CiShare2 />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;

const input = () => {
  return (
    <>
      <label
        htmlFor="fileupload"
        className="block flex items-center w-64 h-80 p-5 border-2 border-dashed border-gray-400 rounded-2xl cursor-pointer text-black-500 text-center  bg-gray-50 hover:bg-gray-200"
      >
        📁 Drag & Drop Your Image
      </label>
      <input type="file" id="fileupload" className="hidden" />
    </>
  );
};

export default input;

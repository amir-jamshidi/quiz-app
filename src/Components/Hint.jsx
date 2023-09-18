const Hint = ({ title, count = "" }) => {
  return (
    <div className="flex items-center gap-x-2 mb-3">
      <span className="h-3 w-3 inline-block rounded-full bg-orange-500"></span>
      <p className="text-gray-300">
        {title}
        {count && <span className="bg-violet-800 px-2 rounded">{count}</span>}
      </p>
    </div>
  );
};

export default Hint;

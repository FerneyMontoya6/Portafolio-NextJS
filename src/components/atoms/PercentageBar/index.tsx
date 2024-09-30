const PercentageBar = ({ percentage }: { percentage: string }) => {
  return (
    <div className="relative w-full h-1 border-2 border-double border-primaryColor rounded-full">
      <div
        className={`absolute left-0 h-full bg-primaryColor rounded-full`}
        style={{width: percentage}}
      ></div>
    </div>
  );
};

export default PercentageBar;

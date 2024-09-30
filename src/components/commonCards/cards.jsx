export const HeadingCard = ({
  heading,
  label1,
  color1,
  label2,
  color2,
  label3,
  color3,
  label4,
  color4,
}) => {
  return (
    <>
      <div className="h-14">
        <h2 className="text-lg font-bold mb-2  text-[#1F3B59]">{heading}</h2>
      </div>
      <div className="mb-1">
        <ul class="list-disc flex gap-1 items-center">
          <li class={`${color1} li-li`}>
            {" "}
            <p className={`${color1} font-semibold text-sm `}>{label1}</p>{" "}
          </li>
          {label2 && (
            <li class={`${color2} li-li`}>
              {" "}
              <p className={`${color2} font-semibold text-sm `}>
                {label2}
              </p>{" "}
            </li>
          )}
          {label3 && (
            <li class={`${color3} li-li`}>
              {" "}
              <p className={`${color3} font-semibold text-sm `}>
                {label3}
              </p>{" "}
            </li>
          )}
          {label4 && (
            <li class={`${color4} li-li`}>
              {" "}
              <p className={`${color4} font-semibold text-sm `}>
                {label4}
              </p>{" "}
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

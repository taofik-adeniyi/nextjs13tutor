"use client";
const error = ({ error, reset }) => {
  return (
    <div className=" w-fit bg-gray-300 rounded-xl m-5">
      <div className="flex items-center space-x-2">
        <h2>{error?.message}</h2>
        <div
          style={{
            padding: "10px",
            background: "yellow",
            width: "fit-content",
            cursor: "pointer",
          }}
          onClick={reset}
        >
          try again
        </div>
      </div>
    </div>
  );
};
export default error;

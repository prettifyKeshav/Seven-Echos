import Image from "next/image";

const Loading = () => {
  return (
    <div className="loading">
      {/* <div className="loading-spinner"></div> */}
      <figure>
        <Image src="/assets/loading-ico.gif" width={200} height={200} alt="ico" ></Image>
      </figure>
    </div>
  );
};

export default Loading;
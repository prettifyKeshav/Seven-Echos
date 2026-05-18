import Blogs from "@/components/pages/Blogs";

const page = async () => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000);
  
  return <Blogs />;
};

export default page;

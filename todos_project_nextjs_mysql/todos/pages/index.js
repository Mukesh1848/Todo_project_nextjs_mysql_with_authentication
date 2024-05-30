// import { UserContext } from "../utils/useContext";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const { user } = useUser();
  return (
    <>
      <div className="text-center text-3xl my-20  text-green-700 font-bold">
        <h1>Home Page</h1>
        <h1 className="mx-10">Welcome</h1>
      </div>
    </>
  );
}

import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// import { UserContext } from "../utils/useContext";

const Header = () => {
  // const { user } = useContext(UserContext);
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // toast("User Logged in Suceessfully...!");
      setAuthenticated(true);
      // router.push("/");
    }
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
    router.push("/");
    // toast("User Logout SuccessFully...!");
  };

  return (
    <>
      <header className="text-gray-600 body-font bg-slate-500">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href={`/`}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl text-white font-bold">
              Todos-Crud
            </span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {authenticated ? (
              <>
                <Link
                  href={`/create`}
                  className="mr-5 hover:text-gray-900 text-white cursor-pointer"
                >
                  Create Todo
                </Link>
                <Link
                  href={`/view`}
                  className="mr-5 hover:text-gray-900 text-white cursor-pointer"
                >
                  View Todos
                </Link>
                <button
                  className="mr-5 hover:text-gray-900 text-white cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href={`/auth/login`}
                  className="mr-5 hover:text-gray-900 text-white cursor-pointer"
                >
                  Login
                </Link>
                <Link
                  href={`/auth/register`}
                  className="mr-5 hover:text-gray-900 text-white cursor-pointer"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default Header;

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Example() {
  const notify = () => {
    toast.success("Success Notification !", {
      position: "top-center",
    });
  };

  const handleClick = {
    notify,
  };

  return (
    <>
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </>
  );
}

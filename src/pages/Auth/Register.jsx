import { useQuery, useQueryClient } from "react-query";
import Nav from "../Nav";
import LoginForm from "./LoginForm";
import Loginheader from "./Loginheader";
import { getData } from "../../utils/fetchApi";
import { Outlet } from "react-router-dom";

const Register = () => {
  //   console.log("🚀 ~ Register ~ query:", query);
  //   const mutation = useMutation(postTodo, {
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       queryClient.invalidateQueries("todos");
  //     },
  //   });

  //   const { isLoading, error, data } = useQuery("types", () =>
  //     getData("https://new.tge.sa/api/user/types?parent_id=2")
  //   );

  return (
    <>
      <Outlet />
    </>
  );
};

export default Register;

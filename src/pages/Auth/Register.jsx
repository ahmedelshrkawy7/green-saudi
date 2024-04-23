import { useQuery, useQueryClient } from "react-query";
import Nav from "../Nav";
import LoginForm from "./LoginForm";
import Loginheader from "./Loginheader";
import { getData } from "../../utils/fetchApi";

const Register = () => {
  const QueryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["types"],
    queryFn: () => getData("https://new.tge.sa/api/user/types?parent_id=2"),
  });

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);

  return (
    <>
      <Nav />
      <Loginheader />
      <LoginForm />
    </>
  );
};

export default Register;

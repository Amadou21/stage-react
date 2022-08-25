import { useMutation } from "react-query";
// import {create} from "../features/todos/todo.service";

export const useCreate = (createFn) => {
  const { mutate, ...others } = useMutation(createFn, {
    onMutate: (variables) => {
      console.log("onMutate", { variables });
    },
    onError: (error, variables, context) => {
      console.log("onError", { error, variables, context });
    },
    onSuccess: (data, variables, context) => {
      console.log("onSuccess ", { data, variables, context });
    },
  });

  return { create: mutate, ...others };
};

export const useUpdate = (updateFn) => {
  const { mutate, ...others } = useMutation(updateFn, {
    onMutate: (variables) => {
      console.log("onMutate", { variables });
    },
    onError: (error, variables, context) => {
      console.log("onError", { error, variables, context });
    },
    onSuccess: (data, variables, context) => {
      console.log("onSuccess ", { data, variables, context });
    },
  });

  return { update: mutate, ...others };
};

export const useDelete = (deleteFn) => {
  const { mutate, ...others } = useMutation(deleteFn, {
    onMutate: (variables) => {
      console.log("onMutate", { variables });
    },
    onError: (error, variables, context) => {
      console.log("onError", { error, variables, context });
    },
    onSuccess: (data, variables, context) => {
      console.log("onSuccess ", { data, variables, context });
    },
  });

  return { destroy: mutate, ...others };
};

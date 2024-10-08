/**
 * Generated by @openapi-codegen
 *
 * @version 1.0.11
 */
import * as reactQuery from "@tanstack/react-query";
import { usePetstoreContext, PetstoreContext } from "./petstoreContext";
import type * as Fetcher from "./petstoreFetcher";
import { petstoreFetch } from "./petstoreFetcher";
import type * as Schemas from "./petstoreSchemas";
import type { ClientErrorStatus, ServerErrorStatus } from "./petstoreUtils";

export type UpdatePetError = Fetcher.ErrorWrapper<undefined>;

export type UpdatePetVariables = {
  body: Schemas.Pet;
} & PetstoreContext["fetcherOptions"];

/**
 * Update an existing pet by Id
 */
export const fetchUpdatePet = (
  variables: UpdatePetVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<Schemas.Pet, UpdatePetError, Schemas.Pet, {}, {}, {}>({
    url: "/pet",
    method: "put",
    ...variables,
    signal,
  });

/**
 * Update an existing pet by Id
 */
export const useUpdatePet = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      Schemas.Pet,
      UpdatePetError,
      UpdatePetVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = usePetstoreContext();
  return reactQuery.useMutation<
    Schemas.Pet,
    UpdatePetError,
    UpdatePetVariables
  >({
    mutationFn: (variables: UpdatePetVariables) =>
      fetchUpdatePet({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type AddPetError = Fetcher.ErrorWrapper<undefined>;

export type AddPetVariables = {
  body: Schemas.Pet;
} & PetstoreContext["fetcherOptions"];

/**
 * Add a new pet to the store
 */
export const fetchAddPet = (variables: AddPetVariables, signal?: AbortSignal) =>
  petstoreFetch<Schemas.Pet, AddPetError, Schemas.Pet, {}, {}, {}>({
    url: "/pet",
    method: "post",
    ...variables,
    signal,
  });

/**
 * Add a new pet to the store
 */
export const useAddPet = (
  options?: Omit<
    reactQuery.UseMutationOptions<Schemas.Pet, AddPetError, AddPetVariables>,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = usePetstoreContext();
  return reactQuery.useMutation<Schemas.Pet, AddPetError, AddPetVariables>({
    mutationFn: (variables: AddPetVariables) =>
      fetchAddPet({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type FindPetsByStatusQueryParams = {
  /**
   * Status values that need to be considered for filter
   *
   * @default available
   */
  status?: "available" | "pending" | "sold";
};

export type FindPetsByStatusError = Fetcher.ErrorWrapper<undefined>;

export type FindPetsByStatusResponse = Schemas.Pet[];

export type FindPetsByStatusVariables = {
  queryParams?: FindPetsByStatusQueryParams;
} & PetstoreContext["fetcherOptions"];

/**
 * Multiple status values can be provided with comma separated strings
 */
export const fetchFindPetsByStatus = (
  variables: FindPetsByStatusVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<
    FindPetsByStatusResponse,
    FindPetsByStatusError,
    undefined,
    {},
    FindPetsByStatusQueryParams,
    {}
  >({ url: "/pet/findByStatus", method: "get", ...variables, signal });

/**
 * Multiple status values can be provided with comma separated strings
 */
export const useFindPetsByStatus = <TData = FindPetsByStatusResponse>(
  variables: FindPetsByStatusVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<
      FindPetsByStatusResponse,
      FindPetsByStatusError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    usePetstoreContext(options);
  return reactQuery.useQuery<
    FindPetsByStatusResponse,
    FindPetsByStatusError,
    TData
  >({
    queryKey: queryKeyFn({
      path: "/pet/findByStatus",
      operationId: "findPetsByStatus",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchFindPetsByStatus({ ...fetcherOptions, ...variables }, signal),
    ...options,
    ...queryOptions,
  });
};

export type FindPetsByTagsQueryParams = {
  /**
   * Tags to filter by
   */
  tags?: string[];
};

export type FindPetsByTagsError = Fetcher.ErrorWrapper<undefined>;

export type FindPetsByTagsResponse = Schemas.Pet[];

export type FindPetsByTagsVariables = {
  queryParams?: FindPetsByTagsQueryParams;
} & PetstoreContext["fetcherOptions"];

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 */
export const fetchFindPetsByTags = (
  variables: FindPetsByTagsVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<
    FindPetsByTagsResponse,
    FindPetsByTagsError,
    undefined,
    {},
    FindPetsByTagsQueryParams,
    {}
  >({ url: "/pet/findByTags", method: "get", ...variables, signal });

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 */
export const useFindPetsByTags = <TData = FindPetsByTagsResponse>(
  variables: FindPetsByTagsVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<
      FindPetsByTagsResponse,
      FindPetsByTagsError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    usePetstoreContext(options);
  return reactQuery.useQuery<
    FindPetsByTagsResponse,
    FindPetsByTagsError,
    TData
  >({
    queryKey: queryKeyFn({
      path: "/pet/findByTags",
      operationId: "findPetsByTags",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchFindPetsByTags({ ...fetcherOptions, ...variables }, signal),
    ...options,
    ...queryOptions,
  });
};

export type GetPetByIdPathParams = {
  /**
   * ID of pet to return
   *
   * @format int64
   */
  petId: number;
};

export type GetPetByIdError = Fetcher.ErrorWrapper<undefined>;

export type GetPetByIdVariables = {
  pathParams: GetPetByIdPathParams;
} & PetstoreContext["fetcherOptions"];

/**
 * Returns a single pet
 */
export const fetchGetPetById = (
  variables: GetPetByIdVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<
    Schemas.Pet,
    GetPetByIdError,
    undefined,
    {},
    {},
    GetPetByIdPathParams
  >({ url: "/pet/{petId}", method: "get", ...variables, signal });

/**
 * Returns a single pet
 */
export const useGetPetById = <TData = Schemas.Pet>(
  variables: GetPetByIdVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<Schemas.Pet, GetPetByIdError, TData>,
    "queryKey" | "queryFn" | "initialData"
  >
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    usePetstoreContext(options);
  return reactQuery.useQuery<Schemas.Pet, GetPetByIdError, TData>({
    queryKey: queryKeyFn({
      path: "/pet/{petId}",
      operationId: "getPetById",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchGetPetById({ ...fetcherOptions, ...variables }, signal),
    ...options,
    ...queryOptions,
  });
};

export type UpdatePetWithFormPathParams = {
  /**
   * ID of pet that needs to be updated
   *
   * @format int64
   */
  petId: number;
};

export type UpdatePetWithFormQueryParams = {
  /**
   * Name of pet that needs to be updated
   */
  name?: string;
  /**
   * Status of pet that needs to be updated
   */
  status?: string;
};

export type UpdatePetWithFormError = Fetcher.ErrorWrapper<undefined>;

export type UpdatePetWithFormVariables = {
  pathParams: UpdatePetWithFormPathParams;
  queryParams?: UpdatePetWithFormQueryParams;
} & PetstoreContext["fetcherOptions"];

export const fetchUpdatePetWithForm = (
  variables: UpdatePetWithFormVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<
    undefined,
    UpdatePetWithFormError,
    undefined,
    {},
    UpdatePetWithFormQueryParams,
    UpdatePetWithFormPathParams
  >({ url: "/pet/{petId}", method: "post", ...variables, signal });

export const useUpdatePetWithForm = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      undefined,
      UpdatePetWithFormError,
      UpdatePetWithFormVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = usePetstoreContext();
  return reactQuery.useMutation<
    undefined,
    UpdatePetWithFormError,
    UpdatePetWithFormVariables
  >({
    mutationFn: (variables: UpdatePetWithFormVariables) =>
      fetchUpdatePetWithForm({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type DeletePetPathParams = {
  /**
   * Pet id to delete
   *
   * @format int64
   */
  petId: number;
};

export type DeletePetHeaders = {
  api_key?: string;
};

export type DeletePetError = Fetcher.ErrorWrapper<undefined>;

export type DeletePetVariables = {
  headers?: DeletePetHeaders;
  pathParams: DeletePetPathParams;
} & PetstoreContext["fetcherOptions"];

/**
 * delete a pet
 */
export const fetchDeletePet = (
  variables: DeletePetVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<
    undefined,
    DeletePetError,
    undefined,
    DeletePetHeaders,
    {},
    DeletePetPathParams
  >({ url: "/pet/{petId}", method: "delete", ...variables, signal });

/**
 * delete a pet
 */
export const useDeletePet = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      undefined,
      DeletePetError,
      DeletePetVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = usePetstoreContext();
  return reactQuery.useMutation<undefined, DeletePetError, DeletePetVariables>({
    mutationFn: (variables: DeletePetVariables) =>
      fetchDeletePet({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type UploadFilePathParams = {
  /**
   * ID of pet to update
   *
   * @format int64
   */
  petId: number;
};

export type UploadFileQueryParams = {
  /**
   * Additional Metadata
   */
  additionalMetadata?: string;
};

export type UploadFileError = Fetcher.ErrorWrapper<undefined>;

export type UploadFileVariables = {
  body?: Blob;
  pathParams: UploadFilePathParams;
  queryParams?: UploadFileQueryParams;
} & PetstoreContext["fetcherOptions"];

export const fetchUploadFile = (
  variables: UploadFileVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<
    Schemas.ApiResponse,
    UploadFileError,
    Blob,
    {},
    UploadFileQueryParams,
    UploadFilePathParams
  >({ url: "/pet/{petId}/uploadImage", method: "post", ...variables, signal });

export const useUploadFile = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      Schemas.ApiResponse,
      UploadFileError,
      UploadFileVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = usePetstoreContext();
  return reactQuery.useMutation<
    Schemas.ApiResponse,
    UploadFileError,
    UploadFileVariables
  >({
    mutationFn: (variables: UploadFileVariables) =>
      fetchUploadFile({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type GetInventoryError = Fetcher.ErrorWrapper<undefined>;

export type GetInventoryResponse = {
  [key: string]: number;
};

export type GetInventoryVariables = PetstoreContext["fetcherOptions"];

/**
 * Returns a map of status codes to quantities
 */
export const fetchGetInventory = (
  variables: GetInventoryVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<GetInventoryResponse, GetInventoryError, undefined, {}, {}, {}>(
    { url: "/store/inventory", method: "get", ...variables, signal }
  );

/**
 * Returns a map of status codes to quantities
 */
export const useGetInventory = <TData = GetInventoryResponse>(
  variables: GetInventoryVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<GetInventoryResponse, GetInventoryError, TData>,
    "queryKey" | "queryFn" | "initialData"
  >
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    usePetstoreContext(options);
  return reactQuery.useQuery<GetInventoryResponse, GetInventoryError, TData>({
    queryKey: queryKeyFn({
      path: "/store/inventory",
      operationId: "getInventory",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchGetInventory({ ...fetcherOptions, ...variables }, signal),
    ...options,
    ...queryOptions,
  });
};

export type PlaceOrderError = Fetcher.ErrorWrapper<undefined>;

export type PlaceOrderVariables = {
  body?: Schemas.Order;
} & PetstoreContext["fetcherOptions"];

/**
 * Place a new order in the store
 */
export const fetchPlaceOrder = (
  variables: PlaceOrderVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<Schemas.Order, PlaceOrderError, Schemas.Order, {}, {}, {}>({
    url: "/store/order",
    method: "post",
    ...variables,
    signal,
  });

/**
 * Place a new order in the store
 */
export const usePlaceOrder = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      Schemas.Order,
      PlaceOrderError,
      PlaceOrderVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = usePetstoreContext();
  return reactQuery.useMutation<
    Schemas.Order,
    PlaceOrderError,
    PlaceOrderVariables
  >({
    mutationFn: (variables: PlaceOrderVariables) =>
      fetchPlaceOrder({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type GetOrderByIdPathParams = {
  /**
   * ID of order that needs to be fetched
   *
   * @format int64
   */
  orderId: number;
};

export type GetOrderByIdError = Fetcher.ErrorWrapper<undefined>;

export type GetOrderByIdVariables = {
  pathParams: GetOrderByIdPathParams;
} & PetstoreContext["fetcherOptions"];

/**
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 */
export const fetchGetOrderById = (
  variables: GetOrderByIdVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<
    Schemas.Order,
    GetOrderByIdError,
    undefined,
    {},
    {},
    GetOrderByIdPathParams
  >({ url: "/store/order/{orderId}", method: "get", ...variables, signal });

/**
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 */
export const useGetOrderById = <TData = Schemas.Order>(
  variables: GetOrderByIdVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<Schemas.Order, GetOrderByIdError, TData>,
    "queryKey" | "queryFn" | "initialData"
  >
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    usePetstoreContext(options);
  return reactQuery.useQuery<Schemas.Order, GetOrderByIdError, TData>({
    queryKey: queryKeyFn({
      path: "/store/order/{orderId}",
      operationId: "getOrderById",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchGetOrderById({ ...fetcherOptions, ...variables }, signal),
    ...options,
    ...queryOptions,
  });
};

export type DeleteOrderPathParams = {
  /**
   * ID of the order that needs to be deleted
   *
   * @format int64
   */
  orderId: number;
};

export type DeleteOrderError = Fetcher.ErrorWrapper<undefined>;

export type DeleteOrderVariables = {
  pathParams: DeleteOrderPathParams;
} & PetstoreContext["fetcherOptions"];

/**
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 */
export const fetchDeleteOrder = (
  variables: DeleteOrderVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<
    undefined,
    DeleteOrderError,
    undefined,
    {},
    {},
    DeleteOrderPathParams
  >({ url: "/store/order/{orderId}", method: "delete", ...variables, signal });

/**
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 */
export const useDeleteOrder = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      undefined,
      DeleteOrderError,
      DeleteOrderVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = usePetstoreContext();
  return reactQuery.useMutation<
    undefined,
    DeleteOrderError,
    DeleteOrderVariables
  >({
    mutationFn: (variables: DeleteOrderVariables) =>
      fetchDeleteOrder({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type CreateUserError = Fetcher.ErrorWrapper<{
  status: ClientErrorStatus | ServerErrorStatus;
  payload: Schemas.User;
}>;

export type CreateUserVariables = {
  body?: Schemas.User;
} & PetstoreContext["fetcherOptions"];

/**
 * This can only be done by the logged in user.
 */
export const fetchCreateUser = (
  variables: CreateUserVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<undefined, CreateUserError, Schemas.User, {}, {}, {}>({
    url: "/user",
    method: "post",
    ...variables,
    signal,
  });

/**
 * This can only be done by the logged in user.
 */
export const useCreateUser = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      undefined,
      CreateUserError,
      CreateUserVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = usePetstoreContext();
  return reactQuery.useMutation<
    undefined,
    CreateUserError,
    CreateUserVariables
  >({
    mutationFn: (variables: CreateUserVariables) =>
      fetchCreateUser({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type CreateUsersWithListInputError = Fetcher.ErrorWrapper<undefined>;

export type CreateUsersWithListInputRequestBody = Schemas.User[];

export type CreateUsersWithListInputVariables = {
  body?: CreateUsersWithListInputRequestBody;
} & PetstoreContext["fetcherOptions"];

/**
 * Creates list of users with given input array
 */
export const fetchCreateUsersWithListInput = (
  variables: CreateUsersWithListInputVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<
    Schemas.User,
    CreateUsersWithListInputError,
    CreateUsersWithListInputRequestBody,
    {},
    {},
    {}
  >({ url: "/user/createWithList", method: "post", ...variables, signal });

/**
 * Creates list of users with given input array
 */
export const useCreateUsersWithListInput = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      Schemas.User,
      CreateUsersWithListInputError,
      CreateUsersWithListInputVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = usePetstoreContext();
  return reactQuery.useMutation<
    Schemas.User,
    CreateUsersWithListInputError,
    CreateUsersWithListInputVariables
  >({
    mutationFn: (variables: CreateUsersWithListInputVariables) =>
      fetchCreateUsersWithListInput({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type LoginUserQueryParams = {
  /**
   * The user name for login
   */
  username?: string;
  /**
   * The password for login in clear text
   */
  password?: string;
};

export type LoginUserError = Fetcher.ErrorWrapper<undefined>;

export type LoginUserVariables = {
  queryParams?: LoginUserQueryParams;
} & PetstoreContext["fetcherOptions"];

export const fetchLoginUser = (
  variables: LoginUserVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<
    string,
    LoginUserError,
    undefined,
    {},
    LoginUserQueryParams,
    {}
  >({ url: "/user/login", method: "get", ...variables, signal });

export const useLoginUser = <TData = string>(
  variables: LoginUserVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<string, LoginUserError, TData>,
    "queryKey" | "queryFn" | "initialData"
  >
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    usePetstoreContext(options);
  return reactQuery.useQuery<string, LoginUserError, TData>({
    queryKey: queryKeyFn({
      path: "/user/login",
      operationId: "loginUser",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchLoginUser({ ...fetcherOptions, ...variables }, signal),
    ...options,
    ...queryOptions,
  });
};

export type LogoutUserError = Fetcher.ErrorWrapper<undefined>;

export type LogoutUserVariables = PetstoreContext["fetcherOptions"];

export const fetchLogoutUser = (
  variables: LogoutUserVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<undefined, LogoutUserError, undefined, {}, {}, {}>({
    url: "/user/logout",
    method: "get",
    ...variables,
    signal,
  });

export const useLogoutUser = <TData = undefined>(
  variables: LogoutUserVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<undefined, LogoutUserError, TData>,
    "queryKey" | "queryFn" | "initialData"
  >
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    usePetstoreContext(options);
  return reactQuery.useQuery<undefined, LogoutUserError, TData>({
    queryKey: queryKeyFn({
      path: "/user/logout",
      operationId: "logoutUser",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchLogoutUser({ ...fetcherOptions, ...variables }, signal),
    ...options,
    ...queryOptions,
  });
};

export type GetUserByNamePathParams = {
  /**
   * The name that needs to be fetched. Use user1 for testing.
   */
  username: string;
};

export type GetUserByNameError = Fetcher.ErrorWrapper<undefined>;

export type GetUserByNameVariables = {
  pathParams: GetUserByNamePathParams;
} & PetstoreContext["fetcherOptions"];

export const fetchGetUserByName = (
  variables: GetUserByNameVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<
    Schemas.User,
    GetUserByNameError,
    undefined,
    {},
    {},
    GetUserByNamePathParams
  >({ url: "/user/{username}", method: "get", ...variables, signal });

export const useGetUserByName = <TData = Schemas.User>(
  variables: GetUserByNameVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<Schemas.User, GetUserByNameError, TData>,
    "queryKey" | "queryFn" | "initialData"
  >
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    usePetstoreContext(options);
  return reactQuery.useQuery<Schemas.User, GetUserByNameError, TData>({
    queryKey: queryKeyFn({
      path: "/user/{username}",
      operationId: "getUserByName",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchGetUserByName({ ...fetcherOptions, ...variables }, signal),
    ...options,
    ...queryOptions,
  });
};

export type UpdateUserPathParams = {
  /**
   * name that need to be deleted
   */
  username: string;
};

export type UpdateUserError = Fetcher.ErrorWrapper<undefined>;

export type UpdateUserVariables = {
  body?: Schemas.User;
  pathParams: UpdateUserPathParams;
} & PetstoreContext["fetcherOptions"];

/**
 * This can only be done by the logged in user.
 */
export const fetchUpdateUser = (
  variables: UpdateUserVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<
    undefined,
    UpdateUserError,
    Schemas.User,
    {},
    {},
    UpdateUserPathParams
  >({ url: "/user/{username}", method: "put", ...variables, signal });

/**
 * This can only be done by the logged in user.
 */
export const useUpdateUser = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      undefined,
      UpdateUserError,
      UpdateUserVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = usePetstoreContext();
  return reactQuery.useMutation<
    undefined,
    UpdateUserError,
    UpdateUserVariables
  >({
    mutationFn: (variables: UpdateUserVariables) =>
      fetchUpdateUser({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type DeleteUserPathParams = {
  /**
   * The name that needs to be deleted
   */
  username: string;
};

export type DeleteUserError = Fetcher.ErrorWrapper<undefined>;

export type DeleteUserVariables = {
  pathParams: DeleteUserPathParams;
} & PetstoreContext["fetcherOptions"];

/**
 * This can only be done by the logged in user.
 */
export const fetchDeleteUser = (
  variables: DeleteUserVariables,
  signal?: AbortSignal
) =>
  petstoreFetch<
    undefined,
    DeleteUserError,
    undefined,
    {},
    {},
    DeleteUserPathParams
  >({ url: "/user/{username}", method: "delete", ...variables, signal });

/**
 * This can only be done by the logged in user.
 */
export const useDeleteUser = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      undefined,
      DeleteUserError,
      DeleteUserVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = usePetstoreContext();
  return reactQuery.useMutation<
    undefined,
    DeleteUserError,
    DeleteUserVariables
  >({
    mutationFn: (variables: DeleteUserVariables) =>
      fetchDeleteUser({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type QueryOperation =
  | {
      path: "/pet/findByStatus";
      operationId: "findPetsByStatus";
      variables: FindPetsByStatusVariables;
    }
  | {
      path: "/pet/findByTags";
      operationId: "findPetsByTags";
      variables: FindPetsByTagsVariables;
    }
  | {
      path: "/pet/{petId}";
      operationId: "getPetById";
      variables: GetPetByIdVariables;
    }
  | {
      path: "/store/inventory";
      operationId: "getInventory";
      variables: GetInventoryVariables;
    }
  | {
      path: "/store/order/{orderId}";
      operationId: "getOrderById";
      variables: GetOrderByIdVariables;
    }
  | {
      path: "/user/login";
      operationId: "loginUser";
      variables: LoginUserVariables;
    }
  | {
      path: "/user/logout";
      operationId: "logoutUser";
      variables: LogoutUserVariables;
    }
  | {
      path: "/user/{username}";
      operationId: "getUserByName";
      variables: GetUserByNameVariables;
    };

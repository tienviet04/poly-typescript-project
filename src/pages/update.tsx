import { SubmitHandler, useForm } from "react-hook-form";
import { putProduct } from "../api/product.api";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { IProducts } from "../interface";

type updateProductForm = {
  name: string;
  price: number;
  brand: string;
  description: string;
  origin: string;
};
const UpdatePrd = () => {
  const navi = useNavigate();
  const data = useLoaderData() as IProducts;
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<updateProductForm>({
    defaultValues: data,
  });

  const onSubmit: SubmitHandler<updateProductForm> = async (data) => {
    try {
      if (id) {
        await putProduct(id, data);
      }
      navi("/admin");
    } catch {
      alert("Thêm mới thất bại");
    }
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Update Product!</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form
          action="#"
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>

            <div className="relative">
              <input
                type="type"
                {...register("name")}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="name" className="sr-only">
              Price
            </label>

            <div className="relative">
              <input
                type="number"
                {...register("price")}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter price"
              />
            </div>
          </div>
          <div>
            <label htmlFor="desc" className="sr-only">
              desc
            </label>

            <div className="relative">
              <input
                type="type"
                {...register("description")}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter desc"
              />
            </div>
          </div>
          <div className="mt-2">
            <select
              {...register("origin")}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>VietNam</option>
              <option>China</option>
              <option>France</option>
            </select>
          </div>
          <div>
            <label htmlFor="origin" className="sr-only">
              brand
            </label>

            <div className="relative">
              <input
                type="type"
                {...register("brand")}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter origin"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default UpdatePrd;

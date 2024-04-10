import { SubmitHandler, useForm } from "react-hook-form";
import { postPrd } from "../api/product.api";
import { useNavigate } from "react-router-dom";

type addProductForm = {
  name: string;
  price: number;
  brand: string;
  description: string;
  origin: string;
};
const AddPrd = () => {
  const navi = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<addProductForm>();
  const onSubmit: SubmitHandler<addProductForm> = async (data) => {
    try {
      postPrd(data);
      alert("Thêm thành công");
      navi("/admin");
    } catch (error) {
      alert("Thêm thất bại");
    }
  };
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Add Products!</h1>

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
              <textarea
                {...register("description")}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter desc"
              />
            </div>
          </div>
          <label
            htmlFor="brand"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            origin
          </label>
          <div className="mt-2">
            <select
              id="country"
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
                placeholder="Enter brand"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddPrd;

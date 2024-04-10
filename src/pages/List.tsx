import { useLoaderData, useRevalidator } from "react-router-dom";
import { IProducts } from "../interface";
import { deletePrd } from "../api/product.api";
import { Link } from "react-router-dom";

const ListProduct = () => {
  const prd = useLoaderData() as IProducts[];
  const navi = useRevalidator();
  const handleDetele = (id?: string | number) => {
    try {
      confirm("Bạn có chắc chắn xoá");
      if (id) {
        deletePrd(id);
        alert("Xoá thành công");
        navi.revalidate();
      }
    } catch (error) {
      alert("Xoá thất bại");
    }
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Stt
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Brand
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Des
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Orgin
              </th>
              <th className="px-4 py-2">Thao tác</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {prd.map((item, index) => (
              <tr key={item.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.brand}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.price}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.description}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.origin}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link to={"/admin/update/" + item.id}>
                    <button className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                      Sửa
                    </button>
                  </Link>
                  <Link to={"/admin/add"}>
                    <button className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                      Thêm
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDetele(item.id)}
                    className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ListProduct;

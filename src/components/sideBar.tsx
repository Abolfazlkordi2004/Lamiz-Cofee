import axios from "axios";
import Link from "next/link";

type IData = {
  name: string;
  slug: string;
};

export default async function Sidebar() {
  const response = await axios.get<IData[]>("http://localhost:3001/menuCategory");
  const menuCategories = response.data;

  return (
    <aside className="w-64 bg-gray-100 h-full p-4">
      <ul className="space-y-4">
        {menuCategories.map((cat) => (
          <li key={cat.slug}>
            <Link
              href={`/lamiz-coffee-menu/${cat.slug}`}
              className="text-lg hover:text-yellow-600"
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

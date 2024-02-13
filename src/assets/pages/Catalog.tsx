// import { Link } from "react-router-dom";

export default function Catalog() {
  return (
    <section className="pt-5">
      <div className="flex items-center gap-3 justify-center">
        <button className="px-5 py-2 border border-gray-600">
          Все
        </button>
        <button className="px-5 py-2 border border-gray-600">
          Топ
        </button>
        <button className="px-5 py-2 border border-gray-600">
          Низ
        </button>
        <button className="px-5 py-2 border border-gray-600">
          Обувь
        </button>
      </div>
      <div className="grid-cols-3 mt-6">
        <article>
          <img src="" alt="" />
          <h3>Рубашка СВЭГ</h3>
          <div>
            <p>9999 ₽</p>
          </div>
        </article>
      </div>
    </section>
  )
}
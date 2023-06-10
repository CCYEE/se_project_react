import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import ItemCard from "./ItemCard";
import "../blocks/Profile.css";
import "../blocks/ItemCards.css";

export function Profile({ items, onSelectCard, openModal }) {
  console.log(openModal);
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar />
      </div>
      <div className="profile__clothes-section">
        <ClothesSection openModal={openModal} />
        <section className="cards">
          <ul className="cards__list">
            {items.map((card) => (
              <ItemCard key={card.id} item={card} onSelectCard={onSelectCard} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";
import NotFound from "../ui/NotFound";

const CharacterGrid = ({ items, isLoading, text }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className={items.length > 0 ? "cards" : "notFound"}>
      {items.length > 0 ? (
        <>
          {items.map((item) => (
            <CharacterItem key={item.char_id} item={item} />
          ))}
        </>
      ) : (
        <NotFound not={text} />
      )}
    </section>
  );
};

export default CharacterGrid;

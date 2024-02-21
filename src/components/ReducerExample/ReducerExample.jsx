import { useReducer, useRef } from "react";
import classes from "./ReducerExample.module.css";

function cardsReducer(cards, action) {
  switch (action.type) {
    case "add": {
      const lastCardId = cards[cards.length - 1].id;
      return [...cards, { id: lastCardId + 1, title: action.title }];
    }
    case "change": {
      return cards.map((card) => {
        if (card.id == action.id) return action.title;
        return card;
      });
    }
    default: {
      return cards.filter((card) => card.id !== action.id);
    }
  }
}

const initialCards = [
  { id: 1, title: "Carta 1" },
  { id: 2, title: "Carta 2" },
  { id: 3, title: "Carta 3" },
];

export default function ReducerExample() {
  const [cards, dispatch] = useReducer(cardsReducer, initialCards);
  const inputRef = useRef(null);
  return (
    <>
      <h2>Cards</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add", title: inputRef.current.value });
        }}
      >
        <input
          type="text"
          ref={inputRef}
          placeholder="Título de la nueva card..."
          name="addCardInput"
          id="addCardInput"
        />
        <button type="submit">Agregar</button>
      </form>
      <div className={classes.cardsContainer}>
        {cards.map(({ id, title }) => {
          return (
            <div key={id}>
              {title}{" "}
              <button onClick={() => dispatch({ type: "delete", id })}>
                Eliminar
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

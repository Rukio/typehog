"use client";

import {FC, useState, ChangeEvent, useEffect, useMemo} from "react";
import {TyperInput} from "../../";

const paragraph = "Watching John with the machine, it was suddenly so clear. The Terminator would never stop, it would never leave him... it would always be there. And it would never hurt him, never shout at him or get drunk and hit him, or say it couldn\'t spend time with him because it was too busy. And it would die to protect him. Of all the would-be fathers who came and went over the years, this thing, this machine, was the only one who measured up. In an insane world, it was the sanest choice.";
const getParagraphArray = (text: string): string[] => text.split(" ");

const styles = {
  typer: {
    padding: "5px",
    border: "1px solid #fff",
    borderRadius: "3px",
  },
  textCorrect: {
    backgroundColor: "#0a0",
  },
  textWrong: {
    backgroundColor: "#a00",
  },
};

const paragraphArray = getParagraphArray(paragraph);

const Typer: FC = () => {
  const [typerValue, setTyperValue] = useState<string>("");
  const [wordCurrentIndex, setWordCurrentIndex] = useState<number>(0);

  const getLastSpace = () => wordCurrentIndex ? " " : "";
  const finishedText = useMemo(() =>
    `${getParagraphArray(paragraph).slice(0, wordCurrentIndex).join(" ")}${getLastSpace()}`,
    [wordCurrentIndex]
  );

  const currentWord: string = useMemo(() => paragraphArray[wordCurrentIndex], [wordCurrentIndex]);
  const errorIndexFrom: number | undefined = useMemo(() => {
    for (let i = 0; i < typerValue.length; i++) {
      const typerLetter = typerValue[i];
      const currentWordLetter = currentWord[i];

      if (typerLetter !== currentWordLetter) {
        return i;
      }
    }
  }, [typerValue, currentWord]);
  const typedTextCorrect: string = useMemo(() =>
    `${paragraphArray.slice(0, wordCurrentIndex).join(" ")
    }${getLastSpace()}${typerValue.slice(0, errorIndexFrom)}`,
[wordCurrentIndex, typerValue]);
  const typedTextWrong: string = useMemo(() =>
    `${errorIndexFrom >= 0 ? `${paragraph.slice(finishedText.length)}`.slice(
      errorIndexFrom,
      errorIndexFrom + (typerValue.length - errorIndexFrom)
    ) : ""
  }`, [typerValue]);

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement> | undefined) => {
    if (e) {
      const inputValue = e.target.value;
      const letterTyped = inputValue.slice(inputValue.length - 1);
      const paragraphArray = getParagraphArray(paragraph);

      if (letterTyped === " " && typerValue === currentWord) {
        setTyperValue("");
        setWordCurrentIndex((value) => value === paragraphArray.length - 1 ?
          0 :
          value + 1
        );
      } else {
        setTyperValue(inputValue);
      }
    }
  };

  const getRenderedParagraph = () => {
    const correctWrongLength = typedTextCorrect.length + typedTextWrong.length;
    const correctPart = <span style={styles.textCorrect}>{typedTextCorrect}</span>;
    const wrongPart = <span style={styles.textWrong}>{typedTextWrong}</span>;

    return <>{correctPart}{wrongPart}{paragraph.slice(correctWrongLength)}</>;
  };

  return <div style={styles.typer}>
    <p>{getRenderedParagraph()}</p>
    <TyperInput value={typerValue} onChange={onChangeHandle} />
  </div>;
};

export default Typer;
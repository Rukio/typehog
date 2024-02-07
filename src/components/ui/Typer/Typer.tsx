"use client";

import {FC, useState, ChangeEvent, useMemo} from "react";
import {TyperInput} from "../TyperInput";
import {getTheme} from "../../../utils/styled";
import styled from "styled-components";

const TyperFC = styled.div`
  padding: 5px;
  border: 1px solid ${getTheme(({primary}) => primary.text)};
  border-radius: 3px;
	max-width: 500px;
`;
const TextCorrect = styled.span`
  background-color: ${getTheme(({paragraph}) => paragraph.correct.bg)};
  color: ${getTheme(({paragraph}) => paragraph.correct.text)};
`;
const TextWrong = styled.span`
  background-color: ${getTheme(({paragraph}) => paragraph.error.bg)};
  color: ${getTheme(({paragraph}) => paragraph.error.text)};
`;
const TextDefault = styled.p`
  color: ${getTheme(({paragraph}) => paragraph.defaultText)};
	font-size: 24px;
`;

const Typer: FC<{
	text: string;
}> = ({ text }) => {
	const [typerValue, setTyperValue] = useState<string>("");
	const [wordCurrentIndex, setWordCurrentIndex] = useState<number>(0);

	const paragraphArray = useMemo<string[]>(() => text.split(" "), [text]);
	const getLastSpace = () => wordCurrentIndex ? " " : "";

	const finishedText = useMemo<string>(() =>
		`${paragraphArray.slice(0, wordCurrentIndex).join(" ")}${getLastSpace()}`,
	[wordCurrentIndex]
	);
	const currentWord: string = useMemo<string>(() => paragraphArray[wordCurrentIndex], [wordCurrentIndex]);
	const errorIndexFrom: number | undefined = useMemo<number>(() => {
		for (let i = 0; i < typerValue.length; i++) {
			const typerLetter = typerValue[i];
			const currentWordLetter = currentWord[i];

			if (typerLetter !== currentWordLetter) {
				return i;
			}
		}
	}, [typerValue, currentWord]);
	const typedTextCorrect: string = useMemo<string>(() =>
		`${paragraphArray.slice(0, wordCurrentIndex).join(" ")
		}${getLastSpace()}${typerValue.slice(0, errorIndexFrom)}`,
	[wordCurrentIndex, typerValue]);
	const typedTextWrong: string = useMemo<string>(() =>
		`${errorIndexFrom >= 0 ? `${text.slice(finishedText.length)}`.slice(
			errorIndexFrom,
			errorIndexFrom + (typerValue.length - errorIndexFrom)
		) : ""
		}`, [typerValue]);

	const onChangeHandle = (e: ChangeEvent<HTMLInputElement> | undefined) => {
		if (e) {
			const inputValue = e.target.value;
			const letterTyped = inputValue.slice(inputValue.length - 1);

			if (letterTyped === " " && typerValue === currentWord) {
				setTyperValue("");
				setWordCurrentIndex((value) =>
					value === paragraphArray.length - 1 ?
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
		const correctPart = <TextCorrect>{typedTextCorrect}</TextCorrect>;
		const wrongPart = <TextWrong>{typedTextWrong}</TextWrong>;

		return <>{correctPart}{wrongPart}{text.slice(correctWrongLength)}</>;
	};

	return <TyperFC>
		<TextDefault>{getRenderedParagraph()}</TextDefault>
		<TyperInput value={typerValue} onChange={onChangeHandle} />
	</TyperFC>;
};

export default Typer;
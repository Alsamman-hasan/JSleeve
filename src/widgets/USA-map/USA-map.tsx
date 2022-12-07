import { memo, useCallback } from 'react';
import { AllStateData, data } from './model/data';
import USAState from './ui/USAState';

export interface USAMapProps {
	width?: number;
	height?: number;
	customize?: any;
	onClick?: (value: any) => void;
}

export type StateKey = keyof AllStateData;

export const USAMap = memo((props: USAMapProps) => {
	const { width = 390, height = 208, customize = {}, onClick } = props;

	const fillColor = useCallback((count: number) => {
		switch (count) {
			case 100:
				return '#FFFBFF';
			case 200:
				return '#FFEDEA';
			case 300:
				return '#FFDAD6';
			case 400:
				return '#FFB4AB';
			case 500:
				return '#FF897D';
			case 600:
				return '#FF5449';
			case 700:
				return '#DE3730';
			case 800:
				return '#BA1A1A';
			case 900:
				return '#93000A';
			default:
				return '#FFFBFF';
		}
	}, []);

	const clickHandler = useCallback(
		(stateAbbreviation: any) => {
			onClick?.(stateAbbreviation);
		},
		[onClick]
	);

	const stateClickHandler = useCallback(
		(state: StateKey) => {
			if (customize && customize[state] && customize[state].clickHandler) {
				return customize[state].clickHandler;
			}
			return clickHandler;
		},
		[clickHandler, customize]
	);
	const buildPaths = useCallback(() => {
		const pathsArray = Object.entries(data);
		const paths = pathsArray.map((item) => {
			return (
				<USAState
					key={item[0]}
					stateName={item[1].name}
					dimensions={item[1].dimensions}
					count={item[1].count}
					state={item[0] as StateKey}
					fill={fillColor(item[1].count)}
					onClickState={stateClickHandler(item[0] as StateKey)}
				/>
			);
		});
		return paths;
	}, [fillColor, stateClickHandler]);

	return (
		<svg
			className="us-state-map"
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 959 593"
		>
			<g className="outlines">
				{buildPaths()}
				<g className="DC state">
					<path
						className="DC1"
						fill={fillColor(0)}
						d="M801.8,253.8 l-1.1-1.6 -1-0.8 1.1-1.6 2.2,1.5z"
					/>
					<circle
						className="DC2"
						data-name="DC"
						fill={fillColor(0)}
						onClick={clickHandler}
						stroke="#FFFFFF"
						strokeWidth="1.5"
						cx="801.3"
						cy="251.8"
						r="5"
						opacity="1"
					/>
				</g>
			</g>
		</svg>
	);
});

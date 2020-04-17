import React, { useRef, useEffect, useContext } from 'react'
import Title from './Title'
import clamp from "lodash-es/clamp";
import swap from "lodash-move";
import { useGesture } from "react-with-gesture";
import { useSprings, animated, interpolate } from "react-spring";
import { SettingsContext } from '../../Context/SettingsContext'


//@ts-ignore
const fn = (order, down, originalIndex, curIndex, y) => index =>
    down && index === originalIndex
        ? {
            y: curIndex * 48 + y,
            scale: 1,
            zIndex: "1",
            shadow: 20,
            //@ts-ignore
            immediate: n => n === "y" || n === "zIndex"
        }
        : {
            y: order.indexOf(index) * 48,
            scale: 1,
            zIndex: "0",
            shadow: 1,
            immediate: false
        };

interface Props {

}

const Checked: React.FC<Props> = ({ }) => {
    const length = [0, 1, 2, 3, 4]
    const [settings, setSettings, check, swapOrder] = useContext(SettingsContext)
    let order = useRef(length.map((_: any, index: any) => index));
    //@ts-ignore
    const [springs, setSprings] = useSprings(length.length, fn(order.current));

    const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
        const curIndex = order.current.indexOf(originalIndex);
        const curRow = clamp(
            Math.round((curIndex * 100 + y) / 100),
            0,
            order.current.length - 1
        );
        const newOrder = swap(order.current, curIndex, curRow);
        //@ts-ignore
        setSprings(fn(newOrder, down, originalIndex, curIndex, y));
        if (!down) {
            order.current = newOrder;
        }
    });
    // return (
    //     <React.Fragment>
    //         {/* {list.map((article) => {
    //             return (
    //                 <li className="flex justify-between items-center border-border border-b h-12 px-4" key={article.id}>
    //                     <Title title={article.title} checkState={checked} artChecked={article.checked} />
    //                 </li>
    //             )
    //         })} */}
    //     </React.Fragment>
    // )
    //@ts-ignore
    return springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.li
            {...bind(i)}
            className="flex justify-between items-center border-border border-b h-12 px-4 absolute w-full"
            key={length[i]}
            style={{
                zIndex,
                transform: interpolate(
                    [y, scale],
                    (y, s) => `translate3d(0,${y}px,0) scale(${s})`
                ),
                marginBottom: settings.length - 1 ? "15vh" : "0"
            }}
        >
            <Title index={length[i]} />
        </animated.li>
    ));
}

export default Checked
